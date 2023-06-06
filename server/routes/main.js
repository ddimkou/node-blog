const express = require("express");
const router = express.Router();

// Route
router.get("", (req, res) => {
  const locals = {
    title: "nodejs blog",
    description: "Simple blog created w node, express mongo,db",
  };
  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
