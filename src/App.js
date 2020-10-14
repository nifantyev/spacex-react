import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';


class App extends React.Component {
  render() {
    return (
      <>      
        <Header />
        <Main />
        <Features />
        <Footer />
      </>
    );  
  }
}

export default App;
