let Mappersmith = require('mappersmith');

let manifest = {
  host: 'http://localhost:3100',
  resources: {
    Links: {
      all: { path: '/data/links.json' },
      create: { path: '/data/links/create.json', method: 'post' },
      delete: { path: '/data/links/{id}/delete.json', method: 'delete' }
    }
  },
}

Mappersmith.Env.USE_PROMISES = true;

export default Mappersmith.forge(manifest);
