const jwt = require('jsonwebtoken');

const getToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check bearer token is undefined
    if(typeof bearerHeader !== "undefined") {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from arraay
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        next();
    }else {
        // Forbidden
        res.sendStatus(403);
    }
};

verifyToken =  (req, res) => {
    let userData = "";
    jwt.verify(req.token, 'theSecretKey', async (err, authData) => {
        if(err) { // Forbidden
            res.sendStatus(403);
        }
        userData = authData;
    });
    return userData;
};

const signToken =  (user, secretKey, res) => {
    jwt.sign({ user }, secretKey, { expiresIn: '10m'}, (err, token) => {
        res.json({ token });
    });
};
module.exports.getToken = getToken;
module.exports.verifyToken = verifyToken;
module.exports.signToken = signToken;
