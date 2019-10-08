import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Chat from './Chat';
import store from '../store.js';

describe('Chat component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Chat participants={store.participants} events={store.chatEvents} />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders as expected', () => {
    const tree = renderer
      .create(<Chat participants={store.participants} events={store.chatEvents}         />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});