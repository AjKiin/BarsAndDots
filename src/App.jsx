// Import components and support libraries
import { BrowserRouter } from 'react-router-dom';

// Import the various pages
import Navigation from         './Navigation/Navigation.jsx';

// Setup site traffic analytics from Vercel
import { Analytics } from "@vercel/analytics/react"

function App(){

  return ( 
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Analytics />
      </div>
    </BrowserRouter>
    );
}

export default App
