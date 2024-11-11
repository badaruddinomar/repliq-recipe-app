import SignupForm from "@/components/Signup/SignupForm";

const Signup = () => {
  return (
    <div className="bg-[#FEFCE8] min-h-screen flex items-center justify-center lg:pt-[72px] pt-[56px]">
      <div className="container px-6 py-5 mx-auto md:px-12">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
