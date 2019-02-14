import {
 HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../container/loading';
// const Loading = (props) => {
//     if(props.error){
//         return <div>加载错误。。。</div>
//     } else if(props.timeOut){
//         return <div>加载耗时过长</div>
//     } else if(props.pastDelay){
//         return <div>页面加载中。。。。</div>
//     }else {
//         return null
//     }
// }
const getComponent = (name) => {
    if (name === 'pages') {
        return Loadable({
            loader: () => import('../pages'),
            loading: Loading,
            timeout: 10000,
         }); 
    } 
        return Loadable({
            loader: () => import(`../pages/${name}/index`),
            loading: Loading,
            timeout: 10000,
         });   
};


export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/ink/mainscreen/index" push />} />
      <Route path="/ink" component={getComponent('pages')} />
      <Route path="/detail" component={getComponent('detail')} />
      <Route path="/login" component={getComponent('login')} />
      <Route path="/404" component={getComponent('notfound')} />
      <Route component={getComponent('notfound')} />
    </Switch>
  </Router>
);
