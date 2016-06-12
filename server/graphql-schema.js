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

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'LinkQuery',
    fields: {
      links: {
        type: new GraphQLList(LinkType),
        resolve: () => {
          return new Promise((resolve, reject) => {
            Link.find((err, links) => {
              if (err) reject(err)
              else resolve(links)
            })
          })
        }
      }
    }
  })
});
