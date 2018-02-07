import React, { Component } from 'react';


class MessageBody extends Component {
  
  render() {
    
    return (
      <div>
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

export default MessageBody;
