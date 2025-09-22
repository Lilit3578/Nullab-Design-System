// src/index.ts

// The entry point should only re-export components and types from their source files.

// Import your global styles first.
import './styles/global.css';

// Component exports
export { default as Button } from './components/Button';
export { default as Combobox } from './components/Combobox';
export { default as Icon } from './components/Icon';
export { default as Input } from './components/Form/Input';
export { default as List } from './components/List';
export { default as Splitter } from './components/Splitter';
export { default as Tooltip } from './components/Tooltip';
export { Item } from './components/Item/Item';
export {ItemHeader} from './components/Item/ItemHeader';
export type { ComboboxOption } from './components/Combobox';
export type { IconName } from './components/Icon';