import React from "react";
import PropTypes from "prop-types";

// ✅ PrimaryButton Component
const PrimaryButton = ({ label = "Submit", disabled = false, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold shadow-md transition 
        ${disabled 
          ? "bg-gray-400 text-gray-700 cursor-not-allowed" 
          : "bg-blue-600 hover:bg-blue-700 text-white"}`}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </button>
  );
};

// ✅ Prop validation
PrimaryButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PrimaryButton;

