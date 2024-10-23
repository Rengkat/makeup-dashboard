import React from "react";

const Orders = () => {
  return (
    <div className="p-5 bg-light-gray min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
          Export Orders
        </button>
      </div>

      {/* Order Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {/* Total Orders */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for dynamic total orders */}
        </div>

        {/* Completed Orders */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Completed Orders</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for completed orders */}
        </div>

        {/* Pending Orders */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Pending Orders</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for pending orders */}
        </div>

        {/* Canceled Orders */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Canceled Orders</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for canceled orders */}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {/* Order Trends */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Order Trends</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Line Chart */}
            <p>Line chart: Orders over time</p>
          </div>
        </div>

        {/* Best-Selling Products */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Best-Selling Products</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Bar Chart */}
            <p>Bar chart: Top-selling products</p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">All Orders</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Orders Table */}
          <p>
            Table of all orders with columns like Order ID, Client, Product, Amount, Date, Status,
            etc.
          </p>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {/* Revenue from Orders */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Revenue from Orders</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Line Chart */}
            <p>Line chart: Revenue over time</p>
          </div>
        </div>

        {/* Average Order Value */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Average Order Value</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Stat */}
            <p>Average order value stat (e.g. $50)</p>
          </div>
        </div>
      </div>

      {/* Low Stock Alert Section */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Low Stock Alerts</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-red-50">
          {/* Placeholder for Low Stock Table */}
          <p>Table for products running low on stock</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
