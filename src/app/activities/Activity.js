import React from 'react';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeActivity(this.props.activity.id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.activity.title}</h3>
        <p><small>{this.props.activity.interval}</small></p>
        {this.props.activity.desc}<br/>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

Activity.propTypes = {
  activity: React.PropTypes.object,
  removeActivity: React.PropTypes.func
};

export default Activity;
