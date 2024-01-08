import './App.css';
import React from "react";

function App() {
  const quotes = [
    {
      quote: "quote 1",
      author: "author 1"
    },
    {
      quote: "quote 2",
      author: "author 2"
    },
    {
      quote: "quote 3",
      author: "author 3"
    },
    {
      quote: "quote 4",
      author: "author 4"
    },
    {
      quote: "quote 5",
      author: "author 5"
    },
    {
      quote: "quote 6",
      author: "author 6"
    },
  ]
  // const [quoteIdx, setQuoteIdx] = React.useState(3)

  const [quote, setQuote] = React.useState(quotes[3].quote)
  const [author, setAuthor] = React.useState(quotes[3].author)
  function handleClick() {
    const randomIDX = Math.floor(Math.random() * 6);
    setQuote(quotes[randomIDX].quote)
    setAuthor(quotes[randomIDX].author)
  }
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          {quote}
        </div>
        <br/>
        <div id="author">
          {author}
        </div>
        <br/>
        <button onClick={handleClick} id="new-quote">
          new quote
        </button>
        <br/><br/>
        <a href="https://twitter.com/intent/tweet" rel="noreferrer" id="tweet-quote" target="_blank" class="tweet-button">
          Tweet Quote
        </a>

      </div>
    </div>
  );
}

export default App;
