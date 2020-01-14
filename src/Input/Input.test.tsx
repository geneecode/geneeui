import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input label="Regular Input" placeholder="Please enter some text" />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
