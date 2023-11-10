const Message = require('../models/Message.model')

module.exports.addMessage = async (req, res, next) => {

    try {
        const {from,to,message} = req.body;
        const data = await Message.create({
            message:{
                text:message
            },
            users:[from,to],
            sender:from
        })
        if(data) return res.json({msg:'Message created successfully'})
        else return res.json({msg:'Failed to add message'})
    
    } catch (error) {
        console.log(error)
        next(error)
    }

}
module.exports.getAllMessage = async (req, res, next) => {

}