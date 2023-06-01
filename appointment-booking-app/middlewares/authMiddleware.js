const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token",
                    success: false
                })
            }
            else {
                req.body.userID = decode.id
                next()
            }
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Invalid Token",
            success: false
        })
    }
}

// next will further execute the code .