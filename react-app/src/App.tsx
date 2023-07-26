import React, { useState, useEffect } from "react";
import { StreakDisplay } from "./StreakDisplay";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [longestStreak, setLongestStreak] = useState("");
  const [longestStreakCount, setLongestStreakCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    async function getStreak(): Promise<void> {
      try {
        const response = await axios.post("http://localhost:8080/streak", {
          input,
        });
        setLongestStreak(response.data.longestStreak);
        setLongestStreakCount(response.data.longestStreakCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getStreak();
  }, [input]);

  return (
    <div>
      <h1>Longest Streak Finder</h1>
      <StreakDisplay fullString={input} substring={longestStreak} />
      <input type="text" value={input} onChange={handleInputChange} />
      <p>Longest Streak: {longestStreak}</p>
      <p>Longest Streak Count: {longestStreakCount}</p>
    </div>
  );
};

export default App;
