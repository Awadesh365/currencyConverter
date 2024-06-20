import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputBox from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

/**
 * App component is the main component of the application.
 * It contains the main functionality of the application.
 */
function App() {
  // State variables for the app
  const [amount, setAmount] = useState(0); // Amount of the currency
  const [from, setFrom] = useState("usd"); // From currency
  const [to, setTo] = useState("inr"); // To currency
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount

  // Fetch currency information using the useCurrencyInfo hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); // Available currency options

  /**
   * Swap function is called when the swap button is clicked.
   * It swaps the from and to currencies and updates the converted amount.
   */
  const swap = () => {
    setFrom(to);
    setTo(from);

    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  /**
   * Convert function is called when the form is submitted.
   * It converts the amount from the from currency to the to currency.
   */
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  // Background image URL
  const BackgroundImage = `https://cdn.corporatefinanceinstitute.com/assets/currency-basket.jpeg`;

  return (
    // Main container
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      {/* Main content */}
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From currency input */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            {/* Swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            {/* To currency input */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            {/* Convert button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
