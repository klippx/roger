import fetchLinks from './actions/fetch-links';
import fetchHello from './actions/fetch-hello';

export default function (app) {
  app.get('/data/links', fetchLinks);
  app.get('/data/hello', fetchHello);
}
