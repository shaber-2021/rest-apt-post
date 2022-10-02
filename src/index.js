
const express = require('express');
const app = express();
require('./db/contact')
const Student = require('./models/student')
const port = 3000

app.use(express.json());

app.post('/',(req,res)=>{
    console.log(req.body)
    const student = new Student(req.body)
    student.save().then(()=>{
        res.status(200).send(student)
    }).catch((e)=>{
        res.status(400).send(e)
    })
    
})

app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})


