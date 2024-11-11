"use client";
import React from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import { Input } from "@headlessui/react";

const PasswordInputField = ({
  label,
  name,
  register,
  required = false,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          placeholder={label}
          type={showPassword ? "text" : "password"}
          className="block w-full h-12 px-3 my-2 border-gray-300 rounded-md shadow-sm border-[1px] "
          {...register(name)}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
        >
          {showPassword ? (
            <LuEyeOff className="w-5 h-5" />
          ) : (
            <LuEye className="w-5 h-5" />
          )}
        </button>
      </div>
      {errors && <span className="text-red-500">{errors[name]?.message}</span>}
    </div>
  );
};

export default PasswordInputField;
