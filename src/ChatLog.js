import React, { Component } from 'react';


class ChatLog extends Component {

  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
  }

  render() {

    return (

      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }

}

export default ChatLog;
