import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './Badge';
import { Icon } from '..';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Badge
      variant="default"
      content={12}
    >
      <Icon>notifications</Icon>
    </Badge>
    ,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
