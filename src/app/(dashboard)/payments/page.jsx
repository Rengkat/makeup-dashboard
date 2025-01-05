import React from "react";

const Payment = () => {
  return (
    <div className="p-5 bg-light-gray min-h-screen">
      {/* Page Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Payments</h1>
      </div>

      {/* Payment Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {/* Total Payments */}
        <div className="p-4 border-[1px] rounded-md shadow-lg bg-white flex flex-col items-center">
          <h3 className="text-lg font-semibold">Total Payments</h3>
          <p className="text-2xl font-bold">$0</p> {/* Replace with dynamic data */}
        </div>

        {/* Pending Payments */}
        <div className="p-4 border-[1px] rounded-md shadow-lg bg-white flex flex-col items-center">
          <h3 className="text-lg font-semibold">Pending Payments</h3>
          <p className="text-2xl font-bold">$0</p> {/* Replace with dynamic data */}
        </div>

        {/* Refunds */}
        <div className="p-4 border-[1px] rounded-md shadow-lg bg-white flex flex-col items-center">
          <h3 className="text-lg font-semibold">Refunds</h3>
          <p className="text-2xl font-bold">$0</p> {/* Replace with dynamic data */}
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Transaction History</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50 overflow-x-auto">
          {/* Table to display transaction history */}
          <table className="w-full bg-white rounded-md">
            <thead>
              <tr>
                <th className="border-b-2 p-3 text-left">Date</th>
                <th className="border-b-2 p-3 text-left">Client Name</th>
                <th className="border-b-2 p-3 text-left">Service</th>
                <th className="border-b-2 p-3 text-left">Amount</th>
                <th className="border-b-2 p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row - this should be replaced with dynamic data */}
              <tr>
                <td className="p-3 border-b">10/22/2024</td>
                <td className="p-3 border-b">John Doe</td>
                <td className="p-3 border-b">Massage Therapy</td>
                <td className="p-3 border-b">$50.00</td>
                <td className="p-3 border-b">
                  <span className="text-green-600">Completed</span>
                </td>
              </tr>
              {/* Repeat for more transactions */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Payment Methods</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* List of Payment Methods */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Stripe</h3>
            <button className="text-blue-500 hover:underline">Manage</button>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h3 className="text-lg font-semibold">PayPal</h3>
            <button className="text-blue-500 hover:underline">Manage</button>
          </div>
          {/* Add more payment gateways if needed */}
        </div>
      </div>

      {/* Payment Reports Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Generate Payment Reports</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Button to trigger report generation */}
          <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
