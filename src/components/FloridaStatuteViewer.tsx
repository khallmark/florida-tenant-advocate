import React, { useState, useEffect } from 'react';
import StatuteContent from './StatuteContent';

interface Statute {
  id: string;
  title: string;
}

const FloridaStatuteViewer: React.FC = () => {
  const [statuteIndex, setStatuteIndex] = useState<Statute[]>([]);
  const [selectedStatuteId, setSelectedStatuteId] = useState<string | null>(null);
  const [statuteContent, setStatuteContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const response = await fetch('/laws/83_index.md');
        const text = await response.text();
        const statutes: Statute[] = text
          .split('\n')
          .filter(line => line.startsWith('- ['))
          .map(line => {
            const match = line.match(/- \[(.*?)]\((.*?)\)/);
            if (match) {
              const id = match[2].replace('./', '').replace('.md', '');
              const title = match[1];
              return { id, title };
            }
            return null;
          })
          .filter((s): s is Statute => s !== null);
        setStatuteIndex(statutes);
      } catch (e) {
        console.error("Failed to load statute index", e);
        setError("Could not load statute index. Please try refreshing the page.");
      }
    };
    fetchIndex();
  }, []);

  useEffect(() => {
    if (selectedStatuteId) {
      const fetchStatute = async () => {
        try {
          const response = await fetch(`/laws/${selectedStatuteId}.md`);
          if (response.ok) {
            const text = await response.text();
            setStatuteContent(text);
          } else {
            setStatuteContent(`Failed to load statute: ${selectedStatuteId}`);
          }
        } catch (error) {
          console.error('Error fetching law:', error);
          setStatuteContent(`Failed to load statute: ${selectedStatuteId}`);
        }
      };
      fetchStatute();
    }
  }, [selectedStatuteId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="statute-viewer-container">
      <div className="statute-sidebar">
        <ul className="statute-list">
          {statuteIndex.map(({ id, title }) => (
            <li 
              key={id} 
              className={`statute-list-item ${selectedStatuteId === id ? 'selected' : ''}`}
              onClick={() => setSelectedStatuteId(id)}
            >
              <span className="statute-id">{id.replace('_', '.')}</span>
              <span className="statute-title">{title.split(' ').slice(1).join(' ')}</span>
            </li>
          ))}
        </ul>
      </div>
      <StatuteContent content={statuteContent} />
    </div>
  );
};

export default FloridaStatuteViewer; 