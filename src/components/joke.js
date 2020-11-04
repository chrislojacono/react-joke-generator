import React, { Component } from 'react';

class Joke extends Component {
  punchline = () => {
    <h4 class='m-md'>{this.props.punchline}</h4>;
  };

  state = {
    punchline: [],
  };

  punchline = () => {
    this.setState({
      punchline: this.props.joke.punchline,
    });
  }

  render() {
    const { joke } = this.props;

    return (
      <div class='card mx-auto'>
        <div class='card-body'>
          <p class='card-text'>{joke.setup}</p>
          <button
            href='#'
            id='punchline'
            onClick={this.punchline}
            class='btn btn-primary'
          >
            Click for Punchline
          </button>
          <div id='punchlineArea' className='punchlineArea'>{this.state.punchline}</div>
        </div>
      </div>
    );
  }
}

export default Joke;
