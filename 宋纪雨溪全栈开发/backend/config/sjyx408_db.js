/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 数据库连接配置
 */
const path = require('path');
const mysql = require('mysql2/promise');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// 默认连接池，供业务模型使用
const sjyx408_pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true
});

// 用页面传入的账号密码单独建连接，用于连接测试
async function sjyx408_testConnection(sjyx408_user, sjyx408_password) {
  const sjyx408_conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: sjyx408_user,
    password: sjyx408_password,
    database: process.env.DB_NAME,
    connectTimeout: 5000,
    dateStrings: true
  });
  const [sjyx408_rows] = await sjyx408_conn.query('SELECT VERSION() AS version, DATABASE() AS dbname');
  await sjyx408_conn.end();
  return sjyx408_rows[0];
}

module.exports = { sjyx408_pool, sjyx408_testConnection };
