import * as express from 'express';
import * as graphql from 'express-graphql';
import config from './config/';

const router = express();

router.use('/api', graphql(config.graphql));

export default router;
