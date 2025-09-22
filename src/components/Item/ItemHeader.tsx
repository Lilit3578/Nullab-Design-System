// src/components/Item/ItemHeader.tsx
import React, { forwardRef, HTMLAttributes } from 'react';

// Use HTMLAttributes for standard props, but note we won't use onClick.
interface ItemHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const ItemHeader = forwardRef<HTMLDivElement, ItemHeaderProps>(({
  children,
  className = '',
  leading,
  trailing,
  ...rest
}, ref) => {
  const baseClasses = `
    group flex items-center gap-2 
    px-4 py-2 
    body whitespace-nowrap 
  `;

  return (
    <div 
      ref={ref}
      className={`${baseClasses} ${className}`} 
      {...rest}
    >
      {leading && (
        <div className="flex-shrink-0">
          {leading}
        </div>
      )}
      <div className="flex-grow">{children}</div>
      {trailing && (
        <div className="flex-shrink-0">
          {trailing}
        </div>
      )}
    </div>
  );
});

ItemHeader.displayName = 'ItemHeader';