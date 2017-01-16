import {
  SKILLS_QUERY_REQUEST,
  SKILLS_QUERY_RECEIVE,
  SKILL_ADD_REQUEST,
  SKILL_ADD_RECEIVE,
  SKILL_REMOVE_REQUEST,
  SKILL_REMOVE_RECEIVE
} from './skillActions';

export default function skillReducer(state = {skills: []}, action) {
  switch (action.type) {
    case SKILLS_QUERY_REQUEST:
      return Object.assign({}, state, {
        isQuerying: true
      });
    case SKILLS_QUERY_RECEIVE:
      return Object.assign({}, state, {
        isQuerying: false,
        skills: action.skills
      });
    case SKILL_ADD_REQUEST:
      return Object.assign({}, state, {
        isCreating: true
      });
    case SKILL_ADD_RECEIVE:
      return Object.assign({}, state, {
        isCreating: false,
        skills: state.skills.concat([action.skill])
      });
    case SKILL_REMOVE_REQUEST:
      return Object.assign({}, state, {
        isDeleting: true
      });
    case SKILL_REMOVE_RECEIVE:
      return Object.assign({}, state, {
        isDeleting: false,
        skills: state.skills.filter(skill => {
          return skill.id !== action.skillId;
        })
      });
    default:
      return state;
  }
}
