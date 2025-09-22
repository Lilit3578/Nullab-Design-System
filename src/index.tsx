import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Make sure this path is correct

// Get the root element from your index.html
const container = document.getElementById('root');

// If the container exists, create a root and render the app.
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Log an error if the root element isn't found, for debugging.
  console.error("Root element not found. Please ensure your index.html has a div with id='root'.");
}