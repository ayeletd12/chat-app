import React from 'react'

class ChangeUserForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({name: event.target.value});        
      }

      handleSubmit(event){

        event.preventDefault();

        this.props.changeUserName(this.state.name)
        this.setState({name: ''});
    }
  

    render() {
        return(
            <div className="change-user-form">
                <form 
                onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        placeholder="Type your new user name"
                        value={this.state.name} 
                        type="text"
                        ></input>

                    <button >Confirm</button>
                </form>
            </div>
            
        )
    }
}

export default ChangeUserForm