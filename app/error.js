"use client";
export default function Error({ error, reset }) {
  return (
    <div className="w-[100%] h-screen flex items-center justify-center flex-col">
      <h2 className=" text-[20px] md:text-[40px] font-extrabold">
        Something went wrong!
      </h2>
      <p className="text-[14px] md:text-[16px]  text-[gray] my-[20px]">
        Please refresh the page or go back.
      </p>
      <button
        onClick={() => reset()}
        className=" text-[14px] md:text-[16px] bg-dark rounded-lg text-[white] capitalize  px-[15px] py-[10px] font-medium duration-300 hover:bg-opacity-0 hover:text-[black] border-[2px] border-black"
      >
        Try again
      </button>
    </div>
  );
}
