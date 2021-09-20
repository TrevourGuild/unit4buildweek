const router = require('express').Router()
const User = require('../models/register-model')
const bcrypt = require('bcryptjs')


router.post('/', async (req, res, next) =>{
    try{
        const { username, password } = req.body
        const hash = bcrypt.hashSync(password, 8)
        const newUser = {username, password: hash}
        const user = await User.add(newUser)

        res.status(201).json(user)
    } catch (err){
        next(err)
    }
})



module.exports = router