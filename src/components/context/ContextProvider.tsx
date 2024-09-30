import React, { createContext, useState } from "react";

export const MyContext = createContext<MyContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

interface CartItem {
  id: string;
  name: string;
  count: number;
  price: number;
}

interface MyContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const ContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isOpen, setIsOpen, cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
