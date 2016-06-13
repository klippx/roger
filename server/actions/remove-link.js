import {graphql} from 'graphql';
import schema from '../graphql-schema';

export default (req, res) => {
  let query = `mutation { delete(id: "${req.params.id}") { id } }`;
  console.log('removing {link} in graphql with id', query)
  graphql(schema, query)
    .then(result => {
      console.log(result);
      res.json(result)
    })
    .catch(console.error);
}
