/**
  返回数据说明:
  @year 年
  @month 月
  @day 日
  @active 高亮
  @solar 二十四节气
  @festival 节日
  @lunarMonth 阴历月
  @lunarDay 阴历日
**/


class Calendar {
  constructor() {
    this.calendarData = {};
    this.today = new Date();
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth();
    this.day = this.today.getDate();
    this.totalMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    this.lunarInfo = new Array(
      0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
      0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
      0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
      0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
      0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
      0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
      0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
      0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
      0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
      0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
      0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
      0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
      0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
      0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
      0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0);
    this.moon = new Array('初', '十', '廿', '卅');
    this.plant = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
    this.solar = new Array('小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至');
    this.solarInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
    this.sFestival = { // 公历节日
      '0101': '元旦',
      '0214': '情人节',
      '0308': '妇女节',
      '0312': '植树节',
      '0401': '愚人节',
      '0501': '劳动节',
      '0504': '青年节',
      '0601': '儿童节',
      '0701': '建党节',
      '0801': '建军节',
      '0910': '教师节',
      '1001': '国庆节',
      '1224': '平安夜',
      '1225': '圣诞节'
    }
  }
  getYear() {
    return this.year;
  }
  getMonth() {
    return this.month;
  }
  initial() {
    let data = this.library(this.year, this.month);
    return data;
  }
  library(year, month) {
    let first = new Date(year, month, 1); // 当月第一天日期
    let firstWeek = first.getDay(); // 公历当月1号星期几
    let currentNumber = this._days(year, month); // 当月总天数
    let beforeNumber = (month - 1) >= 0 ? (this._days(year, month - 1)) : this._days(year - 1, 11); // 上一月总天数
    let afterNumber = (month + 1) <= 11 ? (this._days(year, month + 1)) : this._days(year + 1, 0); // 下一月总天数
    let total = 0; // 数据总数

    (firstWeek + currentNumber) > 35 ? (total = 42) : (total = 35);
    let list = this._arab(firstWeek, currentNumber, beforeNumber, total);

    // 阴历计算
    let leapData = this._leapFilter(year, month, firstWeek, total, currentNumber);

    // 节气
    let solar1 = this._solar(year, month * 2) - 1;
    let solar2 = this._solar(year, month * 2 + 1) - 1;

    let __solar1 = this.solar[month * 2];
    let __solar2 = this.solar[month * 2 + 1];

    this.calendarData = {};
    for (let n = 0; n < total; n++) {
      let solar = null;
      let condit1 = firstWeek + solar1;
      let condit2 = firstWeek + solar2;

      if (condit1 == n || condit2 == n) {
        if (condit1 == n) {
          solar = __solar1;
        } else if (condit2 == n) {
          solar = __solar2;
        } else {
          solar = null;
        }
      }

      if (n > (firstWeek - 1) && n < (firstWeek + currentNumber)) {
        this.calendarData[String(n)] = {
          id: n,
          festival: this._festival((month + 1), list[n], leapData.chResult[n], leapData.result[n]),
          year: year,
          month: month + 1,
          day: list[n],
          active: true,
          lunarDay: leapData.result[n],
          lunarMonth: leapData.chResult[n],
          solar: solar,
        }
      } else {
        let _month = null;
        let _year = year;
        if (n <= (firstWeek - 1)) {
          _month = month;
          _year = year;

          if (_month == 0) {
            _month = 12;
            _year = year - 1;
          }
        }
        if (n >= (firstWeek + currentNumber)) {
          _month = month + 2;
          if (_month == 13) {
            _month = 1;
            _year = year + 1;
          }
        }

        this.calendarData[String(n)] = {
          id: n,
          festival: this._festival((_month), list[n], leapData.chResult[n], leapData.result[n]),
          year: _year,
          month: _month,
          day: list[n],
          active: false,
          lunarDay: leapData.result[n],
          lunarMonth: leapData.chResult[n],
          solar: solar,
        }
      }
    }
    return this.calendarData;
  }
  _festival(month, day, lunarMonth, lunarDay) {
    let fest = this.sFestival[String(this._double(month)) + String(this._double(day))];
    let lunar = lunarMonth + lunarDay;

    switch (lunar) {
      case '正月初一':
        fest = '春节';
        break;
      case '正月十五':
        fest = '元宵节';
        break;
      case '二月初二':
        fest = '龙抬头';
        break;
      case '五月初五':
        fest = '端午节';
        break;
      case '七月初七':
        fest = '七夕节';
        break;
      case '八月十五':
        fest = '中秋节';
        break;
      case '九月初九':
        fest = '重阳节';
        break;
      case '腊月初八':
        fest = '腊八节';
        break;
    }
    return fest;
  }
  _double(val) {
    if (val < 10) {
      return '0' + val;
    } else {
      return val;
    }
  }
  _days(year, month) {
    if (month == 1) {
      return (((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) ? 29 : 28);
    } else {
      return this.totalMonth[month];
    }
  }
  _arab(firstWeek, currentNumber, beforeNumber, total) {
    let before = [];
    if (firstWeek > 0) {
      for (let j = 0; j < firstWeek; j++) {
        before.push(beforeNumber - j);
      }
    }

    let after = [];
    if ((firstWeek + currentNumber) < total) {
      let len = total - (firstWeek + currentNumber);
      for (let k = 0; k < len; k++) {
        after.push(k + 1);
      }
    }

    let arr = [];
    let result = [];
    for (let f = 0; f < currentNumber; f++) {
      arr.push(f + 1);
    }

    (before.length > 0) ? (result = before.reverse().concat(arr)) : result = arr;
    (after.length > 0) ? (result = result.concat(after)) : '';

    return result;
  }
  _yearTotal(year) { //返回农历y年的总天数
    var i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1)sum += (this.lunarInfo[year - 1900] & i) ? 1 : 0;
    return (sum + this._leapDays(year));
  }
  _leapDays(year) { //返回农历y年闰月的天数
    if (this._leapMonth(year)) return ((this.lunarInfo[year - 1900] & 0x10000) ? 30 : 29);
    else return (0);
  }
  _leapMonth(year) { //判断y年的农历中那个月是闰月,不是闰月返回0
    return (this.lunarInfo[year - 1900] & 0xf);
  }
  _monthDays(year, month) { //返回农历y年m月的总天数
    return ((this.lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29);
  }
  _leapFilter(year, month, firstWeek, total, currentNumber) {
    let arr = [];
    let chArr = [];
    let ii = 0;
    for (let i = 0; i < currentNumber; i++) {
      ii = i;
      let days = new Date(year, month, i + 1);
      let leap = this._dianaDay(days).day;
      let china = this._dianaDay(days).month;
      arr.push(this._filter(leap));
      chArr.push(china);
    }

    let before = [];
    let chBefore = [];
    if (firstWeek > 0) {
      for (let n = 0; n < firstWeek; n++) {
        let days = new Date(year, month, -n);
        let leap = this._dianaDay(days).day;
        let china = this._dianaDay(days).month;
        before.push(this._filter(leap));
        chBefore.push(china);
      }
    }

    let after = [];
    let chAfter = [];
    if ((firstWeek + currentNumber) < total) {
      let len = total - (firstWeek + currentNumber);
      for (let k = 0; k < len; k++) {
        let days = new Date(year, month, (ii + k + 2));
        let leap = this._dianaDay(days).day;
        let china = this._dianaDay(days).month;
        after.push(this._filter(leap));
        chAfter.push(china);
      }
    }

    let result = [];
    let chResult = [];
    (before.length > 0) ? (result = before.reverse().concat(arr)) : result = arr;
    (after.length > 0) ? (result = result.concat(after)) : '';

    (chBefore.length > 0) ? (chResult = chBefore.reverse().concat(chArr)) : chResult = chArr;
    (chAfter.length > 0) ? (chResult = chResult.concat(chAfter)) : '';

    chResult = this._chfilter(chResult);
    return { result, chResult };
  }
  _chfilter(result) {
    let arr = [];
    let data = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];

    for (let n = 0; n < result.length; n++) {
      let li = result[n];
      arr.push(data[li - 1]);
    }
    return arr;
  }
  //返回某年的第n个节气为几日(从0小寒起算)
  _solar(y, n) {
    var offDate = new Date((31556925974.7 * (y - 1900) + this.solarInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    return (offDate.getUTCDate())
  }
  _filter(d) {
    var s;
    switch (d) {
      case 10:
        s = '初十';
        break;
      case 20:
        s = '二十';
        break;
      case 30:
        s = '三十';
        break;
      default:
        s = this.moon[Math.floor(d / 10)];
        s += this.plant[parseInt(d % 10)];
        break;
    }
    return (s);
  }
  _dianaDay(first) {
    var i;
    var leap = 0;
    var temp = 0;

    var base = new Date(1900, 0, 31);
    var offset = (first - base) / 86400000;
    var dayCyl = offset + 40;
    var monCyl = 14;

    for (i = 1900; i < 2050 && offset > 0; i++) {
      temp = this._yearTotal(i)
      offset -= temp;
      monCyl += 12;
    }

    if (offset < 0) {
      offset += temp;
      i--;
      monCyl -= 12;
    }

    var year = JSON.parse(JSON.stringify(i));
    var yearCyl = i - 1864;
    leap = this._leapMonth(i); //闰哪个月
    var isLeap = false;

    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i == (leap + 1) && isLeap == false) {    //闰月
        --i;
        isLeap = true;
        temp = this._leapDays(year);
      }
      else {
        temp = this._monthDays(year, i);
      }
      if (isLeap == true && i == (leap + 1)) isLeap = false;    //解除闰月
      offset -= temp;
      if (isLeap == false) monCyl++;
    }

    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
        --monCyl;
      }
    }

    if (offset < 0) {
      offset += temp;
      --i;
      --monCyl;
    }

    let month = i;
    let day = offset + 1;

    return { month, day };
  }
}

export default Calendar