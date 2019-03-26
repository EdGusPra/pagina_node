const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/imagen",{useNewUrlParser:true}).then(console.log("db connected"));
;