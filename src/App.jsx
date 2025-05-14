import { createRoot } from "react-dom/client";
import { CartContext } from "./contexts";
import Order from "./Order";
import PizzaoftheDay from "./PizzaoftheDay";
import Header from "./Header";
import { useState } from "react";
import { LanguageProvider } from "./LanguageContext";

const WebApp = () => {
  const cartHook = useState([]);
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <LanguageProvider>
          <Order />
          <PizzaoftheDay />
        </LanguageProvider>
        
      </div>
    </CartContext.Provider>
  );
};

// kita membuat sebuah element React: div yang berisi teks hello World!

const container = document.getElementById("root");
// instance dari div id=root

const root = createRoot(container);
// membuat akar/rootnya; menghapus existing children yg ada pada container

root.render(<WebApp />);
// render component/react elementnya