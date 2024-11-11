import { HiOutlineFaceFrown } from "react-icons/hi2";
const NoItemFound = ({ title }) => {
  return (
    <div className="flex items-center justify-center flex-col my-[5rem]">
      <HiOutlineFaceFrown size={120} className="mb-3 text-red-500" />
      <h4 className="text-[50px] font-bold text-red-500 leading-8 mb-3 tracking-widest">
        OOPS!
      </h4>
      <p className=" text-[20px] font-light my-[15px] ">No {title} found!</p>
    </div>
  );
};

export default NoItemFound;
