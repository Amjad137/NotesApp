import express from "express";
import { NotesModel } from "../../database/Notes";
const Router = express.Router();
import { validateInput } from "../../validation/validate";
/*
Route         /
Descrip       Add Notes Contents
Params        None
Access        Public
Method        POST
*/

Router.post("/", async (req, res) => {
  try {
    await validateInput(req.body.credentials);
    const NotesData = req.body.credentials;
    await NotesModel.create(NotesData);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/*
Route         /edit
Descrip       Update Notes Contents
Params        _id
Access        Public
Method        PUT
*/

Router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { NotesData } = req.body;
    const updatedNotesData = await NotesModel.findByIdAndUpdate(
      _id,
      {
        $set: NotesData,
      },
      { new: true }
    );
    return res.json({ Notes: updatedNotesData });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

/*
Route         /
Descrip       Delete Notes
Params        /:_id
Access        Public
Method        DEL
*/

Router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await NotesModel.findByIdAndDelete({ _id: id });

    return res.json({ review: "Note Deleted Successfully" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

/*
Route         /
Descrip       Get All Notes Contents
Params        None
Access        Public
Method        GET
*/

Router.get("/", async (req, res) => {
  try {
    const AllNotes = await NotesModel.find();
    return res.json({ AllNotes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
Route         /
Descrip       Get Particular Note by ID
Params        /:_id
Access        Public
Method        GET
*/

Router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Note = await NotesModel.findOne({ _id: id });
    return res.json({ Note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default Router;
