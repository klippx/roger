let Mappersmith = require('mappersmith');

let manifest = {
  host: 'http://localhost:3100',
  resources: {
    Links: {
      all: { path: '/data/links' },
      delete: { path: '/data/links/delete/{id}', method: 'delete' }
    }
  }
}

Mappersmith.Env.USE_PROMISES = true;

export default Mappersmith.forge(manifest);
