import React, { useState, useEffect } from 'react';
import * as marked from 'marked';
import './App.css';

const App = () => {
  const [preview, setPreview] = useState("")
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    const html = marked.parse(markdown, { breaks: true });
    setPreview(html);
  }, [markdown]);
  const ReactMarkdown = require('react-markdown')
  return (
    <div className="app">
      <div className="editor-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          placeholder="Enter your Markdown here..."
        />
      </div>
      <div
        id="preview"
        className="preview-container"
      >
        <ReactMarkdown source={markdown}/>
      </div>
    </div>
  );
};

export default App;
