import React from 'react';
import { Info, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface IconProps {
  type: 'info' | 'warning' | 'success' | 'close';
  size?: number;
  className?: string;
  'aria-label'?: string;
}

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  close: X
};

export default function Icon({ type, size = 16, className = '', 'aria-label': ariaLabel }: IconProps) {
  const IconComponent = iconMap[type];
  
  return (
    <IconComponent 
      size={size} 
      className={`icon icon-${type} ${className}`}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    />
  );
}

// Export individual icons for direct use
export { Info, AlertTriangle, CheckCircle, X, Edit, Trash2 } from 'lucide-react'; 