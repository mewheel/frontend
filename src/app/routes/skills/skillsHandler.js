import {querySkills} from '../../resources/skills/skillActions';
import store from '../../resources/store';

const onEnter = () => {
  store.dispatch(querySkills());
};

export default onEnter;
