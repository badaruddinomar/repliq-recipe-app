"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState(searchTerm);
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = () => {
    router.push(`/all-recipes?search=${searchInput}`);
  };
  useEffect(() => {
    if (pathname === "/all-recipes") {
      router.push(`/all-recipes?search=${searchInput}`);
    }
  }, [router, searchInput, pathname]);

  return (
    <div className="">
      <form
        action=""
        className="w-full mt-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative flex p-1 bg-white border border-yellow-200 rounded-full shadow-md md:p-2">
          <input
            placeholder="Your favorite food"
            className="w-full p-4 bg-transparent rounded-full outline-none "
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={() => handleSearch()}
            type="button"
            title="Start buying"
            className="px-6 py-3 ml-auto text-center transition rounded-full bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
          >
            <span className="hidden font-semibold text-yellow-900 md:block">
              Search
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 mx-auto text-yellow-900 md:hidden"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
