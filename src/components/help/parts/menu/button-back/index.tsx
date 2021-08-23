import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props: { padding: any; value_: any; link: any }) => {
  return (
    <>
      <Link to={props.link || "/"}>
        <div className="buttonback" style={{ padding: props.padding }}>{props.value_ || `< Back to Leaderboard`}</div></Link>
    </>
  );
};

export default Button;