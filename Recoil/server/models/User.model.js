const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        min: 3,
        max: 15
    },
    purchasedCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {
    timestamps: true
})

const User = new mongoose.model('User', userSchema);

module.exports = User;