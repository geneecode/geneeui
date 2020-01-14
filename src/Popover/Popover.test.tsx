import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Input } from '..';
import Popover from './Popover';
import Button from '../Button';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  const [isPopoverOpen, setisPopoverOpen] = useState(false);
  ReactDOM.render(
    <Popover
      isOpen={isPopoverOpen}
      position={'bottom'}
      onClickOutside={() => setisPopoverOpen(!isPopoverOpen)}
      content={
        <Input
          type="email"
          label="Enter Input Here"
          placeholder="Please enter your Ticket No."
        />
      }
    >
      <Button variant="primary" onClick={() => setisPopoverOpen(!isPopoverOpen)}>
        Open PopOver
      </Button>
    </Popover>,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
