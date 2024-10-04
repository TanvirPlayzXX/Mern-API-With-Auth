const router = require('express').Router()
const {BlogGet,BlogPost,BlogPut,BlogDelete,UserRegister,UserLogin,getUsers,UserPut,UserDelete} = require('./controllers')
const { ensureAuthenticated } = require('./utils/auth')
const { userRegisterValidate ,userLoginValidate } = require('./utils/userValidatation')


// Blog Route Setup


router.get('/blog/get',BlogGet)
router.post('/blog/post',BlogPost)
router.put('/blog/edit/:id',BlogPut)
router.delete('/blog/delete/:id',BlogDelete)

// User Routes


router.post('/user/register',userRegisterValidate, UserRegister)
router.post('/user/login' ,userLoginValidate, UserLogin)
router.get('/user/getUsers' ,ensureAuthenticated ,getUsers)
router.put('/user/edit/:id',UserPut)
router.delete('/user/delete/:id',UserDelete)



module.exports = router