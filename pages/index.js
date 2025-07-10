import { useEffect, useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/sms');
      const data = await res.json();
      setMessages(data);
    }, 1000); // check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'monospace' }}>
      <h1 style={{ color: 'white' }}>📩 Incoming SMS</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>[{index + 1}] {msg}</li>
        ))}
      </ul>
    </div>
  );
  }
