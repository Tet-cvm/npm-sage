/**
 * 时间类函数集合
 * @DateFormat 返回当前日期
**/

Date.prototype.Format = function(fmt) {
  let o = {
    'M+': this.getMonth() + 1, //月份
    'D+': this.getDate(),      //日
    'h+': this.getHours(),     //小时
    'm+': this.getMinutes(),   //分
    's+': this.getSeconds(),   //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  };
  if (/(Y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}

function DateFormat(bunch = 'YYYY-MM-DD hh:mm:ss') {
  // YYYY年MM月DD日 hh小时mm分ss秒
  // YYYY年MM月DD日
  // DD/MM/YYYY
  // YYYYMMDD
  // YYYY-MM-DD hh:mm:ss
  const time = new Date();
  return time.Format(bunch);
}

export {
  DateFormat
}