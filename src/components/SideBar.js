import Link from "next/link";
import React, { Fragment } from "react";
import ActiveLink from "./ActiveLink";
import { MdDashboard } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { GrProductHunt } from "react-icons/gr";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
const navLinks = [
  { name: "Dashboard", link: "/", icon: <MdDashboard fontSize={20} /> },
  { name: "Orders", link: "/orders", icon: <SiMarketo fontSize={20} /> },
  { name: "Products", link: "/products", icon: <GrProductHunt fontSize={20} /> },
  { name: "Appointments", link: "/appointments", icon: <RiCalendarScheduleFill fontSize={20} /> },
  { name: "Clients", link: "/clients", icon: <FaUserFriends fontSize={20} /> },
  { name: "Payments", link: "/payments", icon: <MdPayments fontSize={20} /> },
  { name: "Settings", link: "/settings", icon: <IoSettings fontSize={20} /> },
];

const SideBar = () => {
  return (
    <div className="h-full ">
      <div className="mt-[7rem] px-6">
        <nav className=" space-y-[5px]">
          {navLinks.map((link) => {
            return (
              <Fragment key={link.name}>
                <ActiveLink name={link.name} link={link.link} icon={link.icon} />
              </Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
