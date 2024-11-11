"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputField from "@/components/reusable/TextInputField";
import { signupSchema } from "@/zodSchema/authSchema";
import PasswordInputField from "@/components/reusable/PasswordInputField";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import HttpKit from "@/common/helpers/HttpKit";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (bodyData) => HttpKit.signup(bodyData),
  });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const formSubmitHandler = (bodyData) => {
    mutate(bodyData, {
      onSuccess: (data) => {
        toast.success(data.message || "Signup successful");
        reset();
        router.push("/login");
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message || "Something went wrong");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className="w-full rounded-xl p-5 flex flex-col space-y-2 bg-white max-w-[600px] mx-auto"
    >
      <h3 className="my-5 text-2xl font-semibold text-center text-gray-800">
        Sign up
      </h3>
      <TextInputField
        label="Name"
        name="name"
        register={register}
        errors={errors}
      />
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
      <TextInputField
        label="Phone"
        name="phone"
        register={register}
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
        Already have an account?{" "}
        <Link href="/login" className="text-yellow-500">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
