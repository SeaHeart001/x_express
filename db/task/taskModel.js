const mongoose = require('mongoose');
const moment = require('moment');
const { numToChinese } = require('../../utils/utils')

const ProcessSchema = new mongoose.Schema({
    pre_package_time: {
        type: String,
        required: true
    },
    pre_release_time: {
        type: String,
        required: true
    },
    remark: {
        type: String,
        required: true
    }
})

const TaskSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    list: [ProcessSchema]
})

const TasksSchema =new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    tasks:[TaskSchema],
    createTime: {
        type: Date,
        default: function(){
            return moment().format('YYYY-MM-DD')
        }
    },
    reportOfTimeString: {
        type: String,
        default: function(){
            return moment().format('YYYY-MM-DD')
        }
    },
    createWeek: {
        type: String,
        default: function(){
            let str = `第${numToChinese(moment(this.reportOfTimeString).format('ww'))}周`
            return str
        }
    }
})

const Tasks = mongoose.model('tasks', TasksSchema);
const Task = mongoose.model('task', TaskSchema);
const Process = mongoose.model('process', ProcessSchema);

module.exports = {Tasks, TasksSchema, Task, Process}
