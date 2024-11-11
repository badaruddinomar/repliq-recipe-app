"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputField from "@/components/reusable/TextInputField";
import { loginShema } from "@/zodSchema/authSchema";
import Link from "next/link";
import PasswordInputField from "@/components/reusable/PasswordInputField";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import HttpKit from "@/common/helpers/HttpKit";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { addUserToStore } from "@/redux/reducer/userReducer";
const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate, isLoading } = useMutation({
    mutationFn: (bodyData) => HttpKit.login(bodyData),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginShema),
  });

  const onSubmit = (bodyData) => {
    mutate(bodyData, {
      onSuccess: (data) => {
        toast.success(data.message || "Login successful");
        reset();
        router.push("/");
        dispatch(addUserToStore(data.data));
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message || "Something went wrong");
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded-xl p-5 flex flex-col space-y-2 bg-white max-w-[600px] mx-auto"
    >
      <h3 className="my-5 text-2xl font-semibold text-center text-gray-800">
        Login
      </h3>
      <TextInputField
        label="Email"
        name="email"
        register={register}
        errors={errors}
      />
      <PasswordInputField
        label="Password"
        name="password"
        register={register}
        required
        errors={errors}
      />

      <button
        disabled={isLoading}
        type="submit"
        className="h-12 bg-yellow-300 rounded-lg cursor-pointer"
      >
        {isLoading ? <LoadingSpinner size={20} /> : "Submit"}
      </button>
      <p className="mt-5 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-yellow-500">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
