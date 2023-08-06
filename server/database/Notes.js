import mongoose from "mongoose";

const NotesSchema = mongoose.Schema(
  {
    Title: { type: String, required: true },
    Content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const NotesModel = mongoose.model("Notes", NotesSchema);
