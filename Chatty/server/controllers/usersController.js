const User = require('../models/User.Model')
const bcrypt = require('bcrypt')


module.exports.register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const usernameCheck = await User.findOne({ username })
        if (usernameCheck) {
            return res.json({ msg: "Username already exists!", status: false })
        }
        const emailCheck = await User.findOne({ email })
        if (emailCheck) {
            return res.json({ msg: "Email already exists!", status: false })
        }
        const hashedPassword = await bcrypt.hash(password, 8)
        const user = await User.create({ email, username, password: hashedPassword });
        delete user.password
        return res.json({ status: true, user: user , msg: "Account created successfully"})
    } catch (error) {
        throw error
    }
};