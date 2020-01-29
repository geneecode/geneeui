import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import { Col } from '..';

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
      justifyContent: 'center',
    },
  };

  ReactDOM.render(
    <Row>
      <Col {...cellStyles}>No size specified</Col>
      <Col {...cellStyles}>No size specified</Col>
      <Col {...cellStyles}>No size specified</Col>
    </Row>,
    div,
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
