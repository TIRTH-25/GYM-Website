const express = require("express");
const Lead = require("../models/Lead");

const router = express.Router();

// POST /api/leads
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      message,
      selectedPlan,
    } = req.body;

    // Check required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // Create lead in MongoDB
    const lead = await Lead.create({
      name,
      email,
      phone,
      message,
      selectedPlan,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully.",
      lead,
    });
  } catch (error) {
    console.error("Create lead error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while creating the lead.",
    });
  }
});

// GET /api/leads
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error("Get leads error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching leads.",
    });
  }
});

module.exports = router;