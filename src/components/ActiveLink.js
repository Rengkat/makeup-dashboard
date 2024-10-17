"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ name, link, icon }) => {
  const router = usePathname();
  const isActive = router === link;

  return (
    <Link
      href={link}
      className={`text-dark-green flex items-center gap-5 px-4 py-4 rounded-lg font-semibold transition-colors duration-300 ${
        isActive ? "bg-dark-gold text-white" : " hover:bg-dark-gold hover:text-white"
      }`}>
      {icon} {name}
    </Link>
  );
};

export default ActiveLink;
