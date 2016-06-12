import {graphql} from 'graphql';
import schema from '../graphql-schema';

export default (req, res) => {
  let query = '{ hello }';
  console.log('fetchHello, fetching hello from graphql')
  graphql(schema, query).then(result => {
    console.log('fetchHello, result', result)
    res.json(result);
  });
}
