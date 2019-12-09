import { Link } from "gatsby";
import React from "react";

const Bubble = props => {
  return (
    <Link to={`/blog/${props.slug}`} className="c-article">
      <h2>{props.data.title.text}</h2>
    </Link>
  );
};

export default Bubble;
