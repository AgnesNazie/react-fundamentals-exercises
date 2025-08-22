import React from "react";
import PropTypes from "prop-types";

// ✅ GreetingBanner Component
const GreetingBanner = ({ name, role }) => {
  return (
    <div className="p-3 bg-green-600 text-white rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold">
        Welcome back, {name} {role && <>— {role}</>}
      </h2>
    </div>
  );
};

// ✅ Prop validation
GreetingBanner.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
};

export default GreetingBanner;

