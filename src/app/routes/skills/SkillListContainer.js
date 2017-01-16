import {connect} from 'react-redux';

import SkillList from './SkillList';

const mapStateToProps = store => {
  return {
    skills: store.entities.skills,
    isQuerying: false
  };
};

export default connect(mapStateToProps)(SkillList);
