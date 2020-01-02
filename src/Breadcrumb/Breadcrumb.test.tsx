import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from './Breadcrumb';

const items = [
  { to: '/', label: 'Home' },
  { to: '/breadcrums', label: 'Breadcrumb' },
];

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Breadcrumb items={items}/>,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
