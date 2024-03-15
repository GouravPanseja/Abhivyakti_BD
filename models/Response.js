const mongoose = require("mongoose");

const ResponseSchema = mongoose.Schema({

    name:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:String,
    },
    gender:{
        type:String,
    },
    formId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Form",
        required:true,
    },
    data:{
        type:Object,
        required:true,
    }
})

module.exports = mongoose.model("Response", ResponseSchema);