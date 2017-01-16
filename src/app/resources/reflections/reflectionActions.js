import reflectionResource from './reflectionResource';

export const REFLECTIONS_QUERY_REQUEST = 'REFLECTIONS_REQUEST';
export const REFLECTIONS_QUERY_RECEIVE = 'REFLECTIONS_RECEIVE';

export const REFLECTION_GET_REQUEST = 'REFLECTION_GET_REQUEST';
export const REFLECTION_GET_RECEIVE = 'REFLECTION_GET_RECEIVE';

export const REFLECTION_ADD_REQUEST = 'REFLECTION_ADD_REQUEST';
export const REFLECTION_ADD_RECEIVE = 'REFLECTION_ADD_RECEIVE';

export const REFLECTION_REMOVE_REQUEST = 'REFLECTION_REMOVE_REQUEST';
export const REFLECTION_REMOVE_RECEIVE = 'REFLECTION_REMOVE_RECEIVE';

export function queryReflections() {
  return dispatch => {
    dispatch(requestQueryReflections());
    reflectionResource
      .query()
      .then(reflections => {
        dispatch(receiveQueryReflections(reflections));
      });
  };
}

function requestQueryReflections() {
  return {
    type: REFLECTIONS_QUERY_REQUEST
  };
}

function receiveQueryReflections(reflections) {
  return {
    type: REFLECTIONS_QUERY_RECEIVE,
    reflections
  };
}

export function getReflection(reflectionId) {
  return dispatch => {
    dispatch(requestGetReflection(reflectionId));
    reflectionResource
      .get(reflectionId)
      .then(reflection => {
        console.log(reflection);
        dispatch(receiveGetReflection(reflection));
      });
  };
}

function requestGetReflection(reflectionId) {
  return {
    type: REFLECTION_GET_REQUEST,
    reflectionId
  };
}

function receiveGetReflection(reflection) {
  return {
    type: REFLECTION_GET_RECEIVE,
    reflection
  };
}

export function addReflection(reflection) {
  return dispatch => {
    dispatch(requestAddReflection());
    reflectionResource
      .create(reflection)
      .then(reflection => {
        dispatch(receiveAddReflection(reflection));
      });
  };
}

function requestAddReflection() {
  return {
    type: REFLECTION_ADD_REQUEST
  };
}

function receiveAddReflection(reflection) {
  return {
    type: REFLECTION_ADD_RECEIVE,
    reflection
  };
}

export function removeReflection(reflectionId) {
  return dispatch => {
    dispatch(requestRemoveReflection());
    reflectionResource
      .delete(reflectionId)
      .then(() => {
        dispatch(receiveRemoveReflection(reflectionId));
      });
  };
}

function requestRemoveReflection() {
  return {
    type: REFLECTION_REMOVE_REQUEST
  };
}

function receiveRemoveReflection(reflectionId) {
  return {
    type: REFLECTION_REMOVE_RECEIVE,
    reflectionId
  };
}
