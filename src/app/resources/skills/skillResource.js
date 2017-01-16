import {normalize, arrayOf} from 'normalizr';

import BaseResource from '../BaseResource';
import skillSchema from './skillSchema';

class SkillResource extends BaseResource {
  constructor() {
    super(['skill', 'skills']);
  }

  query() {
    return super.query().then(skills => {
      return normalize({skills}, {
        skills: arrayOf(skillSchema)
      }).entities;
    });
  }

  get(instanceId) {
    return super.get(instanceId).then(skill => {
      return normalize(skill, skillSchema).entities;
    });
  }
}

export default new SkillResource();
