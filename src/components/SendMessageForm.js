import React from 'react'

class SendMessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            showHid: true
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        //alert('new sumbit: ' + event.target.value);
        let newMessage = event.target.value
        let button = document.querySelector('button')
        if (newMessage.length >= 140){         
            button.disabled = true
        }
        else {
            button.disabled = false
            this.setState({message: newMessage});
        }
        
      }

      handleSubmit(event){
     
        event.preventDefault();
        console.log(this.state.message)
        this.props.sendMessage(this.state.message)
        this.setState({message: ''});
    }

    render() {
        return(
            <div className="message-form">
                <form 
                onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="Type your message and hit Send"
                        value={this.state.message} 
                        ></input>
                    <button >Send</button>
                </form>
            </div>
        )
    }
}

export default SendMessageForm