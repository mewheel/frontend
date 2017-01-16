import React from 'react';

const ReflectionDetail = props => {
  return (
    <div className="post post--full">
      {props.reflection &&
        <div>
          <div className="post__meta">
            <span className="post__date">{props.reflection.created_at}</span>
          </div>
          {props.reflection.body}
        </div>
      }
    </div>
  );
};

ReflectionDetail.propTypes = {
  reflection: React.PropTypes.object,
  isGetting: React.PropTypes.bool
};

export default ReflectionDetail;
