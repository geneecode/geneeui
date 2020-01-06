import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Container>test</Container>,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
