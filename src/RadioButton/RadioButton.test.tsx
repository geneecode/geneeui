import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from './RadioButton';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadioButton label="Test Run" />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
