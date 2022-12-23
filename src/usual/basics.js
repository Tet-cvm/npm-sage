/**
 * 公共函数
 * @SeaScreen 刘海屏
 * 
 * @Debounce  防抖
 * @Throttle  节流
 * 
 * @UrlParam  获取url上的指定参数
 * @StrParam  获取指定url上的参数
 * 
 * @SetItem   localStorage.setItem
 * @GetItem   localStorage.getItem
 * @DelItem   localStorage.removeItem
 * 
 * @SetCookie 设置cookie
 * @GetCookie 读取cookie
 * @DelCookie 删除cookie
 * 
 * @IsWechat  是否微信端
 * @IsSafari  是否Safari浏览器
 * @IsIos     手机是否ios系统
 * @IsMobile  pc端还是移动端
**/

function SeaScreen() {
  if (
    // iphoneX
    (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812) ||
    // iphoneXR
    (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896) ||
    // iphoneXS Max
    (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896) ||
    // iphone12/13 mini
    (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812) ||
    // iphone12/13 Pro
    (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio === 3 && window.screen.width === 390 && window.screen.height === 844) ||
    // iphone12/13 Pro Max
    (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio === 3 && window.screen.width === 428 && window.screen.height === 926)
  ) {
    return true;
  } else {
    return false;
  }
}

let timeout = 0; // 暂时这样吧
function Debounce(func, wait = 1000) {
  if (typeof func !== 'function') {
    throw new TypeError(`func is not a function`)
  }
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = 0;
      return func.apply(this, arguments);
    }, wait)
  }

}

let termly = 0; // 暂时这样吧
function Throttle(func, wait = 3000) {
  if (typeof func !== 'function') {
    throw new TypeError(`func is not a function`)
  }
  return () => {
    const timenow = Date.now();
    if (timenow - termly > wait) {
      termly = timenow;
      return func.apply(this, arguments)
    }
  }
}

function UrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

function StrParam(route, name) {
  let path = route.substring(route.indexOf('?'), route.length)
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = path.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

function SetItem(key, val) {
  const value = encodeURIComponent(JSON.stringify(val));
  localStorage.setItem(key, value);
}

function GetItem(key) {
  let value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(decodeURIComponent(value));
  }
}

function DelItem(key) {
  localStorage.removeItem(key)
}

function SetCookie(name, value, seconds) {
  var exp = new Date();
  exp.setTime(exp.getTime() + seconds * 1000);
  document.cookie = name + "="+ encodeURI (value) + ";expires=" + exp.toGMTString();
}

function GetCookie(name) {
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (document.cookie.match(reg)) {
    let arr = document.cookie.match(reg);
    return decodeURI(arr[2]);
  } else {
    return null;
  }
}

function DelCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if(cval != null)
    document.cookie= name + "=" + cval + ";expires=" + exp.toGMTString();
}

function IsWechat() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

function IsSafari() {
  if ((/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))) {
    return true;
  } else {
    return false;
  }
}

function IsIos() {
  var u = navigator.userAgent;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var os = UrlParam("os");
  return isiOS || (os == "ios");
}

function IsMobile() {
  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

export {
  SeaScreen,
  Debounce, Throttle,
  UrlParam, StrParam,
  SetItem, GetItem, DelItem,
  SetCookie, GetCookie, DelCookie,
  IsWechat, IsSafari, IsIos, IsMobile
}