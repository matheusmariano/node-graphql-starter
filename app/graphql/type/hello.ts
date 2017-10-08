import {
  GraphQLObjectType as Type,
  GraphQLString as Str,
} from 'graphql';

export default new Type({
  name: 'Hello',
  fields: {
    message: {
      type: Str,
    },
  },
});
