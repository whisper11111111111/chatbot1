const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// API路由
app.use('/api', require('./routes/api'));

// 添加默认路由，返回API状态信息
app.get('/', (req, res) => {
  res.json({ status: 'API运行正常', message: '请使用/api端点访问API功能' });
});

// 生产环境下提供静态文件
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// 端口设置
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});