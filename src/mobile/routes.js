import chalk from 'chalk';
import { injectReducer } from './redux/reducers';

import React from 'react';
import { Route, IndexRoute } from 'react-router/es6';
import App from './App'
import GalleryView from './public/containers/GalleryView';
import ProfileView from './public/containers/ProfileView';
// import Home from './Home'
import UserInfo from './UserInfo'
import NotFound from './NotFound'

const errorLoading = (err) => {
  console.error(chalk.red(`==> 😭  Dynamic page loading failed ${err}`));
};

const loadModule = cb => (Component) => {
  cb(null, Component.default);
};




export default (
  <Route path="/" component={App}>
    <IndexRoute component={GalleryView} />
    <Route path="/userinfo" component={UserInfo} />
    <Route path="/profile/:profileId" component={ProfileView} />
    <Route path="/*" component={NotFound} />
  </Route>
)


// export default function createRoutes(store) {
//   return {
//     path: '/',
//     component: App,
//     indexRoute: Home,
//     childRoutes: [
//       {
//         path: 'UserInfo/:id',
//
//         getComponent(location, cb) {
//           const importModules = Promise.all([
//             System.import('./UserInfo'),
//             // System.import('./UserInfo/reducer'),
//           ]);
//
//           const renderRoute = loadModule(cb);
//
//           importModules
//             .then(([Component/*, reducer*/]) => {
//               // injectReducer(store, 'userInfo', reducer.default);
//
//               renderRoute(Component);
//             })
//             .catch(errorLoading);
//         },
//       },
//       {
//         path: '*',
//         getComponent(location, cb) {
//           System.import('./NotFound')
//             .then(loadModule(cb))
//             .catch(errorLoading);
//         },
//       },
//     ],
//   };
// }
