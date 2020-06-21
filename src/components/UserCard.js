import React from 'react'

class UserCard extends React.Component{
    constructor(props) {
        super(props);
        this.user = {
          valuse: this.props.user,
        };
    }

    render() {
        return(
            <div className="user-card">
                <h3>{'Hello '.concat(this.user)}</h3>
            </div>
        )
    }
}

export default UserCard