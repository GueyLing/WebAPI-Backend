const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try{
        const players = await User.find();
        res.status(200).json({players});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

const createUser = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            username: req.body.name,
            password: hashedPassword,
            role: req.body.role,
          });
        await user.save();
        res.status(200).send({user})
    } catch {
        res.status(500).send()
    }
}

const login = async (req, res) => {
    
    const user = await User.findOne({ username: req.body.name });
    const token = jwt.sign({user}, 'my_secret_key');
    if (user == null) {
        res.json({ message: 'login_fail' });
    }
    try{
        if (await bcrypt.compare(req.body.password, user.password)){
            if (req.body.role === 'admin' && user.role === 'admin') {
                res.json({ message: 'login_success_admin', token: token  });
            } else if (req.body.role === 'user' && user.role === 'user') {
                res.json({ message: 'login_success_user', token: token  });
            } else {
                res.json({ message: 'login_fail', token: token  });
            }
        } else {
            res.send('Not Allowed')
        }
    }catch (err){
        //console.error(err);
        res.status(500).send()
    }
}

module.exports = {
    getUsers,
    createUser,
    login
}