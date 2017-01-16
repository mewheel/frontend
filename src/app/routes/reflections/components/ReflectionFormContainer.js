import {connect} from 'react-redux';

import {addReflection} from '../../../resources/reflections/reflectionActions';

import ReflectionForm from './ReflectionForm';

const mapStateToProps = store => {
  return {
    skills: store.skillState.skills
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReflection: reflection => {
      dispatch(addReflection(reflection));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionForm);
