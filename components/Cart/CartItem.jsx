"use client";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "@/redux/reducer/cartReducer";
import { toast } from "sonner";
import HttpKit from "@/common/helpers/HttpKit";
import { useMutation } from "@tanstack/react-query";

const CartItem = ({ item }) => {
  const { user } = useSelector((state) => state.userReducer);
  const [quantity, setQuantity] = useState(item.quantity);
  const [imageSrc, setImageSrc] = useState(item.image);
  const { mutate: addOrUpdateCartMutate } = useMutation({
    mutationFn: (bodyData) => HttpKit.addToCartOrUpdate(bodyData),
  });
  const { mutate: removeFromCartMutate } = useMutation({
    mutationFn: (productId) => HttpKit.removeCartItem(productId),
  });
  console.log(item);

  const dispatch = useDispatch();

  const incQuantityHandler = () => {
    setQuantity(quantity + 1);
  };
  const decQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const itemRemoveHandler = () => {
    if (user) {
      removeFromCartMutate(item.productId);
    }
    dispatch(removeFromCart(item.productId));
    toast.success("Item removed");
  };

  // handle image error--
  const imageErrorHandler = () => {
    setImageSrc("/default.jpg");
  };

  useEffect(() => {
    dispatch(updateCart({ productId: item.productId, quantity }));
  }, [quantity, dispatch, item.productId]);
  // Sync cart with the database if the user is logged in
  useEffect(() => {
    if (user) {
      addOrUpdateCartMutate({
        productId: item.productId,
        quantity,
        image: item.image,
        title: item.title,
      });
    }
  }, [addOrUpdateCartMutate, item, user, quantity]);

  return (
    <tr className="border-b-[1px] last:border-b-0 text-[14px] md:text-[16px] font-primary border-[#ccc]">
      <td className="py-[20px]">
        <div className="flex items-center">
          <Image
            src={imageSrc}
            alt={item.title}
            width={70}
            height={70}
            className="rounded-md mr-[20px]"
            onError={imageErrorHandler}
          />
          <span className="max-w-[200px] self-start">{item.title}</span>
        </div>
      </td>
      <td className="py-[20px]">
        <div className="flex items-center justify-center">
          <span
            onClick={decQuantityHandler}
            className="p-[20px] h-[50px] w-[50px] leading-[50px] text-center border-[#ccc] border-[1px] bg-[#ccc] rounded-sm cursor-pointer flex items-center justify-center hover:bg-dark select-none hover:text-[white] transition-all duration-300"
          >
            <HiMiniMinus />
          </span>
          <span className="mx-[10px] h-[50px] w-[50px] leading-[50px] text-center border-[#ccc] border-[1px] rounded-sm select-none cursor-pointer flex items-center justify-center">
            {quantity}
          </span>
          <span
            onClick={incQuantityHandler}
            className="h-[50px] w-[50px] bg-[#ccc] leading-[50px] text-center border-[#ccc] border-[1px] rounded-sm cursor-pointer flex items-center justify-center hover:bg-dark select-none hover:text-[white] transition-all duration-300"
          >
            <GoPlus />
          </span>
        </div>
      </td>
      <td className="py-[20px]">
        <span
          className="flex items-center justify-center"
          onClick={itemRemoveHandler}
        >
          <IoIosClose className="text-[25px] cursor-pointer hover:text-[red] transition-all duration-300" />
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
