import LoginForm from "@/components/Login/LoginForm";

const Login = () => {
  return (
    <div className="bg-[#FEFCE8] min-h-screen flex items-center justify-center  lg:pt-[72px] pt-[56px]">
      <div className="container px-6 py-5 mx-auto md:px-12">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
