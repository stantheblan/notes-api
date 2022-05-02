const express = require('express');
const router = express.Router();
const Notes = require('../models/notes.js');

// index
router.get('/', (req, res)=>{
    Notes.find({}, (err, foundNotes)=>{
        res.json(foundNotes);
    });
});

//new -> form
//create -> posts it
//update -> form

//delete
router.delete('/:id', (req, res)=>{
    Notes.findByIdAndRemove(req.params.id, (err, deletedNote)=>{
        res.json(deletedNote);
    });
});

//update
router.put('/:id', (req, res)=>{
    Notes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedNote)=>{
        res.json(updatedNote);
    });
});

//create 
router.post('/', (req, res)=>{
    Notes.create(req.body, (err, createdNote)=>{
        res.json(createdNote);
    });
});



// Show
router.get('/:id', (req, res) => {
    Notes.findById(req.params.id, (err, foundNote) => {
        res.json(foundNote)
    })
})
module.exports = router;