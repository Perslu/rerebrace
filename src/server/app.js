const express = require('express');
const path = require('path');
const axios = require('axios');
const R = require('ramda');

const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';

if (isDeveloping) {
  // Added noinspection for Eslint, because it has no sense to move these
  // libs to dependencies. They are used only in development environment
  // noinspection Eslint
  const webpack = require('webpack');
  const webpackConfig = require('../../internals/webpack.config.js');
  // noinspection Eslint
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // noinspection Eslint
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const webpackCompiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }));

  app.use(webpackHotMiddleware(webpackCompiler));
}

var allProfiles = null;
var transformProfile = (profile) => {
  profile.imgHeight = Math.random()*58+60;
  profile.email = profile.email + Math.random()
  return profile
}
const profilesPromise =
  axios.get('http://api.randomuser.me/?inc=name,email,login,picture&seed=qwe&results=50')
    .then(result => {
      allProfiles = R.map(transformProfile, result.data.results);
      return result.data.results
    })
    .catch(error => console.log('axios failed', error));


app.get('/api/profiles', function (req, res, next) {
  res.status(200).json({profiles: allProfiles});
  // return profilesPromise
  //   .then(profiles => {
  //     console.log('second resolve');
  //     return res.statusCode(200).json(profiles)
  //   });
});

app.get('/api/profiles/:profileId', function (req, res, next) {

  const profile = R.find(p => p.login.username === req.params.profileId, allProfiles);
  if(profile) res.status(200).json({profile});
  else res.status(404).json({});
  // return profilesPromise
  //   .then(profiles => {
  //     console.log('second resolve');
  //     return res.statusCode(200).json(profiles)
  //   });
});

app.get('/*', function (req, res, next) {
  return res.sendFile(path.join(__dirname, '../mobile/index.html'))
});


const server = app.listen(9000, function () {
  console.log("Express is listening to port 9000")
});
