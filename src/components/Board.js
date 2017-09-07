import React from 'react';

export default function Board(props) {
  console.log('props:', props);

  return (
    <div className="Board">
      Board Name: {props.match.params.boardId}
    </div>
  )
}
