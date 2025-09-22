// src/components/Item/Item.tsx
import React from 'react';

// This is the corrected interface
interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>(({
  children,
  leading,
  trailing,
  className = '',
  ...rest
}, ref) => {
  const baseClasses = `
    group/item flex items-center gap-3 h-10 pl-4 pr-1.5 rounded-lg body
    transition-colors duration-200 cursor-pointer
    hover:bg-ink-200
  `;

  const trailingClasses = 'opacity-0 group-hover/item:opacity-100 transition-opacity duration-200';

  return (
    // This will now work without type errors
    <div 
      ref={ref}
      className={`${baseClasses} ${className}`} 
      {...rest}
    >
      {leading && <div className="flex-shrink-0">{leading}</div>}

      <div className="flex-grow overflow-hidden whitespace-nowrap text-ellipsis">
        {children}
      </div>
      
      {trailing && (
        <div className={`flex-shrink-0 ${trailingClasses}`}>
          {trailing}
        </div>
      )}
    </div>
  );
});

Item.displayName = 'Item';