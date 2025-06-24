import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface StatuteContentProps {
  content: string;
}

const StatuteContent: React.FC<StatuteContentProps> = ({ content }) => {
  if (!content) {
    return (
      <div className="statute-content-panel">
        <p>Select a statute from the list to view its content.</p>
      </div>
    );
  }

  return (
    <div className="statute-content-panel">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default StatuteContent; 