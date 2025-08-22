import React from "react";
import PropTypes from "prop-types";

// ✅ Utility function to get initials if no avatar
const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
};

// ✅ ProfileCard Component
const ProfileCard = ({ avatar, name, job, email }) => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-xl shadow-md border text-center">
      {/* Avatar or Initials */}
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 mx-auto rounded-full mb-3"
        />
      ) : (
        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-300 text-lg font-bold text-gray-700 mb-3">
          {getInitials(name)}
        </div>
      )}

      {/* Info */}
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{job}</p>
      <p className="text-blue-600">{email}</p>
    </div>
  );
};

// ✅ Prop validation
ProfileCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ProfileCard;

