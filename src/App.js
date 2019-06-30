import React from 'react';
import './App.css';
import DiaryForm from './DiaryForm';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Diary App</h1>
        <DiaryForm />
      </div>
    )
  }
}

export default App;
