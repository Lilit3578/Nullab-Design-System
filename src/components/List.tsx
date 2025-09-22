import React from 'react';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List: React.FC<ListProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {children}
    </div>
  );
};

export default List;