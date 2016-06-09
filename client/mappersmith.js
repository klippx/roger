let Mappersmith = require('mappersmith/node');

let manifest = {
  host: 'http://localhost:3000',
  resources: {
    Links: {
      all: { path: '/data/links' },
    }
  }
}

Mappersmith.Env.USE_PROMISES = true;

export default Mappersmith.forge(manifest);
