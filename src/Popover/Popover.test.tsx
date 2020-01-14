import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '..';
import Popover from './Popover';
import Button from '../Button';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Popover
      isOpen={true}
      position={'bottom'}
      onClickOutside={() => console.log('false')}
      content={<Input type="email" label="Enter Input Here" placeholder="Please enter your Ticket No." />}
    >
      <Button variant="primary" onClick={() => console.log('closed')}>
        Open PopOver
      </Button>
    </Popover>,
    div,
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
