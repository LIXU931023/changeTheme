import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routerConfig from './routerConfig';

export default class MyRouter extends React.Component {
    render() {
        return (
          <Switch>
            {
                    Object.keys(routerConfig).map(key => routerConfig[key].map((item) => {
                            const _router = (it) => {
                                const Component = it.component;
                                return (
                                  <Route 
                                    key={it.key}
                                    exact
                                    path={it.key}
                                    render={
                                        props => <Component {...props} />
                                    } />
                                ); 
                            };
                            return item.component ? _router(item) : item.subs.map(r => _router(r));
                        }))
                }
               
          </Switch>
        );
    }
}
