import app from './app';

export default {
  schema: require('../graphql/schema').default,
  graphiql: app.env !== 'production',
};
