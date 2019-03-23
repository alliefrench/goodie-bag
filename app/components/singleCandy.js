import React from 'react';

const SingleCandy = props => {
  return (
    <div>
      <img src={props.candy.imageUrl} />
      <h3>{props.candy.name}</h3>
      <p>{props.candy.description}</p>
    </div>
  );
};

export default SingleCandy;
