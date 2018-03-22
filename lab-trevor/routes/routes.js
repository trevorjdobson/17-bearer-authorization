
const jwt = require('')


// let username = 'minutemaid';
// let password = 'applejuice';
// let encoded = btoa(username + ':' + password);
// let header = 'Authorization: Basic ' + encoded;


route.get('/signin', (req, res) => {
    let authHeader = req.get('Authorization');
    let payload = authHeader.split('Basic')[1];
    let decoded = Buffer.from(payload, 'base64').toString();
    let decoded = decoded.split(':');
    usernameFromHeader = decoded[0];
    passwordFromHeader = decoded[1];

    User.find({username: usernameFromHeader})
    .then(user => {
        bcruypt.compare(passwordFromHeader, user.passwordHash, (err, isValid) => {
            if(!isValid){
                res.sendStatus(401);
                return;
            }
            let payload = {
                userId: user._id
            };
            let token = jwt.sign(payload, process.env.SECRET);
            res.sendStatus(200).send(token);
        });
    });
});