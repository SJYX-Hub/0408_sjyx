/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 科技新闻路由
 */
const express = require('express');
const { sjyx408_listNews, sjyx408_newsDetail } = require('../controllers/sjyx408_newsController');

const sjyx408_router = express.Router();

sjyx408_router.get('/news', sjyx408_listNews);
sjyx408_router.get('/news/:id', sjyx408_newsDetail);

module.exports = sjyx408_router;
