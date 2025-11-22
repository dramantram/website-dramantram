import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema(
  {
    case_study_name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    case_study_description: {
      type: String,
      trim: true,
    },

    client: {
      type: String,
      trim: true,
    },

    services: {
      type: String, // or Array<String> if you want → change to [String]
      trim: true,
    },

    complexity: {
      type: String,
      trim: true,
    },

    industry: {
      type: String,
      trim: true,
    },

    duration: {
      type: String,
      trim: true,
    },

    problem: {
      type: String,
      trim: true,
    },

    solution: {
      type: String,
      trim: true,
    },

    thumbnail_text: {
      type: String,
      trim: true,
    },
    thumbnail_image: {
      data: Buffer,
      contentType: String,
    },
    image1: {
      data: Buffer,
      contentType: String,
    },
    image2: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CaseStudy", CaseStudySchema);
