import {Schema, arrayOf} from 'normalizr';

const reflection = new Schema('reflections');
const skill = new Schema('skills');

reflection.define({
  skills: arrayOf(skill)
});

export default reflection;
