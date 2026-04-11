import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "http://localhost:3000/";
  const [serverMessage, setServerMessage] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServerMessage(data.message);
      });
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <h1>{serverMessage}</h1>
    </>
  );
}

export default App;
