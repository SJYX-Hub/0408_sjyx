/*
姓名：宋纪雨溪 | 学号：24001010408 | 时间：2026-11-19 | 大模型：DeepSeek-V3
数据库连接测试页逻辑
*/

(function () {
  var sjyx408_apiUrl = window.location.origin + '/api/database/test';

  var sjyx408_username = document.getElementById('sjyx408_username');
  var sjyx408_password = document.getElementById('sjyx408_password');
  var sjyx408_btn = document.getElementById('sjyx408_btnTest');
  var sjyx408_result = document.getElementById('sjyx408_result');

  document.getElementById('sjyx408_apiUrl').textContent = sjyx408_apiUrl;

  function sjyx408_show(sjyx408_ok, sjyx408_text) {
    sjyx408_result.textContent = sjyx408_text;
    sjyx408_result.className = 'sjyx408_result ' + (sjyx408_ok ? 'ok' : 'err');
  }

  sjyx408_btn.addEventListener('click', function () {
    var sjyx408_userValue = sjyx408_username.value.trim();
    var sjyx408_passValue = sjyx408_password.value;

    if (!sjyx408_userValue) {
      sjyx408_show(false, '请先输入用户名');
      console.error('用户名为空');
      return;
    }

    sjyx408_btn.disabled = true;
    sjyx408_btn.textContent = '连接中...';
    sjyx408_result.className = 'sjyx408_result';

    fetch(sjyx408_apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: sjyx408_userValue, password: sjyx408_passValue })
    })
      .then(function (sjyx408_res) {
        return sjyx408_res.json();
      })
      .then(function (sjyx408_data) {
        console.log('接口返回：', sjyx408_data);

        if (sjyx408_data.code === 0) {
          sjyx408_show(true, '连接成功：MySQL ' + sjyx408_data.data.version + '，数据库 ' + sjyx408_data.data.database);
        } else {
          sjyx408_show(false, sjyx408_data.msg);
          console.error('连接失败：', sjyx408_data.msg);
        }
      })
      .catch(function (sjyx408_err) {
        sjyx408_show(false, '请求出错：' + sjyx408_err.message);
        console.error('请求出错：', sjyx408_err);
      })
      .finally(function () {
        sjyx408_btn.disabled = false;
        sjyx408_btn.textContent = '连接数据库';
      });
  });
})();
