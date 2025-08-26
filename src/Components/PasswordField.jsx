import React, { useState } from "react";

// ✅ PasswordField Component
const PasswordField = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <input
        type={visible ? "text" : "password"}
        placeholder="Enter password"
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="button"
        className="px-3 py-2 bg-blue-600 text-white rounded-md shadow-md"
        onClick={() => setVisible((prev) => !prev)}
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordField;

