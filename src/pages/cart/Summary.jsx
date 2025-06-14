import { Link } from "react-router";
import { useCart } from "../../contexts/CartContext";

export default function Summary({ cartItems }) {
  const { clearCart } = useCart()
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const delivery = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="border-b-main rounded-xl p-6 bg-light shadow-md lg:max-w-lg mx-auto space-y-6 w-2/5 color-gray-700 max-lg:w-full">
      <h3 className="text-xl font-bold">Summary</h3>

      {/* Summary Info */}
      <div className="border-t border-b-gray pt-4">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Sub-Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li className="flex justify-between">
            <span>Delivery Charges</span>
            <span>${delivery}</span>
          </li>
          <li className="flex justify-between">
            <span>Discount (-20%)</span>
            <span className="text-danger">-${discount.toFixed(2)}</span>
          </li>
        </ul>
      </div>

      {/* Total */}
      <div className="border-t border-b-gray pt-4">
        <ul>
          <li className="flex justify-between text-lg font-semibold">
            <span>Total Amount</span>
            <span>{total.toFixed(2)}</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-center animate-fade-in">
        {!(total == 0) && (
          <Link
            to="/checkout"
            className="btn-primary w-full"
            onClick={() => clearCart()}
          >
            CheckOut
          </Link>
        )}
      </div>
    </div>
  );
}
