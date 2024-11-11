"use client";
import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Modal from "../Modal";
import SingleRecipe from "./SingleRecipe";
import SearchInput from "../SearchInput";
import LoadingSpinner from "../reusable/LoadingSpinner";

const RecipesList = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [recipes, setRecipes] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: HttpKit.getTopRecipes,
  });

  useEffect(() => {
    if (data) {
      setRecipes(data);
    }
  }, [data]);

  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
    setRecipeId(id);
  };

  if (isLoading) return <LoadingSpinner height="50vh" />;
  if (error) return <div>Error loading recipes: {error.message}</div>;

  return (
    <div className="py-10 bg-gray-50">
      <div className="container px-6 mx-auto md:px-12">
        <h1 className="text-2xl font-bold">Top Recipes</h1>
        {/* Search form */}
        <SearchInput />

        <div className="relative py-16">
          <div className="container relative m-auto text-gray-500 ">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {recipes?.map((recipe) => (
                <RecipeCard
                  key={recipe?.idMeal}
                  recipe={recipe}
                  handleDetailsOpen={handleDetailsOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal*/}
      <Modal isOpen={openDetails} setIsOpen={setOpenDetails}>
        <SingleRecipe id={recipeId} setIsOpen={setOpenDetails} />
      </Modal>
    </div>
  );
};

export default RecipesList;
