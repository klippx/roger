import db from '../database';

export default (req, res) => {
  console.log('fetch-links, fetching links from MongoDB')
  db.collection('links').find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });
}
