import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routesMenus from '../../../router/routerConfig';
import '../styles/UISider.less';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;
const renderMenuItem = item => (
  <Item key={item.key}>
    <Link to={item.key}><span>{item.title}</span></Link>
  </Item>
     );
  const SubMenus = (item) => {
    const handleClickMenu = ({ key }) => {
      console.log(9999, key);
    };
      return (
        <SubMenu key={item.key} title={item.title} onTitleClick={handleClickMenu}>

          {item.subs.map(it => renderMenuItem(it))}
        </SubMenu>
         
      );
  };

const SiderMenu = (props) => {
  const { menus } = routesMenus;
  const { openSubMenu, collapsed } = props;
  const handleChange = (item) => {
      openSubMenu(item[item.length - 1]);
  };
    return (
      <Sider
        width={200}
        className="sider"
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <div className="logo">{collapsed ? <Icon type="setting" /> : '后台管理系统'}</div>
        <Menu
          mode="inline"
          theme="dark" 
          style={{ height: '100%', borderRight: 0 }}
          onOpenChange={handleChange}>
          {menus && menus.map(item => (item.subs ? SubMenus(item) : renderMenuItem(item)))}
        </Menu>
      </Sider>
    );
};

export default SiderMenu;
