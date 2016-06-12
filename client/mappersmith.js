let Mappersmith = require('mappersmith');

let manifest = {
  host: 'http://localhost:3100',
  resources: {
    Links: {
      all: { path: '/data/links' }
    }
  }
}

Mappersmith.Env.USE_PROMISES = true;

export default Mappersmith.forge(manifest);
