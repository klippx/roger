import db from './database';

module.exports = function (app) {
  app.get('/data/links', (req, res) => {
    db.collection('links').find({}).toArray((err, links) => {
      if (err) throw err;

      res.json(links);
    });
  });
}
