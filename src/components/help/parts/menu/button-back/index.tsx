import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props: { padding: any; }) => {
  return (
    <>
      <Link to="/">
        <div className="buttonback" style={{ padding: props.padding }}>&nbsp;{"<"}&nbsp;Back to Leaderboard</div></Link>
    </>
  );
};

export default Button;