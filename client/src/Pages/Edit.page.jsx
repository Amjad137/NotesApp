import React, { useState } from "react";
import axios from "axios";

const Edit = ({ editNoteData, close }) => {
  const [notesData, setNotesData] = useState({
    Title: editNoteData.Title,
    Content: editNoteData.Content,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      //   setNotesData({ Title: noteData.Title, Content: noteData.Content });

      const requestBody = {
        NotesData: {
          Title: notesData.Title,
          Content: notesData.Content,
        },
      };

      await axios.put(`/notes/${editNoteData._id}`, requestBody, {
        headers: {
          "Content-type": "application/json",
        },
      });
      //   alert("Note Updated successfully");
      setLoading(false);
      close();
    } catch (error) {
      alert("Title/Content Cannot be Empty!");
      console.error(error);
      setLoading(false);
    }
  };

  const OnChange = (e) => {
    setNotesData({ ...notesData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-between p-4 gap-4 shadow-md shadow-slate-500 bg-slate-100 ">
          <textarea
            type="text"
            name="Title"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full resize-none"
            placeholder="Title"
            onChange={OnChange}
            value={notesData.Title}
          />

          <textarea
            type="text"
            name="Content"
            className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full h-60 resize-none"
            placeholder="Content"
            onChange={OnChange}
            value={notesData.Content}
          />
          <button
            type="submit"
            className="border-2 bg-red-600 p-2 text-white rounded-lg"
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Edit;
