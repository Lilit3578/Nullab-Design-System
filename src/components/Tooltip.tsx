// src/components/Tooltip.tsx
import React from 'react';

// Define the available positions for the tooltip.
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

// Define the shape of the component's props.
interface TooltipProps {
  message: string;
  children: React.ReactNode;
  position?: TooltipPosition; // Make the position prop optional.
}

const Tooltip: React.FC<TooltipProps> = ({ message, children, position = 'top' }) => {
  // Define CSS classes for each position.
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };
  const currentPositionClass = positionClasses[position];

  return (
    <div className="relative inline-block group/tooltip"> {/* Use a named group */}
      {children}
      <span className={`
        absolute
        px-3 py-1 rounded-full
        whitespace-nowrap
        opacity-0 group-hover/tooltip:opacity-100 group-focus/tooltip:opacity-100 {/* Target the named group */}
        transition-opacity duration-200 ease-in-out
        pointer-events-none

        // Themed styles
        bg-ink-1000 text-ink-0 body-small
        
        // Dynamic position class
        ${currentPositionClass}
      `}>
        {message}
      </span>
    </div>
  );
};

export default Tooltip;