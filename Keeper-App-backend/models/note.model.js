import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type:String,
        required:true,
    }
},{timestamps:true})

const NoteModel = mongoose.model("note",NoteSchema)

export default NoteModel;