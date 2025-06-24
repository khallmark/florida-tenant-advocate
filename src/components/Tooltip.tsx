import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export default function Tooltip({ content, children, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLSpanElement>(null);

  const updatePosition = () => {
    if (containerRef.current && isVisible) {
      const rect = containerRef.current.getBoundingClientRect();
      const tooltipWidth = 250; // max-width from CSS
      const tooltipHeight = 60; // approximate height
      
      // Calculate position to keep tooltip on screen
      let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
      let top = rect.top - tooltipHeight - 10; // 10px gap above element
      
      // Adjust if tooltip would go off screen
      if (left < 10) left = 10;
      if (left + tooltipWidth > window.innerWidth - 10) {
        left = window.innerWidth - tooltipWidth - 10;
      }
      
      // If tooltip would go above viewport, show below instead
      if (top < 10) {
        top = rect.bottom + 10;
      }
      
      setPosition({ top, left });
    }
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <>
      <span 
        ref={containerRef}
        className={`tooltip-container ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </span>
      {isVisible && (
        <div 
          className="tooltip-content-fixed"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`
          }}
        >
          {content}
        </div>
      )}
    </>
  );
} 