import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './TextArea';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextArea label="Simple TextArea" rows={4} cols={50} placeholder="Brief something" />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
