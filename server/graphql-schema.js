import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
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

let MutationAdd = {
  type: LinkType,
  description: 'Add a Link',
  args: {
    title: {
      name: 'Link title',
      type: new GraphQLNonNull(GraphQLString)
    },
    url: {
      name: 'Link url',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => {
    var newLink = new Link({
      title: args.title,
      url: args.url,
      completed: false
    })
    newLink.id = newLink._id
    return new Promise((resolve, reject) => {
      newLink.save(function (err) {
        if (err) reject(err)
        else resolve(newLink)
      })
    })
  }
}

let MutationDelete = {
  type: LinkType,
  description: 'Remove a Link',
  args: {
    id: {
      name: 'Link id',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => {
    console.log('Trying to remove a link...', args.id)
    return new Promise((resolve, reject) => {
      Link.remove({ id: args.id })
        .then(doc => {
          if (!doc.result.ok) reject(doc.result)
          else resolve(doc.result);
        })
    })
  }
}

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
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
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      add: MutationAdd,
      delete: MutationDelete
    }
  })
});
