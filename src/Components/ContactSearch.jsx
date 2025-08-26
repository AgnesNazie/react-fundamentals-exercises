import React, { useState } from "react";
import PropTypes from "prop-types";

// ✅ ContactSearch Component
const ContactSearch = ({ contacts }) => {
  const [query, setQuery] = useState("");

  // Filter contacts by query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  // Highlight matches
  const highlightMatch = (name) => {
    if (!query) return name;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = name.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Search contacts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <ul className="space-y-1">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id} className="p-1">
              {highlightMatch(contact.name)}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

// ✅ Prop validation
ContactSearch.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactSearch;

