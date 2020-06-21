import React from 'react'
import Message from './Message';

class MessageList extends React.Component{
    render() {
        return(
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    console.log(message.time);
                    return(                     
                        <Message key={index} time={message.time} text={message.text}/>
                    )
                })}
            </div>
        )
    }
}

export default MessageList