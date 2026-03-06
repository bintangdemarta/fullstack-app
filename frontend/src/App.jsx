import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{padding:"40px",fontFamily:"Arial"}}>
      <h1>🚀 Fullstack App Running</h1>
      <p>Server response:</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
