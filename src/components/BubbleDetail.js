import React from "react";

const BubbleDetail = props => (
  <>
    <section className="c-bubble-header">
      <h2>{props.title}</h2>
    </section>
    <div className="page">
      <div
        className="c-bubble-content"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
    </div>
  </>
);

export default BubbleDetail;
