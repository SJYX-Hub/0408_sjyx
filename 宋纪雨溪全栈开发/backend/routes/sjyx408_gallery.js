/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 图文路由
 */
const express = require('express');
const { sjyx408_listGallery, sjyx408_galleryDetail } = require('../controllers/sjyx408_galleryController');

const sjyx408_router = express.Router();

sjyx408_router.get('/gallery', sjyx408_listGallery);
sjyx408_router.get('/gallery/:id', sjyx408_galleryDetail);

module.exports = sjyx408_router;
