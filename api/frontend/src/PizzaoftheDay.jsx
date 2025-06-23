import { usePizzaoftheDay } from "./usePizzaoftheDay";
import { useLanguage } from "./LanguageContext";


const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaoftheDay = () => {
  const pizzaoftheDay = usePizzaoftheDay();
  const { t } = useLanguage();

  if (!pizzaoftheDay) {
    return <div>{t("loading")}</div>; // ← pakai t()
  }

  return (
    <div className="pizza-of-the-day">
      <h2>{t("chefChoice")}</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaoftheDay.name}</h3>
          <p>{pizzaoftheDay.description}</p>
          <p>
            {t("startingFrom")}{" "}
            <span>{currency.format(pizzaoftheDay.sizes.S)}</span>
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaoftheDay.image}
          alt={pizzaoftheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaoftheDay;
