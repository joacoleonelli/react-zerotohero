import React from 'react';
import Message from './Message'
import autoBind from 'react-autobind';
import samples from '../sample-data';

class ConversationPane extends React.Component{
  constructor(props) {
    super(props);
    autoBind(this);
  }
  loadConversationData(human){
    this.setState({conversation: samples.humans[human].conversations});
  }
  componentWillMount(){
    this.loadConversationData(this.props.params.human);
  }
  componentWillReceiveProps(nextProps){
    this.loadConversationData(nextProps.params.human);
  }
  renderMessage(val){
    return <Message who={val.who} text={val.text} key={val.time.getTime()} />;
  }
  render() {
    return (
      <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>{this.props.params.human}</h3>
        <div id="messages">
          {this.state.conversation.map(this.renderMessage)}
        </div>
      </div>
    )
  }
};

export default ConversationPane;
