const userModel = require('../model/userModels')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//register callback function

const registerController = async (req, res) => {
    // const { username, password } = req.body;
    // const password = req.body.password;
    // const username = req.body.username;
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email });
        if (exisitingUser) {
            return res
                .status(200)
                .send({ message: "User Already Exist", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Register Controller ${error.message}`,
        });
    }
};






const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(200)
                .send({ message: "User Not Exist", success: false });
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res
                .status(200)
                .send({ message: "Invalid Email or Password", success: false });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).send({ message: "Login Sucessfully", success: true, token });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Login Controller ${error.message}`,
        });
    }
}

const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userID });
        if (!user) {
            return res
                .status(200)
                .send({ message: "User Not Found", success: false });
        }
        else{
            res.status(200).send({
                success:true,
                data:{
                    name:user.name,
                    email:user.email
                },
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: `Auth Controller ${error.message}`,
            error
        });
    }
}


module.exports = {
    loginController,
    registerController,
    authController
}