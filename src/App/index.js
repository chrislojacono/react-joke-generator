import React from 'react';
import JokeSection from '../components/jokeSection';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src="https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png" alt="logo"/>
        <JokeSection />
      </div>
    );
  }
}

export default App;
