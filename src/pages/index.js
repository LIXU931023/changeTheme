import React from 'react';
import { Layout, message } from 'antd';
import { connect } from 'react-redux';
import Headers from './header';
import Siders from './silder';
import ThemePark from './themePark';
import MyRouter from './routers';
// import TabComponent from './tabs';
import './index.less';

const { Content } = Layout;
 class Pages extends React.Component {
    constructor() {
      super();
        this.state = { color: localStorage.getItem('app-theme') || '#1987a7' };
        window.less.modifyVars({
          '@layout-header-background': localStorage.getItem('app-theme') || '#1987a7',
          '@layout-sider-background': localStorage.getItem('app-theme') || '#1987a7',
          })
          .then(() => { })
          .catch(() => {
          message.error('Failed to update theme');
        });
    }
    handleColorChange = (colors) => {
      window.less.modifyVars({
          '@layout-header-background': colors.hex,
          '@layout-sider-background': colors.hex,
        })
        .then(() => {
          localStorage.setItem('app-theme', colors.hex);
          message.success('颜色更换成功！');
        })
        .catch(() => {
          message.error('Failed to update theme');
        });
      }
    render() {
      // const openSubmenu = this.props.siderReducer[this.props.siderReducer.length-1];
      const { color } = this.state;
        return (
          <Layout>
            <Siders />
            <Layout className="content-box">
              <ThemePark
                color={color}
                onChangeComplete={this.handleColorChange} />
              <Headers />
              <Layout style={{ padding: '24px' }}>
                <Content style={{
                  background: '#fff', paddingLeft: '24px', height: '780px', overflowY: 'auto',
                }}>
                  <MyRouter />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        );
    }
}
const mapStateToProps = (state) => {
  const { siderReducer } = state;
  return { siderReducer };
};
export default connect(mapStateToProps, null)(Pages);
