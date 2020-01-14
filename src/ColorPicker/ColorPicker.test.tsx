import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ColorPicker color="#fffrrr" onChange={e => console.log(e.hex)} disableAlpha={true} />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});

