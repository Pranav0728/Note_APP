import mongoose from "mongoose";
const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    note:{
        type:String,
        required:true
    }
})

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema)
export default Note