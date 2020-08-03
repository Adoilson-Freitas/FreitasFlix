const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://english-flix.herokuapp.com/';

export default {
  URL_BACKEND_TOP,
};
