import { useLanguage } from "./LanguageContext";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Cart({ cart, checkout }) {

  const { t } = useLanguage();


  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      <h2>{t("cart")}</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span>
            <span className="type">{item.pizza.name}</span>
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>{t("total")}: {currency.format(total)}</p>
      <button onClick={checkout}>{t("checkout")}</button>
    </div>
  );
}