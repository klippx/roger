import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from 'graphql';

import Link from './models/link';

let LinkType = new GraphQLObjectType({
  name: 'LinkType',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The id of the link.',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the link.',
    },
    url: {
      type: GraphQLString,
      description: 'The url of the link.',
    }
  })
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'LinkQuery',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      },
      links: {
        type: new GraphQLList(LinkType),
        resolve: () => {
          return [
            {id: 1, url: 'http://example.com', title: 'Example'},
            {id: 2, url: 'http://exit.com', title: 'Exit'}
          ];
        }
      }
    }
  })
});

export default schema;
