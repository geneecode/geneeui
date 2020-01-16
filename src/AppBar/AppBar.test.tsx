import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './AppBar';
import Link from '../Link';
import Icon from '../Icon';

//FIXME: This is just a sample test
it('renders', () => {
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

  ReactDOM.render(<AppBar logo={logo} links={links} controls={controls} userAvatar={userAvatar} />, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
