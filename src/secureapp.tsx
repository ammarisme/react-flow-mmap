import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig)

function SecureApp({ signOut, user }:any) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(SecureApp);