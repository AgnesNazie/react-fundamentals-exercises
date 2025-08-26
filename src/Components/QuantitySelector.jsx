import React, { useState } from "react";
import PropTypes from "prop-types";

// ✅ QuantitySelector Component
const QuantitySelector = ({ onChange }) => {
  const [qty, setQty] = useState(1);

  const decrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onChange?.(newQty);
    }
  };

  const increase = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        className="px-3 py-1 bg-gray-300 rounded-md font-bold"
        onClick={decrease}
        disabled={qty === 1}
      >
        −
      </button>
      <span className="text-lg font-semibold">{qty}</span>
      <button
        className="px-3 py-1 bg-gray-300 rounded-md font-bold"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};

// ✅ Prop validation
QuantitySelector.propTypes = {
  onChange: PropTypes.func,
};

export default QuantitySelector;

