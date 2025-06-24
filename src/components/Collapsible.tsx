import React, { useState } from 'react';
import Icon from './Icon';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="section">
      <button 
        className="section-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="section-icon">
          {isOpen ? <Icon type="chevron-down" size={20} /> : <Icon type="chevron-right" size={20} />}
        </span>
        <span className="section-title">{title}</span>
      </button>
      {isOpen && (
        <div 
          className="section-content"
          id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
          role="region"
          aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface CollapsibleSubsectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const CollapsibleSubsection: React.FC<CollapsibleSubsectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button 
        className="subsection-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`subsection-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="subsection-icon">
          {isOpen ? <Icon type="chevron-down" size={16} /> : <Icon type="chevron-right" size={16} />}
        </span>
        <span className="subsection-title">{title}</span>
      </button>
      {isOpen && (
        <div 
          className="subsection-content"
          id={`subsection-${title.replace(/\s+/g, '-').toLowerCase()}`}
          role="region"
          aria-labelledby={`subsection-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}; 