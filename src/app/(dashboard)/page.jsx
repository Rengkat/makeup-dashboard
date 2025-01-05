import BarChartComponent from "@/components/BarChart";
import LineChartComp from "@/components/ComposedLineChart";
import PieChartComponent from "@/components/PieChart";
import SimpleLineChart from "@/components/SimpleLineChart";
import { Fragment } from "react";
import ShapePieChart from "../../components/ShapePieChart";
import SingleLineChart from "../../components/SingleLineChart";

export default function Home() {
  return (
    <div className="p-5">
      {/* Report Generation Button */}
      <div className="flex justify-end">
        <button className="bg-dark-green text-white py-3 px-5 shadow rounded-md">
          Generate Report
        </button>
      </div>

      {/* Key Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 mt-5">
        {/* Total Clients Card */}
        <Fragment key="totalClients">
          <div className="border-[1px] rounded-md shadow-md p-5 hover:bg-lighter-gold">
            <h1>Total Clients</h1>
            <p className="text-2xl font-bold">0</p> {/* Placeholder for dynamic client data */}
          </div>
        </Fragment>

        {/* Total Appointments Card */}
        <Fragment key="totalAppointments">
          <div className="border-[1px] rounded-md shadow-md p-5 hover:bg-lighter-gold">
            <h1>Total Appointments</h1>
            <p className="text-2xl font-bold">0</p> {/* Placeholder for dynamic appointment data */}
          </div>
        </Fragment>

        {/* Total Products Sold Card */}
        <Fragment key="totalProductsSold">
          <div className="border-[1px] rounded-md shadow-md p-5 hover:bg-lighter-gold">
            <h1>Total Products Sold</h1>
            <p className="text-2xl font-bold">0</p>{" "}
            {/* Placeholder for dynamic product sales data */}
          </div>
        </Fragment>

        {/* Total Revenue Card */}
        <Fragment key="totalRevenue">
          <div className="border-[1px] rounded-md shadow-md p-5 hover:bg-lighter-gold">
            <h1>Total Revenue</h1>
            <p className="text-2xl font-bold">$0</p> {/* Placeholder for dynamic revenue data */}
          </div>
        </Fragment>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-5 mt-10">
        {/* Revenue Breakdown Chart */}
        <div className="border-[1px] rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-3">Revenue Breakdown</h1>
          {/* <div className="h-40 bg-gray-200 flex items-center justify-center"> */}
          {/* Placeholder for Pie Chart */}
          <p>Pie chart: Services vs Products</p>
          <div className="flex">
            <PieChartComponent />
            <PieChartComponent />
          </div>
          {/* </div> */}
        </div>

        {/* Appointments Trend Chart */}
        <div className="border-[1px] rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-3">Appointments Trend</h1>
          {/* <div className="h-40 bg-gray-200 flex items-center justify-center"> */}
          {/* Placeholder for Line Chart */}
          {/* <p>Line chart: Appointments over time</p> */}
          <LineChartComp />
          {/* </div> */}
        </div>

        {/* Sales Trend Chart */}
        <div className="border-[1px] rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-3">Sales Trend</h1>
          {/* <div className="h-40 bg-gray-200 flex items-center justify-center"> */}
          {/* Placeholder for Line Chart */}
          <p>Line chart: Sales over time</p>
          <SimpleLineChart />
          {/* </div> */}
        </div>

        {/* Popular Services Bar Chart */}
        <div className="border-[1px] rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-3">Popular Services</h1>
          {/* <div className="h-40 bg-gray-200 flex items-center justify-center"> */}
          {/* Placeholder for Bar Chart */}
          <p>Bar chart: Most booked services</p>
          <BarChartComponent />
          {/* </div> */}
        </div>
      </div>

      {/* Customer Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-5 mt-10">
        {/* Customer Growth Rate */}
        <div className="border-[1px] rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-3">Customer Growth Rate</h1>
          {/* <div className="h-40 bg-gray-200 flex items-center justify-center"> */}
          {/* Placeholder for Growth Rate Chart */}
          <p>Line chart: Monthly client growth</p>
          <SingleLineChart />
          {/* </div> */}
        </div>

        {/* Service Type Distribution */}
        <div className="border-[1px] rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-3">Service Type Bookings</h1>
          {/* <div className="h-40 bg-gray-200 flex items-center justify-center"> */}
          {/* Placeholder for Pie Chart */}
          <p>Pie chart: In-spa vs Home services</p>
          <ShapePieChart />
          {/* </div> */}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold mb-5">Recent Activity</h1>
        <div className="border-[1px] rounded-md shadow-md p-5 bg-gray-50">
          {/* Placeholder for Recent Activity Table */}
          <p>Table of recent bookings, orders, and new clients</p>
        </div>
      </div>
    </div>
  );
}
