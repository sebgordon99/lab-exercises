import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];



export function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState("")


  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    let ignore = false;
    fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        
       if (!ignore) setRate(json.bitcoin[currency.toLowerCase()]);

      });
      return () => {ignore = true;}}, 
      [currency]
  )

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      1 BTC = {rate} {currency}
    </div>
  );
}

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         //https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
//         target: "https://api.coingecko.com/",
//         changeOrigin: true,
//         // rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//     logLevel: "debug",
//   },
// });