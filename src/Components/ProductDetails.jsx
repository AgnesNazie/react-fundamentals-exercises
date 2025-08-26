import React, { useState } from "react";
import PropTypes from "prop-types";

// ✅ Reusable Modal component
const Modal = ({ title, price, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80"
        onClick={(e) => e.stopPropagation()} // Prevent close on inner click
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">Price: ${price}</p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

// ✅ ProductDetails Component
const ProductDetails = ({ title, price }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 border rounded-md shadow-sm">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setOpen(true)}
      >
        View details
      </button>

      {open && (
        <Modal title={title} price={price} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetails;

