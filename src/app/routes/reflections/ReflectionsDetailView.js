import React, {Component} from 'react';

import store from '../../resources/store';
import {getReflection} from '../../resources/reflections/reflectionActions';
import ReflectionDetailContainer from './components/ReflectionDetailContainer';

class ReflectionsDetailView extends Component {
  componentDidMount() {
    store.dispatch(getReflection(this.props.params.reflectionId));
  }

  render() {
    return (
      <div className="section section--white">
        <div className="container">
          <ReflectionDetailContainer reflectionId={this.props.params.reflectionId}/>
        </div>
      </div>
    );
  }
}

ReflectionsDetailView.propTypes = {
  params: React.PropTypes.object
};

export default ReflectionsDetailView;
