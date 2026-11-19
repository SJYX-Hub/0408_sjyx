# 接口记录

姓名：宋纪雨溪 | 学号：24001010408

---

## 数据库连接测试

- 接口路径：/api/database/test
- HTTP 方法：POST
- 请求参数：

```json
{
  "username": "root",
  "password": "root"
}
```

- 响应格式（成功）：

```json
{
  "code": 0,
  "msg": "数据库连接成功",
  "data": {
    "version": "8.0.30",
    "database": "sjyx408_fullstack",
    "user": "root"
  }
}
```

- 响应格式（失败）：

```json
{
  "code": 2,
  "msg": "数据库连接失败：Access denied for user 'root'@'localhost' (using password: YES)",
  "data": null
}
```

- 修改时间：2026-11-19

---

## 科技新闻列表

- 接口路径：/api/news
- HTTP 方法：GET
- 请求参数：无

- 响应格式（成功）：

```json
{
  "code": 0,
  "msg": "获取新闻列表成功",
  "data": {
    "total": 8,
    "list": [
      {
        "sjyx408_id": 1,
        "sjyx408_title": "国产 AI 算力集群单机柜功率突破 120kW",
        "sjyx408_summary": "新一代液冷机柜在华东智算中心完成部署……",
        "sjyx408_source": "中国信息通信研究院",
        "sjyx408_publish_time": "2026-11-18 09:20:00",
        "sjyx408_cover": "images/sjyx408_news_1.jpg",
        "sjyx408_views": 3120
      }
    ]
  }
}
```

- 响应格式（失败）：

```json
{
  "code": 1,
  "msg": "获取新闻列表失败：数据库连接失败",
  "data": null
}
```

- 修改时间：2026-11-19

---

## 科技新闻详情

- 接口路径：/api/news/:id
- HTTP 方法：GET
- 请求参数：路径参数 id，示例 /api/news/1

- 响应格式（成功）：

```json
{
  "code": 0,
  "msg": "获取新闻详情成功",
  "data": {
    "sjyx408_id": 1,
    "sjyx408_title": "国产 AI 算力集群单机柜功率突破 120kW",
    "sjyx408_summary": "新一代液冷机柜在华东智算中心完成部署……",
    "sjyx408_source": "中国信息通信研究院",
    "sjyx408_publish_time": "2026-11-18 09:20:00",
    "sjyx408_cover": "images/sjyx408_news_1.jpg",
    "sjyx408_views": 3120
  }
}
```

- 响应格式（不存在）：

```json
{
  "code": 2,
  "msg": "新闻不存在",
  "data": null
}
```

- 修改时间：2026-11-19

---

## 图文列表

- 接口路径：/api/gallery
- HTTP 方法：GET
- 请求参数：无

- 响应格式（成功）：

```json
{
  "code": 0,
  "msg": "获取图文列表成功",
  "data": {
    "total": 8,
    "list": [
      {
        "sjyx408_id": 1,
        "sjyx408_title": "无人机巡检光伏电站",
        "sjyx408_brief": "巡检无人机按航线自动扫描光伏板……",
        "sjyx408_image": "images/sjyx408_gallery_1.jpg",
        "sjyx408_place": "甘肃敦煌",
        "sjyx408_shot_time": "2026-09-12"
      }
    ]
  }
}
```

- 修改时间：2026-11-19

---

## 图文详情

- 接口路径：/api/gallery/:id
- HTTP 方法：GET
- 请求参数：路径参数 id，示例 /api/gallery/1

- 响应格式（成功）：

```json
{
  "code": 0,
  "msg": "获取图文详情成功",
  "data": {
    "sjyx408_id": 1,
    "sjyx408_title": "无人机巡检光伏电站",
    "sjyx408_brief": "巡检无人机按航线自动扫描光伏板……",
    "sjyx408_image": "images/sjyx408_gallery_1.jpg",
    "sjyx408_place": "甘肃敦煌",
    "sjyx408_shot_time": "2026-09-12"
  }
}
```

- 响应格式（不存在）：

```json
{
  "code": 2,
  "msg": "图文不存在",
  "data": null
}
```

- 修改时间：2026-11-19
