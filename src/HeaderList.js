import React, { Component } from 'react';
import './App.css';

const headerContainer = {backgroundColor: 'black', height: '100vh', width: '20vw',}

class HeaderList extends Component {

  whichChat = (user) => this.setState({seeChat: user.id });
  
  render() {
    
    console.log(this.state)
    
    return (
      <div>
        <div style={headerContainer}>
          <ul style={{color: 'white'}}>            

            {
              this.props.users.map(user =>
              <li onClick={() => this.whichChat(user)}>{user.name}</li>)
            }
            
          </ul>
        </div>
      </div>
    );
  }

  static mapStateToProps = (state)=>({
    users: state.users,
    messages: state.messages,
  })
  
  static mapDispatchToProps = {
    sampleAction: ()=> ({ type: 'someActionType' }),
  }
}

export default HeaderList;
