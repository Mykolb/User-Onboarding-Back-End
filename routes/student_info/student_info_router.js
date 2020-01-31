const router = require('express').Router()
const Student = require('./student_info_model')
ObjectId = require('mongodb').ObjectID;
//ENDPOINT IS STUDENT



//get all student info 
//working
router.get('/', (req, res) => {
    Student.find()
    .then(students => res.status(200).json(students))
    .catch(err => res.status(404).json(err.message))
})

//get student by id 
//findOne returns document(row), looks for id by default
//working
router.get('/:id', (req, res) => {
    const id = req.params.id
    // { _id: new ObjectId(id)
    console.log("ID IS HERE", id)
    Student.findOne({_id: id})
    .then(student => res.status(200).json(student))
    .catch(err => res.status(404).json(err.message))
})

//add a student 
//needed create not insertOne 
//working
router.post('/', (req, res) => {
    const student_info = req.body

    Student.create(student_info)
    .then(student => res.status(201).json(student))
    .catch(err => res.status(500).json(err.message))
})


//put edit student info by id 
//didn't need to pass in the id params, throws err when you do 
router.put('/:id', (req, res) => {
    const student_info = req.body
    console.log(student_info)

    Student.updateOne(student_info)
    .then(student => res.status(200). json(student))
    .catch(err => res.status(500).json(err.message))
})

//delete student by id 
//working!
router.delete('/:id', (req, res) => {
    const id = req.params.id

    Student.deleteOne({_id: id})
    .then(student => res.status(201).end())
    .catch(err => res.status(500).json(err.message))
})

















module.exports = router