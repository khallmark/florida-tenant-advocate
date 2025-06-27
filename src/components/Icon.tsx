import { Info, AlertTriangle, CheckCircle, X, ChevronDown, ChevronRight, Edit, Trash2, Scale } from 'lucide-react';

interface IconProps {
  type: 'info' | 'warning' | 'success' | 'close' | 'chevron-down' | 'chevron-right' | 'edit' | 'trash' | 'libra';
  size?: number;
  className?: string;
  'aria-label'?: string;
}

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  close: X,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  edit: Edit,
  trash: Trash2,
  libra: Scale,
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
export { Info, AlertTriangle, CheckCircle, X, Edit, Trash2, ChevronDown, ChevronRight, Scale } from 'lucide-react'; 