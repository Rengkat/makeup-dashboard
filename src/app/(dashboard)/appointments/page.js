import React from "react";
import AppointmentManagement from "./Appointment";

const Appointments = () => {
  return (
    <div>
      <div className="flex justify-end my-5">
        <button className="bg-dark-green text-white py-2 px-5 shadow">Book Appointment</button>
      </div>
      <div className="flex justify-between gap-2">
        <div className="w-1/4 h-[10vh] border-[1px] hover:bg-lighter-gold rounded-md shadow">
          <div></div>
          Total Appointments
        </div>
        <div className="w-1/4 h-[10vh] border-[1px] ">Canceled Appointments</div>
        <div className="w-1/4 h-[10vh] border-[1px] ">Pending Appointments</div>
        <div className="w-1/4 h-[10vh] border-[1px] ">Achieved Appointments</div>
      </div>
      <div className="flex gap-3 my-5 h-[40vh]">
        <aside className="w-1/3 border-[1px] ">
          <h1>Services </h1>
          {/* Pie chart */}
        </aside>
        <aside className="w-1/3 border-[1px] ">
          <h1>Service Type</h1>
          {/* Pie chart */}
        </aside>
        <aside className="w-1/2 border-[1px] ">
          <h1>Appointments on Calender</h1>
          {/* Calender */}
        </aside>
      </div>
      <div>
        <h1>Pending Appointments</h1>
        {/* Table */}
      </div>
      <div>
        <h1>Achieved Appointments</h1>
        {/* Table */}
      </div>
      <div>
        <h1>Canceled Appointments</h1>
        {/* Table */}
      </div>
    </div>
  );
};

export default Appointments;
