
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets'
import Feed from './Feed';
import Login  from "./Login";
//
import { useStateValue } from './StateProviders'
function App() {
  //const user = null  //"chao zeng"
  // eslint-disable-next-line no-unused-vars
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
      { !user ? <h1> <Login /></h1> : (
        <>
          <><Header /><div className='app_body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div></>
        </>
      )} 
    
    </div>
  );
}

export default App;
