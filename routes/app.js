const express = require("express");
const router = express.Router();
const Form = require("../models/User");

// import controllers
const {changePassword,sendOtp,login,signup, getUser} = require("../controllers/Auth");
const {createForm, getAllForms, getForm, deleteForm} = require("../controllers/Form");
const {getAllTemplates} = require("../controllers/Template");
const {resetPasswordToken, resetPassword} = require("../controllers/ResetPassword")

//import middlewares
const {auth,isAdmin,isFormFiller} = require("../middlewares/auth");


// authorisation
router.post("/sendOtp",sendOtp);                            // verified
router.post("/signup",signup); 

router.post("/login", login);
router.post("/resetPasswordToken",resetPasswordToken);
router.post("/resetPassword", resetPassword);

router.get("/getUser",auth,getUser);

// others
router.get("/getAllForms",auth, isAdmin,getAllForms);

router.get("/getAllTemplates",auth,isAdmin,getAllTemplates);

// TODO: getForm api pending
router.get("/createForm", auth,isAdmin,createForm);
router.delete("/deleteForm",auth,isAdmin, deleteForm);


router.get("/idk", async(req,res)=>{

    const forms = await Form.find();

    res.status(200).json({
        data:forms,
    })
})


module.exports = router;
