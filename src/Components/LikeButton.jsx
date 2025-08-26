import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

// ✅ LikeButton Component
const LikeButton = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const lastClickTime = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current >= 500) {
      setCount((prev) => prev + 1);
      lastClickTime.current = now;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
    >
      ❤️ {count}
    </button>
  );
};

// ✅ Prop validation
LikeButton.propTypes = {
  initialCount: PropTypes.number,
};

export default LikeButton;

