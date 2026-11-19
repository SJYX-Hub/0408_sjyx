/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 数据库模型
 */
const { sjyx408_testConnection } = require('../config/sjyx408_db');

// 用页面传入的账号密码测试连接
async function sjyx408_checkDatabase(sjyx408_user, sjyx408_password) {
  return sjyx408_testConnection(sjyx408_user, sjyx408_password);
}

module.exports = { sjyx408_checkDatabase };
