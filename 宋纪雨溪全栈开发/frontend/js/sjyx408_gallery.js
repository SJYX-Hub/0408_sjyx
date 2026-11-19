/*
姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
图文列表页逻辑
*/

(function () {
  var sjyx408_apiUrl = window.location.origin + '/api/gallery';

  var sjyx408_state = document.getElementById('sjyx408_state');
  var sjyx408_grid = document.getElementById('sjyx408_galleryGrid');
  var sjyx408_apiState = document.getElementById('sjyx408_apiState');
  var sjyx408_apiCount = document.getElementById('sjyx408_apiCount');
  var sjyx408_rawJson = document.getElementById('sjyx408_rawJson');
  var sjyx408_rawToggle = document.getElementById('sjyx408_rawToggle');

  var sjyx408_apiLink = document.getElementById('sjyx408_apiLink');
  sjyx408_apiLink.textContent = sjyx408_apiUrl;
  sjyx408_apiLink.href = sjyx408_apiUrl;

  sjyx408_rawToggle.addEventListener('click', function () {
    var sjyx408_open = sjyx408_rawJson.classList.toggle('show');
    sjyx408_rawToggle.textContent = sjyx408_open ? '收起' : '展开';
  });

  function sjyx408_esc(sjyx408_text) {
    return String(sjyx408_text === null || sjyx408_text === undefined ? '' : sjyx408_text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 日期只取年月日
  function sjyx408_date(sjyx408_value) {
    if (!sjyx408_value) {
      return '';
    }
    return String(sjyx408_value).replace('T', ' ').slice(0, 10);
  }

  function sjyx408_render(sjyx408_list) {
    if (!sjyx408_list.length) {
      sjyx408_state.className = 'sjyx408_state';
      sjyx408_state.textContent = '接口返回成功，但表里还没有数据';
      return;
    }

    sjyx408_state.className = 'sjyx408_state';
    sjyx408_state.textContent = '共 ' + sjyx408_list.length + ' 条图文';

    var sjyx408_html = '';

    for (var sjyx408_i = 0; sjyx408_i < sjyx408_list.length; sjyx408_i++) {
      var sjyx408_item = sjyx408_list[sjyx408_i];

      sjyx408_html +=
        '<article class="sjyx408_galleryCard">' +
          '<div class="sjyx408_galleryImgBox">' +
            '<img class="sjyx408_galleryImg" src="' + sjyx408_esc(sjyx408_item.sjyx408_image) + '" alt="' + sjyx408_esc(sjyx408_item.sjyx408_title) + '">' +
          '</div>' +
          '<div class="sjyx408_galleryTextBox">' +
            '<h2 class="sjyx408_galleryTitle">' + sjyx408_esc(sjyx408_item.sjyx408_title) + '</h2>' +
            '<p class="sjyx408_galleryBrief">' + sjyx408_esc(sjyx408_item.sjyx408_brief) + '</p>' +
            '<div class="sjyx408_galleryMeta">' +
              '<span class="sjyx408_place">' + sjyx408_esc(sjyx408_item.sjyx408_place) + '</span>' +
              '<span>' + sjyx408_esc(sjyx408_date(sjyx408_item.sjyx408_shot_time)) + '</span>' +
            '</div>' +
          '</div>' +
        '</article>';
    }

    sjyx408_grid.innerHTML = sjyx408_html;
  }

  fetch(sjyx408_apiUrl)
    .then(function (sjyx408_res) {
      return sjyx408_res.json();
    })
    .then(function (sjyx408_data) {
      console.log('图文接口返回：', sjyx408_data);

      sjyx408_rawJson.textContent = JSON.stringify(sjyx408_data, null, 2);
      sjyx408_apiState.textContent = 'code = ' + sjyx408_data.code + '，' + sjyx408_data.msg;

      if (sjyx408_data.code === 0) {
        var sjyx408_list = (sjyx408_data.data && sjyx408_data.data.list) || [];
        sjyx408_apiCount.textContent = sjyx408_list.length + ' 条';
        sjyx408_render(sjyx408_list);
      } else {
        sjyx408_apiCount.textContent = '0 条';
        sjyx408_state.className = 'sjyx408_state err';
        sjyx408_state.textContent = '接口返回失败：' + sjyx408_data.msg;
        console.error('图文接口失败：', sjyx408_data.msg);
      }
    })
    .catch(function (sjyx408_err) {
      sjyx408_apiState.textContent = '请求出错';
      sjyx408_state.className = 'sjyx408_state err';
      sjyx408_state.textContent = '请求出错：' + sjyx408_err.message;
      console.error('图文接口请求出错：', sjyx408_err);
    });
})();
