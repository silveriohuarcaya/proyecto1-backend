require('dotenv').config();
//import "dotenv/config";
const express = require('express');
//import express from "express";
const routesConfig = require('./routes');
//import routesConfig from "./routes.js";
const connectDB = require('./config/database');
//import connectDatabase from "./config/database.js";
const configExpress = require('./config/express');
//import configExpress from "./config/express.js";

const app = express();

configExpress(app);
connectDB();
routesConfig(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Connecting to ${PORT}`);
});
