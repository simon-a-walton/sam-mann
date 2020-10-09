import React from 'react';

export default function Content(props) {
  return <p style={{fontSize:'calc(16px + 0.3vw)'}}>{props.contentText}</p>
}

