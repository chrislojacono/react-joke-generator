import React, { Component } from 'react';
import getJokes from '../helpers/data/getJokes';
import Joke from './joke';

class JokeSection extends Component {
  state = {
    joke: [],
  };

  getAJoke = () => {
    getJokes().then((response) => {
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
          className='btn btn-primary btn-lg mainButton'
          onClick={this.getAJoke}
        >
          Get a Joke
        </button>
        {this.state.joke.id ? (<div>{jokeSection()}</div>) : <></>};
      </>
    );
  }
}

export default JokeSection;
