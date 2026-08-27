import { useState } from 'react'
import elokuvat from './elokuvalista';

function App() {
  return (
    <ul>
      {elokuvat.map((item, index) => (
        <li key={index}>{item.title} - {item.year} - {item.genre}</li>
      ))}
    </ul>
  );
}

export default App