import {graphql} from 'graphql';
import schema from '../graphql-schema';

export default (req, res) => {
  console.log('creating new {link} in graphql')
  graphql(schema, 'mutation { add(title: "Test title", url: "Test url") { id, title, url } }')
    .then(result => {
      console.log(result);
      res.json(result)
    })
    .catch(console.error);
}
