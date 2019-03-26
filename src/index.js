const express= require ("express");
const mongoose= require("mongoose");
const cloudinary = require("cloudinary");
const nodemon = require ("nodemon");
const morgan =require ("morgan");
const path = require ("path");
const uuid=require("uuid/v4");
const multer =require ("multer");
const ejs = require("ejs");
const dotenv=require("dotenv").config();
const app = express();

//Config
app.set("port", process.env.PORT || 3000 );
app.set ("view engine", "ejs");
app.set("views", path.join(__dirname,"view"));
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  });
require("./database.js");

//middle
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
const storage=multer.diskStorage({
    destination:path.join(__dirname,"upload"),
    filename:(req,file,cb,filename)=>{
        cb(null,uuid() + path.extname(file.originalname));
    }
});
app.use(multer({storage:storage}).single("img"));



//rutas
app.use(require("./routes/routes.js"));

//puerto
app.listen(app.get("port"),()=>{
    console.log("server funcionando");
});