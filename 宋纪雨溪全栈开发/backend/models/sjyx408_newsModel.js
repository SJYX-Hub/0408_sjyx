/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 科技新闻数据模型
 */
const { sjyx408_pool } = require('../config/sjyx408_db');

// 列表
async function sjyx408_findNews() {
  const [sjyx408_rows] = await sjyx408_pool.query(
    'SELECT sjyx408_id, sjyx408_title, sjyx408_summary, sjyx408_source, sjyx408_publish_time, sjyx408_cover, sjyx408_views ' +
    'FROM sjyx408_news ORDER BY sjyx408_publish_time DESC'
  );
  return sjyx408_rows;
}

// 详情
async function sjyx408_findNewsById(sjyx408_id) {
  const [sjyx408_rows] = await sjyx408_pool.query(
    'SELECT * FROM sjyx408_news WHERE sjyx408_id = ?',
    [sjyx408_id]
  );
  return sjyx408_rows[0] || null;
}

module.exports = { sjyx408_findNews, sjyx408_findNewsById };
