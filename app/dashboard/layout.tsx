"use client";
import AsideBar from '@/components/dashboard/layout/AsideBar';
import NavBar from '@/components/dashboard/layout/NavBar';
import { InternalServerError, LoadingError } from '@/components/errors/errors';
import { DashboardSkeleton } from '@/components/skeltons/DashBoardSkelton';
import { Toaster } from '@/components/ui/toaster';
import { Response } from '@/lib/AxiosClient';
import { ResponseCode } from '@/lib/enums';
import AuthProvider from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { fetchMe } from '@/service/data/UserData';
import { setUser, UserData } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { logoff } from '../actions';
import { AxiosResponseError, AxiosServerError } from '@/components/errors/customErrors';

/**
 * Main Layout Component
 * @param ReactNode
 * @returns renders Dashboard Child Components
 */
export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <Provider store={store}>
            <Dashboardlayout>{children}</Dashboardlayout>
        </Provider>
    );
}

/**
 * 
 * @param RectNode 
 * @returns Renders dashboar layout
 */
function Dashboardlayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState<Response<UserData>>()
    const [retry, setRetry] = useState(0);

    /**
     * Load user information when accessing the dashboard
     */
    useEffect(() => {
        setLoading(true)
        const loadUserInfo = async () => {
            setResponse(undefined)
            try {
                const response : Response<UserData> = await fetchMe();
                console.log("RESPONSE ", response)
                if (response.status === ResponseCode.SUCCESS) {
                    setLoading(false)
                    dispatch(setUser(response.data));
                }
            } catch (error) {
                setLoading(false)
                if (error instanceof AxiosResponseError) setResponse(error.response)
                else if (error instanceof AxiosServerError) setResponse(error.response)

            } finally {
                setLoading(false);
            }
        };

        loadUserInfo();
    }, [dispatch, retry]);

    

    function reset() {
        logoff();
        router.push("/login");
    }
    console.log(response)
    if (retry === 5) reset();
    if (response?.status === ResponseCode.NETWORK_ERROR) return <InternalServerError reset={reset} message='Unable to Conect Right Now try after Some times' />
    if (response) return <LoadingError message={response.message} status={response.status} reset={() => setRetry(retry + 1)} className="mt-40" />

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

