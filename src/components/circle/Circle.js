import React from 'react';

const Circle = ({
  size = '70px',
  backgroundColor = '#4B5548',
  boxShadow= '0px 15px 40px 5px #736f6f',
  color = '#fff',
  children,
  position = 'absolute', 
  top = '30%', 
  style = {},
}) => {
  const circleStyle = {
    
    width: size,
    height: size,
    backgroundColor,
    boxShadow,
    color,
    borderRadius: '50%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position, 
    top, 
    ...style,
  };

  return <div style={circleStyle}>{children}</div>;
};

export default Circle;
