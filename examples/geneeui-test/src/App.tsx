import React, { useCallback, useState } from 'react';
import { AppBar, Link, Icon, SideBar, Button, Modal } from 'geneeui/';
import ModalFooter from 'geneeui/lib/ModalFooter';
import ModalHeader from 'geneeui/lib/ModalHeader';
import ModalBody from 'geneeui/lib/ModalBody';
import { SideBarSection } from 'geneeui/lib/SideBarSection';
import SideBarItem from 'geneeui/lib/SideBarItem';
import clsx from 'clsx';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModaLOpen] = useState(false);
  const toggleDrawer = useCallback(
    () => setOpen(!open),
    [open]
  );

  return (
    <>
      <AppBar
        logo={
          <a className="topbar-logo" href="/"
          >
            <img src="https://via.placeholder.com/468x160?text=LOGO HERE" alt="..." />
          </a>
        }
        links={
          <ul>
            <li>
              <Link >Home</Link>
            </li>
            <li>
              <Link >About</Link>
            </li>
            <li>
              <Link >FAQ</Link>
            </li>
          </ul>
        }
        controls={
          <ul className="topbar-controls">
            <li><a ><Icon variant="white" >search</Icon></a></li>
            <li><a ><Icon variant="white" >chat</Icon></a></li>
          </ul>
        }
        userAvatar={
          <div className="topbar-user">
            <a href="#" className="user-avatar">
              <img src="https://via.placeholder.com/150" alt="#" />
            </a>
          </div>
        }
        sideNavActive={true}
      />
      <SideBar
        onToggleDrawer={toggleDrawer}
        open={open}
      >
        <SideBarSection
          label="Blogs"
          actions={<Icon variant="white">add</Icon>}
        >
          <SideBarItem
            onClick={() => console.log(123)}
            icon="library_books"
            iconVariant="white"
            label="Blog 1"
            level={1}
            actions={
              <>
                <a>
                  <Icon variant="white">add</Icon>
                </a>
                <a>
                  <Icon variant="white">edit</Icon>
                </a>
              </>
            }
          />
          <SideBarItem
            icon="library_books"
            iconVariant="white"
            label="Blog 2"
            level={1}
          />
        </SideBarSection>
      </SideBar>
      <main className={clsx("p-3", { pushContent: open })}>

        <Button variant="primary"> Button Test</Button>
        <br />

        <Button className="mt-3" onClick={() => setModaLOpen(true)} variant="primary">Open Modal</Button>
        <Modal
          size={'md'}
          open={modalOpen}
        >
          <ModalHeader onClose={() => setOpen(false)} title={"Title Goes Here"} />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate ex quas, aliquam nobis quo eligendi culpa dolorem molestiae. Mollitia similique a consequuntur accusamus vitae perferendis totam placeat. Itaque, eaque?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate ex quas, aliquam nobis quo eligendi culpa dolorem molestiae.
              Mollitia similique a consequuntur accusamus vitae perferendis totam placeat. Itaque, eaque.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab cupiditate ex quas, aliquam nobis quo eligendi culpa dolorem molestiae.
              Mollitia similique a consequuntur accusamus vitae perferendis totam placeat. Itaque, eaque? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              b cupiditate ex quas, aliquam nobis quo eligendi culpa dolorem molestiae. Mollitia similique a consequuntur accusamus vitae perferendis totam placeat. Itaque, eaque.
                </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setModaLOpen(false)} size="sm" className="mr-2" >Close</Button>
            <Button variant="primary" size="sm">Proceed</Button>
          </ModalFooter>
        </Modal>
      </main>
    </>
  );
}

export default App;
