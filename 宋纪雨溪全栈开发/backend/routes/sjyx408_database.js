/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 数据库测试路由
 */
const express = require('express');
const { sjyx408_testDatabase } = require('../controllers/sjyx408_databaseController');

const sjyx408_router = express.Router();

sjyx408_router.get('/database/test', (req, res) => {
  res.json({ code: 0, msg: '接口正常，请用 POST 提交用户名和密码', data: null });
});

sjyx408_router.post('/database/test', sjyx408_testDatabase);

module.exports = sjyx408_router;
