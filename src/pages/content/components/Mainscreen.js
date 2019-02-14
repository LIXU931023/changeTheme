import React from 'react';
import { Button } from 'antd';
import Children from './Children';

export default class Mainscreen extends React.Component {
    state = {
        count: 1,
    }
    handleClick = () => {
      this.setState(state => (
        { count: state.count + 1 }
      ));
    }
    render() {
      const { count } = this.state;
      return (
        <div>
          <div>首页</div>
          <Button type="primary" onClick={this.handleClick}>默认按钮</Button>
          <Children count={count} />
        </div>
      );
    }
}
