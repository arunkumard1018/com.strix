"use client";
import AsideBar from '@/components/dashboard/layout/AsideBar';
import NavBar from '@/components/dashboard/layout/NavBar';
import { InternalServerError } from '@/components/errors/errors';
import { DashboardSkeleton } from '@/components/skeltons/DashBoardSkelton';
import { Toaster } from '@/components/ui/toaster';
import AuthProvider from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { fetchMe } from '@/service/data/UserData';
import { setUser } from '@/store/slices/userSlice';
import { RootState, store } from '@/store/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { logoff } from '../actions';

// Main Layout Component
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <Dashboardlayout>{children}</Dashboardlayout>
        </Provider>
    );
}

// Dashboard Layout with Skeleton Loading
function Dashboardlayout({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [serverError, setserverError] = useState(false)
    const userData = useSelector((state: RootState) => state.user);

    /**
     * Load user information when accessing the dashboard
     */
    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                const userData = await fetchMe();
                dispatch(setUser(userData));
                console.log("userData", userData)

                if (userData != null) {
                    setLoading(false); // Data fetched, stop loading
                }

            } catch (error) {
                console.log("ERROR", error)
                setLoading(false);
                setserverError(true)
            }
        };
        loadUserInfo();
    }, [userData.businesses.length,dispatch]);


    function reset(){
        logoff();
        router.push("/login");
    }
    
    if(serverError) return <InternalServerError reset={reset} message='Unable to Conect Right Now try after Some times' />
    
    return (
        <>
            {loading ? (
                // Show Skeleton while loading
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <DashboardSkeleton />
                </ThemeProvider>
            ) : (
                // Show Actual Content when done loading
                <AuthProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                            {/* Sidebar */}
                            <AsideBar className="fixed inset-y-0 left-0 z-10 hidden w-[16vw] flex-col border-r bg-background md:flex" />

                            {/* Main Content Area */}
                            <div className="flex flex-col">
                                <NavBar className="w-screen sticky top-0 z-30 md:ml-[16vw] md:w-[82.9vw] h-14 md:h-[60px]" />
                                <main className="w-screen md:ml-[16vw] md:w-[82.7vw] md:pr-4 sm:mt-12">
                                    {children}
                                </main>
                                <Toaster />
                            </div>
                        </div>
                    </ThemeProvider>
                </AuthProvider>
            )}
        </>
    );
}

