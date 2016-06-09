import receiveLinks from './actions/receive-links'

module.exports = function (app) {
  app.get('/data/links', receiveLinks);
}
