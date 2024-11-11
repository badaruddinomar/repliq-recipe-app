import React from "react";
import { Input } from "@headlessui/react";
const TextInputField = ({ label, register, name, type = "text", errors }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input
        {...register(name)}
        type={type}
        placeholder={label}
        className="block w-full h-12 px-3 my-2 border-gray-300 rounded-md shadow-sm border-[1px] "
      />
      <span className="text-red-500">{errors[name]?.message}</span>
    </div>
  );
};

export default TextInputField;
