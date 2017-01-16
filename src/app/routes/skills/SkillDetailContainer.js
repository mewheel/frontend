import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {removeSkill} from '../../resources/skills/skillActions';
import SkillDetail from './SkillDetail';

class SkillDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.removeSkill = this.removeSkill.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (this.props.isDeleting && !nextProps.isDeleting) {
      browserHistory.push('/app/skills');
    }
  }

  removeSkill() {
    this.props.removeSkill(this.props.skill.id);
  }

  render() {
    return (
      <SkillDetail
        skill={this.props.skill}
        isDeleting={this.props.isDeleting}
        removeSkill={this.removeSkill}
        />
    );
  }
}

SkillDetailContainer.propTypes = {
  skill: React.PropTypes.object,
  isDeleting: React.PropTypes.bool,
  removeSkill: React.PropTypes.func
};

const mapStateToProps = (store, ownProps) => {
  return {
    isDeleting: store.skillState.isDeleting,
    skill: store.skillState.skills.filter(skill => {
      return skill.id === parseInt(ownProps.params.skillId, 10);
    })[0]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeSkill: () => {
      dispatch(removeSkill(parseInt(ownProps.params.skillId, 10)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillDetailContainer);
