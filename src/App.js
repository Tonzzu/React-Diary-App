import React from 'react';
import './App.css';
import DiaryForm from './DiaryForm';
import Container from '@material-ui/core/Container'

class App extends React.Component {

  render() {
    return (
      <Container className="App">
        <h1 className="main-header">React Diary App</h1>
        <DiaryForm />
      </Container>
    )
  }
}

export default App;
