import React, {Component} from 'react';

class SkillDetail extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeSkill();
  }

  render() {
    return (
      <div>
        {this.props.skill &&
          <div>
            <h2>{this.props.skill.name}</h2>
            {this.props.skill.desc}<br/>
            <button onClick={this.handleRemove}>Remove</button>
          </div>
        }
      </div>
    );
  }
}

SkillDetail.propTypes = {
  skill: React.PropTypes.object,
  removeSkill: React.PropTypes.func
};

export default SkillDetail;
