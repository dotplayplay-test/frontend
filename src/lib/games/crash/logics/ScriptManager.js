import { action, makeObservable, observable, runInAction } from "mobx";
import MessageHandler from "./MessageHandler";
import EventEmitter from "$lib/logics/EventEmitter";
import WalletManager from "$lib/logics/WalletManager";
import {ServerURl} from "../../../backendUrl";
import axios from "axios";
import UserStore from "$lib/logics/UserStore";

const ew =
  "dmFyIF9fZGVmUHJvcD1PYmplY3QuZGVmaW5lUHJvcGVydHksX19kZWZOb3JtYWxQcm9wPShlLHQsbik9PnQgaW4gZT9fX2RlZlByb3AoZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSk6ZVt0XT1uLF9fcHVibGljRmllbGQ9KGUsdCxuKT0+KF9fZGVmTm9ybWFsUHJvcChlLCJzeW1ib2wiIT10eXBlb2YgdD90KyIiOnQsbiksbik7IWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBlLHQ9e2V4cG9ydHM6e319LG49Im9iamVjdCI9PXR5cGVvZiBSZWZsZWN0P1JlZmxlY3Q6bnVsbCxyPW4mJiJmdW5jdGlvbiI9PXR5cGVvZiBuLmFwcGx5P24uYXBwbHk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChlLHQsbil9O2U9biYmImZ1bmN0aW9uIj09dHlwZW9mIG4ub3duS2V5cz9uLm93bktleXM6T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSkuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSkpfTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZSl9O3ZhciBpPU51bWJlci5pc05hTnx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPWV9O2Z1bmN0aW9uIHMoKXtzLmluaXQuY2FsbCh0aGlzKX10LmV4cG9ydHM9cyx0LmV4cG9ydHMub25jZT1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixyKXtmdW5jdGlvbiBpKG4pe2UucmVtb3ZlTGlzdGVuZXIodCxzKSxyKG4pfWZ1bmN0aW9uIHMoKXsiZnVuY3Rpb24iPT10eXBlb2YgZS5yZW1vdmVMaXN0ZW5lciYmZS5yZW1vdmVMaXN0ZW5lcigiZXJyb3IiLGkpLG4oW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX12KGUsdCxzLHtvbmNlOiEwfSksImVycm9yIiE9PXQmJmZ1bmN0aW9uKGUsdCxuKXsiZnVuY3Rpb24iPT10eXBlb2YgZS5vbiYmdihlLCJlcnJvciIsdCxuKX0oZSxpLHtvbmNlOiEwfSl9KSl9LHMuRXZlbnRFbWl0dGVyPXMscy5wcm90b3R5cGUuX2V2ZW50cz12b2lkIDAscy5wcm90b3R5cGUuX2V2ZW50c0NvdW50PTAscy5wcm90b3R5cGUuX21heExpc3RlbmVycz12b2lkIDA7dmFyIG89MTA7ZnVuY3Rpb24gdShlKXtpZigiZnVuY3Rpb24iIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgImxpc3RlbmVyIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgZSl9ZnVuY3Rpb24gYShlKXtyZXR1cm4gdm9pZCAwPT09ZS5fbWF4TGlzdGVuZXJzP3MuZGVmYXVsdE1heExpc3RlbmVyczplLl9tYXhMaXN0ZW5lcnN9ZnVuY3Rpb24gYyhlLHQsbixyKXt2YXIgaSxzLG8sYztpZih1KG4pLHZvaWQgMD09PShzPWUuX2V2ZW50cyk/KHM9ZS5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksZS5fZXZlbnRzQ291bnQ9MCk6KHZvaWQgMCE9PXMubmV3TGlzdGVuZXImJihlLmVtaXQoIm5ld0xpc3RlbmVyIix0LG4ubGlzdGVuZXI/bi5saXN0ZW5lcjpuKSxzPWUuX2V2ZW50cyksbz1zW3RdKSx2b2lkIDA9PT1vKW89c1t0XT1uLCsrZS5fZXZlbnRzQ291bnQ7ZWxzZSBpZigiZnVuY3Rpb24iPT10eXBlb2Ygbz9vPXNbdF09cj9bbixvXTpbbyxuXTpyP28udW5zaGlmdChuKTpvLnB1c2gobiksKGk9YShlKSk+MCYmby5sZW5ndGg+aSYmIW8ud2FybmVkKXtvLndhcm5lZD0hMDt2YXIgbD1uZXcgRXJyb3IoIlBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gIitvLmxlbmd0aCsiICIrU3RyaW5nKHQpKyIgbGlzdGVuZXJzIGFkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdCIpO2wubmFtZT0iTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nIixsLmVtaXR0ZXI9ZSxsLnR5cGU9dCxsLmNvdW50PW8ubGVuZ3RoLGM9bCxjb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybihjKX1yZXR1cm4gZX1mdW5jdGlvbiBsKCl7aWYoIXRoaXMuZmlyZWQpcmV0dXJuIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSx0aGlzLndyYXBGbiksdGhpcy5maXJlZD0hMCwwPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpOnRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsYXJndW1lbnRzKX1mdW5jdGlvbiBoKGUsdCxuKXt2YXIgcj17ZmlyZWQ6ITEsd3JhcEZuOnZvaWQgMCx0YXJnZXQ6ZSx0eXBlOnQsbGlzdGVuZXI6bn0saT1sLmJpbmQocik7cmV0dXJuIGkubGlzdGVuZXI9bixyLndyYXBGbj1pLGl9ZnVuY3Rpb24gZihlLHQsbil7dmFyIHI9ZS5fZXZlbnRzO2lmKHZvaWQgMD09PXIpcmV0dXJuW107dmFyIGk9clt0XTtyZXR1cm4gdm9pZCAwPT09aT9bXToiZnVuY3Rpb24iPT10eXBlb2YgaT9uP1tpLmxpc3RlbmVyfHxpXTpbaV06bj9mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjx0Lmxlbmd0aDsrK24pdFtuXT1lW25dLmxpc3RlbmVyfHxlW25dO3JldHVybiB0fShpKTpkKGksaS5sZW5ndGgpfWZ1bmN0aW9uIHAoZSl7dmFyIHQ9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PXQpe3ZhciBuPXRbZV07aWYoImZ1bmN0aW9uIj09dHlwZW9mIG4pcmV0dXJuIDE7aWYodm9pZCAwIT09bilyZXR1cm4gbi5sZW5ndGh9cmV0dXJuIDB9ZnVuY3Rpb24gZChlLHQpe2Zvcih2YXIgbj1uZXcgQXJyYXkodCkscj0wO3I8dDsrK3IpbltyXT1lW3JdO3JldHVybiBufWZ1bmN0aW9uIHYoZSx0LG4scil7aWYoImZ1bmN0aW9uIj09dHlwZW9mIGUub24pci5vbmNlP2Uub25jZSh0LG4pOmUub24odCxuKTtlbHNle2lmKCJmdW5jdGlvbiIhPXR5cGVvZiBlLmFkZEV2ZW50TGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlICJlbWl0dGVyIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGUpO2UuYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbiBpKHMpe3Iub25jZSYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsaSksbihzKX0pKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHMsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBvfSxzZXQ6ZnVuY3Rpb24oZSl7aWYoIm51bWJlciIhPXR5cGVvZiBlfHxlPDB8fGkoZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiAiZGVmYXVsdE1heExpc3RlbmVycyIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJytlKyIuIik7bz1lfX0pLHMuaW5pdD1mdW5jdGlvbigpe3ZvaWQgMCE9PXRoaXMuX2V2ZW50cyYmdGhpcy5fZXZlbnRzIT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHN8fCh0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wKSx0aGlzLl9tYXhMaXN0ZW5lcnM9dGhpcy5fbWF4TGlzdGVuZXJzfHx2b2lkIDB9LHMucHJvdG90eXBlLnNldE1heExpc3RlbmVycz1mdW5jdGlvbihlKXtpZigibnVtYmVyIiE9dHlwZW9mIGV8fGU8MHx8aShlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mICJuIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK2UrIi4iKTtyZXR1cm4gdGhpcy5fbWF4TGlzdGVuZXJzPWUsdGhpc30scy5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcyl9LHMucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXQucHVzaChhcmd1bWVudHNbbl0pO3ZhciBpPSJlcnJvciI9PT1lLHM9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PXMpaT1pJiZ2b2lkIDA9PT1zLmVycm9yO2Vsc2UgaWYoIWkpcmV0dXJuITE7aWYoaSl7dmFyIG87aWYodC5sZW5ndGg+MCYmKG89dFswXSksbyBpbnN0YW5jZW9mIEVycm9yKXRocm93IG87dmFyIHU9bmV3IEVycm9yKCJVbmhhbmRsZWQgZXJyb3IuIisobz8iICgiK28ubWVzc2FnZSsiKSI6IiIpKTt0aHJvdyB1LmNvbnRleHQ9byx1fXZhciBhPXNbZV07aWYodm9pZCAwPT09YSlyZXR1cm4hMTtpZigiZnVuY3Rpb24iPT10eXBlb2YgYSlyKGEsdGhpcyx0KTtlbHNle3ZhciBjPWEubGVuZ3RoLGw9ZChhLGMpO2ZvcihuPTA7bjxjOysrbilyKGxbbl0sdGhpcyx0KX1yZXR1cm4hMH0scy5wcm90b3R5cGUuYWRkTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYyh0aGlzLGUsdCwhMSl9LHMucHJvdG90eXBlLm9uPXMucHJvdG90eXBlLmFkZExpc3RlbmVyLHMucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiBjKHRoaXMsZSx0LCEwKX0scy5wcm90b3R5cGUub25jZT1mdW5jdGlvbihlLHQpe3JldHVybiB1KHQpLHRoaXMub24oZSxoKHRoaXMsZSx0KSksdGhpc30scy5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiB1KHQpLHRoaXMucHJlcGVuZExpc3RlbmVyKGUsaCh0aGlzLGUsdCkpLHRoaXN9LHMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLHMsbztpZih1KHQpLHZvaWQgMD09PShyPXRoaXMuX2V2ZW50cykpcmV0dXJuIHRoaXM7aWYodm9pZCAwPT09KG49cltlXSkpcmV0dXJuIHRoaXM7aWYobj09PXR8fG4ubGlzdGVuZXI9PT10KTA9PS0tdGhpcy5fZXZlbnRzQ291bnQ/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6KGRlbGV0ZSByW2VdLHIucmVtb3ZlTGlzdGVuZXImJnRoaXMuZW1pdCgicmVtb3ZlTGlzdGVuZXIiLGUsbi5saXN0ZW5lcnx8dCkpO2Vsc2UgaWYoImZ1bmN0aW9uIiE9dHlwZW9mIG4pe2ZvcihpPS0xLHM9bi5sZW5ndGgtMTtzPj0wO3MtLSlpZihuW3NdPT09dHx8bltzXS5saXN0ZW5lcj09PXQpe289bltzXS5saXN0ZW5lcixpPXM7YnJlYWt9aWYoaTwwKXJldHVybiB0aGlzOzA9PT1pP24uc2hpZnQoKTpmdW5jdGlvbihlLHQpe2Zvcig7dCsxPGUubGVuZ3RoO3QrKyllW3RdPWVbdCsxXTtlLnBvcCgpfShuLGkpLDE9PT1uLmxlbmd0aCYmKHJbZV09blswXSksdm9pZCAwIT09ci5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KCJyZW1vdmVMaXN0ZW5lciIsZSxvfHx0KX1yZXR1cm4gdGhpc30scy5wcm90b3R5cGUub2ZmPXMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLHMucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycz1mdW5jdGlvbihlKXt2YXIgdCxuLHI7aWYodm9pZCAwPT09KG49dGhpcy5fZXZlbnRzKSlyZXR1cm4gdGhpcztpZih2b2lkIDA9PT1uLnJlbW92ZUxpc3RlbmVyKXJldHVybiAwPT09YXJndW1lbnRzLmxlbmd0aD8odGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCk6dm9pZCAwIT09bltlXSYmKDA9PS0tdGhpcy5fZXZlbnRzQ291bnQ/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6ZGVsZXRlIG5bZV0pLHRoaXM7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBpLHM9T2JqZWN0LmtleXMobik7Zm9yKHI9MDtyPHMubGVuZ3RoOysrcikicmVtb3ZlTGlzdGVuZXIiIT09KGk9c1tyXSkmJnRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGkpO3JldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygicmVtb3ZlTGlzdGVuZXIiKSx0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wLHRoaXN9aWYoImZ1bmN0aW9uIj09dHlwZW9mKHQ9bltlXSkpdGhpcy5yZW1vdmVMaXN0ZW5lcihlLHQpO2Vsc2UgaWYodm9pZCAwIT09dClmb3Iocj10Lmxlbmd0aC0xO3I+PTA7ci0tKXRoaXMucmVtb3ZlTGlzdGVuZXIoZSx0W3JdKTtyZXR1cm4gdGhpc30scy5wcm90b3R5cGUubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybiBmKHRoaXMsZSwhMCl9LHMucHJvdG90eXBlLnJhd0xpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm4gZih0aGlzLGUsITEpfSxzLmxpc3RlbmVyQ291bnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2YgZS5saXN0ZW5lckNvdW50P2UubGlzdGVuZXJDb3VudCh0KTpwLmNhbGwoZSx0KX0scy5wcm90b3R5cGUubGlzdGVuZXJDb3VudD1wLHMucHJvdG90eXBlLmV2ZW50TmFtZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQ+MD9lKHRoaXMuX2V2ZW50cyk6W119O3ZhciBtPXNlbGYsZz17c2VsZjoxLG9ubWVzc2FnZToxLHBvc3RNZXNzYWdlOjEsZ2xvYmFsOjEsd2w6MSxldmFsOjEsQXJyYXk6MSxCb29sZWFuOjEsUmVmbGVjdDoxLFByb3h5OjEsU3ltYm9sOjEsRGF0ZToxLEZ1bmN0aW9uOjEsTnVtYmVyOjEsT2JqZWN0OjEsUmVnRXhwOjEsU3RyaW5nOjEsRXJyb3I6MSxFdmFsRXJyb3I6MSxSYW5nZUVycm9yOjEsUmVmZXJlbmNlRXJyb3I6MSxTeW50YXhFcnJvcjoxLFR5cGVFcnJvcjoxLFVSSUVycm9yOjEsZGVjb2RlVVJJOjEsZGVjb2RlVVJJQ29tcG9uZW50OjEsZW5jb2RlVVJJOjEsZW5jb2RlVVJJQ29tcG9uZW50OjEsaXNGaW5pdGU6MSxpc05hTjoxLHBhcnNlRmxvYXQ6MSxwYXJzZUludDoxLEluZmluaXR5OjEsSlNPTjoxLE1hdGg6MSxOYU46MSx1bmRlZmluZWQ6MSxjb25zb2xlOjEsUHJvbWlzZToxfTtPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtKS5mb3JFYWNoKChmdW5jdGlvbihlKXtpZighZy5oYXNPd25Qcm9wZXJ0eShlKSl0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG0sZSx7Z2V0OmZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKCJTZWN1cml0eSBFeGNlcHRpb246IGNhbm5vdCBhY2Nlc3MgIitlKX0sY29uZmlndXJhYmxlOiExfSl9Y2F0Y2godCl7fX0pKTtjbGFzcyB5IGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLF9fcHVibGljRmllbGQodGhpcywibmFtZSIsIk1lc3NhZ2VFcnJvciIpfX1jb25zdCBiPW5ldyBjbGFzcyBleHRlbmRzIGNsYXNze2NvbnN0cnVjdG9yKGUsdD13aW5kb3cpe19fcHVibGljRmllbGQodGhpcywidGltZW91dCIsNWUzKSxfX3B1YmxpY0ZpZWxkKHRoaXMsIm1zZ0lkIiwwKSxfX3B1YmxpY0ZpZWxkKHRoaXMsInRhcmdldCIpLF9fcHVibGljRmllbGQodGhpcywic291cmNlIiksX19wdWJsaWNGaWVsZCh0aGlzLCJyZXFjYnMiLHt9KSxfX3B1YmxpY0ZpZWxkKHRoaXMsImV2ZW50RGljdCIse30pLHRoaXMudGFyZ2V0PWUsdGhpcy5zb3VyY2U9dCx0aGlzLm9uTWVzc2FnZT10aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpLHRoaXMuc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLHRoaXMub25NZXNzYWdlKX1hc3luYyBvbk1lc3NhZ2UoZSl7Y29uc3QgdD1lLnNvdXJjZTtpZihlLnNvdXJjZSYmdCE9PXRoaXMudGFyZ2V0KXJldHVybjtsZXR7bXNnaWQ6bixldmVudDpyLHBheWxvYWQ6aX09ZS5kYXRhO2lmKCFpKXJldHVybjtsZXRbcyxvXT1pO2lmKHIpdHJ5e2xldCBlPXRoaXMudHJpZ2dlcihyLG8pO2lmKCFuKXJldHVybjtlIGluc3RhbmNlb2YgUHJvbWlzZT9lLnRoZW4oKGU9Pnt0aGlzLnNlbmRNZXNzYWdlKHttc2dpZDpuLHBheWxvYWQ6W251bGwsZV19KX0pKS5jYXRjaCgoZT0+e3RoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOm4scGF5bG9hZDpbZS5tZXNzYWdlXX0pfSkpOnRoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOm4scGF5bG9hZDpbbnVsbCxlXX0pfWNhdGNoKHUpe3RoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOm4scGF5bG9hZDpbdS5tZXNzYWdlXX0pfWVsc2UgaWYobiYmbnVsbCE9aSl7aWYoIXRoaXMucmVxY2JzW25dKXJldHVybjtudWxsIT09cz90aGlzLnJlcWNic1tuXVsxXShuZXcgeShzKSk6dGhpcy5yZXFjYnNbbl1bMF0obyl9fXNlbmRNZXNzYWdlKGUpe3RoaXMudGFyZ2V0JiZ0aGlzLnRhcmdldC5wb3N0TWVzc2FnZShlLCIqIil9ZW1pdChlLHQ9bnVsbCl7dGhpcy5zZW5kTWVzc2FnZSh7ZXZlbnQ6ZSxwYXlsb2FkOltudWxsLHRdfSl9cmVxdWVzdChlLHQ9bnVsbCl7dGhpcy5tc2dJZCsrO2xldCBuPXRoaXMubXNnSWQ7cmV0dXJuIG5ldyBQcm9taXNlKCgocixpKT0+e2xldCBzPSguLi5lKT0+e28oKSxpKC4uLmUpfSxvPSgpPT57dGhpcy50aW1lb3V0PjAmJmNsZWFyVGltZW91dCh1KSxkZWxldGUgdGhpcy5yZXFjYnNbbl19LHU9MDt0aGlzLnRpbWVvdXQ+MCYmKHU9d2luZG93LnNldFRpbWVvdXQocy5iaW5kKHRoaXMsYFRpbWVPdXQ6ICR7ZX1gKSx0aGlzLnRpbWVvdXQpKSx0aGlzLnJlcWNic1tuXT1bKC4uLmUpPT57bygpLHIoLi4uZSl9LHNdLHRoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOm4sZXZlbnQ6ZSxwYXlsb2FkOltudWxsLHRdfSl9KSl9b24oZSx0KXt0aGlzLmV2ZW50RGljdFtlXXx8KHRoaXMuZXZlbnREaWN0W2VdPVtdKSx0aGlzLmV2ZW50RGljdFtlXS5wdXNoKHQpfW9mZihlLHQpe2NvbnN0IG49dGhpcy5ldmVudERpY3RbZV07aWYoIW4pcmV0dXJuO2xldCByPW4uaW5kZXhPZih0KTstMSE9ciYmKG4uc3BsaWNlKHIsMSksMD09bi5sZW5ndGgmJmRlbGV0ZSB0aGlzLmV2ZW50RGljdFtlXSl9dHJpZ2dlcihlLHQ9e30pe2xldCBuPXRoaXMuZXZlbnREaWN0W2VdO2lmKCFuKXRocm93IG5ldyBFcnJvcihgUmVxdWVzdCBOb3QgRm91bmQ6ICR7ZX1gKTtpZigxPT1uLmxlbmd0aClyZXR1cm4gblswXSh0KTt7bGV0IGU9W107Zm9yKGxldCByPTAsaT1uLmxlbmd0aDtyPGk7cisrKWUucHVzaChuW3JdKHQpKTtyZXR1cm4gZX19ZGVzdHJveSgpe3RoaXMuZXZlbnREaWN0PXt9LHRoaXMucmVxY2JzPXt9LHRoaXMuc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLHRoaXMub25NZXNzYWdlKX19e2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUsZSl9c2VuZE1lc3NhZ2UoZSl7dGhpcy50YXJnZXQucG9zdE1lc3NhZ2UoZSl9ZGVzdHJveSgpe3N1cGVyLmRlc3Ryb3koKSx0aGlzLnRhcmdldC50ZXJtaW5hdGUoKX19KG0pO2xldCBfLHc7Yi50aW1lb3V0PTA7Y29uc3QgRT17bWF4QW1vdW50OjAsbWluQW1vdW50OjAsY3VycmVuY3lOYW1lOiIiLGFtb3VudDowfSxMPXtpbmZvKGUpe2IuZW1pdCgibG9nIix7dHlwZTowLG1lc3NhZ2U6ZX0pfSxzdWNjZXNzKGUpe2IuZW1pdCgibG9nIix7dHlwZToxLG1lc3NhZ2U6ZX0pfSxlcnJvcihlKXtiLmVtaXQoImxvZyIse3R5cGU6MixtZXNzYWdlOmV9KX19O2NsYXNzIE8gZXh0ZW5kcyB0LmV4cG9ydHMuRXZlbnRFbWl0dGVye2NvbnN0cnVjdG9yKCl7c3VwZXIoKSxfX3B1YmxpY0ZpZWxkKHRoaXMsImhpc3RvcnkiLFtdKSxfX3B1YmxpY0ZpZWxkKHRoaXMsImlzSGlzdG9yeVdhcm5pbmciLCExKSx0aGlzLm9uR2FtZUVuZD10aGlzLm9uR2FtZUVuZC5iaW5kKHRoaXMpfWFzeW5jIGJldChlLHQpe3JldHVybiBhd2FpdCBiLnJlcXVlc3QoImJldCIse2Ftb3VudDplLHBheW91dDp0fSl9c3RvcCgpe3JldHVybiBiLmVtaXQoInN0b3AiKX1vbkJldCgpe31vbkdhbWVTdGFydCgpe3RoaXMuZW1pdCgiR0FNRV9TVEFSVElORyIpLHgub25CZXQoKX1vbkdhbWVFbmQoZSl7dGhpcy5oaXN0b3J5PWUsdGhpcy5lbWl0KCJHQU1FX0VOREVEIixlWzBdKX1nZXRIaXN0b3J5KCl7cmV0dXJuIHRoaXMuaXNIaXN0b3J5V2FybmluZ3x8KEwuaW5mbygiVGhlIGhpc3RvcnkgQVBJIGlzIGRlcHJlY2F0ZWQsIHlvdSBzaG91bGQgc3RvcmUgaXQgeW91cnNlbGYhIiksdGhpcy5pc0hpc3RvcnlXYXJuaW5nPSEwKSx0aGlzLmhpc3Rvcnl9fWNvbnN0IHg9bmV3IE87Yi5vbigicmVnaXN0IiwoZT0+e2xldCB0PW5ldyBGdW5jdGlvbigiZ2FtZSIsImVuZ2luZSIsImN1cnJlbmN5IiwibG9nIixgJHtlfTsgcmV0dXJuIFtjb25maWcsIG1haW5dO2ApLFtuLHJdPXQoeCx4LEUsTCk7cmV0dXJuIHc9bixfPXIsd30pKSxiLm9uKCJydW4iLChlPT57T2JqZWN0LmFzc2lnbih3LGUpO3RyeXtfKCl9Y2F0Y2godCl7TC5lcnJvcihTdHJpbmcodCkpLHguc3RvcCgpfX0pKSxiLm9uKCJzeW5jQ3VycmVuY3kiLChlPT5PYmplY3QuYXNzaWduKEUsZSkpKSxiLm9uKCJiZXQiLCgoKT0+e3RyeXt4Lm9uR2FtZVN0YXJ0KCl9Y2F0Y2goZSl7TC5lcnJvcihTdHJpbmcoZSkpLHguc3RvcCgpfX0pKSxiLm9uKCJnYW1lRW5kIix4Lm9uR2FtZUVuZCksbS5hZGRFdmVudExpc3RlbmVyKCJ1bmhhbmRsZWRyZWplY3Rpb24iLChlPT57TC5lcnJvcihTdHJpbmcoZS5yZWFzb24pKSx4LnN0b3AoKX0pKX0oKTsK";

