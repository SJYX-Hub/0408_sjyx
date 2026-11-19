/*
姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
首页背景动画：粒子连线
*/

(function () {
  var sjyx408_canvas = document.getElementById('sjyx408_canvas_bg');
  if (!sjyx408_canvas) {
    return;
  }

  var sjyx408_ctx = sjyx408_canvas.getContext('2d');
  var sjyx408_points = [];
  var sjyx408_width = 0;
  var sjyx408_height = 0;

  // 按屏幕大小生成粒子
  function sjyx408_resize() {
    sjyx408_width = sjyx408_canvas.width = window.innerWidth;
    sjyx408_height = sjyx408_canvas.height = window.innerHeight;

    var sjyx408_count = Math.min(110, Math.floor(sjyx408_width / 16));
    sjyx408_points = [];
    for (var sjyx408_i = 0; sjyx408_i < sjyx408_count; sjyx408_i++) {
      sjyx408_points.push({
        sjyx408_x: Math.random() * sjyx408_width,
        sjyx408_y: Math.random() * sjyx408_height,
        sjyx408_vx: (Math.random() - 0.5) * 0.5,
        sjyx408_vy: (Math.random() - 0.5) * 0.5,
        sjyx408_r: Math.random() * 1.8 + 0.8
      });
    }
  }

  // 逐帧绘制
  function sjyx408_draw() {
    sjyx408_ctx.clearRect(0, 0, sjyx408_width, sjyx408_height);

    for (var sjyx408_i = 0; sjyx408_i < sjyx408_points.length; sjyx408_i++) {
      var sjyx408_p = sjyx408_points[sjyx408_i];

      sjyx408_p.sjyx408_x += sjyx408_p.sjyx408_vx;
      sjyx408_p.sjyx408_y += sjyx408_p.sjyx408_vy;

      // 边界反弹
      if (sjyx408_p.sjyx408_x < 0 || sjyx408_p.sjyx408_x > sjyx408_width) {
        sjyx408_p.sjyx408_vx *= -1;
      }
      if (sjyx408_p.sjyx408_y < 0 || sjyx408_p.sjyx408_y > sjyx408_height) {
        sjyx408_p.sjyx408_vy *= -1;
      }

      sjyx408_ctx.beginPath();
      sjyx408_ctx.arc(sjyx408_p.sjyx408_x, sjyx408_p.sjyx408_y, sjyx408_p.sjyx408_r, 0, Math.PI * 2);
      sjyx408_ctx.fillStyle = 'rgba(125, 211, 252, 0.75)';
      sjyx408_ctx.fill();

      // 近距离连线
      for (var sjyx408_j = sjyx408_i + 1; sjyx408_j < sjyx408_points.length; sjyx408_j++) {
        var sjyx408_q = sjyx408_points[sjyx408_j];
        var sjyx408_dx = sjyx408_p.sjyx408_x - sjyx408_q.sjyx408_x;
        var sjyx408_dy = sjyx408_p.sjyx408_y - sjyx408_q.sjyx408_y;
        var sjyx408_dist = Math.sqrt(sjyx408_dx * sjyx408_dx + sjyx408_dy * sjyx408_dy);

        if (sjyx408_dist < 140) {
          sjyx408_ctx.beginPath();
          sjyx408_ctx.moveTo(sjyx408_p.sjyx408_x, sjyx408_p.sjyx408_y);
          sjyx408_ctx.lineTo(sjyx408_q.sjyx408_x, sjyx408_q.sjyx408_y);
          sjyx408_ctx.strokeStyle = 'rgba(167, 139, 250, ' + (0.18 * (1 - sjyx408_dist / 140)) + ')';
          sjyx408_ctx.lineWidth = 1;
          sjyx408_ctx.stroke();
        }
      }
    }

    requestAnimationFrame(sjyx408_draw);
  }

  window.addEventListener('resize', sjyx408_resize);
  sjyx408_resize();
  sjyx408_draw();
})();
