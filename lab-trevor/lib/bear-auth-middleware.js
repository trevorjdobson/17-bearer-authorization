function processBearer(req,res,next){
    let authHeader = req.get('Authroization');
    var token = authHeader.split('Bearer')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err){
            res.status(401).send(err);
            return;
        }
        
    })
}

let authorization = function (req, res, next){
    var authHeader = req.headers.authorization;
    var token = authHeader.split('Bearer')[1];

}

