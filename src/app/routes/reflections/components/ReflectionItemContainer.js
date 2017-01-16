import {connect} from 'react-redux';

import {removeReflection} from '../../../resources/reflections/reflectionActions';
import ReflectionItem from './ReflectionItem';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeReflection: () => {
      dispatch(removeReflection(ownProps.reflection.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionItem);
