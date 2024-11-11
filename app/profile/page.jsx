"use client";
import { useDispatch, useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { removeUserFromStore } from "@/redux/reducer/userReducer";
import { useRouter } from "next/navigation";
import ProtectRoute from "@/components/ProtectRoute";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import HttpKit from "@/common/helpers/HttpKit";

const Profile = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    data: profileData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => HttpKit.getProfile(),
  });

  useEffect(() => {
    if (error) dispatch(removeUserFromStore());
  }, [dispatch, error]);

  const logoutHandler = () => {
    dispatch(removeUserFromStore());
    router.push("/login");
  };
  return (
    <div className="bg-gray-50 min-h-screen lg:pt-[72px] pt-[56px]">
      <div className="container flex items-center justify-center px-6 py-5 mx-auto md:px-12">
        <div className="w-full max-w-[400px] my-20 flex items-center justify-center flex-col mx-auto bg-white rounded-xl p-5 space-y-3">
          <h1 className="flex items-center justify-center w-20 h-20 text-2xl font-bold text-gray-500 bg-yellow-200 rounded-full cursor-pointer">
            {user.name.split(" ")[0][0]}
          </h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button
            onClick={logoutHandler}
            className="flex items-center self-end gap-1 hover:opacity-[.5] transition-all duration-300 text-red-500 cursor-pointer"
          >
            <CiLogout /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtectRoute(Profile);
