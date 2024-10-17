import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../context/ContextProvider";

const useShoppingCart = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("ShoppingCart must be used within a ContextProvider");
  }

  const { isOpen, setIsOpen, cart, setCart } = context;
  const ref = useRef<HTMLDivElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !isDeleting) {
        const target = e.target as Node;
        if (!ref.current.contains(target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, isDeleting, setIsOpen]);

  const handleDeleteItem = (index: number) => {
    setIsDeleting(true);
    const newArr = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(newArr);
    setTimeout(() => setIsDeleting(false), 200);
  };

  return { isOpen, setIsOpen, cart, handleDeleteItem, ref, isDeleting };
};

export default useShoppingCart;
