import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from './DateTimePicker';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateTimePicker>test</DateTimePicker>, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
