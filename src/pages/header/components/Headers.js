import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import '../styles/header.less';

const { Header } = Layout;
export default (props) => {
    const { changeVaule, collapsed } = props;
    const handleChangeFlag = () => changeVaule({ collapsed: !collapsed });
    return (   
      <Header className="header" theme="dark">
        <span>
          <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={handleChangeFlag} />
        </span>
        <Menu 
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', float: 'right' }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>   
    );
};
