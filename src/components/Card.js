import React from 'react';

const Card = ({data}) => {
  return (
    <div className="card">
      <div>{data.title}</div>
      <div>{data.key}</div>
    </div>
  );
};

export default Card;