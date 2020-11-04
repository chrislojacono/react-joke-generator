import React, { Component } from 'react';
import ReactDom from 'react-dom';
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
    return (
       <>
        <button
          type='button'
          id='giveMeAJoke'
          className='btn btn-primary btn-lg'
          onClick={this.getAJoke}
        >
          Get a Joke
        </button>
        <Joke key={joke.id} joke={joke}></Joke>
      </>
    );
  }
}

export default JokeSection;
