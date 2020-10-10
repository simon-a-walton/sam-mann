import React from 'react';

export default function Header(props) {
  return <h2 style={{fontWeight:'700', paddingBottom: 10}}>{props.headerText}</h2>
}
