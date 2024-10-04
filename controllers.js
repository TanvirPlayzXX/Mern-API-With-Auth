const BlogSchema = require('./models/BlogSchema')
const UserSchema = require('./models/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Blog Controllers

module.exports = {
BlogGet : async (req,res)=>{
    try{
        let get = await BlogSchema.find()
        get
        res.send(get)
    }catch(err){
        res.send(`The Problem Is ${err}`)
    }

},
 BlogPost : async (req,res)=>{
    try{
        let get = await BlogSchema.create(req.body)
        get
        res.send("Succeed")
    }catch(err){
  res.send(`The Problem Is ${err}`)
    }
},


 BlogPut : async (req,res)=>{
try{
    const {id} = req.params
    const edited = await BlogSchema.findByIdAndUpdate(id,req.body)
    const editedValue = await BlogSchema.findById(id)
await res.send(`Edit Succeed Value:${editedValue}`)
}catch(err){
    console.log(err)
}
},

 BlogDelete : async (req,res)=>{
try{
    const {id} = req.params
const del = await BlogSchema.findByIdAndDelete(id)
res.send("succeed")
}catch(err){
    console.log(err)
}
},




// User Controllers

 UserRegister : async (req,res)=>{
    let {name,email,pass} = req.body
    
    try{
        let get = await UserSchema.create({
            name,email,pass: await bcrypt.hash(pass,10)
        })
        get
        res.send("Succeed")
    }catch(err){
        res.send(`The Problem Is ${err}`)
    }


},




 UserLogin : async (req,res)=>{
    try{
        const user = await UserSchema.findOne({email:req.body.email})
        if(!user){
            return res.json({messege:"not Found"})
        }
        const isPassEqual = await bcrypt.compare(req.body.pass, user.pass)
        
        if(!isPassEqual){
            res.send({messege: "Invalid Password"})
        }
        const tokenObject = {
            _id: user._id,
            name: user.name,
            email: user.email
        }
        const jwtToken = jwt.sign(tokenObject,process.env.SECRET,{expiresIn: "1h"})
        res.send({jwtToken,tokenObject})

}catch(err){
    console.log(err)
} 
},




getUsers : async (req,res)=>{
    try{
        let get = await UserSchema.find()
        get
        res.send(get)
    }catch(err){
        res.send(`The Problem Is ${err}`)
    }
},



 UserPut : async (req,res)=>{
try{
    const {id} = req.params
    const edited = await UserSchema.findByIdAndUpdate(id,req.body)
    const editedValue = await UserSchema.findById(id)
await res.send(`Edit Succeed Value:${editedValue}`)
}catch(err){
    console.log(err)
}
}
,




UserDelete : async (req,res)=>{
try{
    const {id} = req.params
const del = await UserSchema.findByIdAndDelete(id)
res.send("succeed")
}catch(err){
    console.log(err)
}
}




}
