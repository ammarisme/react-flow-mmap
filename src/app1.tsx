import { ReactFlowProvider } from "reactflow";
import App from "./App";
import WebExplore from "./App/WebExplore/webexplore";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(
    {
        Auth: {
          region: 'us-east-2',
          userPoolId: 'us-east-2_syap5MmtY',
          userPoolWebClientId: '6o5kmfblnl8qhp5r1a0mbn2m08'
        }
      }      
);



// import { Auth } from 'aws-amplify';

// async function signIn() {
//     try {
//         const user = await Auth.signIn("ammar", "N3w3r@123");
//     } catch (error) {
//         console.log('error signing in', error);
//     }
// }

function App1({ signIn, user }:any){
    return (
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
  }

  export default withAuthenticator(App1)
  //export default App1