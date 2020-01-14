import React from 'react';
import ReactDOM from 'react-dom';
import FileUploader from './FileUploader';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileUploader onDrop={e => console.log(e)} />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
