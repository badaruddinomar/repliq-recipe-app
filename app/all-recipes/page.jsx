"use client";
import SearchInput from "@/components/SearchInput";
import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import RecipeCard from "@/components/Recipes/RecipeCard";
import { useState } from "react";
import Modal from "@/components/Modal";
import SingleRecipe from "@/components/Recipes/SingleRecipe";
import LoadingSpinner from "@/components/reusable/LoadingSpinner";

const AllRecipes = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["serch-recipes", query],
    queryFn: () => HttpKit.searchRecipesByName(query),
  });

  const handleDetailsOpen = (id) => {
    setRecipeId(id);
    setOpenDetails(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen  lg:pt-[72px] pt-[56px]">
      <div className="container px-6 mx-auto md:px-12">
        <SearchInput />
        {/* products */}
        {isLoading ? (
          <LoadingSpinner height="50vh" />
        ) : (
          <div className="grid gap-6 my-5 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            {recipes?.map((recipe) => (
              <RecipeCard
                key={recipe?.idMeal}
                recipe={recipe}
                handleDetailsOpen={() => handleDetailsOpen(recipe?.idMeal)}
              />
            ))}
          </div>
        )}
      </div>
      {/* Modal*/}
      <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
        <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
      </Modal>
    </div>
  );
};

export default AllRecipes;
