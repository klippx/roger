import fetchLinks from './actions/fetch-links';
import createLink from './actions/create-link';

export default function (app) {
  app.get('/data/links', fetchLinks);
  app.post('/data/links', createLink);
}
