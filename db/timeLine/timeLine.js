const mongoose = require('mongoose');
const moment = require('moment');

const timeSchema =new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    content: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: function(){
            return moment().format('YYYY-MM-DD')
        }
    },
    timeString: {
        type: String,
        default: function(){
            return moment().format('YYYY-MM-DD HH:mm:ss')
        }
    }
})

const TimeLines = mongoose.model('TimeLines', timeSchema);


module.exports = {TimeLines}
