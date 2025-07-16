import { useState } from 'react';

declare global {
  interface Window {
    api: {
      sayHello: () => Promise<string>;
    };
  }
}

export default function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await window.api.sayHello();
    setMessage(response);
  };

  return (
    <div>
      <h1>React + Electron IPC</h1>
      <button onClick={handleClick}>Say Hello</button>
      <p>{message}</p>
    </div>
  );
}
