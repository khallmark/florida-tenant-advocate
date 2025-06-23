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
    </div>
  );
} 