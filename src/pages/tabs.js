import React from 'react';
import { Tabs } from 'antd';
import { withRouter } from 'react-router-dom';
import * as allComponents from '../router/getComponent';

const TabPane = Tabs.TabPane;
 class TabComponent extends React.Component { 
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        this.state = {
            activeKey: '',
            panes: [],
        };
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
      }
    
      onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }
      componentDidMount() {
        const routerArr = {
            '/ink/mainscreen/index': { key: '1', title: '首页', component: allComponents.Mainscreen },
            '/ink/us/buttons': { title: '按钮', key: '2', component: allComponents.Buttons },
            '/ink/us/icons': { title: '图标', key: '3', component: allComponents.Icons },
            '/ink/us/spins': { title: '加载中', key: '4', component: allComponents.Spins },
            '/ink/us/modals': { title: '对话框', key: '5', component: allComponents.Modals },
            '/ink/us/tabs': { title: '标签页', key: '6', component: allComponents.Tabs },
            '/ink/animation/basicAnimations': { title: '基础动画', key: '7', component: allComponents.BasicAnimations },
            '/ink/animation/exampleAnimations': { title: '动画案例', key: '8', component: allComponents.ExampleAnimations },
            '/ink/table/basicTable': { title: '基础表格', key: '9', component: allComponents.BasicTable },
            '/ink/table/advancedTable': { title: '高级表格', key: '10', component: allComponents.AdvancedTable },
            '/ink/form/basicForm': { title: '基础表单', key: '11', component: allComponents.BasicForm },
        
        };
        console.log('tabs', this.props);
        const { panes } = this.state;
        const { location } = this.props;
        console.log(2222, location);
        if (routerArr[`${location.pathname}`]) {
            if (!panes.includes(routerArr[`${location.pathname}`])) {
                panes.push(routerArr[`${location.pathname}`]);
                this.setState({ panes, activeKey: panes[panes.length - 1].key });
            }  
        } 
      }
    render() {
        return (
          <div>
            <Tabs
              hideAdd
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}>
              {this.state.panes.map((pane) => {
                        const Component = pane.component;
                            return <TabPane tab={pane.title} key={pane.key}><Component /></TabPane>;
                        })
                    }  
            </Tabs>
          </div>
            
        );
    }
}
export default withRouter(TabComponent); 
