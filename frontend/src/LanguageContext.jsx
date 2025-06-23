import { createContext, useState, useContext } from "react";

const translations = {
  en: {
    makeOrder: "Make Order",
    pizzaType: "Pizza Type",
    pizzaSize: "Pizza Size",
    addToCart: "Add to Cart",
    chefChoice: "Chef's pizza of the day",
    cart: "Cart",
    checkout: "Checkout",
    startingFrom: "Starting from", // ← baru
    loading: "Loading...",        // ← baru
    total: "Bill"
  },
  id: {
    makeOrder: "Buat Order",
    pizzaType: "Jenis Pizza",
    pizzaSize: "Ukuran Pizza",
    addToCart: "Tambahkan ke keranjang",
    chefChoice: "Pizza pilihan chef hari ini",
    cart: "Keranjang",
    checkout: "Bayar",
    startingFrom: "Dimulai dari harga", // ← baru
    loading: "Memuat...",               // ← baru
    total: "Total"
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  const value = {
    language,
    setLanguage,
    t: (key) => translations[language][key] || key,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
