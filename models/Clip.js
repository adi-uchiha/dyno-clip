import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const ClipSchema = new mongoose.Schema({
  clipKey: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  content: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  }
})

export default mongoose.models.ClipSchema || mongoose.model('Clip', ClipSchema)
