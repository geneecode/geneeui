import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Button>test</Button>,
    div
  );

  const button = div.querySelector('button');
  expect(button).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
