import React from 'react';
// import './chat.css';

export default class Chat extends React.Component {
  renderChatEvent(event, index) {
    let name = this.props.participants.find(item => item.id === event.participantId).name;
    let content = '';
    switch (event.type) {
      case 'thumbs-up':
        content += 'gave a thumbs up';
        break;
      case 'thumbs-down':
        content += 'gave a thumbs down';
        break;
      case 'raise-hand':
        content += 'raised their hand';
        break;
      case 'clap':
        content += 'clapped';
        break;
      case 'join':
        content += 'joined.';
        break;
      case 'leave':
        content += 'left';
        break;
      case 'join-stage':
        content += 'joined the stage';
        break;
      case 'leave-stage':
        content += 'left the stage';
        break;
    } 
    return (
      <li key={index} className="chatEvent">
        <span className="chat-event-name">{name} </span>
        <span className="chat-event-content">{content}</span>
      </li>
    )
  }


  renderMessageEvent(event, index) {
    let message = event.message;
    let time = new Date(event.time).toTimeString();
    let sender = this.props.participants.find(item => item.id === event.participantId);
    let name = sender.name;
    let avatar = sender.avatar;

    return (
      <li key={index} className="messageEvent">
        <div>
          <img src={avatar} alt="avatar" />
          <span>{name}</span>
          <time>{time}</time>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </li>
    );
  };
  render() {

    let events = this.props.events;
    let chatEvents = [];

    events.forEach((event, index) => {

      if (event.type === 'message') {
        chatEvents.push(this.renderMessageEvent(event, index));
      } else {
        chatEvents.push(this.renderChatEvent(event, index));
      }
    })

    return (
      <div className="Chat">
        <ul>
          {chatEvents}
        </ul>
        
      </div>
    );
  }
}