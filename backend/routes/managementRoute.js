import express from "express";
import {
  createCaseStudyController,
  updateCaseStudyController,
  deleteCaseStudyController,
  getCaseStudyController,
  getAllCaseStudiesController,
  getThumbnailImageController,
  getImage1Controller,
  getImage2Controller,
} from "../controllers/managementController.js";
import formidable from "express-formidable";

// Router object
const router = express.Router();

// Routing

// Create Case Study
router.post("/create-case-study", createCaseStudyController);

// Get Thumbnail Image
router.get("/get-thumbnail-image/:pid", getThumbnailImageController);

// Get Image 1
router.get("/get-image-1/:pid", getImage1Controller);

// Get Image 2
router.get("/get-image-2/:pid", getImage2Controller);

// Update Case Study
router.put("/update-case-study/:id", formidable(), updateCaseStudyController);

// Delete Case Study
router.delete("/delete-case-study/:id", deleteCaseStudyController);

// Get Single Case Study
router.get("/get-case-study/:slug", getCaseStudyController);

// Get All Case Studies
router.get("/get-case-studies", getAllCaseStudiesController);

export default router;
