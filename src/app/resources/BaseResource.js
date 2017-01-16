import Axios from 'axios';

import store from './store';

const GET = 'GET';
const POST = 'POST';
const UPDATE = 'PATCH';
const DELETE = 'DELETE';

const defaultOptions = {};

class BaseResource {
  constructor(names, routeConfig = {}, options = defaultOptions) {
    this.name = names[0];
    this.namePlural = names[1] || `${this.name}s`;
    this.url = options.url || `/${this.namePlural}`;
    this.routeConfig = Object.assign({
      query: {
        url: this.url,
        method: GET
      },
      get: {
        url: `${this.url}/:id`,
        method: GET
      },
      create: {
        url: this.url,
        method: POST
      },
      update: {
        url: `${this.url}/:id`,
        method: UPDATE
      },
      delete: {
        url: `${this.url}/:id`,
        method: DELETE
      }
    }, routeConfig);
    this.client = Axios.create({
      baseURL: 'http://localhost:3000/'
    });
    this.client.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${store.getState().authState.authToken}`;
      return config;
    });
    this.client.interceptors.response.use(response => {
      return response.data;
    });
  }

  query() {
    const config = this.routeConfig.query;
    return this.client.request(config);
  }

  get(instanceId) {
    const config = Object.assign({}, this.routeConfig.get, {
      url: this.routeConfig.get.url.replace(':id', instanceId)
    });
    return this.client.request(config);
  }

  create(instance) {
    const config = Object.assign({}, this.routeConfig.create, {
      data: {
        [this.name]: instance
      }
    });
    return this.client.request(config);
  }

  delete(instanceId) {
    const config = Object.assign({}, this.routeConfig.delete, {
      url: this.routeConfig.get.url.replace(':id', instanceId)
    });
    return this.client.request(config);
  }
}

export default BaseResource;
