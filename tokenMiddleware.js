function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

function verifyToken(req, res, next) {
    jwt.verify(req.token, 'my_secret_key', (err, data) => {
        if (err) {
            console.log(req.token);
            return res.sendStatus(403);
        }

        req.userData = data;
        next();
    });
}

module.exports = ensureToken, verifyToken;