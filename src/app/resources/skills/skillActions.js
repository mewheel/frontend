import skillResource from './skillResource';

export const SKILLS_QUERY_REQUEST = 'REQUEST_SKILLS';
export const SKILLS_QUERY_RECEIVE = 'RECIEVE_SKILLS';

export const SKILL_ADD_REQUEST = 'REQUEST_ADD_SKILL';
export const SKILL_ADD_RECEIVE = 'RECIEVE_ADD_SKILL';

export const SKILL_REMOVE_REQUEST = 'REQUEST_REMOVE_SKILL';
export const SKILL_REMOVE_RECEIVE = 'RECEIVE_REMOVE_SKILL';

export function querySkills() {
  return function (dispatch) {
    dispatch(requestQuerySkills());
    return skillResource.query().then(entities => {
      console.log(entities);
      dispatch(receiveQuerySkills(entities));
    });
  };
}

function requestQuerySkills() {
  return {
    type: SKILLS_QUERY_REQUEST
  };
}

function receiveQuerySkills(entities) {
  return {
    type: SKILLS_QUERY_RECEIVE,
    entities
  };
}

export function addSkill(skill) {
  return dispatch => {
    dispatch(requestAddSkill());
    skillResource.create(skill).then(skill => {
      dispatch(receiveAddSkill(skill));
    });
  };
}

function requestAddSkill() {
  return {
    type: SKILL_ADD_REQUEST
  };
}

function receiveAddSkill(skill) {
  return {
    type: SKILL_ADD_RECEIVE,
    skill
  };
}

export function removeSkill(skillId) {
  return dispatch => {
    dispatch(requestRemoveSkill(skillId));
    skillResource.delete(skillId).then(() => {
      dispatch(receiveRemoveSkill(skillId));
    });
  };
}

function requestRemoveSkill() {
  return {
    type: SKILL_REMOVE_REQUEST
  };
}

function receiveRemoveSkill(skillId) {
  return {
    type: SKILL_REMOVE_RECEIVE,
    skillId
  };
}
