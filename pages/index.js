import { useEffect, useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/sms');
        const data = await res.json();
        if (Array.isArray(data)) {
          setMessages(data); // Update with full array
        }
      } catch (err) {
        console.error('Error fetching SMS:', err);
      }
    }, 1000); // Check every second

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
