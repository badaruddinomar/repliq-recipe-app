"use client";
import CartItem from "@/components/Cart/CartItem";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import NoItemFound from "../reusable/NoItemFound";
const CartItems = () => {
  const { productList } = useSelector((state) => state.cartReducer);

  return (
    <>
      {productList.length === 0 ? (
        <NoItemFound title={"cart items"} />
      ) : (
        <div className="w-full max-w-[1000px] bg-white rounded-xl p-5 mx-auto">
          <h2 className="flex items-center gap-2 text-lg lg:text-2xl">
            <GiShoppingCart className="text-xl lg:text-3xl" /> My Cart{" "}
            <span className="text-sm text-gray-500">
              ({productList.length})
            </span>
          </h2>

          <div className="w-[100%] mx-auto scrollbar-hide overflow-x-auto mt-5">
            <table className="w-[700px] md:w-[900px] border-collapse text-center mx-auto ">
              <thead>
                <tr className="font-semibold capitalize border-b-[1px] text-[14px] md:text-[16px] font-primary border-[#ccc]">
                  <td className="py-[15px]">Description</td>
                  <td className="py-[15px]">Quantity</td>
                  <td className="py-[15px]">Remove</td>
                </tr>
              </thead>
              <tbody>
                {productList.map((item) => {
                  return <CartItem key={item.productId} item={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
