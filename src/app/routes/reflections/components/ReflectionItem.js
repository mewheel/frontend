import React, {Component} from 'react';
import {Link} from 'react-router';

import WordLimit from '../../components/WordLimit';

class Reflection extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removeReflection();
  }

  render() {
    const {date, body, id} = this.props.reflection;
    return (
      <div className="post-list__post post">
        <time>{date}</time>
        <div className="post-list__body"><WordLimit limit={50}>{body}</WordLimit></div>
        <Link to={`/app/reflections/${id}`}>Read more</Link>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }
}

Reflection.propTypes = {
  reflection: React.PropTypes.object,
  removeReflection: React.PropTypes.func
};

export default Reflection;
