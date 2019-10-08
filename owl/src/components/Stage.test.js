import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';
import store from '../store';

describe('Stage component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage part={store.participants}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders as expected', () => {
        const tree = renderer
        .create(<Stage part={store.participants}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});