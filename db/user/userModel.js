const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET ='ewgfvwergvwsgw5454gsrgvsvsd';

const UserSchema =new mongoose.Schema({
    username:{
        type:String,
        unique:true //字段是否唯一
    },
    password:{
        type:String,
        set(val){
            // 通过bcryptjs对密码加密返回值 第一个值返回值， 第二个密码强度
            return require('bcryptjs').hashSync(val,10)
        }
    }
})

const User = mongoose.model('users', UserSchema)

const auth = (req, res, next) => {

    const raw = req.headers.authorization ? String(req.headers.authorization).split(' ').pop() : '';
    // 验证
    jwt.verify(raw, SECRET,  async function (err, decode){
        if(decode && decode.id){
            req.user = await User.findById(decode.id);
            req._initId = decode.id
            next();
        }
        if(err){
            res.status(422).send({
                code: 0,
                message: '身份信息异常或已过期'
            })
        }
    })
}

module.exports = {jwt, SECRET, User, auth}