const delayFunction = (e = 0) => new Promise((t) => setTimeout(t, e));

function getWorker() {
  const tw =
  "undefined" != typeof window &&
  window.Blob &&
  new Blob([atob(ew)], { type: "text/javascript;charset=utf-8" });
  const e = tw && (window.URL || window.webkitURL).createObjectURL(tw);
  try {
    return e
      ? new Worker(e)
      : new Worker("data:application/javascript;base64," + ew, {
          type: "module",
        });
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
// Reformatting the code with better naming conventions
const ScriptStatus = {
  INFO: 0,
  SUCCESS: 1,
  ERROR: 2,
  0: "INFO",
  1: "SUCCESS",
  2: "ERROR",
};
export default class ScriptManager extends EventEmitter {
  static MAX_LOG = 1e3;
  static SCRIPT_TEMPLATE = `var config = {
    bet: { label: 'bet', value: currency.minAmount * 1.2, type: 'number' },
    payout: { label: 'payout', value: 2, type: 'number' }
  }
  
  function main () {
    game.onBet = function () {
      game.bet(config.bet.value, config.payout.value).then(function(payout) {
        if (payout &gt; 1) {
          log.success("We won, payout " + payout + "X!");
        } else {
          log.error("We lost, payout " + payout + "X!");
        }
      });
    }
  }`;

  constructor(game) {
    super();
    this.game = game;
    this.script = null;
    this.isRunning = false;
    this.config = null;
    this.scriptList = [];
    this.logs = [];
    this.interval = 500;
    this.prevBetTime = Date.now();
    this.isAutoStep = true;
    this.messager = null;
    this.handleBet = () => {
      throw new Error("no bet handle");
    };
    this.initPms = null;
    this.logid = 0;

    makeObservable(this, {
      script: observable,
      isRunning: observable,
      config: observable,
      scriptList: observable.ref,
      logs: observable.ref,
      unRegist: action,
      addLog: action,
      delScript: action,
      updateScript: action,
    });
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.unRegist = this.unRegist.bind(this);
    this.step = this.step.bind(this);

    this.enableAutoStep(true);
  }

  async initScript() {
    if (!this.initPms) {
      this.initPms = axios
        .post(ServerURl() + "/api/user/crash-game/scripts/list/", {
          gameName: this.game.name,
          userId: this.game.user?.userId
        })
        .then((response) => response.data)
        .then(({scripts}) => {
          runInAction(() => {
            this.scriptList = scripts.map(({ name, content, id, userId }) => ({
              name,
              content,
              id,
              userId,
            }));
          })
        })
        .catch(() => {
          this.initPms = null;
        });
    }
    return this.initPms;
  }

  async delScript({ id }) {
    await axios.post(ServerURl() + "/api/user/crash-game/scripts/delete/", {
      id,
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${UserStore.getInstance().authToken}`
      }
    });
    const index = this.scriptList.findIndex((script) => script.id == id);
    this.scriptList.splice(index, 1);
    this.scriptList = [...this.scriptList];
  }

  async updateScript(script) {
    const authToken = UserStore.getInstance().authToken;
    if (!authToken) return;
    const { id, name, content } = script;
    if (id == 0) {
      const {
        data: { id: newId, userId },
      } = await axios.post(ServerURl() + "/api/user/crash-game/scripts/add/", {
        gameName: this.game.name,
        name,
        content,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        }
      });
      this.scriptList.push({ id: newId, userId, name, content });
      this.scriptList = [...this.scriptList];
    } else {
      await axios.post(ServerURl() + "/api/user/crash-game/scripts/update/", {
        id,
        name,
        content,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        }
      });
      script.userId = this.game.userId;
      const index = this.scriptList.findIndex((s) => s.id == id);
      this.scriptList.splice(index, 1, script);
      this.scriptList = [...this.scriptList];
    }
  }

  async regist(script) {
    this.messager = new MessageHandler(new Worker('scripts/worker2.js', {type: "classic"}));
    this.messager.on("bet", this.handleBet.bind(this));
    this.messager.on("log", (msg) => this.addLog(msg.message, msg.type));
    this.messager.on("stop", this.stop.bind(this));
    this.messager.on("getHistory", () => this.emit("getHistory"));
    this.syncCurrency();
    let config = null;
    console.log("Registering script > ", )
    try {
      config = await this.messager.request("regist", script.content);
    } catch (error) {
      console.log("Error reging ",error )
      this.addLog(error.message, ScriptStatus.ERROR);
    } finally {
      runInAction(() => {
        this.script = script;
        if (!this.config) {
          this.config = config;
        }
        console.log("Done reg ",script, config )
      });
    }
  }

  unRegist() {
    this.stop();
    this.script = null;
    this.logs = [];
    this.config = null;
  }

  syncCurrency() {
    const { currencyName } = this.game;
    if (WalletManager.getInstance().dict[currencyName]) {
      const { maxAmount, minAmount } =
        WalletManager.getInstance().dict[currencyName];
      this.messager?.emit("syncCurrency", {
        maxAmount,
        minAmount,
        currencyName,
        amount: WalletManager.getInstance().dict[currencyName].amount,
      });
    }
  }

  onGameEnd(result) {
    this.messager?.emit("gameEnd", result);
  }

  async start() {
    this.game.setBetStatus(true);
    this.isRunning = true;
    if (!this.messager && this.script) {
      this.regist(this.script);
    }
    this.messager?.emit("run", JSON.parse(JSON.stringify(this.config)));
    this.addLog("Script is running!");
    if (this.isAutoStep) {
      this.step();
    }
  }

  step() {
    if (this.isRunning) {
      this.messager?.emit("bet");
    }
  }

  stop() {
    this.isRunning = false;
    this.game.setBetStatus(false);
    this.addLog("Script is stopped!");
    this.syncCurrency();
    if (this.messager) {
      this.messager.destroy();
      this.messager = null;
    }
  }

  addLog(message, type = ScriptStatus.INFO) {
    let id = ++this.logid;
    let logs = [...this.logs, { message, type, id }];
    if (logs.length > ScriptManager.MAX_LOG) {
      logs = logs.slice(-ScriptManager.MAX_LOG);
    }
    this.logs = logs;
  }

  enableAutoStep(enable = true) {
    this.isAutoStep = enable;
    this.handleBet = enable
      ? ({ amount, payout }) =>
          this.game
            .handleScriptBet(amount, { payout })
            .then(([result, payout]) => {
              this.delay().then(this.step);
              this.onGameEnd(payout || result);
              return result;
            })
      : ({ amount, payout }) =>
          this.game
            .handleScriptBet(amount, { payout })
            .then(([result, payout]) => {
              this.onGameEnd(payout || result);
              return result;
            });
  }

  async delay() {
    let now = Date.now();
    let timeDiff = this.interval - (now - this.prevBetTime);
    await delayFunction(Math.max(timeDiff, 0));
    this.prevBetTime = Date.now();
  }
}
