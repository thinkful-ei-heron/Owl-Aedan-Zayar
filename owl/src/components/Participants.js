import React from 'react';
import './Participants.css';

export default class Participants extends React.Component {
    

    render() {
        let parti = this.props.part.map(item => {
            return (
            <li key={item.id} className = 'participants'>
                <img src={item.avatar} alt="Avatar"/>
                <div>
                    <p>{item.name}</p>
                    <span className ={`inSession${item.inSession}`}/>
                    <span className ={`onStage${item.onStage}`}/>
                </div>
            </li>);
        });
        return (
        <ul>
           {parti}
        </ul> 
        );
    }
}
