const {Schema, model}= require ("mongoose");

const schema=new Schema(
    {
        nombre:{type:String},
        ruta:{type:String},
        create_as: {type:Date,default:Date.now()}
    }

   
);
module.exports=model("model",schema);
