"use client";
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import AsideBar from '@/components/dashboard/layout/AsideBar';
import NavBar from '@/components/dashboard/layout/NavBar';
import AuthProvider from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { fetchMe } from '@/service/data/UserData';
import { setUser } from '@/store/slices/userSlice';
import { RootState } from '@/store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Dashboardlayout>{children}</Dashboardlayout>
    </Provider>
  );
}


function Dashboardlayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  /**
   * Load The User Info Store when the user Access the 
   * Dashboard after Authentication 
   */
  useEffect(() => {
      const loadUserInfo = async () => {
          try {
              const userData = await fetchMe();
              dispatch(setUser(userData)); 
              console.log("Data Loaded", userData)
          } catch (error) {
              console.error("Failed to load user data", error);
          }
      };
      loadUserInfo();
  }, []); 

  return (
      <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                  <AsideBar className="fixed inset-y-0 left-0 z-10 hidden w-[16vw] flex-col border-r bg-background md:flex" />
                  <div className="flex flex-col">
                      <NavBar className="w-screen sticky top-0 z-30 md:ml-[16vw] md:w-[82.9vw] h-14 md:h-[60px]" />
                      <main className="w-screen md:ml-[16vw] md:w-[82.7vw] md:pr-4 sm:mt-12">
                          {children}
                      </main>
                  </div>
              </div>
          </ThemeProvider>
      </AuthProvider>
  );
}
