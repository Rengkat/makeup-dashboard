"use client";
import React, { useState } from "react";
import Calendar from "react-calendar"; // Optional, install via 'npm install react-calendar'
import "react-calendar/dist/Calendar.css";

// Mock data for booking requests and appointments
const mockBookingRequests = [
  { id: 1, name: "John Doe", date: "2024-10-18", time: "10:00 AM" },
  { id: 2, name: "Jane Smith", date: "2024-10-19", time: "2:00 PM" },
];

const mockAppointments = [
  { id: 1, name: "Emily Brown", date: "2024-10-18", time: "12:00 PM", status: "Confirmed" },
  { id: 2, name: "Michael White", date: "2024-10-19", time: "4:00 PM", status: "Confirmed" },
];

const AppointmentManagement = () => {
  const [value, setValue] = useState(new Date()); // Calendar date
  const [bookingRequests, setBookingRequests] = useState(mockBookingRequests);
  const [appointments, setAppointments] = useState(mockAppointments);

  // Handle approving or rejecting a booking request
  const handleApprove = (id) => {
    setBookingRequests(bookingRequests.filter((req) => req.id !== id));
  };

  const handleReject = (id) => {
    setBookingRequests(bookingRequests.filter((req) => req.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Appointment Management</h1>

      {/* Appointment Calendar */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Appointment Calendar</h2>
        <Calendar onChange={setValue} value={value} className="border rounded-lg p-4 shadow" />
      </div>

      {/* Booking Requests */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Booking Requests</h2>
        {bookingRequests.length ? (
          bookingRequests.map((request) => (
            <div
              key={request.id}
              className="flex justify-between items-center bg-gray-100 p-4 mb-4 rounded-lg shadow">
              <div>
                <p className="font-medium">{request.name}</p>
                <p>
                  {request.date} at {request.time}
                </p>
              </div>
              <div className="space-x-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleApprove(request.id)}>
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleReject(request.id)}>
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No booking requests at the moment.</p>
        )}
      </div>

      {/* Manage Appointments */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Appointments</h2>
        {appointments.length ? (
          appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex justify-between items-center bg-blue-100 p-4 mb-4 rounded-lg shadow">
              <div>
                <p className="font-medium">{appointment.name}</p>
                <p>
                  {appointment.date} at {appointment.time}
                </p>
              </div>
              <div className="space-x-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  // Modify appointment action can go here
                >
                  Modify
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  // Cancel appointment action can go here
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </div>

      {/* Client Profiles */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Client Profiles</h2>
        <p>View details of clients and their appointment history.</p>
        {/* You can add a table or client card list with relevant info */}
      </div>

      {/* Appointment Notifications */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Appointment Notifications</h2>
        <p>Get alerts for upcoming appointments or cancellations.</p>
        {/* Use a notification system, like toast or alerts for real-time updates */}
      </div>
    </div>
  );
};

export default AppointmentManagement;
