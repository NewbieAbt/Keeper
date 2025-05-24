import express  from "express";
const router = express.Router();
import {
  get_all_notes,
  add_note,
  get_one_note,
  update_note,
  delete_note,
} from '../controllers/note.controller.js'


router.get("/allNotes",get_all_notes);
router.post("/addNote",add_note);
router.get("/noteDetails/:id", get_one_note);
router.patch("/updateNote/:id",update_note);
router.delete("/deleteNote/:id",delete_note);

export default router;