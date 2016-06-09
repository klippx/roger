import db from '../database';

export default (req, res) => {
  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });
}
