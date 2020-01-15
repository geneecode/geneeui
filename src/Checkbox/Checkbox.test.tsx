import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkbox label="Test Run" />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
