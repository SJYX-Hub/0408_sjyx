# 数据库记录

姓名：宋纪雨溪 | 学号：24001010408

以下 SQL 按执行顺序排列，可在新机器上完整重建数据库。

---

## 2026-11-19 建立数据库

```sql
CREATE DATABASE IF NOT EXISTS sjyx408_fullstack
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
```

---

## 2026-11-19 建立科技新闻表并插入数据

```sql
USE sjyx408_fullstack;

CREATE TABLE sjyx408_news (
  sjyx408_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
  sjyx408_title VARCHAR(120) NOT NULL COMMENT '标题',
  sjyx408_summary VARCHAR(400) NOT NULL COMMENT '摘要',
  sjyx408_source VARCHAR(60) NOT NULL COMMENT '来源',
  sjyx408_publish_time DATETIME NOT NULL COMMENT '发布时间',
  sjyx408_cover VARCHAR(200) NOT NULL COMMENT '封面图地址',
  sjyx408_views INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '浏览量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='科技新闻表';

INSERT INTO sjyx408_news
(sjyx408_title, sjyx408_summary, sjyx408_source, sjyx408_publish_time, sjyx408_cover, sjyx408_views) VALUES
('国产 AI 算力集群单机柜功率突破 120kW', '新一代液冷机柜在华东智算中心完成部署，单机柜功率密度提升到 120kW，同等面积下训练吞吐提高约四成。', '中国信息通信研究院', '2026-11-18 09:20:00', 'images/sjyx408_news_1.jpg', 3120),
('硅光互连芯片实现 1.6T 单通道传输', '研究团队用硅基光电子工艺做出 1.6Tb/s 单通道互连芯片，功耗比传统电互连下降近一半，已进入小批量试产。', '光电子学报', '2026-11-17 14:05:00', 'images/sjyx408_news_2.jpg', 2480),
('端侧大模型芯片量产，手机可离线跑 70 亿参数', '新款端侧 NPU 支持 70 亿参数模型本地推理，实测离线语音助手首字延迟低于 300 毫秒。', '半导体观察', '2026-11-16 10:40:00', 'images/sjyx408_news_3.jpg', 5640),
('国产开源数据库发布 5.0 版本，分布式事务性能翻倍', '新版本重构了事务提交路径，TPC-C 测试中每分钟事务数提升 108%，同时兼容原有 4.x 数据文件。', '开源中国', '2026-11-15 16:30:00', 'images/sjyx408_news_4.jpg', 1890),
('工业机器人密度再创新高，每万名工人配 470 台', '最新统计显示制造业机器人密度达到每万人 470 台，汽车与电子行业贡献过半新增装机。', '机器人产业联盟', '2026-11-14 11:15:00', 'images/sjyx408_news_5.jpg', 1430),
('低轨卫星互联网完成首次手机直连视频通话', '试验星座在无地面基站条件下打通卫星与普通手机的视频通话，时延约 180 毫秒。', '卫星与网络', '2026-11-13 08:50:00', 'images/sjyx408_news_6.jpg', 4210),
('半固态电池装车实测续航破 1000 公里', '整车厂公布冬季实测数据，半固态电池包在零下十度环境续航衰减控制在 12% 以内。', '新能源汽车报', '2026-11-12 19:10:00', 'images/sjyx408_news_7.jpg', 6780),
('隐私计算平台通过金融行业互联互通测评', '多家银行接入统一隐私计算平台，联合建模场景下数据不出域，模型效果与集中建模相差不到 2%。', '金融科技周刊', '2026-11-11 15:25:00', 'images/sjyx408_news_8.jpg', 970);
```

---

## 2026-11-19 建立图文列表并插入数据

```sql
USE sjyx408_fullstack;

CREATE TABLE sjyx408_gallery (
  sjyx408_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '主键',
  sjyx408_title VARCHAR(120) NOT NULL COMMENT '标题',
  sjyx408_brief VARCHAR(400) NOT NULL COMMENT '简介',
  sjyx408_image VARCHAR(200) NOT NULL COMMENT '图片地址',
  sjyx408_place VARCHAR(80) NOT NULL COMMENT '拍摄地点',
  sjyx408_shot_time DATE NOT NULL COMMENT '拍摄日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='图文列表';

INSERT INTO sjyx408_gallery
(sjyx408_title, sjyx408_brief, sjyx408_image, sjyx408_place, sjyx408_shot_time) VALUES
('无人机巡检光伏电站', '巡检无人机按航线自动扫描光伏板，热成像能定位到单块组件的异常发热点，一天可完成两百亩巡查。', 'images/sjyx408_gallery_1.jpg', '甘肃敦煌', '2026-09-12'),
('量子实验室的低温测量', '稀释制冷机内部温度接近绝对零度，实验人员正在更换样品杆，准备下一轮量子比特相干时间测量。', 'images/sjyx408_gallery_2.jpg', '合肥量子中心', '2026-08-27'),
('智能仓储的机器人分拣', '立体仓库里三十台搬运机器人协同作业，订单从下达到出库平均耗时缩短到十二分钟。', 'images/sjyx408_gallery_3.jpg', '浙江杭州', '2026-10-05'),
('自动驾驶封闭测试场', '测试车辆在模拟城市道路中完成夜间会车、无保护左转等场景，安全员全程接管零次。', 'images/sjyx408_gallery_4.jpg', '上海嘉定', '2026-07-19'),
('液冷机房的一排机柜', '冷板式液冷把机房送回风温差压缩到五度以内，单机柜承载功率提高到风冷的三倍。', 'images/sjyx408_gallery_5.jpg', '贵州贵安', '2026-06-30'),
('深海探测器的万米下潜', '载人深潜器完成万米级下潜，机械手在海底采集到沉积物与生物样品，全程录像已归档。', 'images/sjyx408_gallery_6.jpg', '南海海盆', '2026-05-22'),
('植保无人机作业', '无人机按处方图变量喷洒，农药用量比人工减少三成，作业效率约为人工的二十倍。', 'images/sjyx408_gallery_7.jpg', '黑龙江建三江', '2026-08-08'),
('3D 打印精密零件', '金属增材设备一次成型复杂流道结构，零件重量减轻 35%，批次一致性通过航空件抽检。', 'images/sjyx408_gallery_8.jpg', '陕西西安', '2026-10-18');
```
