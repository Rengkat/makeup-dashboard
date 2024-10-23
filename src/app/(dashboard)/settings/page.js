import React from "react";

const Settings = () => {
  return (
    <div className="p-5 bg-light-gray min-h-screen">
      {/* Page Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      {/* General Settings Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">General Settings</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for General Settings Form */}
          <form>
            {/* Business Name */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Business Name</label>
              <input
                type="text"
                placeholder="Enter your business name"
                className="w-full border-[1px] p-3 rounded-md"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Business Email</label>
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full border-[1px] p-3 rounded-md"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Business Phone</label>
              <input
                type="tel"
                placeholder="Enter your business phone number"
                className="w-full border-[1px] p-3 rounded-md"
              />
            </div>

            {/* Save Button */}
            <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
              Save Settings
            </button>
          </form>
        </div>
      </div>

      {/* Admin Management Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Admin Management</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Admin Management */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold">Current Admins</h3>
            <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
              Add New Admin
            </button>
          </div>

          {/* Admin List */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-md">
              <thead>
                <tr>
                  <th className="border-b-2 p-3 text-left">Admin Name</th>
                  <th className="border-b-2 p-3 text-left">Email</th>
                  <th className="border-b-2 p-3 text-left">Role</th>
                  <th className="border-b-2 p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b">John Doe</td>
                  <td className="p-3 border-b">john@example.com</td>
                  <td className="p-3 border-b">Super Admin</td>
                  <td className="p-3 border-b">
                    <button className="text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
                {/* Repeat for other admins */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Notification Settings</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for Notification Settings Form */}
          <form>
            {/* Email Notifications */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Email Notifications</label>
              <select className="w-full border-[1px] p-3 rounded-md">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>

            {/* SMS Notifications */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">SMS Notifications</label>
              <select className="w-full border-[1px] p-3 rounded-md">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>

            {/* Push Notifications */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">Push Notifications</label>
              <select className="w-full border-[1px] p-3 rounded-md">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>

            {/* Save Button */}
            <button className="bg-dark-green text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-600 transition duration-300">
              Save Notifications
            </button>
          </form>
        </div>
      </div>

      {/* API & Integrations Section */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">API & Integrations</h2>
        <div className="border-[1px] rounded-md shadow-lg p-5 bg-gray-50">
          {/* Placeholder for API Keys or Integrations */}
          <p>Manage API keys, third-party integrations (e.g., payment gateways, analytics).</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
