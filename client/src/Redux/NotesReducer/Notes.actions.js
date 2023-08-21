import { SET_NOTES_DATA } from "./Notes.type";
import axios from "axios";

export const setNotesData = (data) => ({
  type: SET_NOTES_DATA,
  payload: data,
});

export const fetchNotesData = () => async (dispatch) => {
  try {
    const getNotesData = await axios.get("/notes");
    const receivedNotesData = getNotesData.data.AllNotes;

    dispatch(setNotesData(receivedNotesData));
  } catch (error) {
    alert(error.message);
  }
};
