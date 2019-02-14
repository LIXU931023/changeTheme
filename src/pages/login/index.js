import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';


export default class Login extends React.Component {
  state= {
      isOpen: false,
  }
  handelIsOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }
  handleChangeComplete = (color) => {
      localStorage.setItem('setColor', color.hex);
  }
  render() {
      const { isOpen } = this.state;
      return (
        <div className={classNames('switcher dark-white', { active: isOpen })}>
          <span className="sw-btn dark-white" onClick={this.handelIsOpen}>
            <Icon type="setting" className="text-dark" />
          </span>     
        </div>
      );
  }
}
