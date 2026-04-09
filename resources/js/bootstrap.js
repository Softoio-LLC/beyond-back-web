import axios from 'axios';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Configure Axios to use Laravel's XSRF-TOKEN cookie.
 * This cookie is automatically set by Laravel and read by Axios,
 * ensuring the token is always fresh (no stale meta tag issues).
 */
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

if (isBrowser) {
    window.axios = axios;
    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    window.axios.defaults.headers.common['Accept'] = 'application/json';
}
