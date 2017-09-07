import * as actions from '../actions';
const initialState = {
  inputVal: '',
  boards: {}
};

export const trelloReducer = (state=initialState, action) => {
  if (action.type === actions.NEW_BOARD_INPUT_CHANGE) {
    return Object.assign({}, state, {
      inputVal: action.inputVal
    });
  }

  if (action.type === actions.BOARD_CREATED) {
    const boardsClone = Object.assign({}, state.boards);
    boardsClone[action.boardTitle] = [];

    console.log(boardsClone);

    return Object.assign({}, state, {
      boards: boardsClone
    });
  }

  return state;
}
