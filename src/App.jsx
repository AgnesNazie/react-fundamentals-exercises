import React from "react";
import AppHeader from "./Components/AppHeader";

function App() {
  return (
    <div>
      <AppHeader title="React Fundamentals" tagline="Learning Hooks & Components" />
      {/* You can remove tagline to see default value: <AppHeader title="React Fundamentals" /> */}
    </div>
  );
}

export default App;

