"use client"
import { BarChartComponent } from "@/components/dashboard/charts/BarChart";
import { AddInvoiceCard, LatestInvoices, PriceCard } from "@/components/dashboard/charts/DashboardCards";
import { LineChartComponent } from "@/components/dashboard/charts/LineChart";
import { PieChartComponent } from "@/components/dashboard/charts/PieChart";
import { fetchMe } from "@/service/data/UserData";
import { setUser } from "@/store/slices/userSlice";
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function page() {
  // const dispatch = useDispatch<AppDispatch>();

  // // Load user info when the component mounts
  // useEffect(() => {
  //   const loadUserInfo = async () => {
  //     try {
  //       const userData = await fetchMe(); // Fetch user data from API
  //       dispatch(setUser(userData)); // Dispatch to store
  //       console.log("Data Loaded",userData)
  //     } catch (error) {
  //       console.error("Failed to load user data", error);
  //     }
  //   };

  //   loadUserInfo(); // Call the function when component mounts
  // }, []); // Empty dependency array ensures it runs once on mount


  return (
    <div className="grid gap-4 p-2 sm:p-4 -z-50 mt-2">
      <div className=" grid gap-4 grid-cols-1 lg:grid lg:grid-cols-3">
        <div className="grid gap-4">
          <AddInvoiceCard />
          <div className="grid gap-4 grid-cols-3">
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>
        <PieChartComponent />
        <BarChartComponent />
      </div>
      <LatestInvoices />
      <LineChartComponent />
    </div>
  )
}

export default page