import Header from './components/Header';
// import Footer from './components/Footer';
// import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import { auth } from './services/firebase';
import { useState, useEffect } from 'react';




function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => setUser(user))
    return () => {
      unsubscribe();
    }
  }, []); 
  return (
    <div className="App">
        <Header user={user}/>
        <Main user={user}/> 

        {/* <Footer /> */}
    </div>
  );
}

export default App;
