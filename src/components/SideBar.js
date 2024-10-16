import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="mt-[6rem]">
      <Link className="block" href={"#"}>
        Dashboard
      </Link>
      <Link className="block" href={"#"}>
        Orders & Sales Management
      </Link>
      <Link className="block" href={"#"}>
        Product Management
      </Link>
      <Link className="block" href={"#"}>
        Appointment Management
      </Link>
      <Link className="block" href={"#"}>
        Client Management
      </Link>
      <Link className="block" href={"#"}>
        Settings
      </Link>
      <Link className="block" href={"#"}>
        Payment Management
      </Link>
    </div>
  );
};

export default SideBar;
