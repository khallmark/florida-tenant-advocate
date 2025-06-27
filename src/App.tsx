import { useState, useEffect } from 'react';
import './style.css';
import Rubric from './pages/Rubric';
import Timeline from './pages/Timeline';
import StatutePage from './pages/StatutePage';

type Page = 'rubric' | 'timeline' | 'statutes';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    try {
      const saved = localStorage.getItem('orlando-tenant-current-page');
      return (saved === 'rubric' || saved === 'timeline' || saved === 'statutes') ? saved : 'rubric';
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
    <div className="app-container">
      <nav className="nav">
        <div className="nav-container">
          <h1>Florida Tenant Law Defense Tool - Not Legal Advice</h1>
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
            <button 
              className={`nav-button ${currentPage === 'statutes' ? 'active' : ''}`}
              onClick={() => setCurrentPage('statutes')}
            >
              Florida Statutes
            </button>
            <a 
              href="https://github.com/khallmark/florida-tenant-advocate" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View source code on GitHub"
              className="github-nav-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <div className="beta-banner">
        <div className="beta-banner-content">
          <div className="beta-badge">
            ⚠️ BETA VERSION
          </div>
          <div className="beta-disclaimer">
            <strong>THIS IS NOT LEGAL ADVICE</strong> - This tool is in beta testing and provides general information only. 
            Laws change frequently and this information may be outdated or incorrect. 
            <strong>ALWAYS CONSULT A LICENSED ATTORNEY</strong> for legal advice specific to your situation.
          </div>
        </div>
      </div>

      <main className="main-content">
        {currentPage === 'rubric' && <Rubric />}
        {currentPage === 'timeline' && <Timeline />}
        {currentPage === 'statutes' && <StatutePage />}
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>
            <strong>Legal Disclaimer:</strong> This tool provides general legal information only and is not a substitute for professional legal advice. 
            For specific legal questions, please consult with a qualified attorney licensed in Florida.
          </p>
        </div>
      </footer>
    </div>
  );
} 