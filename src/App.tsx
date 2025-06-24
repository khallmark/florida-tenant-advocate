import { useState, useEffect } from 'react';
import './style.css';
import Rubric from './Rubric';
import Timeline from './Timeline';

type Page = 'rubric' | 'timeline';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    try {
      const saved = localStorage.getItem('orlando-tenant-current-page');
      return (saved === 'rubric' || saved === 'timeline') ? saved : 'rubric';
    } catch {
      return 'rubric';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('orlando-tenant-current-page', currentPage);
    } catch {
      // Silently fail if localStorage is unavailable
    }
  }, [currentPage]);

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <h1>Orlando Tenant Advocate</h1>
          <div className="nav-links">
            <button 
              className={`nav-button ${currentPage === 'rubric' ? 'active' : ''}`}
              onClick={() => setCurrentPage('rubric')}
            >
              Eviction Rubric
            </button>
            <button 
              className={`nav-button ${currentPage === 'timeline' ? 'active' : ''}`}
              onClick={() => setCurrentPage('timeline')}
            >
              Timeline Editor
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'rubric' && <Rubric />}
        {currentPage === 'timeline' && <Timeline />}
      </main>

      <footer>
        <p>
          <strong>Legal Disclaimer:</strong> This tool provides general legal information only and is not a substitute for professional legal advice. 
          For specific legal questions, please consult with a qualified attorney licensed in Florida.
        </p>
        <p>
          Orlando Tenant Advocate Tool | Based on Florida Statutes Chapter 83 | 
          For assistance, contact the <a href="https://cflls.org/" target="_blank" rel="noopener noreferrer">Central Florida Legal Society</a>
        </p>
      </footer>
    </div>
  );
} 