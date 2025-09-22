// src/components/Form/Input.tsx
import React from 'react';

// We'll extend the native input props for maximum flexibility
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      type="text"
      className={`
        // Base styles from your design
        w-full py-2 px-4 rounded-[4px] border-none outline-none
        body
        
        // Background and border
        bg-ink-0 text-ink-1000
        ring-1 ring-ink-400 focus:ring-1 focus:ring-offset- focus:ring-system-primary
        
        // Placeholder and caret styles
        placeholder:text-ink-700
        
        // Optional class for user overrides
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;