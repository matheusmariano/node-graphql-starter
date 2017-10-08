import {
  GraphQLString as Str,
} from 'graphql';
import Hello from '../type/hello';

export default {
  type: Hello,
  args: {
    subject: {
      type: Str,
    },
  },
  resolve(root, args) {
    const subject = args.subject || 'World';

    return {
      message: `Hello, ${subject}`,
    };
  },
};
