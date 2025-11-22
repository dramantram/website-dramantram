import fs from "fs";
import slugify from "slugify";
import CaseStudyModel from "../models/CaseStudyModel.js";

// Create Case Study
export const createCaseStudyController = async (req, res) => {
  try {
    const {
      case_study_name,
      slug,
      case_study_description,
      client,
      services,
      complexity,
      industry,
      duration,
      problem,
      solution,
      thumbnail_text,
    } = req.fields;

    const { thumbnail_image, image1, image2 } = req.files;

    // Validation
    switch (true) {
      case !case_study_name:
        return res.status(500).send({ error: "Case Study Name is required" });
      case !case_study_description:
        return res
          .status(500)
          .send({ error: "Case Study Description is required" });
      case !client:
        return res.status(500).send({ error: "Client is required" });
      case !services:
        return res.status(500).send({ error: "Services are required" });
      case !complexity:
        return res.status(500).send({ error: "Complexity is required" });
      case !industry:
        return res.status(500).send({ error: "Industry is required" });
      case !duration:
        return res.status(500).send({ error: "Duration is required" });
      case !problem:
        return res.status(500).send({ error: "Problem is required" });
      case !solution:
        return res.status(500).send({ error: "Solution is required" });
      case !thumbnail_text:
        return res.status(500).send({ error: "Thumbnail Text is required" });
      case !thumbnail_image && thumbnail_image.size > 100000: // 100kb
        return res.status(500).send({ error: "Thumbnail Image is required" });
      case !image1 && image1.size > 100000:
        return res.status(500).send({ error: "Image 1 is required" });
      case !image2 && image2.size > 100000:
        return res.status(500).send({ error: "Image 2 is required" });
    }

    const caseStudy = new CaseStudyModel({
      ...req.fields,
      slug: slugify(case_study_name, { lower: true, strict: true }),
    });

    if (thumbnail_image) {
      caseStudy.thumbnail_image.data = fs.readFileSync(thumbnail_image.path);
      caseStudy.thumbnail_image.contentType = thumbnail_image.type;
    }

    if (image1) {
      caseStudy.image1.data = fs.readFileSync(image1.path);
      caseStudy.image1.contentType = image1.type;
    }

    if (image2) {
      caseStudy.image2.data = fs.readFileSync(image2.path);
      caseStudy.image2.contentType = image2.type;
    }

    await caseStudy.save();
    res
      .status(200)
      .send({ success: true, message: "Case Study Created" }, caseStudy);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating case study",
    });
  }
};

export const getThumbnailImageController = async (req, res) => {
  try {
    const { pid } = req.params;
    const caseStudy = await CaseStudyModel.findById(pid).select(
      "thumbnail_image"
    );

    if (caseStudy?.thumbnail_image?.data) {
      res.set("Content-type", caseStudy.thumbnail_image.contentType);
      return res.status(200).send(caseStudy.thumbnail_image.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Thumbnail image not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting thumbnail image",
    });
  }
};

// Update Case Study
export const updateCaseStudyController = (req, res) => {
  res.send("Update Case Study");
};

// Delete Case Study
export const deleteCaseStudyController = (req, res) => {
  res.send("Delete Case Study");
};

// Get Single Case Study
export const getCaseStudyController = (req, res) => {
  res.send("Get Case Study");
};

// Get All Case Studies
export const getAllCaseStudiesController = async (req, res) => {
  try {
    // 1. Find all case studies
    // 2. .select("-thumbnail_image -image1 -image2") means:
    //    "Give me everything EXCEPT the heavy image files"
    // 3. We sort by createdAt so newest show first
    const caseStudies = await CaseStudyModel.find({})
      .select("-thumbnail_image -image1 -image2")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      count: caseStudies.length,
      message: "All Case Studies Fetched",
      caseStudies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting case studies",
      error: error.message,
    });
  }
};
