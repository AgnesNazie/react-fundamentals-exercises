import React from "react";
import AppHeader from "./Components/AppHeader";
import GreetingBanner from "./Components/GreetingBanner";

function App() {
  return (
   <div className="p-6 space-y-6">
      {/* Exercise 1 */}
      <AppHeader title="React Fundamentals" tagline="Exercises Showcase" />

      {/* Exercise 2 */}
      <GreetingBanner name="Agnes" role="Admin" />
      <GreetingBanner name="Naz" />
    </div>
  );
}

export default App;

