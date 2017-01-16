import React from 'react';

class SkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescChange(event) {
    this.setState({desc: event.target.value});
  }

  handleAddSkill() {
    this.props.addSkill({
      name: this.state.name,
      desc: this.state.desc
    });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-group__label">Title:</label>
          <input className="form-group__input" type="text" value={this.state.name} onChange={this.handleNameChange}/>
        </div>
        <textarea value={this.state.desc} onChange={this.handleDescChange}/><br/>
        <button onClick={this.handleAddSkill} disabled={this.props.isCreating}>Add</button>
      </div>
    );
  }
}

SkillForm.propTypes = {
  isCreating: React.PropTypes.bool,
  addSkill: React.PropTypes.func
};

export default SkillForm;
