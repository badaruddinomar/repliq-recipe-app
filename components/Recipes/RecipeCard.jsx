import { addToCart } from "@/redux/reducer/cartReducer";
import Image from "next/image";
import React from "react";
import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const RecipeCard = ({ recipe, handleDetailsOpen }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const payload = {
      productId: recipe?.idMeal,
      quantity: 1,
      image: recipe?.strMealThumb,
      title: recipe?.strMeal,
    };
    dispatch(addToCart(payload));
    toast("Item added to cart");
  };
  return (
    <div className="relative group space-y-6 border border-gray-100  rounded-3xl bg-white  px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10">
      <Image
        className="mx-auto rounded-2xl"
        src={recipe?.strMealThumb}
        alt="recipe-image"
        loading="lazy"
        width={500}
        height={500}
      />
      <h3 className="text-2xl font-semibold text-gray-800">
        {recipe?.strMeal}
      </h3>
      <p>
        Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
        animi officiis.
      </p>
      <div
        onClick={() => handleDetailsOpen(recipe?.idMeal)}
        className="relative mx-auto flex items-center justify-center invisible  group-hover:visible"
      >
        <button className="text-primary">Click to see details</button>
      </div>
      <div
        onClick={addToCartHandler}
        className="absolute top-0 right-6 text-white bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400  w-10 h-10 rounded-full flex items-center justify-center"
      >
        <GrCart />
      </div>
    </div>
  );
};

export default RecipeCard;
