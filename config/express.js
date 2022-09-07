const express = require("express");
//import express from "express";
const morgan = require("morgan");
//import morgan from "morgan";
//const cors = require("cors");

function configExpress(app) {
  app.use(express.json());
  app.use(morgan("dev"));
  // app.use(cors());
}
module.exports = configExpress;
//export default configExpress;
