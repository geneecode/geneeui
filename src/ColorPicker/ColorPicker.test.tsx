import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  const [color, setColor] = useState("#fff");
  ReactDOM.render(
    <ColorPicker
      color={color}
      onChange={(e) => setColor(e.hex)}
      disableAlpha={true}
    />,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
