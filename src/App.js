import React, { useState, useEffect } from 'react';
import './App.css';
import quotes from './quotes.json';

function App() {
  const [currentQuote, setCurrentQuote] = useState('');
  const currentAuthor = useState('Friedrich Nietzsche');

  useEffect(() => {
    // Initialize with a random quote on component mount
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div id="quote-box">
      <h1>Snippets from Ecce Homo</h1>
      <h2>by Friedrich Nietzsche</h2>
      <p id="text">{currentQuote}</p>
      <p id="author">- {currentAuthor}</p>
      <button id="new-quote" onClick={getRandomQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${currentQuote}" - ${currentAuthor}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
