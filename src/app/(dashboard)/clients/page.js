import React from "react";

const Clients = () => {
  return (
    <div className="p-5 bg-light-gray min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
          Add New Client
        </button>
      </div>

      {/* Client Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {/* Total Clients */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Total Clients</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for total clients */}
        </div>

        {/* Active Clients */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Active Clients</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for active clients */}
        </div>

        {/* New Clients (Monthly) */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">New Clients (This Month)</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for new clients this month */}
        </div>

        {/* VIP Clients */}
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">VIP Clients</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for VIP clients */}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {/* Client Growth Over Time */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Client Growth Over Time</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Line Chart */}
            <p>Line chart: Client growth over time</p>
          </div>
        </div>

        {/* Services Used by Clients */}
        <div className="border-[1px] rounded-md shadow-lg p-5">
          <h1 className="text-xl font-semibold mb-3">Services Used by Clients</h1>
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Pie Chart */}
            <p>Pie chart: Popular services among clients</p>
          </div>
        </div>
      </div>

      {/* Clients Table */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Client List</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Clients Table */}
          <p>
            Table of clients with columns like Client Name, Email, Phone, Last Appointment, Total
            Spend, etc.
          </p>
        </div>
      </div>

      {/* High Value Clients */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">High Value Clients</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-green-50">
          {/* Placeholder for High Value Clients Table */}
          <p>Table for high-spending clients (VIP clients)</p>
        </div>
      </div>

      {/* Recently Added Clients */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Recently Added Clients</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Recently Added Clients Table */}
          <p>Table of clients recently added to the system</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
