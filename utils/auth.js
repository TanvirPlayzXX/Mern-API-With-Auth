const jwt = require('jsonwebtoken')

const ensureAuthenticated = async (req,res,next)=>{
    const codea = req.headers['authorization']
    if(!codea){
        return res.json("Token Is Required")
    }

    try{
        const decoded = jwt.verify(codea,process.env.SECRET)
        return next()
    }catch(err){
        return res.json({mesege: "Token is not Valid"})
    }
}

module.exports = {ensureAuthenticated}