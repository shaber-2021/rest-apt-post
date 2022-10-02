const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sunday')
.then(()=>{console.log('your connection is successful')})
.catch((err)=>{console.log(`your connection is ${err}`)})

