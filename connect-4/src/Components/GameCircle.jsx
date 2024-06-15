import React from 'react';

const onClick = (id, color) => {

    alert("on click " + id);
}

const GameCircle = ({id, color, children}) => {
  console.log(id);
  return (
    <div style={{ backgroundColor: color, width: 100, height: 100, margin: 10 }} onClick={() => onClick(id)}>
        {children}
    </div>
  )
}

export default GameCircle;