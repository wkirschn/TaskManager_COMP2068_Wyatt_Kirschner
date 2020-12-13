var express = require('express');
var router = express.Router();

//Ref to task model

const Task = require('../models/task')

//GET ALL//
router.get('/', (req, res) =>
{
    Task.find((err, tasks) =>
    {
        if(err)
        {
            return res.send(err).status(400)
        }
        else
        {
            res.json(tasks).status(200)
        }
    })
})

router.get('/:_id', (req, res) =>
{
    Task.findById(req.params._id,(err, tasks) =>
    {
        if(err)
        {
            return res.send(err).status(400)
        }
        else
        {
            res.json(tasks).status(200)
        }
    })
})







// Make this public
module.exports = router;
