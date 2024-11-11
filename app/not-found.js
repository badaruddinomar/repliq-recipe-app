import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen max-h-[auto] flex items-center justify-center flex-col">
      <h2 className="text-[20px] md:text-[40px] font-bold">
        <span className="text-[25px] md:text-[45px] text-[#A6442B]">O</span>ops!
      </h2>
      <p className="text-[14px] md:text-[20px] my-[20px]">
        404 - Page not found
      </p>
      <Link
        href="/"
        className="bg-dark px-[20px] py-[15px] rounded-2xl hover:opacity-[.5] transition-all duration-300 text-[white]"
      >
        Return Home
      </Link>
    </div>
  );
}
