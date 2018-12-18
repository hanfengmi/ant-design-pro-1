import React, { Component } from 'react';

class Test extends Component {
  changeAutoLogin = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div>
        <div onClick={this.changeAutoLogin}>pppppp</div>
      </div>
    );
  }
}

export default Test;
