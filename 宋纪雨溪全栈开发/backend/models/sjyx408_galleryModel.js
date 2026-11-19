/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 图文数据模型
 */
const { sjyx408_pool } = require('../config/sjyx408_db');

// 列表
async function sjyx408_findGallery() {
  const [sjyx408_rows] = await sjyx408_pool.query(
    'SELECT sjyx408_id, sjyx408_title, sjyx408_brief, sjyx408_image, sjyx408_place, sjyx408_shot_time ' +
    'FROM sjyx408_gallery ORDER BY sjyx408_shot_time DESC'
  );
  return sjyx408_rows;
}

// 详情
async function sjyx408_findGalleryById(sjyx408_id) {
  const [sjyx408_rows] = await sjyx408_pool.query(
    'SELECT * FROM sjyx408_gallery WHERE sjyx408_id = ?',
    [sjyx408_id]
  );
  return sjyx408_rows[0] || null;
}

module.exports = { sjyx408_findGallery, sjyx408_findGalleryById };
