const mongoose = require('mongoose');

import { connectUrl } from '../../config'

mongoose.connect(connectUrl);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('数据库连接成功');
})

db.on('error', (err) => {    
    console.log('数据库连接失败: ' + err);  
});

module.exports = db;