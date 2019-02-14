import React from 'react';
import { withRouter } from 'react-router-dom';
import SiderRoute from '../router/siderRoute';

class MyRouter extends React.Component {
    // static getDerivedStateFromProps(nextProps) {
    //     if (nextProps) {
    //       return {
    //        ...nextProps,
    //       };
    //     }
    //     return null;
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            return true;
        }
    }
    getSnapshotBeforeUpdate(prevProps) {
      if (prevProps !== this.props) {
        return true;
      }
      return null;
    }
    render() {
        return (
          <div><SiderRoute /></div>
        );
    }
}
export default withRouter(MyRouter);
