// src/components/Combobox.tsx
import React, { useState, createContext, useContext } from 'react';
import { Combobox as HeadlessCombobox } from '@headlessui/react';
import Icon from './Icon';

export interface ComboboxOption {
  id: number | string;
  name: string;
}

const ComboboxContext = createContext({ query: '' });

// A unique symbol to identify our action item's value
const ACTION_ID = '__ACTION_ID__';

// --- Main Combobox Component ---

interface ComboboxProps {
  children: React.ReactNode;
  value: ComboboxOption | null;
  onChange: (item: ComboboxOption | null) => void;
  placeholder?: string;
  onCreateNew?: (query: string) => void; // We still use this to pass the creation function
}

const Combobox = ({ children, value, onChange, placeholder, onCreateNew }: ComboboxProps) => {
  const [query, setQuery] = useState('');

  // Wrapper for the onChange handler to intercept actions
  const handleChange = (selectedItem: ComboboxOption | null) => {
    if (selectedItem && selectedItem.id === ACTION_ID) {
      // If the action item was selected, call onCreateNew with the current query
      onCreateNew?.(query);
    } else {
      // Otherwise, it's a regular item, so call the original onChange
      onChange(selectedItem);
    }
  };

  return (
    <HeadlessCombobox value={value} onChange={handleChange}>
      <div className="relative">
        <HeadlessCombobox.Input
          className={`
            w-full h-10 pl-4 pr-10 rounded-sm border-none outline-none body
            bg-ink-0 text-ink-1000
            ring-1 ring-ink-400 focus:ring-1 focus:ring-system-primary
            placeholder:text-ink-700
          `}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item: ComboboxOption) => item?.name || ''}
          placeholder={placeholder || 'select an option...'}
        />
        <HeadlessCombobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Icon name="ChevronDown" className="text-ink-700" />
        </HeadlessCombobox.Button>
        
        <ComboboxContext.Provider value={{ query }}>
          <HeadlessCombobox.Options className={`
            absolute mt-2 max-h-60 w-full rounded-sm p-2
            bg-ink-0 dark:bg-ink-900 z-10
            ring-1 ring-ink-300 dark:ring-ink-800 focus:outline-none
          `}>
             {children}
          </HeadlessCombobox.Options>
        </ComboboxContext.Provider>
      </div>
    </HeadlessCombobox>
  );
};


// --- Item Sub-component (Unchanged) ---
interface ComboboxItemProps {
  value: ComboboxOption;
  children: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}
const ComboboxItem = ({ value, children, leading, trailing }: ComboboxItemProps) => {
  const { query } = useContext(ComboboxContext);
  const isVisible = query === '' || value.name.toLowerCase().includes(query.toLowerCase());
  
  if (!isVisible) return null;

  return (
    <HeadlessCombobox.Option key={value.id} value={value} className={({ active }) => `group flex gap-4 items-center rounded-lg h-10 px-4 py-2 body cursor-pointer transition-colors duration-200 ${active ? 'bg-ink-200' : 'text-ink-1000'}`}>
      <>
        {leading && <div className="flex-shrink-0">{leading}</div>}
        <div className="flex-grow truncate">{children}</div>
        {trailing && <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">{trailing}</div>}
      </>
    </HeadlessCombobox.Option>
  );
};
ComboboxItem.displayName = 'ComboboxItem';


// --- Splitter Sub-component (Unchanged) ---
const ComboboxSplitter = () => <div className="h-px my-2 bg-ink-200" role="separator" />;
ComboboxSplitter.displayName = 'ComboboxSplitter';


// --- NEW: Action Sub-component ---
interface ComboboxActionProps {
  children: React.ReactNode;
  leading?: React.ReactNode;
}
const ComboboxAction = ({ children, leading }: ComboboxActionProps) => {
  const { query } = useContext(ComboboxContext);
  const displayText = query ? `${children} "${query}"` : children;

  return (
    <HeadlessCombobox.Option
      value={{ id: ACTION_ID, name: displayText as string }}
      className={({ active }) => `group flex gap-4 items-center rounded-lg h-10 px-4 py-2 body cursor-pointer transition-colors duration-200 ${active ? 'bg-ink-200' : 'text-ink-1000'}`}
    >
      <>
        {leading && <div className="flex-shrink-0">{leading}</div>}
        <div className="flex-grow truncate">{displayText}</div>
      </>
    </HeadlessCombobox.Option>
  );
};
ComboboxAction.displayName = 'ComboboxAction';


// Attach all sub-components
Combobox.Item = ComboboxItem;
Combobox.Splitter = ComboboxSplitter;
Combobox.Action = ComboboxAction;

export default Combobox;