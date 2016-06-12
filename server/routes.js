import fetchLinks from './actions/fetch-links';

export default function (app) {
  app.get('/data/links', fetchLinks);
}
