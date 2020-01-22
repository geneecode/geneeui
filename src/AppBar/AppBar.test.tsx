import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import AppBar from './AppBar';
import Link from '../Link';
import Icon from '../Icon';
describe('AppBar', () => {

  const div = document.createElement('div');

  const logo = (
    <a className="topbar-logo" href="#">
      <img src="../../public/assets/GeneeCodeLogoHorizontal.png" alt="..." />
    </a>
  );

  const links = (
    <ul>
      <li>
        <Link>Link 1</Link>
      </li>
      <li>
        <Link>Link 2</Link>
      </li>
      <li>
        <Link>Link 3</Link>
      </li>
    </ul>
  );

  const controls = (
    <ul className="topbar-controls">
      <li>
        <a>
          <Icon>search</Icon>
        </a>
      </li>
      <li>
        <a>
          <Icon>notifications</Icon>
        </a>
      </li>
      <li>
        <a>
          <Icon>apps</Icon>
        </a>
      </li>
    </ul>
  );

  const userAvatar = (
    <div className="topbar-user">
      <a href="#" className="user-avatar">
        <img src="../../public/assets/avatar.png" alt="#" />
      </a>
    </div>
  );


  it('isElementOfType is React element', () => {
    expect(TestUtils.isElementOfType(<AppBar />, AppBar)).toEqual(true);
  });


  it('renders', () => {

    ReactDOM.render(<AppBar
      className="test"
      logo={logo}
      links={links}
      controls={controls}
      userAvatar={userAvatar}
      sideNavActive={false}
      ref={null}
    />, div);
    const comp = div.querySelector('div');
    expect(comp).toBeDefined();

    ReactDOM.unmountComponentAtNode(div);
  });



});