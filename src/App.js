import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Body } from './Body';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, error, user} = useAuth0();
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Oops... {error.message}</div>;
    }
    if(isAuthenticated) {
      console.log(user)
    return (
    <div className="App">
      <header className="App-header">
        <Navbar user={user.name} isAuthenticated={true}/>
      </header>
      <Body />
      <Footer />
    </div>
  )
} else {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar isAuthenticated={false} />
      </header>
      <Body />
      <Footer />
    </div>
  );
}
}
export default App;
