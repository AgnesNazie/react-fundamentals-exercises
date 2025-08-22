import React from "react";
import PropTypes from "prop-types";

// ✅ AppHeader Component
const AppHeader = ({ title, tagline = "Welcome" }) => {
  return (
    <header className="p-4 bg-blue-600 text-white text-center rounded-b-xl shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm opacity-90">{tagline}</p>
    </header>
  );
};

// ✅ Prop validation
AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
};

export default AppHeader;

