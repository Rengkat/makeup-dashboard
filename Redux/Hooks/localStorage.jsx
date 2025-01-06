"use client";

export const addUserToLocalStorage = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const removeUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

export const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const result = localStorage.getItem("user");
    try {
      return result ? JSON.parse(result) : null;
    } catch (error) {
      console.error("Error parsing user:", error);
      return null;
    }
  }
  return null;
};

export const isUserLoggedIn = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user") ? true : false;
  }
  return false;
};
