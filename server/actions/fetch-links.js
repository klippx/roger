import {graphql} from 'graphql';
import schema from '../graphql-schema';

export default (req, res) => {
  console.log('fetching {links} from graphql')
  graphql(schema, '{ links { title, url } }')
    .then(result => res.json(result))
    .catch(console.error);
}
