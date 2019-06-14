var express = require('express');

var router = express.Router();

Movie = require('../models/movie');



router.get('/movies', function(req, res){
    var query = req.query

    Movie.find(query, function(err, genres){
        if(err){
            res.send(err)
        }
        res.json({
            'confirmation': 'success',
            'data': genres
            })
    })
})

router.post('/movies', function(req, res){
    var movie = req.body

    Movie.create(movie, function(err, movie){
        if(err){
            res.send(err)
        }
        res.json({
            'confirmation': 'success',
            'data': movie
            })
    })
})

router.put('/movies', function(req, res){
    var query = req.body
    queryID = query.id

    Movie.findByOneAndUpdate(query, queryID, function(err, genre){
        if(err){
            res.send(err)
        }
        res.json({
            'confirmation': 'success',
            'data': genre
            })
    })
})

router.delete('/movies/:_id', function(req, res){
    var id = req.params._id

    Movie.findOneAndRemove(id, function(err, genre){
        if(err){
            res.send(err)
        }
        res.json({
            'confirmation': 'success',
            'data': genre
            })
    })
})

router.get('/movies/:id', function(req, res){
    var id = req.params.id
    Movie.findById(id, function(err, movie){
        if(err){
            res.send(err)
        }
        res.json({
            'confirmation': 'success',
            'data': movie
            })
    })
})
module.exports = router;

