import {connect} from 'react-redux';

import {addSkill} from '../../resources/skills/skillActions';
import SkillForm from './SkillForm';

const mapStateToProps = () => {
  return {
    isCreating: false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSkill: skill => {
      dispatch(addSkill(skill));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);
