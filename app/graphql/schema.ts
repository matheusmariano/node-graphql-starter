import {
  GraphQLSchema as Schema,
  GraphQLObjectType as Type,
} from 'graphql';

export default new Schema({
  query: new Type({
    name: 'RootQuery',
    fields: {
      hello: require('./query/hello').default,
    },
  }),
});
