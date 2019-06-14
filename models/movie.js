var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    plot : {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    box_office: {
        type: Number,
        required: true
    },
    directed_by:{
        type : String,
        required : true
    },
    date_released:{
        type : Date,
        default : Date.now()
    }
})

var Movie = module.exports = mongoose.model('Movie' , movieSchema);

