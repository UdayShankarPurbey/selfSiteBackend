import mongoose ,{Schema} from "mongoose";


const gallerySchema = new Schema(
  {
    imageUrl : {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Gallery = mongoose.model("Gallery", gallerySchema)
