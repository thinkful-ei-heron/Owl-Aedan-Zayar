import React from 'react';
import './Stage.css';

export default class Stage extends React.Component {

    render() {
        let filtered = this.props.part.filter(item => item.onStage === true);
        let staged = filtered.map(item => {
            return (
                <div className ='staged-participant' key={item.id}>
                    <div className = 'staged-name'>
                        <span>{item.name}</span>
                        <div className ='stage-icons'/>
                    </div>
                    <div>
                        <img src={item.avatar} alt="Avatar"/>
                    </div>
                </div>
            );
        });
        return (
            <div className ='Stage'>
                {staged}
            </div>
        );
    }

}