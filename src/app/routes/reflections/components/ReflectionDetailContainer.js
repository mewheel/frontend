import {connect} from 'react-redux';

import {removeReflection} from '../../../resources/reflections/reflectionActions';
import ReflectionDetail from './ReflectionDetail';

const mapStateToProps = (store, ownProps) => {
  return {
    isGetting: store.reflectionState.isGetting,
    reflection: store.reflectionState.reflections.filter(reflection => {
      return reflection.id === parseInt(ownProps.reflectionId, 10);
    })[0]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeReflection: () => {
      dispatch(removeReflection(parseInt(ownProps.reflectionId, 10)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionDetail);
