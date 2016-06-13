import fetchLinks from './actions/fetch-links';
import createLink from './actions/create-link';
import removeLink from './actions/remove-link';

export default function (app) {
  app.get('/data/links', fetchLinks);
  app.post('/data/links/create', createLink);
  app.delete('/data/links/delete/:id', removeLink);
}
