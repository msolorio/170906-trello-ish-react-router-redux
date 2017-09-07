export const NEW_BOARD_INPUT_CHANGE = 'NEW_BOARD_INPUT_CHANGE';
export const newBoardInputChange = (inputVal) => ({
  type: NEW_BOARD_INPUT_CHANGE,
  inputVal
});

export const BOARD_CREATED = 'BOARD_CREATED';
export const boardCreated = (boardTitle) => ({
  type: BOARD_CREATED,
  boardTitle
});
