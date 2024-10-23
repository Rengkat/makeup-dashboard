import React from "react";

const Products = () => {
  return (
    <div className="p-5 bg-light-gray min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Products</h1>
        <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
          Add New Product
        </button>
      </div>

      {/* Product Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {/* Total Products */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for total products */}
        </div>

        {/* Products In Stock */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Products In Stock</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for in-stock products */}
        </div>

        {/* Low Stock Products */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Low Stock Products</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for low stock products */}
        </div>

        {/* Out of Stock Products */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Out of Stock Products</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for out-of-stock products */}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {/* Sales by Product Category */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Sales by Product Category</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Pie Chart */}
            <p>Pie chart: Sales per category</p>
          </div>
        </div>

        {/* Products Added Over Time */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Products Added Over Time</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Line Chart */}
            <p>Line chart: Product additions over time</p>
          </div>
        </div>
      </div>

      {/* Product Listings Table */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Product Listings</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Products Table */}
          <p>
            Table of products with columns like Product Name, Category, Price, Stock, Sales, etc.
          </p>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Low Stock Alerts</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-red-50">
          {/* Placeholder for Low Stock Table */}
          <p>Table for products running low on stock</p>
        </div>
      </div>

      {/* Recently Added Products */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Recently Added Products</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Recently Added Table */}
          <p>Table of recently added products</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
