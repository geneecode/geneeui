import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBar onToggleDrawer={() => console.log('Opened')} open={true} />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
