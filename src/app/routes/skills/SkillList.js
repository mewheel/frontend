import React from 'react';
import {Link} from 'react-router';

import SkillFormContainer from './SkillFormContainer';

const SkillList = props => {
  return (
    <div>
      <h1>Skills</h1>
      {props.isQuerying && 'Loading...'}
      {props.skills && props.skills.map(skill =>
        <div className="post" key={skill.id}>
          <h2><Link to={`/app/skills/${skill.id}`}>{skill.name}</Link></h2>
          {skill.desc}
        </div>
      )}
      <SkillFormContainer/>
    </div>
  );
};

SkillList.propTypes = {
  skills: React.PropTypes.array,
  isQuerying: React.PropTypes.bool
};

export default SkillList;

