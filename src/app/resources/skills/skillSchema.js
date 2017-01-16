import {Schema, arrayOf} from 'normalizr';

const reflection = new Schema('reflections');
const skill = new Schema('skills');

skill.define({
  skills: arrayOf(reflection)
});

export default skill;
