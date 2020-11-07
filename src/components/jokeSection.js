import React, { Component } from 'react';
import getJokes from '../helpers/data/getJokes';
import Joke from './joke';

class JokeSection extends Component {
  state = {
    joke: [],
  };

  getAJoke = (type) => {
    getJokes(type).then((response) => {
      this.setState({
        joke: response,
      });
    });
  };

  render() {
    const { joke } = this.state;
    const jokeSection = () => <Joke key={joke.id} joke={joke} />;
    return (
       <>
        <button
          type='button'
          id='giveMeAJoke'
          className='btn btn-lg generalJoke'
          onClick={() => { this.getAJoke('general'); }}
        >
          Get a Generic Joke
        </button>
        <button
          type='button'
          id='giveMeAJoke'
          className='btn btn-lg programmerButton'
          onClick={() => { this.getAJoke('programming'); }}
        >
          Get a Programmer Joke
        </button>
        <button
          type='button'
          id='giveMeAJoke'
          className='btn btn-lg programmerButton'
          onClick={() => { this.getAJoke('knock-knock'); }}>
          Get a Knock-Knock Joke
        </button>
        {this.state.joke.id ? (<div>{jokeSection()}</div>) : <></>}
      </>
    );
  }
}

export default JokeSection;
