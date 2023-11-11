const MessageModel = require('../models/Message.model');
// const Messages = require('../models/Message.model')

module.exports.addMessage = async (req, res, next) => {

    try {
        const {from, to, message } = req.body;
        if (!from || !to || !message) {
            return res.status(400).json({ msg: 'Missing required fields' });
        }
        const data = await MessageModel.create({
            message: {
                text: message,
                users: [from, to],
                sender: from,
            },
        })
        if (data) {
            // console.log(data)
            return res.json({ msg: 'Message created successfully' })
        }
        return res.json({ msg: 'Failed to add message' })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Internal Server Error' });
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