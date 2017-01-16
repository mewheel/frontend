import {normalize, arrayOf} from 'normalizr';

import BaseResource from '../BaseResource';
import reflectionSchema from './reflectionSchema';

class ReflectionResource extends BaseResource {
  constructor() {
    super(['reflection', 'reflections']);
  }

  query() {
    return super.query().then(reflections => {
      return normalize({reflections}, {
        reflections: arrayOf(reflectionSchema)
      });
    });
  }

  get(instanceId) {
    return super.get(instanceId).then(reflection => {
      return normalize(reflection, reflectionSchema);
    });
  }
}

export default new ReflectionResource();
