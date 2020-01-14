import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './Tag';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tag>test</Tag>, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
