import router from './router';
import config from './config/';

const port = config.app.port;

router.listen(port, () => {
  console.log(`Serving at port ${port}`);
});
