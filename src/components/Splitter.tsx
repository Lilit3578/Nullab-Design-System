import React from 'react';

type SplitterVariant = 'horizontal' | 'vertical';

interface SplitterProps {
  className?: string;
  variant?: SplitterVariant;
}

const Splitter: React.FC<SplitterProps> = ({
  className = '',
  variant = 'horizontal',
}) => {
  const variantStyles =
    variant === 'vertical'
      ? 'w-px h-full'
      : 'h-px w-full';

  return (
    <div
      className={`
        ${variantStyles} 
        bg-ink-300 dark:bg-ink-800 
        ${className}
      `}
    />
  );
};

export default Splitter;