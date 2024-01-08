import React, { useState } from 'react';
import Markdown from './Markdown';

const App = () => {
  const [markdownText, setMarkdownText] = useState('# Hello, Markdown!');

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div>
      <h1>Markdown Interpreter</h1>
      <div className="editor-container">
      <textarea
        id="editor"
        value={markdownText}
        onChange={handleInputChange}
        rows={10}
        cols={50}
      />
      </div>
      <div
        id="preview"
        className="preview-container"
      >
      <Markdown markdownText={markdownText} />
      </div>
    </div>
  );
};

export default App;

