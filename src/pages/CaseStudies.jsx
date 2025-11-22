import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import "../styles/CaseStudiesPage.css"; // Make sure to import your CSS file
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // API URL helper
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch all case studies
  const getAllCaseStudies = async () => {
    try {
      const { data } = await axios.get(
        `${apiUrl}/api/v1/management/get-case-studies`
      );
      if (data?.success) {
        setCaseStudies(data.caseStudies);
      }
    } catch (error) {
      console.log(error);
      // You might want to add a toast.error here
      toast.error(res.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCaseStudies();
  }, []);

  return (
    <Layout>
      <div className="case-studies-container">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 text-white">
              Our <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-secondary">
              Explore our recent projects and success stories.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center text-white">
              <h3>Loading projects...</h3>
            </div>
          )}

          {/* Grid System */}
          <div className="row">
            {!loading &&
              caseStudies?.map((c) => (
                <div className="col-md-4 mb-4" key={c._id}>
                  <div className="custom-card">
                    {/* Thumbnail Image */}
                    <div className="card-img-wrapper">
                      <img
                        src={`${apiUrl}/api/v1/management/get-thumbnail-image/${c._id}`}
                        alt={c.case_study_name}
                      />
                    </div>

                    {/* Content */}
                    <div className="card-body">
                      <h5 className="card-title">{c.case_study_name}</h5>

                      {/* Display Industry or Thumbnail text as a small badge */}
                      {c.industry && (
                        <span className="badge bg-secondary mb-2">
                          {c.industry}
                        </span>
                      )}

                      {/* Description (Truncated to 100 chars) */}
                      <p className="card-text">
                        {c.case_study_description?.substring(0, 100)}...
                      </p>

                      <button
                        className="btn btn-gradient"
                        onClick={() => navigate(`/case-study/${c.slug}`)} // Replace with navigate(`/case-study/${c.slug}`)
                      >
                        View Case Study
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* No Results State */}
          {!loading && caseStudies.length === 0 && (
            <div className="text-center text-white mt-5">
              <h4>No case studies found.</h4>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
