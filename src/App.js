import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleGreet = () => {
    setGreet(`Hi ${name} welcome to our app`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <button onClick={handleGreet}>Greet</button>
      <h2>{greet}</h2>
    </div>
  );
}

export default App;
