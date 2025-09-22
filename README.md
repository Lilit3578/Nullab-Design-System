# Nullab Design System

A comprehensive design system built with React and Tailwind CSS, providing consistent UI components and styling utilities.

## Installation

```bash
npm install @your-username/nullab-design-system
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom tailwindcss
```

## Setup

### 1. Tailwind Configuration

In your `tailwind.config.js`, extend the design system configuration:

```javascript
const designSystemConfig = require('@your-username/nullab-design-system/tailwind');

module.exports = {
  ...designSystemConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@your-username/nullab-design-system/dist/**/*.{js,mjs}",
    ...designSystemConfig.content,
  ],
  // You can override or extend any configuration here
};
```

### 2. Import Styles

Import the design system styles in your main CSS file or entry point:

```css
@import '@your-username/nullab-design-system/dist/styles.css';

/* Your CSS variables - customize as needed */
:root {
  --ink-0: #ffffff;
  --ink-100: #f8f9fa;
  --ink-200: #e9ecef;
  --ink-300: #dee2e6;
  --ink-400: #ced4da;
  --ink-500: #adb5bd;
  --ink-600: #6c757d;
  --ink-700: #495057;
  --ink-800: #343a40;
  --ink-900: #212529;
  --ink-1000: #000000;

  --system-primary: #3b82f6;
  --system-primary_hover: #2563eb;
  --system-danger: #ef4444;
  --system-danger_hover: #dc2626;
}

.dark {
  --ink-0: #000000;
  --ink-100: #111111;
  --ink-200: #1f1f1f;
  --ink-300: #2a2a2a;
  --ink-400: #383838;
  --ink-500: #4a4a4a;
  --ink-600: #666666;
  --ink-700: #888888;
  --ink-800: #b8b8b8;
  --ink-900: #e8e8e8;
  --ink-1000: #ffffff;
}
```

## Usage

```jsx
import { Button, Combobox, Icon } from '@your-username/nullab-design-system';

function App() {
  return (
    <div>
      <Button variant="primary" icon="Plus">
        Add Item
      </Button>
    </div>
  );
}
```

## Components

### Button
- Variants: `primary`, `secondary`, `danger`, `icon`
- Built-in tooltip support
- Icon integration with Lucide React

### Combobox
- Searchable dropdown with creation capabilities
- Custom option rendering
- Action items and separators

### Typography Utilities
- `.h0`, `.h1`, `.h2` - Heading styles
- `.body`, `.body-strong`, `.body-small` - Body text
- `.label` - Form labels and tags

## Typography

The design system includes custom font families:
- **Serif**: Instrument Serif
- **Sans**: Be Vietnam Pro  
- **Mono**: JetBrains Mono

Make sure to include these fonts in your project or update the configuration with your preferred fonts.


## License

MIT