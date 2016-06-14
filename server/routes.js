import fetchLinks from './actions/fetch-links';
import createLink from './actions/create-link';
import removeLink from './actions/remove-link';
import express from 'express';

export default function (app) {
  let router = express.Router();

  router.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
  });

  router.get('/links.json', fetchLinks);
  router.post('/links/create.json', createLink);
  router.delete('/links/:id/delete.json', removeLink);
  app.use('/data', router);
}
