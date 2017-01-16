import {connect} from 'react-redux';

import ReflectionList from './ReflectionList';

const mapStateToProps = store => {
  return {
    reflections: store.reflectionState.reflections,
    isQuerying: store.reflectionState.isQuerying
  };
};

export default connect(mapStateToProps)(ReflectionList);
