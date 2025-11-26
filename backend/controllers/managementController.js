import fs from "fs";
import slugify from "slugify";
import CaseStudyModel from "../models/caseStudyModel.js";

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

// Get Image 1
export const getImage1Controller = async (req, res) => {
  try {
    const { pid } = req.params;
    const image_1 = await CaseStudyModel.findById(pid).select("image1");

    if (image_1?.image1?.data) {
      res.set("Content-type", image_1.image1.contentType);
      return res.status(200).send(image_1.image1.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Image 1 not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting image 1",
    });
  }
};

// Get Image 2
export const getImage2Controller = async (req, res) => {
  try {
    const { pid } = req.params;
    const image_2 = await CaseStudyModel.findById(pid).select("image2");

    if (image_2?.image2?.data) {
      res.set("Content-type", image_2.image2.contentType);
      return res.status(200).send(image_2.image2.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Image 2 not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting image 2",
    });
  }
};

// Update Case Study
export const updateCaseStudyController = async (req, res) => {
  try {
    // 1. Extract ID from params
    // This now works because the route is defined as /update-case-study/:id
    const { id } = req.params;

    // Debugging: Check if ID is coming through
    // console.log("Update ID:", id);

    // 2. Extract text fields
    const {
      case_study_name,
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

    // 3. Extract files
    const { thumbnail_image, image1, image2 } = req.files;

    // 4. Validation
    if (!id) {
      return res
        .status(400)
        .send({ success: false, message: "Case Study ID is required" });
    }

    // 5. Find existing
    const caseStudy = await CaseStudyModel.findById(id);
    if (!caseStudy) {
      return res
        .status(404)
        .send({ success: false, message: "Case Study not found" });
    }

    // 6. Update Text Fields
    if (case_study_name) {
      caseStudy.case_study_name = case_study_name;
      caseStudy.slug = slugify(case_study_name);
    }

    caseStudy.case_study_description = case_study_description;
    caseStudy.client = client;
    caseStudy.services = services;
    caseStudy.complexity = complexity;
    caseStudy.industry = industry;
    caseStudy.duration = duration;
    caseStudy.problem = problem;
    caseStudy.solution = solution;
    caseStudy.thumbnail_text = thumbnail_text;

    // 7. Handle Image Updates
    // We only update if a file is actually sent (size > 0)

    // Thumbnail
    if (thumbnail_image && thumbnail_image.size > 0) {
      if (thumbnail_image.size > 1000000) {
        return res
          .status(500)
          .send({ success: false, message: "Thumbnail > 1MB" });
      }
      caseStudy.thumbnail_image.data = fs.readFileSync(thumbnail_image.path);
      caseStudy.thumbnail_image.contentType = thumbnail_image.type;
    }

    // Image 1
    if (image1 && image1.size > 0) {
      if (image1.size > 1000000) {
        return res
          .status(500)
          .send({ success: false, message: "Image 1 > 1MB" });
      }
      caseStudy.image1.data = fs.readFileSync(image1.path);
      caseStudy.image1.contentType = image1.type;
    }

    // Image 2
    if (image2 && image2.size > 0) {
      if (image2.size > 1000000) {
        return res
          .status(500)
          .send({ success: false, message: "Image 2 > 1MB" });
      }
      caseStudy.image2.data = fs.readFileSync(image2.path);
      caseStudy.image2.contentType = image2.type;
    }

    // 8. Save
    await caseStudy.save();

    res.status(200).send({
      success: true,
      message: "Case Study Updated Successfully",
      caseStudy,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating case study",
      error,
    });
  }
};

// Delete Case Study
export const deleteCaseStudyController = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Find and Delete the case study in one step
    // Since your images are stored as Buffer data inside the document,
    // deleting the document automatically cleans up the images too.
    const result = await CaseStudyModel.findByIdAndDelete(id);

    // 2. Check if case study existed
    if (!result) {
      return res.status(404).send({
        success: false,
        message: "Case Study not found",
      });
    }

    // 3. Send Success Response
    res.status(200).send({
      success: true,
      message: "Case Study Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting case study",
      error,
    });
  }
};

// Get Single Case Study
// Get Single Case Study by Slug
export const getCaseStudyController = async (req, res) => {
  try {
    const { slug } = req.params;

    // 1. Find by slug
    // 2. Exclude the binary photo data (we will fetch via URL)
    const caseStudy = await CaseStudyModel.findOne({ slug }).select(
      "-thumbnail_image -image1 -image2"
    );

    if (!caseStudy) {
      return res.status(404).send({
        success: false,
        message: "Case Study not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Case Study Fetched",
      caseStudy,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting case study",
    });
  }
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
