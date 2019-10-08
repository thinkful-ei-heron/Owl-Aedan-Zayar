import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participants from './Participants';
import store from '../store';

describe('Participants component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participants part={store.participants}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders the UI as expected', () => {
        const tree = renderer
        .create(<Participants part={store.participants}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
