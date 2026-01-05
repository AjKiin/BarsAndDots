// Import components and support libraries
import { BrowserRouter } from 'react-router-dom';

// Import the various pages
import Navigation from         './Navigation/Navigation.js';

// Setup site traffic analytics from Vercel
import { Analytics } from "@vercel/analytics/react"

export default function App(){

  return ( 
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Analytics />
      </div>
    </BrowserRouter>
    );
}


