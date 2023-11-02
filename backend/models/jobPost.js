import mongoose from "mongoose";

const jobPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export const jobPost = mongoose.model("JobPost", jobPostSchema);
//module.exports = jobPost;
