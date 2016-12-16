import chalk from 'chalk';
import { injectReducer } from './redux/reducers';

import React from 'react';
import { Route, IndexRoute } from 'react-router/es6';
import App from './App'
import GalleryView from './public/containers/GalleryView';
import ProfileView from './public/containers/ProfileView';
import LoginView from './public/containers/LoginView';
import ContactView from './public/containers/ContactView';
import RegisterView from './public/containers/RegisterView';

import BookingArea from './public/components/BookingArea';
import RegisterMemberKind from './public/components/RegisterMemberKind';
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
    <Route path="/userInfo" component={UserInfo} />
    <Route path="/profile/:profileId" component={ProfileView}/>

    <Route path="/bookingArea" component={BookingArea} />
    <Route path="/contactPanel" component={ContactView} />
    <Route path="/loginPanel" component={LoginView} />
    <Route path="/register" component={RegisterView} />
    <Route path="/registerMemberKind" component={RegisterMemberKind} />


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
