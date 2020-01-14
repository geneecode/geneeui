import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';
import ModalHeader from '../ModalHeader';
import Modal from './Modal';
//FIXME: This is just a sample test
it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Modal size={'md'} open={true}>
      <ModalHeader onClose={() => console.log('closed')} title={'Title Goes Here'} />
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate ex quas, aliquam nobis quo eligendi
          culpa dolorem molestiae. Mollitia similique a consequuntur accusamus vitae perferendis totam placeat. Itaque,
          eaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate ex quas, aliquam nobis quo
          eligendi culpa dolorem molestiae. Mollitia similique a consequuntur accusamus vitae perferendis totam placeat.
          Itaque, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate ex quas, aliquam nobis
          quo eligendi culpa dolorem molestiae. Mollitia similique a consequuntur accusamus vitae perferendis totam
          placeat. Itaque, eaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. b cupiditate ex quas,
          aliquam nobis quo eligendi culpa dolorem molestiae. Mollitia similique a consequuntur accusamus vitae
          perferendis totam placeat. Itaque, eaque.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button size="sm" className="mr-2">
          Close
        </Button>
        <Button variant="primary" size="sm">
          Proceed
        </Button>
      </ModalFooter>
    </Modal>,
    div,
  );

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
