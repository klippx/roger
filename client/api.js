import ServerAPI from './mappersmith';
import receiveLinks from './actions/receive-links';

export let API = {
  fetchLinks() {
    ServerAPI.Links.all().then(response => {
      receiveLinks(response)
    })
  }
}
