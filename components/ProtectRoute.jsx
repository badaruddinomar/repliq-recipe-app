"use client";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const ProtectRoute = (Component, allowedRoles) => {
  return function Route(props) {
    const { user } = useSelector((state) => state.userReducer);

    useLayoutEffect(() => {
      if (!user) {
        redirect("/login");
      }
    }, [user]);

    if (!user) {
      return null;
    }
    return <Component {...props} />;
  };
};
export default ProtectRoute;
