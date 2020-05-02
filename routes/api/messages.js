const express = require('express')
const router = express.Router()

// Messages Model
const Messages = require('../../models/Messages');

//@route GET api/messages
//@desc get ALL Messages
//@access Public

router.get('/',(req,res)=>{
    Messages.find()
    .sort({date:-1})
    .then(message => res.json(message))
})

//@route POST api/messages
//@desc Create a Message
//@access Public
router.post('/',(req,res)=>{
    const newMessage = new Messages({
        content: req.body.content
    });
    newMessage.save().then(message => res.json(message))
})

//@route DELETE api/messages/:id
//@desc delete a Message
//@access Public
router.delete('/:id',(req,res)=>{
 Messages.findById(req.params.id)
 .then(message => message.remove().then(()=>res.json({success:true})))
 .catch(err=> res.status(404).json({success: false}))
})




module.exports = router;
