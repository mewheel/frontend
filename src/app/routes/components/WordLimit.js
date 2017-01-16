import React from 'react';

const WordLimit = props => {
  const text = props.children.split(' ').splice(0, props.limit).join(' ');
  return (<span>{text}{props.children.length > text.length && '...'}</span>);
};

WordLimit.propTypes = {
  children: React.PropTypes.string,
  limit: React.PropTypes.number
};

export default WordLimit;
