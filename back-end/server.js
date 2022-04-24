"use strict";
/* eslint-env node, es6 */
const express = require("express");

const app = express();
const PORT = 8080;

//import de la page d'accueil du site
//const generatePageAccueil = require("./pages/index-get.js");

app.get("/", async (req, res) => {
  res.render("C:Users/DELL/Desktop/apicreateapp/src");
});
app.get("/about", async (req, res) => {
  res.send("salut les girls, vous ");
});

/*
app.use(
  "/styles",
  express.static("C:UsersDELLDesktopapicreateapp/src/styles/app.css")
);
app.use(
  "/assets/images",
  express.static("C:UsersDELLDesktopapicreateapp/src/assets/images/")
);*/
app.listen(PORT, () => {
  console.log(`server démarré !! : localhost : ${PORT}`);
});
