export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';

export function addActivity(activity) {
  return {
    type: ADD_ACTIVITY,
    activity
  };
}

export function removeActivity(activityId) {
  return {
    type: REMOVE_ACTIVITY,
    activityId
  };
}
