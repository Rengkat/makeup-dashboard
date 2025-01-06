"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AuthLayout({ children }) {
  const { isUserLoggedIn, user } = useSelector((state) => state.app);
  console.log(isUserLoggedIn);
  const navigate = useRouter();
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate.replace("/");
    }
  }, [isUserLoggedIn, navigate]);

  if (isUserLoggedIn) return null;
  return <div>{children}</div>;
}
