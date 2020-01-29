import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from './RadioButton';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RadioButton
      label="Test Run"
      id="1"
      checked={true}
      value="test"
      name="test"
      className="test"
      onClick={isChecked => console.log(isChecked)}
    />,
    div,
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <RadioButton
      label="Test Run"
      id="1"
      defaultChecked={true}
      value="test"
      name="test"
      className="test"
      onClick={isChecked => console.log(isChecked)}
    />,
    div,
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
