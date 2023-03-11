import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactFlowProvider } from 'reactflow';

import App from './App';

// all styles for this example app are in the index.css file to keep it as simple as possible
import './index.css';
import WebExplore from './App/WebExplore/webexplore'

// we need to wrap our app in the ReactFlowProvider to be able to use the React Flow hooks in our App component
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<>

  <div style={{width:"25vw",float:"left", height:"100%", backgroundColor:"gray"}}>
  <WebExplore></WebExplore>
  </div>
  <div style={{width:"75vw",float:"right", height:"100%"}}>
  <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </div>
</>

);
