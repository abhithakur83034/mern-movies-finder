const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/node-movies',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection created with mongodb on port : 5500')
}).catch((error)=>{
    console.log(error)
});