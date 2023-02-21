const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const {User, auth, SECRET} = require('../db/user/userModel');
const {resData} = require('../utils/utils')

// 注册
router.post('/register', async (req, res) => {
    const resUser = await User.findOne({
        username: req.body.username
    })
    if (resUser) {
        resData.error(res, '账号已存在')
        return
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })

    // 返回出去
    resData.success(res, {
        data: {
            message: '注册成功',
            user
        }
    })
})

// 登录
router.post('/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })

    if (!user) {
        resData.error(res, "用户不存在")
        return
    }

    const isPasswordValid = require('bcryptjs').compareSync(
        req.body.password,
        user.password
    )

    if (!isPasswordValid) {
        resData.error(res, "密码错误或无效")
        return
    }

    const token = jwt.sign({
        id: String(user._id)
    }, SECRET)

    // 生成token
    resData.success(res, {
        user,
        token
    })
})

// (管理员)查询人员列表
router.get('/list', auth, async (req, res) => {
    User.find({}).then(data => {
        resData.success(res, data)
    }).catch(e => {
        resData.error(res, e)
    })
})

module.exports = router;
