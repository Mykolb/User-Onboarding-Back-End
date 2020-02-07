const router = require('express').Router()
const Student = require('./student_info_model')
const mongoose = require('mongoose')
//ENDPOINT IS STUDENT

//get all student info 
//working
router.get('/', (req, res) => {
    Student.find()
    .then(students => {
        if(students.length > 0) {
            res.status(200).json(students)
        }else {
            res.status(404).json({ message: 'There are no students in the database.'})  
        }
    })
    .catch(err => console.log(err))
})

//get student by id 
//findOne returns document(row), looks for id by default
//working
router.get('/:id', (req, res) => {
    const id = req.params.id
    // { _id: new ObjectId(id)
    console.log("ID IS HERE", id)
    Student.findOne({_id: id})
    .then(student => {
        if(student) {
            res.status(200).json(student)
        } else {
            res.status(404).json({message: 'The student associated with this id cannot be found.'})
        }
    })    
    .catch(err => console.log(err))
})

//add a student 
//needed create not insertOne 
//working
router.post('/', (req, res) => {
    // const student_info = req.body

    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade,
        address: req.body.address,
        date: req.body.date
    })

    Student.create(student)
    .then(student => {
        if(student) {
            res.status(201).json({message: 'The student has been created succesfully.'})
    } else {
        res.status(500).json({message: 'There was an issue creating a student.'})
    }
    })
    .catch(err => console.log(err))
})


//delete student by id 
//working!

router.delete('/:id', (req, res) => {
    const id = req.params.id

     Student.remove({_id: id})
     .exec()
     .then(student => {
        if(student) {
            res.status(201).json({student, message: 'The student was successfully deleted.'})
    } else {
        res.status(404).json({message: 'The student associated with this id cannot be found.'})
    }
}) 
.catch(err => console.log(err))
})


module.exports = router;