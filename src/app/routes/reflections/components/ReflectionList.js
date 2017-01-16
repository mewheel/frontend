import React from 'react';

import ReflectionItemContainer from './ReflectionItemContainer';

const ReflectionList = props => {
  const reflections = props.reflections && props.reflections.map(reflection => {
    return (<ReflectionItemContainer reflection={reflection} key={reflection.id}/>);
  });
  return (
    <div>
      <h1>Reflections</h1>
      <div className="post-list">
        {reflections}
      </div>
    </div>
  );
};

ReflectionList.propTypes = {
  reflections: React.PropTypes.array
};

export default ReflectionList;
