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

type Notification = {
  id: number;
  message: string;
  timer: NodeJS.Timeout | null;
  visible: false | true;
  type: "success" | "error";
};

interface MyContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  notifications: Notification[];
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
}

const ContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  return (
    <MyContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        setCart,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
