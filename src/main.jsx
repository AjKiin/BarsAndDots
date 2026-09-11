// This is a very simple javascript that loads the App into the page

// Import components and support libraries
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App';

// This is the new way to do this in React 18, but not necessary
// const container = document.getElementById('index');
// const root = createRoot(container);
// root.render(<App />);

// Load the main app into the HTML element designated 'index'
// This is the old way, changed in React 18
// ReactDOM.render(<App />, document.getElementById('index'));

// Trying this particular way to render; links to the div with ID "root" in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
