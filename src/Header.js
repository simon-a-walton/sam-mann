import React from 'react';

export default function Header(props) {
  return <p style={{fontSize:'calc(16px + 2.5vw)', fontWeight:'700', paddingBottom: 10}}>{props.headerText}</p>
}
