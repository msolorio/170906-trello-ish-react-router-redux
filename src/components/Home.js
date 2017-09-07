import React from 'react';
import {connect} from 'react-redux';
import { newBoardInputChange, boardCreated } from '../actions';

export function Home(props) {

  function handleInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    props.dispatch(newBoardInputChange(e.target.value));
  }

  function boardAlreadyCreated(boardName) {
    if (boardName in props.boards) return true;
    return false;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (boardAlreadyCreated(props.inputVal)) {
      console.log('board already creted');
      return;
    }

    props.dispatch(boardCreated(props.inputVal));
    props.history.push(`/board/${props.inputVal}`);
    props.dispatch(newBoardInputChange(''));
  }

  return (
    <div className="Home">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <h1>Create a new board</h1>
        <label>Board Name: </label>
        <input value={props.inputVal}
          onChange={(e) => handleInputChange(e)}/>
        <button type="submit">create board</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(Home);
