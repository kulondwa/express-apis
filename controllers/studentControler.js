const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");

router.get("/", (req, res) => {
  res.render("/student/addOrEdit", {
    viewTitle: "Insert Student",
  });
});

router.post("/", (req, res) => {
  if (req.body._id === "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

const insertRecord = (req, res) => {
  var student = new Student();
  student.fullName = req.body.fullName;
  student.email = req.body.email;
  student.mobile = req.body.mobile;
  student.city = req.body.student;
  student.save((err, doc) => {
    if (!err) {
      res.redirect("student/list");
    } else {
      console.log("error during the insert", err);
    }
  });
};

const updateRecord = (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("student/list");
      } else {
        console.log("error during updating", err);
      }
    }
  );
};

router.get("/list", (req, res) => {
  Student.find((err, docs) => {
    if (!err) {
      res.render("student/list", {
        list: docs,
      });
    } else {
      console.log("error in retrialval", err);
    }
  });
});

router.get("/:id", (req, res) => {
  Student.findById(req.params.id, (req, doc) => {});
});
