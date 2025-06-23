import { useState } from "react";
import { createRootRoute, Outlet} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "./Header";
import PizzaoftheDay from "./PizzaoftheDay";
import { CartContext } from "./contexts";
import Order from "./Order";
import { LanguageProvider } from "./LanguageContext";

export const Route = createRootRoute({
    component
});
const WebApp = () => {
  //const cartHook = useState([]);
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