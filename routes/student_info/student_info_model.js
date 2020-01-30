const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 8,
        trim: true
    },
    age: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    grade: {
        type: String,
        required: true,
        unique: false,
        trim: true

    },
    address: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    date: {
        type: Date,
        required: true
    },
    timestamps: true
})

const Student = mongoose.model('Student', studentInfoSchema)


module.exports = Student
