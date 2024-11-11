import CartItems from "@/components/Cart/CartItems";

const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen  lg:pt-[72px] pt-[56px]">
      <div className="container px-6 py-5 mx-auto md:px-12">
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
