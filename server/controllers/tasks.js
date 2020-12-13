var express = require('express');
var router = express.Router();

//Ref to task model

const Task = require('../models/task')
const globals = require('../../config/globals')

// Allow cross origin requests

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', globals.clientRoot);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Origin', 'GET, POST, PUT,DELETE,OPTIONS');
    next();
})




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
