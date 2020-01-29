import React, { useState, useCallback, FC } from 'react';
import { AppBar, Link, Icon, SideBar, SideBarSection, SideBarItem, Main } from 'geneeui';


export interface LayoutProps {

}

export const Layout: FC<LayoutProps> = function ({ children }) {
  const [open, setOpen] = useState(false);
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
            <li><a ><Icon  >search</Icon></a></li>
            <li><a ><Icon  >chat</Icon></a></li>
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
          actions={<Icon >add</Icon>}
        >
          <SideBarItem
            onClick={() => console.log(123)}
            icon="library_books"
            label="Blog 1"
            level={1}
            actions={
              <>
                <a>
                  <Icon >add</Icon>
                </a>
                <a>
                  <Icon >edit</Icon>
                </a>
              </>
            }
          />
          <SideBarItem
            icon="library_books"
            label="Blog 2"
            level={1}
          />
        </SideBarSection>
      </SideBar>
      <Main pushContent={open}>
        {children}
      </Main>
    </>
  )
}

export default Layout;


export const withLayout = function (
  WrappedComponent: React.FC,
  layoutProps?: Omit<LayoutProps, 'children'>
) {
  const WithLayout = (props: any) => (
    <Layout {...layoutProps}>
      <WrappedComponent {...props} />
    </Layout>
  );


  return WithLayout;
};
