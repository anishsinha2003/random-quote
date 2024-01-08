import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ markdownText }) => {
  return (
    <div>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
