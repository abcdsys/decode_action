//Mon Feb 24 2025 01:51:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("快手打卡");
const ckName = "ksdk";
const ckName1 = "card";
let envSplitor = ["@", "\n"];
msg = "";
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let card = ($.isNode() ? process.env[ckName1] : $.getdata(ckName1)) || "";
let userList = [];
let userIdx = 0;
let userCount = 0;
const body = {
  reportCount: 1,
  subBizId: 6426,
  taskId: 26021
};
async function start() {
  console.log("\n================== 脚本未完全完善后期慢慢优化 投稿 交流 获取卡密 联系作者---1018076678 ==================\n");
  console.log("\n================== 打卡 ==================\n");
  taskall = [];
  for (let _0x49dba8 of userList) {
    taskall.push(await _0x49dba8.sig("打卡"));
  }
  await Promise.all(taskall);
}
class UserInfo {
  constructor(_0x3cf627) {
    this.index = ++userIdx;
    this.ck = _0x3cf627.split("#");
  }
  async sig(_0x21c1b4) {
    try {
      let _0x371a15 = {
        method: "post",
        url: "http://115.120.202.169:3000/sig56?card=" + card,
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          reportCount: 6866
        },
        json: true
      };
      let _0x5d16b0 = await httpRequest(_0x371a15, _0x21c1b4);
      if (_0x5d16b0.code == 200) {
        DoubleLog("账号[" + this.index + "]  获取sig成功: " + _0x5d16b0.title);
        await wait(1);
        let _0x164997 = _0x5d16b0.result;
        await this.dk(_0x164997);
      } else {
        DoubleLog("账号[" + this.index + "]  获取sig失败 ❌ 了呢,原因" + _0x5d16b0.error + " " + _0x5d16b0.title);
        console.log(_0x5d16b0);
      }
    } catch (_0x3a4c79) {
      console.log(_0x3a4c79);
    }
  }
  async dk(_0x30d1da, _0x2a1b2a) {
    try {
      let _0xb081a7 = {
        method: "post",
        url: "https://encourage.kuaishou.com/rest/wd/zt/task/report?__NS_sig3=" + _0x30d1da,
        headers: {
          "Content-Type": "application/json",
          Cookie: "kuaishou.api_st=" + this.ck[0].replace("kuaishou.api_st=", "") + ";client_key=2ac2a76d;"
        },
        body: body,
        json: true
      };
      let _0x84bb79 = await httpRequest(_0xb081a7, _0x2a1b2a);
      console.log(_0x84bb79);
      if (_0x84bb79.result == 1) {
        DoubleLog("账号[" + this.index + "]  打卡成功: " + _0x84bb79.data.taskCompleted);
      } else {
        DoubleLog("账号[" + this.index + "]  打卡失败 ❌ 了呢,原因" + _0x84bb79.error_msg);
        console.log(_0x84bb79);
      }
    } catch (_0x38d5e7) {
      console.log(_0x38d5e7);
    }
  }
}
!(async () => {
  if (!(await checkEnv())) {
    return;
  }
  if (userList.length > 0) {
    await start();
  }
  await SendMsg(msg);
})().catch(_0x3f6334 => console.log(_0x3f6334)).finally(() => $.done());
async function checkEnv() {
  if (userCookie) {
    let _0x379103 = envSplitor[0];
    for (let _0x21b150 of envSplitor) if (userCookie.indexOf(_0x21b150) > -1) {
      _0x379103 = _0x21b150;
      break;
    }
    for (let _0x544723 of userCookie.split(_0x379103)) _0x544723 && userList.push(new UserInfo(_0x544723));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
async function httpRequest(_0x141b25, _0x58249a) {
  var _0x56d458 = require("request");
  return new Promise(_0x347921 => {
    if (!_0x58249a) {
      let _0x33f8c3 = arguments.callee.toString();
      let _0xd6eea = /function\s*(\w*)/i;
      let _0x17d8d8 = _0xd6eea.exec(_0x33f8c3);
      _0x58249a = _0x17d8d8[1];
    }
    _0x56d458(_0x141b25, function (_0x4bee20, _0x3ca9ee) {
      if (_0x4bee20) {
        throw new Error(_0x4bee20);
      }
      let _0x48e218 = _0x3ca9ee.body;
      try {
        if (typeof _0x48e218 == "string") {
          if (_0x8342e4(_0x48e218)) {
            let _0x3110ec = JSON.parse(_0x48e218);
            _0x347921(_0x3110ec);
          } else {
            let _0x55357e = _0x48e218;
            _0x347921(_0x55357e);
          }
          function _0x8342e4(_0x32649c) {
            if (typeof _0x32649c == "string") {
              try {
                if (typeof JSON.parse(_0x32649c) == "object") {
                  return true;
                }
              } catch (_0x1d05bd) {
                return false;
              }
            }
            return false;
          }
        } else {
          let _0x236af3 = _0x48e218;
          _0x347921(_0x236af3);
        }
      } catch (_0x42c64d) {
        console.log(_0x4bee20, _0x3ca9ee);
        console.log("\n " + _0x58249a + "失败了!请稍后尝试!!");
      } finally {
        _0x347921();
      }
    });
  });
}
function wait(_0x387387) {
  return new Promise(function (_0x379d86) {
    setTimeout(_0x379d86, _0x387387 * 1000);
  });
}
function DoubleLog(_0x1a97e8) {
  if ($.isNode()) {
    if (_0x1a97e8) {
      console.log("" + _0x1a97e8);
      msg += "\n" + _0x1a97e8;
    }
  } else {
    console.log("" + _0x1a97e8);
    msg += "\n" + _0x1a97e8;
  }
}
async function SendMsg(_0x4f9058) {
  if (!_0x4f9058) {
    return;
  }
  if ($.isNode()) {
    var _0x58dc8d = require("./sendNotify");
    await _0x58dc8d.sendNotify($.name, _0x4f9058);
  } else {
    $.msg($.name, "", _0x4f9058);
  }
}
function Env(_0x869618, _0x4969b4) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4b7393 {
    constructor(_0xce6ed4) {
      this.env = _0xce6ed4;
    }
    send(_0x2dd07b, _0x28c0a3 = "GET") {
      _0x2dd07b = "string" == typeof _0x2dd07b ? {
        url: _0x2dd07b
      } : _0x2dd07b;
      let _0x2cbc0b = this.get;
      "POST" === _0x28c0a3 && (_0x2cbc0b = this.post);
      return new Promise((_0x34a3bc, _0xd08882) => {
        _0x2cbc0b.call(this, _0x2dd07b, (_0xcad180, _0x3b5419, _0x2c1da5) => {
          _0xcad180 ? _0xd08882(_0xcad180) : _0x34a3bc(_0x3b5419);
        });
      });
    }
    get(_0x1db464) {
      return this.send.call(this.env, _0x1db464);
    }
    post(_0x40cad3) {
      return this.send.call(this.env, _0x40cad3, "POST");
    }
  }
  return new class {
    constructor(_0x48adbc, _0xa63c03) {
      this.name = _0x48adbc;
      this.http = new _0x4b7393(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xa63c03);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x524607, _0x493a05 = null) {
      try {
        return JSON.parse(_0x524607);
      } catch {
        return _0x493a05;
      }
    }
    toStr(_0x4a0add, _0x185984 = null) {
      try {
        return JSON.stringify(_0x4a0add);
      } catch {
        return _0x185984;
      }
    }
    getjson(_0x25b308, _0x4ea6fa) {
      let _0x92a30e = _0x4ea6fa;
      const _0x335918 = this.getdata(_0x25b308);
      if (_0x335918) {
        try {
          _0x92a30e = JSON.parse(this.getdata(_0x25b308));
        } catch {}
      }
      return _0x92a30e;
    }
    setjson(_0xaf3b0d, _0x46a0db) {
      try {
        return this.setdata(JSON.stringify(_0xaf3b0d), _0x46a0db);
      } catch {
        return !1;
      }
    }
    getScript(_0xb7a3d3) {
      return new Promise(_0x31636a => {
        this.get({
          url: _0xb7a3d3
        }, (_0x229b52, _0x3952f7, _0x1e3956) => _0x31636a(_0x1e3956));
      });
    }
    runScript(_0x4756ba, _0x814e15) {
      return new Promise(_0x2f03dc => {
        let _0x2efea4 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2efea4 = _0x2efea4 ? _0x2efea4.replace(/\n/g, "").trim() : _0x2efea4;
        let _0x5b8aef = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5b8aef = _0x5b8aef ? 1 * _0x5b8aef : 20;
        _0x5b8aef = _0x814e15 && _0x814e15.timeout ? _0x814e15.timeout : _0x5b8aef;
        const [_0x7e139d, _0x4ce54c] = _0x2efea4.split("@"),
          _0x286b8a = {
            url: "http://" + _0x4ce54c + "/v1/scripting/evaluate",
            body: {
              script_text: _0x4756ba,
              mock_type: "cron",
              timeout: _0x5b8aef
            },
            headers: {
              "X-Key": _0x7e139d,
              Accept: "*/*"
            }
          };
        this.post(_0x286b8a, (_0x1b0df8, _0x432849, _0xdcadf8) => _0x2f03dc(_0xdcadf8));
      }).catch(_0x21c19d => this.logErr(_0x21c19d));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x484638 = this.path.resolve(this.dataFile),
          _0x3c12fa = this.path.resolve(process.cwd(), this.dataFile),
          _0x38ea5a = this.fs.existsSync(_0x484638),
          _0x53da9f = !_0x38ea5a && this.fs.existsSync(_0x3c12fa);
        if (!_0x38ea5a && !_0x53da9f) {
          return {};
        }
        {
          const _0x2f1705 = _0x38ea5a ? _0x484638 : _0x3c12fa;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2f1705));
          } catch (_0x33f053) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x42291f = this.path.resolve(this.dataFile),
          _0x5b5305 = this.path.resolve(process.cwd(), this.dataFile),
          _0xe4b9a9 = this.fs.existsSync(_0x42291f),
          _0x359c47 = !_0xe4b9a9 && this.fs.existsSync(_0x5b5305),
          _0x598b89 = JSON.stringify(this.data);
        _0xe4b9a9 ? this.fs.writeFileSync(_0x42291f, _0x598b89) : _0x359c47 ? this.fs.writeFileSync(_0x5b5305, _0x598b89) : this.fs.writeFileSync(_0x42291f, _0x598b89);
      }
    }
    lodash_get(_0x5e1ae4, _0x7f72ec, _0x296620) {
      const _0x58e88a = _0x7f72ec.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xb29965 = _0x5e1ae4;
      for (const _0x901cc4 of _0x58e88a) if (_0xb29965 = Object(_0xb29965)[_0x901cc4], void 0 === _0xb29965) {
        return _0x296620;
      }
      return _0xb29965;
    }
    lodash_set(_0x12d85d, _0xb16098, _0x514c18) {
      return Object(_0x12d85d) !== _0x12d85d ? _0x12d85d : (Array.isArray(_0xb16098) || (_0xb16098 = _0xb16098.toString().match(/[^.[\]]+/g) || []), _0xb16098.slice(0, -1).reduce((_0x36cf84, _0xd4dd9f, _0x24155d) => Object(_0x36cf84[_0xd4dd9f]) === _0x36cf84[_0xd4dd9f] ? _0x36cf84[_0xd4dd9f] : _0x36cf84[_0xd4dd9f] = Math.abs(_0xb16098[_0x24155d + 1]) >> 0 == +_0xb16098[_0x24155d + 1] ? [] : {}, _0x12d85d)[_0xb16098[_0xb16098.length - 1]] = _0x514c18, _0x12d85d);
    }
    getdata(_0x9f5a7a) {
      let _0x197c81 = this.getval(_0x9f5a7a);
      if (/^@/.test(_0x9f5a7a)) {
        const [, _0xa8b081, _0x5c9879] = /^@(.*?)\.(.*?)$/.exec(_0x9f5a7a),
          _0x32da5f = _0xa8b081 ? this.getval(_0xa8b081) : "";
        if (_0x32da5f) {
          try {
            const _0x3ddab1 = JSON.parse(_0x32da5f);
            _0x197c81 = _0x3ddab1 ? this.lodash_get(_0x3ddab1, _0x5c9879, "") : _0x197c81;
          } catch (_0x1c044e) {
            _0x197c81 = "";
          }
        }
      }
      return _0x197c81;
    }
    setdata(_0x53d51d, _0x7e564b) {
      let _0x119387 = !1;
      if (/^@/.test(_0x7e564b)) {
        const [, _0x2604f9, _0x24a0f2] = /^@(.*?)\.(.*?)$/.exec(_0x7e564b),
          _0x242287 = this.getval(_0x2604f9),
          _0x45f8ac = _0x2604f9 ? "null" === _0x242287 ? null : _0x242287 || "{}" : "{}";
        try {
          const _0x55e7dd = JSON.parse(_0x45f8ac);
          this.lodash_set(_0x55e7dd, _0x24a0f2, _0x53d51d);
          _0x119387 = this.setval(JSON.stringify(_0x55e7dd), _0x2604f9);
        } catch (_0x519f17) {
          const _0x132fe2 = {};
          this.lodash_set(_0x132fe2, _0x24a0f2, _0x53d51d);
          _0x119387 = this.setval(JSON.stringify(_0x132fe2), _0x2604f9);
        }
      } else {
        _0x119387 = this.setval(_0x53d51d, _0x7e564b);
      }
      return _0x119387;
    }
    getval(_0xe828e4) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0xe828e4) : this.isQuanX() ? $prefs.valueForKey(_0xe828e4) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xe828e4]) : this.data && this.data[_0xe828e4] || null;
    }
    setval(_0x167a57, _0xdd903b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x167a57, _0xdd903b) : this.isQuanX() ? $prefs.setValueForKey(_0x167a57, _0xdd903b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xdd903b] = _0x167a57, this.writedata(), !0) : this.data && this.data[_0xdd903b] || null;
    }
    initGotEnv(_0x4e8cf7) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4e8cf7 && (_0x4e8cf7.headers = _0x4e8cf7.headers ? _0x4e8cf7.headers : {}, void 0 === _0x4e8cf7.headers.Cookie && void 0 === _0x4e8cf7.cookieJar && (_0x4e8cf7.cookieJar = this.ckjar));
    }
    get(_0x2abc54, _0x1ed35 = () => {}) {
      _0x2abc54.headers && (delete _0x2abc54.headers["Content-Type"], delete _0x2abc54.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2abc54.headers = _0x2abc54.headers || {}, Object.assign(_0x2abc54.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2abc54, (_0x56a4af, _0x5d4a6d, _0x1d66b4) => {
        !_0x56a4af && _0x5d4a6d && (_0x5d4a6d.body = _0x1d66b4, _0x5d4a6d.statusCode = _0x5d4a6d.status);
        _0x1ed35(_0x56a4af, _0x5d4a6d, _0x1d66b4);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2abc54.opts = _0x2abc54.opts || {}, Object.assign(_0x2abc54.opts, {
        hints: !1
      })), $task.fetch(_0x2abc54).then(_0x419d63 => {
        const {
          statusCode: _0x29adfa,
          statusCode: _0x173218,
          headers: _0x1a48e4,
          body: _0x4310cb
        } = _0x419d63;
        _0x1ed35(null, {
          status: _0x29adfa,
          statusCode: _0x173218,
          headers: _0x1a48e4,
          body: _0x4310cb
        }, _0x4310cb);
      }, _0x1d3737 => _0x1ed35(_0x1d3737))) : this.isNode() && (this.initGotEnv(_0x2abc54), this.got(_0x2abc54).on("redirect", (_0x35f82d, _0x347de5) => {
        try {
          if (_0x35f82d.headers["set-cookie"]) {
            const _0x3d97c4 = _0x35f82d.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x3d97c4 && this.ckjar.setCookieSync(_0x3d97c4, null);
            _0x347de5.cookieJar = this.ckjar;
          }
        } catch (_0x8c0162) {
          this.logErr(_0x8c0162);
        }
      }).then(_0x449665 => {
        const {
          statusCode: _0x14d6b4,
          statusCode: _0x4b0029,
          headers: _0x276e62,
          body: _0x335b49
        } = _0x449665;
        _0x1ed35(null, {
          status: _0x14d6b4,
          statusCode: _0x4b0029,
          headers: _0x276e62,
          body: _0x335b49
        }, _0x335b49);
      }, _0x228d1b => {
        const {
          message: _0x1eb570,
          response: _0x26b4ac
        } = _0x228d1b;
        _0x1ed35(_0x1eb570, _0x26b4ac, _0x26b4ac && _0x26b4ac.body);
      }));
    }
    post(_0x553f97, _0x354bbf = () => {}) {
      if (_0x553f97.body && _0x553f97.headers && !_0x553f97.headers["Content-Type"] && (_0x553f97.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x553f97.headers && delete _0x553f97.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x553f97.headers = _0x553f97.headers || {}, Object.assign(_0x553f97.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x553f97, (_0x416737, _0x212785, _0x5e54bb) => {
          !_0x416737 && _0x212785 && (_0x212785.body = _0x5e54bb, _0x212785.statusCode = _0x212785.status);
          _0x354bbf(_0x416737, _0x212785, _0x5e54bb);
        });
      } else {
        if (this.isQuanX()) {
          _0x553f97.method = "POST";
          this.isNeedRewrite && (_0x553f97.opts = _0x553f97.opts || {}, Object.assign(_0x553f97.opts, {
            hints: !1
          }));
          $task.fetch(_0x553f97).then(_0x182f0d => {
            const {
              statusCode: _0x4c24cf,
              statusCode: _0x27b0ee,
              headers: _0x5220b9,
              body: _0x11fb5f
            } = _0x182f0d;
            _0x354bbf(null, {
              status: _0x4c24cf,
              statusCode: _0x27b0ee,
              headers: _0x5220b9,
              body: _0x11fb5f
            }, _0x11fb5f);
          }, _0x4a821a => _0x354bbf(_0x4a821a));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x553f97);
            const {
              url: _0x3797d0,
              ..._0x38e641
            } = _0x553f97;
            this.got.post(_0x3797d0, _0x38e641).then(_0x436478 => {
              const {
                statusCode: _0xc0a8dd,
                statusCode: _0xb8ed4a,
                headers: _0x2cce85,
                body: _0x5e4832
              } = _0x436478;
              _0x354bbf(null, {
                status: _0xc0a8dd,
                statusCode: _0xb8ed4a,
                headers: _0x2cce85,
                body: _0x5e4832
              }, _0x5e4832);
            }, _0x252eae => {
              const {
                message: _0x18ba51,
                response: _0x3a6beb
              } = _0x252eae;
              _0x354bbf(_0x18ba51, _0x3a6beb, _0x3a6beb && _0x3a6beb.body);
            });
          }
        }
      }
    }
    time(_0x12a9c5, _0x437ec6 = null) {
      const _0xb46e7f = _0x437ec6 ? new Date(_0x437ec6) : new Date();
      let _0x34207a = {
        "M+": _0xb46e7f.getMonth() + 1,
        "d+": _0xb46e7f.getDate(),
        "H+": _0xb46e7f.getHours(),
        "m+": _0xb46e7f.getMinutes(),
        "s+": _0xb46e7f.getSeconds(),
        "q+": Math.floor((_0xb46e7f.getMonth() + 3) / 3),
        S: _0xb46e7f.getMilliseconds()
      };
      /(y+)/.test(_0x12a9c5) && (_0x12a9c5 = _0x12a9c5.replace(RegExp.$1, (_0xb46e7f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2c0058 in _0x34207a) new RegExp("(" + _0x2c0058 + ")").test(_0x12a9c5) && (_0x12a9c5 = _0x12a9c5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x34207a[_0x2c0058] : ("00" + _0x34207a[_0x2c0058]).substr(("" + _0x34207a[_0x2c0058]).length)));
      return _0x12a9c5;
    }
    msg(_0x37146b = _0x869618, _0x55d782 = "", _0x47f048 = "", _0x3ca7e9) {
      const _0x1cc3e6 = _0x149302 => {
        if (!_0x149302) {
          return _0x149302;
        }
        if ("string" == typeof _0x149302) {
          return this.isLoon() ? _0x149302 : this.isQuanX() ? {
            "open-url": _0x149302
          } : this.isSurge() ? {
            url: _0x149302
          } : void 0;
        }
        if ("object" == typeof _0x149302) {
          if (this.isLoon()) {
            let _0x141578 = _0x149302.openUrl || _0x149302.url || _0x149302["open-url"],
              _0x1652d1 = _0x149302.mediaUrl || _0x149302["media-url"];
            return {
              openUrl: _0x141578,
              mediaUrl: _0x1652d1
            };
          }
          if (this.isQuanX()) {
            let _0x261b5f = _0x149302["open-url"] || _0x149302.url || _0x149302.openUrl,
              _0x119d7d = _0x149302["media-url"] || _0x149302.mediaUrl;
            return {
              "open-url": _0x261b5f,
              "media-url": _0x119d7d
            };
          }
          if (this.isSurge()) {
            let _0x2e337c = _0x149302.url || _0x149302.openUrl || _0x149302["open-url"];
            return {
              url: _0x2e337c
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x37146b, _0x55d782, _0x47f048, _0x1cc3e6(_0x3ca7e9)) : this.isQuanX() && $notify(_0x37146b, _0x55d782, _0x47f048, _0x1cc3e6(_0x3ca7e9))), !this.isMuteLog) {
        let _0x504f95 = ["", "==============📣系统通知📣=============="];
        _0x504f95.push(_0x37146b);
        _0x55d782 && _0x504f95.push(_0x55d782);
        _0x47f048 && _0x504f95.push(_0x47f048);
        console.log(_0x504f95.join("\n"));
        this.logs = this.logs.concat(_0x504f95);
      }
    }
    log(..._0x2f28f3) {
      _0x2f28f3.length > 0 && (this.logs = [...this.logs, ..._0x2f28f3]);
      console.log(_0x2f28f3.join(this.logSeparator));
    }
    logErr(_0x34de7b, _0x36ffcb) {
      const _0x275257 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x275257 ? this.log("", "❗️" + this.name + ", 错误!", _0x34de7b.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x34de7b);
    }
    wait(_0x829775) {
      return new Promise(_0x3a9741 => setTimeout(_0x3a9741, _0x829775));
    }
    done(_0x1165cb = {}) {
      const _0x3d57b3 = new Date().getTime(),
        _0x5e5ab5 = (_0x3d57b3 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x5e5ab5 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1165cb);
    }
  }(_0x869618, _0x4969b4);
}