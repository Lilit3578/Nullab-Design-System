import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

interface IconProps extends Omit<LucideProps, 'size'> {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const LucideIcon = LucideIcons[name] as React.ComponentType<LucideProps>;
  
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className || ''}`}>
      <LucideIcon size={16} {...props} />
    </div>
  );
};

export default Icon;