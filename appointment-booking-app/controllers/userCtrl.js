const userModel = require('../model/userModels')
const bcrypt = require('bcryptjs');


//register callback function

const registerController = async(req,res) => {
    const {username,password} = req.body;
    try{
        const user = await userModel.findOne({username});
        if(user){
            return res.status(400).json({message:'User already exists'});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new userModel({
            username,
            password:hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
 }






const loginController = () => { }

module.exports = {
    loginController,
    registerController
}