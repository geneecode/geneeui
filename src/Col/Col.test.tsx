import React from 'react';
import ReactDOM from 'react-dom';
import Col from './Col';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');

  const cellStyles = {
    style: {
      backgroundColor: '#F9FAFC',
      border: '1px solid #cecece',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  ReactDOM.render(
    <Col {...cellStyles} size={10} offset={4} md={4} sm={8}>size=10 offset=4</Col>
    , div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
