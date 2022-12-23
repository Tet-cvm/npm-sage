import Request from './usual/request';
import Inject from './usual/inject';
import {
  SeaScreen,
  Debounce, Throttle,
  UrlParam, StrParam,
  SetItem, GetItem, DelItem,
  SetCookie, GetCookie, DelCookie,
  IsWechat, IsSafari, IsIos, IsMobile,
} from './usual/basics';
import { VerifyMobile, VerifyEmail, VerifyCard } from './usual/verify';
import { DateFormat } from './usual/moment';

export default {
  Request,
  Inject,
  SeaScreen,
  Debounce, Throttle,
  UrlParam, StrParam,
  SetItem, GetItem, DelItem,
  SetCookie, GetCookie, DelCookie,
  IsWechat, IsSafari, IsIos, IsMobile,
  VerifyMobile, VerifyEmail, VerifyCard,
  DateFormat,
}