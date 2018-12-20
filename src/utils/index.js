
export const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 登录时加密使用
export const wrap_encrypt = (content, publickey) => {

      var encryptobj = new JSEncrypt();
      encryptobj.setPublicKey(publickey);

  var result = '',
    chunk;
  var step = 117;
  var strlen = content.length;
  var count = Math.ceil(strlen / step);
  for (var i = 0; i < count; i++) {
    chunk = content.substring(step * i, step * (1 + i));
    result += encryptobj.encrypt(chunk);
  }
  return result;
}


// 获取随机字符串

export const randomString = (len, charSet) => {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

// 判断是否是ie 并获得ie版本
export const IEVersion = () => {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6; //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return false; //不是ie浏览器
  }
}


// 规范设备类型名称的显示
export const devicetypeLInt = (names) => {
  if (typeof names !== 'string') return false
  const name = names.toLocaleLowerCase()
  const android = ['安卓', 'and', 'android']
  const ios = ['iOS', '苹果']
  const macos = ['Mac', 'macos']
  const window = ['win', 'window']
  const linux = ['linux']
  const obj = {
    android,
    ios,
    macos,
    linux,
    window
  }
  const devicetype = {}
  Object.keys(obj).map(item => {
    obj[item].map(it => {
      if (name.split(it).length > 1) {
        devicetype.name = item
        let temp = /[\d\.]+/g.exec(name)
        if (temp && temp.length > 0) {
          devicetype.v = +temp[0]
        }
      }
    })
  })
  return devicetype
}
