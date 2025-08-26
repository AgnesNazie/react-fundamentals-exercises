import React from "react";
import AppHeader from "./Components/AppHeader";
import GreetingBanner from "./Components/GreetingBanner";
import ProfileCard from "./Components/ProfileCard";
import PrimaryButton from "./Components/PrimaryButton";
import QuantitySelector from "./Components/QuantitySelector";
import PasswordField from "./Components/PasswordField"; 
import LikeButton from "./Components/LikeButton";
 
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
      {/* Exercise 4 */}
      <div className="space-x-3">
        <PrimaryButton label="Click Me" onClick={() => alert("Button clicked!")} />
        <PrimaryButton label="Disabled Button" disabled />
        <PrimaryButton /> {/* Uses default label "Submit" */}
       </div> 
       {/* Exercise 5 */}
      <QuantitySelector onChange={(qty) => console.log("Quantity changed:", qty)} />
        
      {/* Exercise 6 */}
      <PasswordField />
      {/* Exercise 7 */}
      <LikeButton initialCount={10} />
 
    </div>
  );
}

export default App;

