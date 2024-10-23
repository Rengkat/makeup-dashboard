"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

const Nav = () => {
  // State to toggle the visibility of notification and profile menus
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Dummy notifications list
  const notifications = [
    "Your appointment is confirmed for Oct 25th.",
    "You have a new message from your makeup artist.",
    "Reminder: Your massage is scheduled for tomorrow.",
  ];

  // Toggle the notification dropdown
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    setShowProfileMenu(false); // Close profile if it's open
  };

  // Toggle the profile dropdown
  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false); // Close notifications if it's open
  };

  return (
    <div className="h-[6rem] flex justify-between items-center py-2 px-[5rem] bg-white shadow-md">
      {/* Logo */}
      <Image src={"/Fullbeauty.svg"} alt="logo" height={500} width={500} className="w-[6%]" />

      <div className="flex items-center gap-8 relative">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer" onClick={handleNotificationClick}>
          <IoNotifications fontSize={35} className="text-dark-gold" />
          <div className="bg-white absolute top-1 right-1 rounded-full p-[1px]">
            <div className="size-2 bg-red-700 rounded-full shadow" />
          </div>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-[300px] bg-white shadow-lg rounded-lg p-4 z-50">
              <h3 className="font-bold text-lg mb-2">Notifications</h3>
              {notifications.length > 0 ? (
                <ul className="text-gray-700">
                  {notifications.map((notification, index) => (
                    <li key={index} className="border-b py-2">
                      {notification}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No new notifications</p>
              )}
            </div>
          )}
        </div>

        {/* Profile Icon */}
        <div className="relative cursor-pointer flex items-end gap-2" onClick={handleProfileClick}>
          <FaUserAlt fontSize={30} className="text-dark-gold" />
          <span className="text-dark-green font-semibold">Alexander</span>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-[200px] bg-white shadow-lg rounded-lg p-4 z-50">
              <ul className="text-gray-700">
                <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                  <AiOutlineSetting />
                  <span>Settings</span>
                </li>
                <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md">
                  <AiOutlineLogout />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
