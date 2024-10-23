import React from "react";
import AppointmentManagement from "./Appointment";

const Appointments = () => {
  return (
    <div className="p-5 bg-light-gray min-h-screen">
      {/* Header Section */}
      <div className="flex justify-end mb-5">
        <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
          Book Appointment
        </button>
      </div>

      {/* Appointment Stats Section */}
      <div className="grid grid-cols-4 gap-5 mb-10">
        <div className="p-4 border-[1px] hover:bg-lighter-gold rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Total Appointments</h3>
          <p className="text-2xl font-bold">0</p> {/* Placeholder for dynamic data */}
        </div>
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Canceled Appointments</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Pending Appointments</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-4 border-[1px] rounded-md shadow-lg flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">Achieved Appointments</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex gap-5 mb-10 h-[40vh]">
        <aside className="w-1/3 p-5 border-[1px] rounded-md shadow-lg">
          <h1 className="text-xl font-semibold mb-3">Services</h1>
          <div className="h-full bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Pie Chart */}
            <p>Pie chart</p>
          </div>
        </aside>
        <aside className="w-1/3 p-5 border-[1px] rounded-md shadow-lg">
          <h1 className="text-xl font-semibold mb-3">Service Type</h1>
          <div className="h-full bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Pie Chart */}
            <p>Pie chart</p>
          </div>
        </aside>
        <aside className="w-1/2 p-5 border-[1px] rounded-md shadow-lg">
          <h1 className="text-xl font-semibold mb-3">Appointments on Calendar</h1>
          <div className="h-full bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Calendar */}
            <p>Calendar</p>
          </div>
        </aside>
      </div>

      {/* Tables Section */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Pending Appointments</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Table */}
          <p>Table of pending appointments</p>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Achieved Appointments</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Table */}
          <p>Table of achieved appointments</p>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-xl font-semibold mb-5">Canceled Appointments</h1>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Table */}
          <p>Table of canceled appointments</p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
