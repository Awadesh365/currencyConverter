import React, { useId } from "react";

/**
 * InputBox component represents an input field with a label and a dropdown
 * for selecting a currency.
 *
 * @param {Object} props - The properties for the InputBox component.
 * @param {string} props.label - The label for the input field.
 * @param {number} props.amount - The amount value.
 * @param {function} props.onAmountChange - The function to call when the amount changes.
 * @param {function} props.onCurrencyChange - The function to call when the currency changes.
 * @param {Array} [props.currencyOption=[]] - The list of currency options.
 * @param {string} [props.selectCurrency="usd"] - The selected currency.
 * @param {boolean} [props.amountDisable=false] - Whether the amount input is disabled.
 * @param {boolean} [props.currencyDisable=false] - Whether the currency dropdown is disabled.
 * @param {string} [props.className=""] - The additional CSS class for the component.
 * @returns {JSX.Element} The InputBox component.
 */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Generate a unique ID for the amount input field
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      {/* Amount input field */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      {/* Currency dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Loop through the currency options and generate dropdown options */}
          -{" "}
          {/* key is important when we loop through else react will degrade in the optimization */}
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
