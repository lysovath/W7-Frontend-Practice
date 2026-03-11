import React from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRainy, setIsRainy] = React.useState(false);
  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRainy(false);
  }

  function onRainClick() {
    // Complete this code when we click on Rain Time
    setIsRainy(true);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return isRainy ? "It's Raining!" : "It's Sunny!";
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return isRainy ? { backgroundColor: "lightblue" } : { backgroundColor: "yellow" };
  }

  return (
    <main style={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
