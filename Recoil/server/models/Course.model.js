const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    price:{
        type:Number
    },
    imageLink:{
        type:String
    },
    published: {
        type: Boolean,
    }
}, {
    timestamps: true
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;