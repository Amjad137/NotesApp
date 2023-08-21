import { SET_NOTES_DATA } from "./Notes.type";

const initialState = {
  notesData: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES_DATA:
      return {
        ...state,
        notesData: action.payload,
      };
    default:
      return state;
  }
};
export default notesReducer;
