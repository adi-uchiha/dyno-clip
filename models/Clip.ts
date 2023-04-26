import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const ClipSchema = new mongoose.Schema({
  clipKey: {
    type: String,
    required: [true, 'Clip Key not found'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  clipContent:{
    type: String,
    required : [true, 'Code is missing']
  }
  
})

export default mongoose.models.Clip || mongoose.model('Clip', ClipSchema)
