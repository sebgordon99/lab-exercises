import { useState, useEffect, useReducer } from "react";
import { useData } from "./module7lab2b";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];


export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const data = useData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );
  // console.log("Data", data);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      1 BTC = {data?.bitcoin[currency.toLowerCase()]} {currency}
    </div>
  );
}


