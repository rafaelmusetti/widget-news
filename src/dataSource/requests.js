import request from 'superagent';

export function get({ url }) {
  return new Promise(resolve =>
    request
      .get(url)
      .end(async (error, response) => {
        if (!response.body.error) {
          resolve(response.body);
        }
      }));
}
