const userModel = require('../model/userModels')
const bcrypt = require('bcryptjs');


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






const loginController = () => { }

module.exports = {
    loginController,
    registerController
}