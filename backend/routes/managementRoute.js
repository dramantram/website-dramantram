import express from "express";
import {
  createCaseStudyController,
  updateCaseStudyController,
  deleteCaseStudyController,
  getCaseStudyController,
  getAllCaseStudiesController,
  getThumbnailImageController,
} from "../controllers/managementController.js";

// Router object
const router = express.Router();

// Routing

// Create Case Study
router.post("/create-case-study", createCaseStudyController);

// Get Thumbnail Image
router.get("/get-thumbnail-image/:pid", getThumbnailImageController);

// Update Case Study
router.put("/update-case-study/:id", updateCaseStudyController);

// Delete Case Study
router.delete("/delete-case-study/:id", deleteCaseStudyController);

// Get Single Case Study
router.get("/get-case-study/:id", getCaseStudyController);

// Get All Case Studies
router.get("/get-case-studies", getAllCaseStudiesController);

export default router;
