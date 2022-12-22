import Request from './usual/request';
import Inject from './usual/inject';
import {
  Debounce, Throttle,
  UrlParam, StrParam,
  SetItem, GetItem, DelItem,
  SetCookie, GetCookie, DelCookie,
  IsWechat, IsSafari, IsIos, IsMobile,
} from './usual/basics';
import { VerifyMobile, VerifyEmail, VerifyCard } from './usual/verify';

export default {
  Request,
  Inject,
  Debounce, Throttle,
  UrlParam, StrParam,
  SetItem, GetItem, DelItem,
  SetCookie, GetCookie, DelCookie,
  IsWechat, IsSafari, IsIos, IsMobile,
  VerifyMobile, VerifyEmail, VerifyCard,
}