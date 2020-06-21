import React from "react"

class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: props.userName,
        time:  props.time,
        text: props.text
      };

    }
    render() {  
          return (
            <div className="message">
                <div className="message-username">{this.state.time}</div>
                <div className="message-text">{this.state.text}</div>   

            </div>
          )
      }
  }

  export default Message;