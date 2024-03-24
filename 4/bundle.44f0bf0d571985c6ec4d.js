(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",y={};y[$]=m;var g="$isDayjsObject",b=function(t){return t instanceof S||!(!t||!t[g])},M=function t(e,n,i){var s;if(!e)return $;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!i&&s&&($=s),s||!i&&$},D=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},w=_;w.l=M,w.i=b,w.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return D(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<D(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!w.u(e)||e,h=w.p(t),f=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(a)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case c:return u?f(1,0):f(31,11);case l:return u?f(1,v):f(0,v+1);case o:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return f(u?_-g:_+(6-g),v);case a:case d:return p($+"Hours",0);case r:return p($+"Minutes",1);case s:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,u=w.p(t),h="set"+(this.$u?"UTC":""),f=(o={},o[a]=h+"Date",o[d]=h+"Date",o[l]=h+"Month",o[c]=h+"FullYear",o[r]=h+"Hours",o[s]=h+"Minutes",o[i]=h+"Seconds",o[n]=h+"Milliseconds",o)[u],p=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,u){var d,h=this;n=Number(n);var f=w.p(u),p=function(t){var e=D(h);return w.w(e.date(e.date()+Math.round(t*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===a)return p(1);if(f===o)return p(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=n.meridiem,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},f=function(t){return w.s(r%12||12,t,"0")},m=c||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(r,a,!0);case"A":return m(r,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,p=this,m=w.p(d),v=D(n),_=(v.utcOffset()-this.utcOffset())*t,$=this-v,y=function(){return w.m(p,v)};switch(m){case c:f=y()/12;break;case l:f=y();break;case u:f=y()/3;break;case o:f=($-_)/6048e5;break;case a:f=($-_)/864e5;break;case r:f=$/e;break;case s:f=$/t;break;case i:f=$/1e3;break;default:f=$}return h?f:w.a(f)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),T=S.prototype;return D.prototype=T,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,S,D),t.$i=!0),D},D.locale=M,D.isDayjs=b,D.unix=function(t){return D(1e3*t)},D.en=y[$],D.Ls=y,D.p={},D}()},522:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2628e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof $},h=function(t,e,n){return new $(t,n,e.$l)},f=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},$=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*c[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var o=_(a,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||o.negative,u=s.format||r.format||o.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+o.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/c[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],e||0},v.add=function(t,e,n){var i;return i=e?t*c[f(e)]:d(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}(),y=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")};return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return h(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)?y(this,t,1):r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)?y(this,t,-1):a.bind(this)(t,e)}}}()},279:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(t,e,n,s){return i.fromToBase(t,e,n,s)}n.en.relativeTime=s,i.fromToBase=function(e,i,r,a,o){for(var l,u,c,d=r.$locale().relativeTime||s,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var m=h[p];m.d&&(l=a?n(e).diff(r,m.d,!0):r.diff(e,m.d,!0));var v=(t.rounding||Math.round)(Math.abs(l));if(c=l>0,v<=m.r||!m.r){v<=1&&p>0&&(m=h[p-1]);var _=d[m.l];o&&(v=o(""+v)),u="string"==typeof _?_.replace("%d",v):_(v,i,m.l,c);break}}if(i)return u;var $=c?d.future:d.past;return"function"==typeof $?$(u):$.replace("%s",u)},i.to=function(t,e){return r(t,e,this,!0)},i.from=function(t,e){return r(t,e,this)};var a=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(a(this),t)},i.fromNow=function(t){return this.from(a(this),t)}}}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t="beforeend";function e(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function i(e,n,i=t){n.insertAdjacentElement(i,e.getElement())}class s{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function r(){return'<form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}class a{getTemplate(){return r}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function o(){return'\n  <ul class="trip-events__list"></ul>\n  '}class l{getTemplate(){return o}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const u=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],c={id:1,type:"Bus",offers:[],destination:"",dateFrom:"",dateTo:"",price:0},d="DD/MM/YY HH:mm",h="MMM DD",f="HH:mm",p=36e5;var m=n(353),v=n.n(m),_=n(522),$=n.n(_),y=n(279),g=n.n(y);v().extend($()),v().extend(g());const b=(t,e)=>t?v()(t).format(e):"",M=t=>t?t.charAt(0).toUpperCase()+t.slice(1):t;class D{constructor({point:t,offers:e,destination:n}){this.point=t,this.offers=e,this.destination=n}getTemplate(){return function(t,e,n){const{type:i,dateFrom:s,dateTo:r,price:a,isFavourite:o}=t,l=b(s,h),u=b(s,h),c=b(s,f),d=b(r,f),m=((t,e)=>{const n=v()(e).diff(v()(t));let i=0;return n>=864e5?i=v().duration(n).format("DD[D] HH[H] mm[M]"):n>=p?i=v().duration(n).format("HH[H] mm[M]"):n<p&&(i=v().duration(n).format("mm[M]")),i})(s,r);return`<div class="event">\n            <time class="event__date" datetime="${l}">${u}</time>\n            <div class="event__type">\n              <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="${i}">\n            </div>\n            <h3 class="event__title">${M(i)} ${n.name}</h3>\n            <div class="event__schedule">\n              <p class="event__time">\n                <time class="event__start-time" datetime="${l}T${c}">${c}</time>\n                &mdash;\n                <time class="event__end-time" datetime="${l}T${d}">${d}</time>\n              </p>\n              <p class="event__duration">${m}</p>\n            </div>\n            <p class="event__price">\n              &euro;&nbsp;<span class="event__price-value">${a}</span>\n            </p>\n            ${function(t){return t.length>0?`<h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    ${t.map((t=>`<li class="event__offer">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n    </li>`)).join("")}\n    </ul>`:""}(e)}\n            <button class="event__favorite-btn ${()=>o?"event__favorite-btn--active":""}" type="button">\n              <span class="visually-hidden">Add to favorite</span>\n              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n              </svg>\n            </button>\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          </div>`}(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class w{constructor({point:t=c,offers:e,destination:n}){this.point=t,this.offers=e,this.destination=n}getTemplate(){return function(t,e,n){const{type:i,dateFrom:s,dateTo:r,price:a}=t,{name:o,description:l,photos:c}=void 0!==n?n:"",h=void 0!==o?o:"",f=function(t,e){return t.map((t=>`\n  <div class="event__type-item">\n    <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${t===e?"checked":""}>\n    <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${M(t)}</label>\n  </div>`)).join("")}(u,i),p=b(s,d),m=b(r,d),v=function(t,e){return t.length>0?`<section class="event__details">\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n    ${t.map((t=>`<div class="event__offer-selector">\n        <input class="event__offer-checkbox visually-hidden" id="event-offer-${e}-${t.id}" type="checkbox" name="event-offer-${t.id}" checked>\n        <label class="event__offer-label" for="event-offer-${e}-${t.id}">\n          <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </label>\n      </div>`)).join("")}\n    </div>\n  </section>`:""}(e),_=void 0!==n?function({name:t,description:e,photos:n}){const i=function(t){return t.length>0?`<div class="event__photos-container">\n  <div class="event__photos-tape">\n  ${t.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.description}">`)).join("")}\n  </div>\n</div>`:""}(n);return`<section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  <p class="event__destination-description">${t}. ${e}</p>\n\n  ${i}\n\n</section>`}({name:o,description:l,photos:c}):"";return`<form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-${t.id}">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${i}.png" alt="${i}">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${t.id}" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n\n          ${f}\n\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-${t.id}">\n        ${i}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-${t.id}" type="text" name="event-destination" value="${h}" list="destination-list-${t.id}">\n      <datalist id="destination-list-${t.id}">\n        <option value="${h}"></option>\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-${t.id}">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-${t.id}" type="text" name="event-start-time" value="${p}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-${t.id}">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-${t.id}" type="text" name="event-end-time" value="${m}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-${t.id}">\n        <span class="visually-hidden">Price</span>\n        &euro; ${a}\n      </label>\n      <input class="event__input  event__input--price" id="event-price-${t.id}" type="text" name="event-price" value="">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Cancel</button>\n  </header>\n  <section class="event__details">\n\n    ${v}\n    ${_}\n\n  </section>\n</form>`}(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class S{getTemplate(){return'<li class="trip-events__item"></li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function T(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  <div class="trip-sort__item  trip-sort__item--day">\n    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n    <label class="trip-sort__btn" for="sort-day">Day</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--event">\n    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n    <label class="trip-sort__btn" for="sort-event">Event</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--time">\n    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n    <label class="trip-sort__btn" for="sort-time">Time</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--price">\n    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n    <label class="trip-sort__btn" for="sort-price">Price</label>\n  </div>\n\n  <div class="trip-sort__item  trip-sort__item--offer">\n    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n    <label class="trip-sort__btn" for="sort-offer">Offers</label>\n  </div>\n</form>'}class C{getTemplate(){return T}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const O=["Krasnodar","St. Petersburg","Mariupol","Pyatigorsk","Sochi","Vyborg","Kaliningrad","Samara","Kazan"],k=["Order Uber","Add luggage","Switch to comfort class","Rent a car","Add breakfast","Book tickets","Add meal","Choose seats","Travel by train"],x=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.","Aliquam id orci ut lectus varius viverra.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.","Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra."],H=(t,e)=>{const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e)),s=Math.random()*(i-n+1)+n;return Math.floor(s)},Y=t=>t[H(0,t.length-1)],E=(t,e)=>{const n=[];return()=>{let i=H(t,e);if(n.length>=e-t+1)return null;for(;n.includes(i);)i=H(t,e);return n.push(i),i}},A=E(1,200),P=E(1,200),F=E(1,200),L=H(1,O.length),j=new class{destinations=[];offers=[];points=[];constructor(){this.destinations=this.collectDestinations(),this.offers=this.collectOffers(),this.points=this.collectPoints()}getDestinations(){return this.destinations}getOffers(){return this.offers}getPoints(){return this.points}collectDestinations(){return Array.from({length:L},(()=>function(){const t=Array.from({length:H(1,x.length)},(()=>Y(x))).join(" "),e=Array.from({length:H(0,5)},(function(){return{description:t,src:`https://loremflickr.com/248/152?random=${50,Math.floor(50*Math.random())}`}}));return{id:A(),name:Y(O),description:t,photos:e}}()))}collectOffers(){return u.map((t=>({type:t,offers:Array.from({length:H(1,H(0,10))},(()=>({id:P(),title:Y(k),price:H(1e3,1e4)})))})))}collectPoints(){return Array.from({length:10},(()=>{const t=Y(u),e=Y(this.destinations),n=H(0,1),i=this.offers.find((e=>e.type===t)),s=n?i.offers.slice(0,H(0,10)).map((t=>t.id)):[];return((t,e,n)=>({id:F(),type:t,destination:e,dateFrom:new Date("2024-02-29, 21:00"),dateTo:new Date("2024-03-03, 21:00"),price:H(1e3,1e4),offers:n,isFavourite:Math.random()>=.5}))(t,s,e.id)}))}},q=new class{destinations=null;constructor(t){this.service=t,this.destinations=this.service.getDestinations()}get(){return this.destinations}getById(t){return this.destinations.find((e=>e.id===t))}}(j),I=new class{constructor(t){this.service=t,this.offers=this.service.getOffers()}get(){return this.offers}getByType(t){return this.offers.find((e=>e.type===t)).offers}}(j),N=new class{constructor(t){this.service=t,this.points=this.service.getPoints()}get(){return this.points}}(j),W=document.querySelector(".page-body"),B=document.querySelector(".trip-main"),U=document.querySelector(".trip-events"),z=W.querySelector(".trip-controls__filters"),J=new class{constructor({headContainer:t}){this.headContainer=t}init(){i(new s,this.headContainer,"afterbegin")}}({headContainer:B}),Z=new class{constructor({headContainer:t}){this.headContainer=t}init(){i(new a,this.headContainer,t)}}({headContainer:z}),V=new class{sortingComponent=new C;pointsListComponent=new l;pointItemComponent=new S;constructor({mainContentContainer:t,destinationModel:e,offersModel:n,tripModel:i}){this.mainContentContainer=t,this.destinationModel=e,this.offersModel=n,this.tripModel=i,this.points=[...this.tripModel.get()]}init(){i(this.sortingComponent,this.mainContentContainer,t),i(this.pointsListComponent,this.mainContentContainer),i(this.pointItemComponent,this.pointsListComponent.getElement()),i(new w({point:this.points[0],offers:this.offersModel.get(),destination:this.destinationModel.get()}),this.pointItemComponent.getElement()),this.points.forEach((t=>{i(new D({point:t,pointDestination:this.destinationModel.getById(t.destination),pointOffers:this.offersModel.getByType(t.type)}),this.pointsListComponent.getElement())}))}}({mainContentContainer:U,destinationModel:q,offersModel:I,tripModel:N});J.init(),Z.init(),V.init()})()})();
//# sourceMappingURL=bundle.44f0bf0d571985c6ec4d.js.map