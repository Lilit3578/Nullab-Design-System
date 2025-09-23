Hi there - here's a breakdown of how to use nullab-design-system in your project.

---

````markdown
# nullab-design-system

A comprehensive React design system with Tailwind CSS integration, providing reusable UI components and custom Tailwind utilities and theme extensions.

---

## Installation

Install the package and its peer dependencies in your project:

```bash
npm install nullab-design-system react react-dom
# or
yarn add nullab-design-system react react-dom
````

Make sure you have Tailwind CSS set up in your consuming project.

---

## Usage

### 1. Importing Components

You can import and use components directly from `nullab-design-system`:

```tsx
import { Button, Combobox, Icon } from 'nullab-design-system';

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

---

### 2. Importing CSS & Tailwind Integration

To use the design system's styles and Tailwind utilities correctly, follow these steps:

#### a. Import the CSS in your main entry point

Add the following import in your app's entry file (e.g., `src/main.tsx` or `src/index.tsx`):

```tsx
import 'nullab-design-system/styles'; // Imports the compiled design system CSS
import './index.css';                  // Your main Tailwind CSS entry file
```

#### b. Setup your Tailwind config to extend design system styles

Extend your consuming project's `tailwind.config.js` with the design system's Tailwind config:

```js
// tailwind.config.js

const designSystemConfig = require('nullab-design-system/tailwind');

module.exports = {
  ...designSystemConfig,

  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/nullab-design-system/dist/**/*.{js,ts,jsx,tsx}',
    ...designSystemConfig.content,
  ],

  theme: {
    ...designSystemConfig.theme,
    extend: {
      ...designSystemConfig.theme?.extend,
      // Your custom extensions here (optional)
    },
  },

  plugins: [
    ...(designSystemConfig.plugins || []),
    // Your custom plugins here (optional)
  ],
};
```

#### c. Your `src/index.css` should include:

```css
@import "nullab-design-system/styles";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

This setup imports the design system CSS first, then loads Tailwind base, components, and utilities.

---

### 3. Using Tailwind CSS Classes & Design System Theme

The design system provides additional Tailwind theme extensions such as custom colors and fonts.

You can use them directly in your components, for example:

```tsx
export default function Example() {
  return (
    <div className="h1">
      This div uses design system typography!
    </div>
  );
}
```

Some theme extensions available:


* **Fonts:**

  * `font-serif`
  * `font-sans`
  * `font-mono`

* **Utilities:**

  * `.h0`, `.h1`, `.body`, `.label`, etc., as defined in the design system Tailwind config.

---

## Development

* Build JavaScript components:

  ```bash
  npm run build:js
  ```

* Build CSS:

  ```bash
  npm run build:css
  ```

* Full build (JS + CSS):

  ```bash
  npm run build
  ```

---



## License

MIT License © Nullab Ltd

---

## Support

If you encounter any issues, please open an issue on the repository or contact us at [lilit@nullab.io](mailto:lilit@nullab.io).


