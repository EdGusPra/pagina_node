const {Router} = require("express");
const routes=Router();
const Model= require("../model/model");
const cloudinary = require("cloudinary");
const fs=require ("fs-extra");

routes.get("/",(req,res)=>{
    res.render("view");
});

routes.post("/img", async (req,res)=>{
    let result= await cloudinary.v2.uploader.upload(req.file.path);
    const image=new Model();
    image.nombre=req.file.originalname;
    image.ruta=result.secure_url;
    await image.save();
    //const imag = await Model.find();
    fs.unlink(req.file.path);
    res.redirect("/imag");
})
routes.get("/imag", async(req,res)=>{
    const imag = await Model.find();
    //console.log(imag);
    res.render("img",{imag});
});
module.exports= routes;