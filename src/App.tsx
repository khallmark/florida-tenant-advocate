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
          <p>
            Orlando Tenant Advocate Tool | Based on Florida Statutes Chapter 83 | 
            For assistance, contact the <a href="https://cflls.org/" target="_blank" rel="noopener noreferrer">Central Florida Legal Society</a>
          </p>
        </div>
      </footer>
    </div>
  );
} 