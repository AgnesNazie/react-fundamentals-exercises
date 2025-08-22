import React from "react";
import AppHeader from "./Components/AppHeader";
import GreetingBanner from "./Components/GreetingBanner";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
   <div className="p-6 space-y-6">
      {/* Exercise 1 */}
      <AppHeader title="React Fundamentals" tagline="Exercises Showcase" />

      {/* Exercise 2 */}
      <GreetingBanner name="Agnes" role="Admin" />
      <GreetingBanner name="Naz" />

      {/* Exercise 3 */}
      <ProfileCard
        avatar="https://via.placeholder.com/100"
        name="Agnes Nazie"
        job="Frontend Developer"
        email="Agnes.@Test.com"
      />
      {/* Example without avatar */}
      <ProfileCard
        name="Agnes Nazie"
        job="Backend Developer"
        email="Agnes.@Test.com"
      />
    </div>
  );
}

export default App;

