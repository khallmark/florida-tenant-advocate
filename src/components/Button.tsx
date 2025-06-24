import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  children: React.ReactNode;
  as?: 'button' | 'span';
}

export default function Button({ 
  variant = 'primary', 
  size = 'medium', 
  icon, 
  children, 
  className = '', 
  as = 'button',
  ...props 
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    danger: 'btn-danger',
    ghost: 'btn-ghost'
  };
  const sizeClasses = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  const Component = as;

  return (
    <Component className={classes} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </Component>
  );
} 