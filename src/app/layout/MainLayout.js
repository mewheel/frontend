import React, {Component} from 'react';
import {Link} from 'react-router';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <h1>CaReflect</h1>
        <Link to="/app/reflections">Reflections</Link>
        <Link to="/app/skills">Skills</Link>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.element
};

export default MainLayout;
