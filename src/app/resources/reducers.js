import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY
} from './actions';

export function activityReducer(state = {activities: []}, action) {
  switch (action.type) {
    case ADD_ACTIVITY: {
      const newActivity = Object.assign({
        id: state.activities.length + 1
      }, action.activity);
      return Object.assign({}, state, {
        activities: state.activities.concat([newActivity])
      });
    }
    case REMOVE_ACTIVITY: {
      const newActivities = state.activities.filter(activity => {
        return activity.id !== action.activityId;
      });
      return Object.assign({}, state, {
        activities: newActivities
      });
    }
    default:
      return state;
  }
}
