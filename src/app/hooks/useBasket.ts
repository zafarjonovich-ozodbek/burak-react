import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
  const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  // Agar DataBase'dan malumot olib kelib oqish kerak bolsa "useEffect"ni ihslatamiz
  // ...

  /** HANDLERS */
  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id,
    );

    if (exist) {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item,
      );
      setCartItems(cartUpdate); // A version(RENDER)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate)); //B version(L.Storage UPDATE)
    } else {
      const cartUpdate = [...cartItems, { ...input }];
      setCartItems(cartUpdate); // A version(RENDER)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate)); //B version(L.Storage UPDATE)
    }
  };

  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id,
    );

    if (exist.quantity === 1) {
      const cartUpdate = cartItems.filter(
        (item: CartItem) => item._id !== input._id,
      );
      setCartItems(cartUpdate); // A version(RENDER)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate)); //B version(L.Storage UPDATE)
    } else {
      const cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item,
      );
      setCartItems(cartUpdate); // A version(RENDER)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate)); //B version(L.Storage UPDATE)
    }
  };

  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
      (item: CartItem) => item._id !== input._id,
    );
    setCartItems(cartUpdate); // A version(RENDER)
    localStorage.setItem("cartData", JSON.stringify(cartUpdate)); // B version(L.Storage UPDATE)
  };

  const onDeleteAll = () => {
    setCartItems([]); // A version(RENDER) - basket' qismidagi productni ochiryapti
    localStorage.removeItem("cartData"); // B version(L.Storage UPDATE) - local Storage' ning "cartData" malumotini ochiryapti
  };

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};
export default useBasket;

// FUNCTION orqali " useBasket HOOK"ni yaratyapmiz - u bizga mantiqni qaytaryapti. Boshqa functionlardan farqi shu
