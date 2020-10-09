import React from 'react';
import TextLoop from "react-text-loop";


const FastText = () => (
  <TextLoop
    springConfig={{ stiffness: 100, damping: 10 }}
    adjustingSpeed={900}
    className="fast-text-bg"
  >
    <h2>Pain Management</h2>
    <h2>Menstural Disorders</h2>
  </TextLoop>

);

export default FastText;

