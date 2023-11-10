const MessageModel = require('../models/Message.model');
// const Messages = require('../models/Message.model')

module.exports.addMessage = async (req, res, next) => {

    try {
        const {from, to, message } = req.body;
        console.log("from : " + from, to, message)
        const data = await MessageModel.create({
            message: {
                text: message
            },
            sender: from,
            users: [from, to],
        })
        if (data) {
            // console.log(data)
            return res.json({ msg: 'Message created successfully' })
        }
        return res.json({ msg: 'Failed to add message' })

    } catch (error) {
        console.log(error)
        next(error)
    }

}

module.exports.getAllMessage = async (req, res, next) => {
    try {
        const {from, to} = req.body;
        const messages = await MessageModel.find({
            users:{
                $all:[from, to]
            },
        }).sort({updatedAt:1});
        const projectedMessages = messages.map((msg)=>{
            return {
                fromSelf: msg.sender.toString() === from,
                message:msg.message.text,
            }
        })
        res.json(projectedMessages)
    } catch (error) {
        console.log(error)
        next(error)
    }
}