import React from 'react';
import Chips from 'react-chips';

class ReflectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      skillIds: []
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleAddReflection = this.handleAddReflection.bind(this);
  }

  handleBodyChange(event) {
    this.setState({body: event.target.value});
  }

  handleSkillsChange(skillNames) {
    const skillIds = this.props.skills.filter(skill => {
      return skillNames.indexOf(skill.name) > -1;
    }).map(skill => {
      return skill.id;
    });
    this.setState({
      skillIds
    });
  }

  handleAddReflection() {
    this.props.addReflection({
      body: this.state.body,
      skillIds: this.state.skillIds
    });
    this.setState({
      body: '',
      skillIds: []
    });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-group__label">What are you thinking about?</label>
          <textarea className="form-group__input form-group__input--textarea" value={this.state.body} onChange={this.handleBodyChange}/>
        </div>
        <Chips
          suggestions={
            this.props.skills.map(skill => {
              return skill.name;
            })
          }
          fromSuggestionsOnly
          onChange={this.handleSkillsChange}
          />
        <button onClick={this.handleAddReflection}>Add</button>
      </div>
    );
  }
}

ReflectionForm.propTypes = {
  addReflection: React.PropTypes.func,
  skills: React.PropTypes.array
};

export default ReflectionForm;
