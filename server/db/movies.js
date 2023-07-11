const mongoose = require('mongoose');



const moviesSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    genres:{
        type:Array,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    },
    runtime:{
        type:String,
        require:true
    },
    director:{
        type:String,
        require:true
    },
    actors:{
        type:String,
        require:true
    },
    plot:{
        type:String,
        require:true
    },
   
});

module.exports = mongoose.model('movies',moviesSchema);