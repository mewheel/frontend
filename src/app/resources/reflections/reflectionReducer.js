import _ from 'lodash';

import {
  REFLECTIONS_QUERY_REQUEST,
  REFLECTIONS_QUERY_RECEIVE,
  REFLECTION_GET_REQUEST,
  REFLECTION_GET_RECEIVE,
  REFLECTION_ADD_REQUEST,
  REFLECTION_ADD_RECEIVE,
  REFLECTION_REMOVE_REQUEST,
  REFLECTION_REMOVE_RECEIVE
} from './reflectionActions';

export default function reflectionReducer(state = {reflections: []}, action) {
  switch (action.type) {
    case REFLECTIONS_QUERY_REQUEST:
      return Object.assign({}, state, {
        isQuerying: true
      });
    case REFLECTIONS_QUERY_RECEIVE:
      return Object.assign({}, state, {
        isQuerying: false,
        reflections: _.uniqBy(state.reflections.concat(action.reflections), reflection => reflection.id)
      });
    case REFLECTION_GET_REQUEST:
      return Object.assign({}, state, {
        isGetting: true
      });
    case REFLECTION_GET_RECEIVE:
      return Object.assign({}, state, {
        isGetting: false,
        reflections: _.uniqBy(state.reflections.concat([action.reflection]), reflection => reflection.id)
      });
    case REFLECTION_ADD_REQUEST:
      return Object.assign({}, state, {
        isCreating: true
      });
    case REFLECTION_ADD_RECEIVE:
      return Object.assign({}, state, {
        isCreating: false,
        reflections: state.reflections.concat([action.reflection])
      });
    case REFLECTION_REMOVE_REQUEST:
      return Object.assign({}, state, {
        isDeleting: true
      });
    case REFLECTION_REMOVE_RECEIVE:
      return Object.assign({}, state, {
        reflections: state.reflections.filter(reflection => {
          return reflection.id !== action.reflectionId;
        })
      });
    default:
      return state;
  }
}
