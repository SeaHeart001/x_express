const mongoose = require('mongoose');
// 连接数据库

const uri = "mongodb+srv://haohai:haohai@cluster0.xp0s2qx.mongodb.net/firstCloud?retryWrites=true&w=majority";
mongoose.set('useCreateIndex', true);
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('数据库连接成功')
    }).catch((err) => {
    console.log(err)
    console.log('数据库连接失败')
});
