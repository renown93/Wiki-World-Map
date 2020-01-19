import React from "react";
const Frame = ({ link }) => (
  <iframe
    title="wiki"
    src={link}
    width="100%"
    height="90%"
    frameborder="0"
  ></iframe>
);
export default React.memo(Frame);
