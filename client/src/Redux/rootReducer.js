import { combineReducers } from "redux";
import notesReducer from "./NotesReducer/Notes.reducer";

const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;
