const Joi = require('joi')

module.exports = {
 userRegisterValidate : (req,res,next)=>{
    const schema = Joi.object({
        name:Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        pass: Joi.string().min(3).max(100).required()
    })
    const {error,value} = schema.validate(req.body)
    if(error){
        return res.json({messege:"Bad Request",error})
    }
    next()
},

userLoginValidate : (req,res,next)=>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        pass: Joi.string().min(3).max(100).required()
    })
    const {error,value} = schema.validate(req.body)
    if(error){
        return res.json({messege:"Bad Request",error})
    }
    next()
}
}

