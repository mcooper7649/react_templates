import React, { Component } from 'react';
import axios from 'axios';

class PictureApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
  }
  componentDidMount() {
    axios
      .get('https://source.unsplash.com/random')
      .then((response) => this.setState({ url: response.request.responseURL }));
  }

  handleClick = () => {
    axios
      .get('https://source.unsplash.com/random')
      .then((response) => this.setState({ url: response.request.responseURL }));
  };
  render() {
    return (
      <div>
        <img alt="" src={this.state.url}></img>
        <div>
          <button onClick={this.handleClick}>Click for a new image</button>
        </div>
      </div>
    );
  }
}

export default PictureApp;
