/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 后端入口
 */
const path = require('path');
const express = require('express');
const cors = require('cors');

const sjyx408_databaseRouter = require('./routes/sjyx408_database');
const sjyx408_newsRouter = require('./routes/sjyx408_news');
const sjyx408_galleryRouter = require('./routes/sjyx408_gallery');

const sjyx408_app = express();
const sjyx408_PORT = 8325;

// 跨域与请求解析
sjyx408_app.use(cors());
sjyx408_app.use(express.json());
sjyx408_app.use(express.urlencoded({ extended: true }));

// 静态托管前端
sjyx408_app.use(express.static(path.join(__dirname, '..', 'frontend')));

// 接口
sjyx408_app.use('/api', sjyx408_databaseRouter);
sjyx408_app.use('/api', sjyx408_newsRouter);
sjyx408_app.use('/api', sjyx408_galleryRouter);

// 404
sjyx408_app.use((req, res) => {
  res.status(404).json({ code: 404, msg: '接口不存在', data: null });
});

// 统一错误处理
sjyx408_app.use((err, req, res, next) => {
  console.error('[server error]', err.message);
  res.status(500).json({ code: 500, msg: '服务器内部错误', data: null });
});

sjyx408_app.listen(sjyx408_PORT, () => {
  console.log('服务已启动：http://localhost:' + sjyx408_PORT);
});
