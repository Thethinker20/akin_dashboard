const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login", { layout: false });
});

router.get("/home", (req, res) => {
  res.render("pages/dash_home");
});
router.get("/quotation", (req, res) => {
  res.render("pages/quotation");
});
router.get("/profile", (req, res) => {
  res.render("pages/profile");
});

router.get("/icon", (req, res) => {
  res.render("pages/icons");
});


module.exports = router;