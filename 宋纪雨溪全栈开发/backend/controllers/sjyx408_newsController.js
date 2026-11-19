/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 科技新闻接口控制器
 */
const { sjyx408_findNews, sjyx408_findNewsById } = require('../models/sjyx408_newsModel');

// 新闻列表
async function sjyx408_listNews(req, res) {
  try {
    const sjyx408_list = await sjyx408_findNews();
    res.json({ code: 0, msg: '获取新闻列表成功', data: { total: sjyx408_list.length, list: sjyx408_list } });
  } catch (err) {
    res.json({ code: 1, msg: '获取新闻列表失败：' + err.message, data: null });
  }
}

// 新闻详情
async function sjyx408_newsDetail(req, res) {
  const sjyx408_id = Number(req.params.id);

  if (!sjyx408_id) {
    return res.json({ code: 1, msg: '新闻编号不合法', data: null });
  }

  try {
    const sjyx408_news = await sjyx408_findNewsById(sjyx408_id);

    if (!sjyx408_news) {
      return res.json({ code: 2, msg: '新闻不存在', data: null });
    }

    res.json({ code: 0, msg: '获取新闻详情成功', data: sjyx408_news });
  } catch (err) {
    res.json({ code: 1, msg: '获取新闻详情失败：' + err.message, data: null });
  }
}

module.exports = { sjyx408_listNews, sjyx408_newsDetail };
