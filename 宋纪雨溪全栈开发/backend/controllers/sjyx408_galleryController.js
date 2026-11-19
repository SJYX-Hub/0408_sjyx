/*
 * 姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
 * 图文接口控制器
 */
const { sjyx408_findGallery, sjyx408_findGalleryById } = require('../models/sjyx408_galleryModel');

// 图文列表
async function sjyx408_listGallery(req, res) {
  try {
    const sjyx408_list = await sjyx408_findGallery();
    res.json({ code: 0, msg: '获取图文列表成功', data: { total: sjyx408_list.length, list: sjyx408_list } });
  } catch (err) {
    res.json({ code: 1, msg: '获取图文列表失败：' + err.message, data: null });
  }
}

// 图文详情
async function sjyx408_galleryDetail(req, res) {
  const sjyx408_id = Number(req.params.id);

  if (!sjyx408_id) {
    return res.json({ code: 1, msg: '图文编号不合法', data: null });
  }

  try {
    const sjyx408_item = await sjyx408_findGalleryById(sjyx408_id);

    if (!sjyx408_item) {
      return res.json({ code: 2, msg: '图文不存在', data: null });
    }

    res.json({ code: 0, msg: '获取图文详情成功', data: sjyx408_item });
  } catch (err) {
    res.json({ code: 1, msg: '获取图文详情失败：' + err.message, data: null });
  }
}

module.exports = { sjyx408_listGallery, sjyx408_galleryDetail };
