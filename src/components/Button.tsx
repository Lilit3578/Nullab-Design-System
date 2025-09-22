// src/components/Button.tsx
import React from 'react';
import Icon, { IconName } from './Icon';
import Tooltip, { TooltipPosition } from './Tooltip'; 

interface ButtonProps {
  children?: React.ReactNode;
  // This is the corrected line
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'text' | 'icon';
  className?: string;
  disabled?: boolean;
  icon?: IconName;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
}

const buttonVariants = {
  primary:
    'bg-ink-1000 text-ink-0 border border-ink-1000 hover:bg-ink-900',
  secondary:
    'bg-ink-0 text-ink-1000 border border-ink-1000 hover:bg-ink-200',
  accent:
    'bg-system-primary text-ink-0 border border-system-primary hover:bg-system-primary_hover dark:text-ink-1000',
  danger:
    'bg-system-danger text-ink-0 border border-system-danger hover:bg-system-danger_hover dark:text-ink-1000',
  text:
    'bg-transparent text-ink-1000 hover:bg-ink-200 dark:hover:bg-ink-800',
  icon:
    'bg-transparent text-ink-1000 hover:bg-ink-200 dark:hover:bg-ink-800',
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled, 
  icon,
  tooltip,
  tooltipPosition
}) => {
  const commonStyles = 'inline-flex items-center justify-center gap-1 transition-colors duration-200 ease-in-out';
  const standardButtonStyles = 'h-10 px-6 py-3 label rounded-full';
  const iconButtonStyles = 'h-7 w-7 p-2 rounded-lg text-ink-700 hover:text-ink-1000';

  const baseStyles = variant === 'icon' 
    ? `${commonStyles} ${iconButtonStyles}` 
    : `${commonStyles} ${standardButtonStyles}`;

  const conditionalStyles = disabled
    ? 'bg-ink-400 text-ink-800 cursor-not-allowed'
    : buttonVariants[variant] || buttonVariants.primary;

  const buttonElement = (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${conditionalStyles} ${className}`}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );

  if (tooltip) {
    return (
      <Tooltip message={tooltip} position={tooltipPosition}>
        {buttonElement}
      </Tooltip>
    );
  }

  return buttonElement;
};

export default Button;