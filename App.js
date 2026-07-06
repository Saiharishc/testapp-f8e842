import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [echo, setEcho] = useState('');

  const handleGetTest = async () => {
    const response = await fetch('/test');
    const data = await response.json();
    setMessage(data.message);
  };

  const handlePostTest = async () => {
    const response = await fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello from React!' }),
    });
    const data = await response.json();
    setEcho(JSON.stringify(data));
  };

  return (
    <div>
      <h1>TestApp</h1>
      <button onClick={handleGetTest}>Test GET /test</button>
      {message && <p>GET Response: {message}</p>}

      <button onClick={handlePostTest}>Test POST /test</button>
      {echo && <p>POST Response: {echo}</p>}
    </div>
  );
}

export default App;
