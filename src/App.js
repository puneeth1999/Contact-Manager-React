import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header branding="Contact Manager"/>
        <div className='container'>
          < Contacts />
        </div>       
      </div>
    );
  }
}

export default App;