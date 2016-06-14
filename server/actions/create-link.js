import {graphql} from 'graphql';
import schema from '../graphql-schema';

export default (req, res) => {
  console.log('')
  console.log(' == create-link handler ==')
  console.log('body:', req.body)

  let query =`
    mutation {
      add(title: ${req.body.title}, url: ${req.body.url}) {
        id, title, url
      }
    }`

  console.log('creating new {link} in graphql', query)

  graphql(schema, query)
    .then(result => {
      console.log('inside then')
      console.log(result.errors);

      if (result.errors) {
        return res.status(500).json(result.errors);
      }

      res.json(result);
    });
}
