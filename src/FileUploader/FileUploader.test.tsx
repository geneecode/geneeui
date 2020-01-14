import React from 'react';
import ReactDOM from 'react-dom';
import { useCallback } from 'react';
import FileUploader from './FileUploader';

//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);
  ReactDOM.render(
    <FileUploader onDrop={onDrop} />,
    div
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
