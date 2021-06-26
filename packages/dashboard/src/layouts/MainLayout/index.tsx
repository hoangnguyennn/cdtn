import { FC, MouseEvent, useState } from 'react';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import {
  DownOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons';

import menu from '../../configs/menu';

import './MainLayout.css';
import { IBreadCrumb } from '../../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, logoutAction } from '../../redux/reducers/auth';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type MainLayoutProps = {
  breadcrumb: IBreadCrumb[];
};

const MainLayout: FC<MainLayoutProps> = ({ children, breadcrumb }) => {
  const [collapsed, setCollapsed] = useState(false);

  const userInfo = useSelector(getUserInfo());
  const dispatch = useDispatch();

  const logout = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  const topbarActions = (
    <Menu className="topbar-actions">
      <Menu.Item key="0">
        <Link rel="noopener noreferrer" to={'/'}>
          My Account
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link rel="noopener noreferrer" to={'/logout'} onClick={logout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }} id="components-layout-demo-side">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {menu.map(menuItem => {
            if (menuItem.hasItems) {
              return (
                <SubMenu
                  key={menuItem.id}
                  icon={<UserOutlined />}
                  title={menuItem.title}
                >
                  {menuItem.items?.map(item => (
                    <Menu.Item key={item.id}>
                      <Link to={item.href || ''}>{item.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={menuItem.id} icon={<PieChartOutlined />}>
                  <Link to={menuItem.href || ''}>{menuItem.title}</Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{ padding: '0 16px' }}
        >
          <div></div>
          <Dropdown overlay={topbarActions} trigger={['click']}>
            <a
              href="/"
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
            >
              {userInfo.fullName} <DownOutlined />
            </a>
          </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumb.map(item => (
              <Breadcrumb.Item key={item.id} href={item.url}>
                {item.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>hoangnguyen &copy; 2021</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
