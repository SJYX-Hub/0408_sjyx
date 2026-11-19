/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 数据库测试接口控制器
 */
const { sjyx408_checkDatabase } = require('../models/sjyx408_databaseModel');

async function sjyx408_testDatabase(req, res) {
  const sjyx408_user = (req.body && req.body.username) || '';
  const sjyx408_password = (req.body && req.body.password) || '';

  if (!sjyx408_user) {
    return res.json({ code: 1, msg: '请输入用户名', data: null });
  }

  try {
    const sjyx408_info = await sjyx408_checkDatabase(sjyx408_user, sjyx408_password);
    res.json({
      code: 0,
      msg: '数据库连接成功',
      data: {
        version: sjyx408_info.version,
        database: sjyx408_info.dbname,
        user: sjyx408_user
      }
    });
  } catch (err) {
    res.json({ code: 2, msg: '数据库连接失败：' + err.message, data: null });
  }
}

module.exports = { sjyx408_testDatabase };
