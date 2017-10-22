export const apiconfig = {
  headers: {'X-My-Custom-Header': 'Header-Value'}
};

export default function api() {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url ='http://localhost:4000/';
  } else {
    url ='http://localhost:4000/';
  }
  return url;
}

export function apiFetch(pathname, options) {
  return fetch(api(pathname), options)
    .catch(err => {
      // add messages array to browser-generated exceptions
      err.messages = [err.message];
      throw err;
    })
    .then(checkStatus);
}

export function checkStatus(response) {
  let json = response.json();
  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json
      .then(err => {
        const error = new Error(response.statusText);
        error.response = response;
        error.body = err;
        error.messages = [response.statusText];

        // Errors structured per JSON API spec
        if (typeof err === 'object' && err.errors && err.errors.length) {
          error.messages = err.errors.map(error => error.title);
        }

        throw error;
      });
  }
}