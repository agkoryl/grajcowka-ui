const API_URL = 'https://grajcowka-app.herokuapp.com';

const isGet = (method) => method === 'GET';

const request = async (method, path, payload = {}, token = null) => {

  const body = isGet(method) ? undefined : JSON.stringify(payload);
  const url = `${API_URL}${path}`;

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const params = {
    method,
    headers,
    body,
    credentials: 'same-origin',
    redirect: 'manual'
  };

  const response = await fetch(url, params);

  if (response.status >= 200 && response.status < 300) {
    return await response.json();
  }


  const errorObject = {
    statusCode: response.status,
    statusMessage: response.statusText
  };
  throw errorObject;
}

export const post = (path, payload = {}, token) => {
  return request('POST', path, payload, token);
}

export const get = (path, payload = {}, token) => {
  return request('GET', path, payload, token);
}

// export const patch = (path, payload = {}, token) => {
//   return request('PATCH', path, payload, token);
// }

// export const put = (path, payload = {}, token) => {
//   return request('PUT', path, payload, token);
// }

// export const _delete = (path, payload = {}, token) => {
//   return request('DELETE', path, payload, token);
// }
