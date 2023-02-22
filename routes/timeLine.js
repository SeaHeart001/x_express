var express = require('express');
var router = express.Router();
const {auth} = require('../db/user/userModel');
const {TimeLines} = require('../db/timeLine/timeLine');
const {resData} = require('../utils/utils');

// 新增
router.post('/add', auth, async (req, res) => {

    TimeLines.create({
        userId: req._initId,
        content: req.body.content
    }).then(data => {
        resData.success(res, data)
    }).catch(e => {
        resData.error(res, e)
    });
})

// 任务列表
router.get('/list', auth, async (req, res) => {
    let options = {userId: req._initId}
    findTimeList(options, req, res)
})

// 根据任务id删除任务列表
router.delete('/list/:id', auth, async (req, res) => {
    TimeLines.deleteOne({_id: req.params.id}).then(data => {
        resData.success(res, '删除成功')
    }).catch(e => {
        resData.error(res, e)
    })
})

function findTimeList(options, req, res) {
    const page = req.query.page || 1;
    const size = req.query.size || 10;
    TimeLines.count(options, (err, count) => {
        TimeLines.find(options).sort({timeString: -1}).skip((parseInt(page) - 1) * parseInt(size)).limit(parseInt(size)).then(data => {
            let d = {
                total: count,
                data: data
            }
            resData.success(res, d)
        }).catch(e => {
            resData.error(res, e)
        })
    })
}


module.exports = router;
