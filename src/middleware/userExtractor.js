const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //Make sure the authorization is correct
    const auth = req.get('authorization')
    let token = null

    if (auth && auth.toLowerCase().startsWith('bearer')) {
        token = auth.split(' ')[1]
    }

    if (!token) {
        return res.status(401).json({
            error: 'Token missing or invalid'
        })
    }
    
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!decodedToken.id) {
        return res.status(401).json({
            error: 'The token can not be decoded'
        })
    }

    const { id: userId } = decodedToken
    req.userId = userId

    next()
}