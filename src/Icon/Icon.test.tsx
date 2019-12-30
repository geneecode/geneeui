import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Icon title="Test">build</Icon>,
    div
  );

  const button = div.querySelector('icon');
  expect(button).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
