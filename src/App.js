import './App.css';
import React from "react";

function App() {
  // const quotes = [
  //   {
  //     quote: "quote 1",
  //     author1: "author 1"
  //   },
  //   {
  //     quote: "quote 2",
  //     author1: "author 2"
  //   },
  //   {
  //     quote: "quote 3",
  //     author1: "author 3"
  //   },
  //   {
  //     quote: "quote 4",
  //     author1: "author 4"
  //   },
  //   {
  //     quote: "quote 5",
  //     author1: "author 5"
  //   },
  //   {
  //     quote: "quote 6",
  //     author1: "author 6"
  //   },
  // ]
  // const [quoteIdx, setQuoteIdx] = React.useState("3")
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          Quote
        </div>
        <br/>
        <div id="author">
          Author
        </div>
        <br/>
        <button id="new-quote">
          new quote
        </button>
        <br/><br/>
        <button id="tweet-quote">
          tweet quote
        </button>

      </div>
    </div>
  );
}

export default App;
