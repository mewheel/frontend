import React from 'react';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      interval: '',
      desc: '',
      skill: this.props.skill.id
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIntervalChange = this.handleIntervalChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleAddActivity = this.handleAddActivity.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleIntervalChange(event) {
    this.setState({
      interval: event.target.value
    });
  }

  handleDescChange(event) {
    this.setState({desc: event.target.value});
  }

  handleAddActivity() {
    this.props.addActivity(this.state);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/><br/>
        <select onChange={this.handleIntervalChange}>
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select><br/>
        <textarea value={this.state.desc} onChange={this.handleDescChange}/><br/>
        <button onClick={this.handleAddActivity}>Add</button>
      </div>
    );
  }
}

ActivityForm.propTypes = {
  skill: React.PropTypes.object,
  addActivity: React.PropTypes.func
};

export default ActivityForm;
