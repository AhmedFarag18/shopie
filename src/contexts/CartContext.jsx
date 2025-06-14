import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children, userEmail }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(`cart-${userEmail}`);
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, [userEmail]);

  const saveCart = (newCart) => {
    localStorage.setItem(`cart-${userEmail}`, JSON.stringify(newCart));
    setCartItems(newCart);
  };

  const addToCart = (product, quantity = 1) => {
    const minimalProduct = {
      id: product.id,
      title: product.title,
      image: product.images?.[0] || "",
      price: product.price,
    };

    const found = cartItems.find((item) => item.id === minimalProduct.id);
    let updatedCart;

    if (!found) {
      updatedCart = [...cartItems, { ...minimalProduct, quantity }];
      toast.success("Product added to cart");
    } else {
      updatedCart = cartItems.map((item) =>
        item.id === minimalProduct.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      toast.success("Product quantity Increase");
    }

    saveCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    saveCart(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const clearCart = () => {
    localStorage.removeItem(`cart-${userEmail}`);
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
