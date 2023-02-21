var express = require('express');
var router = express.Router();
const {auth} = require('../db/user/userModel');
const {Tasks, TasksSchema, Task, Process} = require('../db/task/taskModel');
const {resData, numToChinese} = require('../utils/utils');
const moment = require('moment');

// 新增
router.post('/add', auth, async (req, res) => {

    Tasks.findOne({
        userId: req._initId,
        reportOfTimeString: req.body[0].list[0].pre_package_time.slice(0, 10)
    }).then(data => {
        if (!data || data.length === 0) {
            Tasks.create({
                tasks: req.body,
                userId: req._initId,
                reportOfTimeString: req.body[0].list[0].pre_package_time.slice(0, 10)
            }).then(data => {
                resData.success(res, data)
            }).catch(e => {
                resData.error(res, e)
            });
        } else {
            resData.error(res, '当天已存在日报');
        }
    }).catch(e => {
        resData.error(res, e);
    })


})

// 各人(包含root)查询自身任务列表
router.get('/list', auth, async (req, res) => {
    let options = {userId: req._initId}
    if (req.user._doc.username === 'root') {
        options = {}
    }
    findTaskList(options, req, res)
})

// (管理员)根据userId查询任务列表
router.get('/list/:id', auth, async (req, res) => {
    let options = {userId: req.params.id}
    findTaskList(options, req, res)
})

// 根据任务id查询任务详情
router.get('/task/:id', auth, async (req, res) => {
    Tasks.findOne({_id: req.params.id}).then(data => {
        resData.success(res, data)
    }).catch(e => {
        resData.error(res, e)
    })
})

// 根据任务id删除任务列表
router.delete('/task/:id', auth, async (req, res) => {
    Tasks.deleteOne({_id: req.params.id}).then(data => {
        resData.success(res, '删除成功')
    }).catch(e => {
        resData.error(res, e)
    })
})

//数据迁移治理(开发适用)

router.get('/taskAll', (req, res) => {
    Tasks.find({}).then(data => {
        data.forEach(item => {
            item.reportOfTimeString = moment(item.reportOfTimeString.split(' ')[0]).format('YYYY-MM-DD');
            item.createWeek = `第${numToChinese(moment(item.reportOfTimeString).format('ww'))}周`;
            item.tasks.forEach(item2 => {
                item2.list.forEach(item3 => {
                    item3.pre_package_time = moment(item3.pre_package_time).format('YYYY-MM-DD HH:mm:ss')
                    item3.pre_release_time = moment(item3.pre_release_time).format('YYYY-MM-DD HH:mm:ss')
                })
            })
            //item.save();
        })
        resData.success(res, data)
    })
})

function findTaskList(options, req, res) {
    const page = req.query.page || 1;
    const size = req.query.size || 5;
    Tasks.count(options, (err, count) => {
        Tasks.find(options).sort({reportOfTimeString: -1}).skip((parseInt(page) - 1) * parseInt(size)).limit(parseInt(size)).then(data => {

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
