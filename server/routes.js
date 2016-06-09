import receiveLinks from './actions/receive-links';

export default function (app) {
  app.get('/data/links', receiveLinks);
}
