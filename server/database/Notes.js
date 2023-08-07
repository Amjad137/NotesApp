import mongoose from "mongoose";

const NotesSchema = mongoose.Schema(
  {
    Title: { type: String },
    Content: { type: String },
  },
  {
    timestamps: true,
  }
);

export const NotesModel = mongoose.model("Notes", NotesSchema);
