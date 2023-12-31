import React, { useEffect, useState } from "react";
import DefaultLayout from "../Layouts/Default.layout";
import axios from "axios";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import Popup from "../Components/Popup.component";
import { fetchNotesData } from "../Redux/NotesReducer/Notes.actions";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const allNotesData = useSelector((state) => state.notes.notesData); //to get All Notes from redux store
  const [editNoteData, setEditNoteData] = useState(); //to get the data of the Note which should be edited
  const [viewNote, setViewNote] = useState(); //to get the data of the note which should be viewed

  //triggers to open the PopUp
  const [openNote, setOpenNote] = useState(false); //to View Note
  const [openEditPage, setOpenEditPage] = useState(false); //to edit Note

  try {
    useEffect(() => {
      dispatch(fetchNotesData());
    }, [allNotesData, dispatch]);
  } catch (error) {
    alert(error);
    console.log(error);
  }

  //delete prompt to delete the Note
  const deleteNote = async (id) => {
    const promptAnswer = window.confirm(
      "Are You Sure You Want to Delete this Note ?"
    );
    if (promptAnswer) {
      await axios.delete(`/notes/${id}`);
    }
  };

  const openEditDialog = () => {
    setOpenEditPage(true);
  };

  const EditNote = async (id) => {
    const selectedNote = await axios.get(`/notes/${id}`);
    setEditNoteData(selectedNote.data.Note);
    openEditDialog();
  };
  const openViewDialog = () => {
    setOpenNote(true);
  };

  const openNoteContent = async (id) => {
    const selectedNoteToView = await axios.get(`/notes/${id}`);
    setViewNote(selectedNoteToView.data.Note);
    openViewDialog();
    // console.log(selectedNoteToView);
  };
  console.log(allNotesData);
  return (
    <>
      <Popup
        isOpen={openEditPage}
        setIsOpen={setOpenEditPage}
        pageName="Edit"
        editNoteData={editNoteData}
      />
      <Popup
        isOpen={openNote}
        setIsOpen={setOpenNote}
        pageName="ViewPage"
        noteData={viewNote}
      />
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10 ">
        {allNotesData.map((each, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-60 h-36 border-2 rounded-lg cursor-pointer md:h-72 shadow-lg"
          >
            <div
              className="flex flex-col overflow-hidden whitespace-pre-wrap h-full w-full"
              onClick={() => {
                openNoteContent(each._id);
              }}
            >
              <h1 className=" text-xl font-semibold border-b-2 mb-2 p-2 truncate">
                {each.Title}
              </h1>
              <h3 className="text-sm text-gray-600 h-full w-full overflow-clip">
                {each.Content}
              </h3>
            </div>
            <div className="justify-between flex flex-row text-xl border-t-2 p-2">
              <button>
                <LuEdit
                  className="text-blue-700 hover:cursor-pointer"
                  onClick={() => {
                    EditNote(each._id);
                  }}
                />
              </button>
              <RiDeleteBin5Line
                className="text-red-600 hover:cursor-pointer"
                onClick={() => deleteNote(each._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DefaultLayout(HomePage);
