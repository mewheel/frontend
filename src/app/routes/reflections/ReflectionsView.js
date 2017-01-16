import React, {Component} from 'react';

import {queryReflections} from '../../resources/reflections/reflectionActions';
import store from '../../resources/store';
import ReflectionFormContainer from './components/ReflectionFormContainer';
import ReflectionListContainer from './components/ReflectionListContainer';

class ReflectionsView extends Component {
  componentDidMount() {
    store.dispatch(queryReflections());
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col--sm-8">
            <ReflectionFormContainer/>
            <ReflectionListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default ReflectionsView;
