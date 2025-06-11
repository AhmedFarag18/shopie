import { Breadcrumbs } from "@material-tailwind/react";
import CartSummary from "./Summary";
import CartTable from "./Carttable";
import { useCart } from "../../contexts/CartContext";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();


  return (
    <div className="bg-white">
      {/* ////////////////////////// */}
      <div className="bg-light w-full p-5">
        <div className="container mx-auto">
          <div className="flex  items-center justify-between ">
            <h3 className="">Cart</h3>
            <Breadcrumbs>
              <a href="#" className="opacity-60 hover:opacity-80 font-weight:700">
                HOME
              </a>
              <a href="#" className="opacity-60 hover:opacity-80 font-weight:700 ">
                Cart
              </a>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      {/* //////////////// */}
      <div className="w-100% bg-white">
        <div className="container mx-auto p-2 flex  items-start justify-center max-lg:flex-col">
          <CartTable
            cartItems={cartItems}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
          <CartSummary cartItems={cartItems} clearCart={clearCart} />

        </div>
      </div>
    </div>
  );
}
