
import React from "react";
import MessageList from "./components/MessageList"
import ChangeUserForm from "./components/ChangeUserForm"
import SendMessageForm from "./components/SendMessageForm"


function getTime() {
  return new Date().toLocaleString().replace(",","").replace(/:.. /," ");
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      userName: "Ayelet",
      changeUserpanelshowhide: false, //at first chat is display
      buttonText: "Change User"
    };
    this.user = {
      name: "Ayelet"
    };
    

    this.sendMessage = this.sendMessage.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
  }

  sendMessage (currentText) {
    var message =  [
      {
        time: getTime(),
         text: currentText
        }
      ]
    this.setState({
      messages: [ ...this.state.messages, ...message]
    })
  }

  changeUserName (newName) {
    this.setState({
      userName:  newName
    })
  }

  hideComponent(){
    if (!this.state.changeUserpanelshowhide){ 
      this.setState({buttonText: "Chat"})
    } 
    else{
      this.setState({buttonText: "Change User"})
    }
    this.setState({changeUserpanelshowhide: !this.state.changeUserpanelshowhide})
  }
  
    render () {
      const flag = this.state.changeUserpanelshowhide

        return(
          <div id="app" className="app">
            
            <div className="user-card">
                  <h3>{'Hello '.concat(this.state.userName)}</h3>
                  <button className="change-user-button" onClick={this.hideComponent}>{this.state.buttonText}</button>
                  
              </div>
              {!flag &&
              <div className="chat-card">
                  <SendMessageForm sendMessage={this.sendMessage}/>
                  <MessageList messages={this.state.messages.sort(
                      (a,b)=>a.getTime()-b.getTime())

                  }/>
              </div>
              }
              {flag &&
              <div className="change-name-card" >
                  <ChangeUserForm changeUserName={this.changeUserName}/>
              </div>  
            } 
          </div>
        );

      }
    }

export default App;