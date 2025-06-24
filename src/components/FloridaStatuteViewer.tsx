import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronRight } from 'lucide-react';

interface Statute {
  title: string;
  path: string;
}

const FloridaStatuteViewer: React.FC = () => {
  const [statutes, setStatutes] = useState<Statute[]>([]);
  const [selectedStatute, setSelectedStatute] = useState<Statute | null>(null);
  const [statuteContent, setStatuteContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [indexError, setIndexError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const response = await fetch('/laws/83_index.md');
        if (!response.ok) {
          throw new Error('Failed to fetch statute index');
        }
        const text = await response.text();
        const lines = text.split('\n');
        const parsedStatutes: Statute[] = lines
          .map(line => {
            const match = line.match(/- \[(.+?)\]\((.+?)\)/);
            if (match) {
              return { title: match[1], path: match[2] };
            }
            return null;
          })
          .filter((s): s is Statute => s !== null);
        setStatutes(parsedStatutes);
      } catch (e) {
        setIndexError('Could not load the Florida Statute index. The content may be temporarily unavailable.');
        console.error(e);
      }
    };

    fetchIndex();
  }, []);

  const handleSelectStatute = async (statute: Statute) => {
    setSelectedStatute(statute);
    setIsLoading(true);
    setError(null);
    setStatuteContent('');

    try {
      const response = await fetch(statute.path.replace('./', '/laws/'));
      if (!response.ok) {
        throw new Error(`Failed to fetch ${statute.title}`);
      }
      const text = await response.text();
      setStatuteContent(text);
    } catch (e) {
      setError(`Could not load statute: ${statute.title}. Please try again.`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="statute-viewer">
      <div className="statute-sidebar">
        <h4>Florida Statutes Ch. 83</h4>
        {indexError && <p className="error-message">{indexError}</p>}
        <ul>
          {statutes.map(statute => (
            <li key={statute.path}>
              <button 
                onClick={() => handleSelectStatute(statute)}
                className={selectedStatute?.path === statute.path ? 'active' : ''}
              >
                <span>{statute.title.split(' ')[0]}</span>
                <span className="statute-title-text">{statute.title.substring(statute.title.indexOf(' ') + 1)}</span>
                <ChevronRight size={16} className="statute-arrow" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="statute-content">
        {isLoading && <div className="loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {!isLoading && !error && selectedStatute && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{statuteContent}</ReactMarkdown>
        )}
        {!isLoading && !selectedStatute && (
          <div className="placeholder-message">
            <p>Select a statute from the list to view its content.</p>
            <p>This information is provided for educational purposes and is not a substitute for legal advice.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloridaStatuteViewer; 