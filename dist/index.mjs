var e,t;!function(e){e.Second="second",e.Minute="minute",e.Hour="hour",e.Day="day",e.Week="week",e.Month="month",e.Year="year"}(e||(e={})),function(e){e[e.Millisecond=1]="Millisecond",e[e.Second=1e3]="Second",e[e.Minute=6e4]="Minute",e[e.Hour=36e5]="Hour",e[e.Day=864e5]="Day",e[e.Month=2628e6]="Month",e[e.Year=31536e6]="Year"}(t||(t={}));const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Map([["Y",4],["Q",1],["M",4],["D",4],["d",4],["X",1],["x",1],["H",2],["h",2],["a",1],["A",1],["m",2],["s",2],["S",3],["Z",2],["l",4],["L",4],["T",1],["t",1]]),i=/^(?:(\*)|(\d+)(?:-(\d+))?)(?:\/(\d+))?$/,s=/\bh\b|\B\?\B/g,o=[[0,59],[0,23],[1,31],[1,12],[0,6]],l={"@annually":"0 0 1 1 *","@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"},u={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12,sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},g=new RegExp(Object.keys(u).join("|"),"g"),d={year:{1:"year",DEFAULT:"years"},month:{1:"month",DEFAULT:"months"},week:{1:"week",DEFAULT:"weeks"},day:{1:"day",DEFAULT:"days"},hour:{1:"hour",DEFAULT:"hours"},minute:{1:"minute",DEFAULT:"minutes"},second:{1:"second",DEFAULT:"seconds"}};class Cron{constructor(e){Object.defineProperty(this,"cron",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"normalized",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"minutes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"hours",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"days",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"months",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dows",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.cron=e.toLowerCase(),this.normalized=Cron.normalize(this.cron),[this.minutes,this.hours,this.days,this.months,this.dows]=Cron.parseString(this.normalized)}next(e=new Date,t=!0){if(!this.days.includes(e.getUTCDate())||!this.months.includes(e.getUTCMonth()+1)||!this.dows.includes(e.getUTCDay()))return this.next(new Date(e.getTime()+864e5),!1);if(!t)return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),this.hours[0],this.minutes[0]));const r=new Date(e.getTime()+6e4);for(const t of this.hours)if(!(t<r.getUTCHours()))for(const n of this.minutes)if(!(t===r.getUTCHours()&&n<r.getUTCMinutes()))return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),t,n));return this.next(new Date(e.getTime()+864e5),!1)}static normalize(e){if(Reflect.has(l,e))return Reflect.get(l,e);const t=new Date;return(e=e.split(" ").map(((e,r)=>e.replace(s,(e=>{if("h"===e)return(Math.floor(Math.random()*o[r][1])+o[r][0]).toString();if("?"===e)switch(r){case 0:return t.getUTCMinutes().toString();case 1:return t.getUTCHours().toString();case 2:return t.getUTCDate().toString();case 3:return t.getUTCMonth().toString();case 4:return t.getUTCDay().toString()}return e})))).join(" ")).replace(g,(e=>String(Reflect.get(u,e))))}static parseString(e){const t=e.split(" ");if(5!==t.length)throw new Error("Invalid Cron Provided");return t.map(((e,t)=>Cron.parsePart(e,t)))}static parsePart(e,t){if(e.includes(",")){const r=[];for(const n of e.split(","))r.push(...Cron.parsePart(n,t));return[...new Set(r)].sort(((e,t)=>e-t))}const[,r,n,a,s]=i.exec(e);let[l,u]=[parseInt(n,10),parseInt(a,10)];if(r)[l,u]=o[t];else if(!u&&!s)return[l];return[l,u]=[l,u||o[t][1]].sort(((e,t)=>e-t)),function range(e,t,r){return new Array(Math.floor((t-e)/r)+1).fill(0).map(((t,n)=>e+n*r))}(l,u,parseInt(s,10)||1)}}const c=new Map([["nanosecond",1e-6],["nanoseconds",1e-6],["ns",1e-6],["millisecond",1],["milliseconds",1],["ms",1],["second",1e3],["seconds",1e3],["sec",1e3],["secs",1e3],["s",1e3],["minute",6e4],["minutes",6e4],["min",6e4],["mins",6e4],["m",6e4],["hour",36e5],["hours",36e5],["hr",36e5],["hrs",36e5],["h",36e5],["day",864e5],["days",864e5],["d",864e5],["week",6048e5],["weeks",6048e5],["wk",6048e5],["wks",6048e5],["w",6048e5],["month",26298e5],["months",26298e5],["b",26298e5],["mo",26298e5],["year",315576e5],["years",315576e5],["yr",315576e5],["yrs",315576e5],["y",315576e5]]);class Duration{constructor(e){Object.defineProperty(this,"offset",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.offset=Duration.parse(e.toLowerCase())}get fromNow(){return this.dateFrom(new Date)}dateFrom(e){return new Date(e.getTime()+this.offset)}static parse(e){let t=0;return e.replace(Duration.kCommaRegex,"").replace(Duration.kAanRegex,"1").replace(Duration.kPatternRegex,((e,r,n)=>(n=c.get(n)??0,t+=Number(r)*n,""))),t}}Object.defineProperty(Duration,"kPatternRegex",{enumerable:!0,configurable:!0,writable:!0,value:/(-?\d*\.?\d+(?:e[-+]?\d+)?)\s*([a-zμ]*)/gi}),Object.defineProperty(Duration,"kCommaRegex",{enumerable:!0,configurable:!0,writable:!0,value:/,/g}),Object.defineProperty(Duration,"kAanRegex",{enumerable:!0,configurable:!0,writable:!0,value:/\ban?\b/gi});const m=[["year",31536e6],["month",2628e6],["week",6048e5],["day",864e5],["hour",36e5],["minute",6e4],["second",1e3]];class DurationFormatter{constructor(e=d){Object.defineProperty(this,"units",{enumerable:!0,configurable:!0,writable:!0,value:e})}format(e,t=7){const r=[],n=e<0;n&&(e*=-1);for(const[n,a]of m){const i=e/a;if(i<1)continue;const s=Math.floor(i);if(e-=s*a,r.push(addUnit(s,this.units[n])),r.length>=t)break}return`${n?"-":""}${r.join(" ")||addUnit(0,this.units.second)}`}}function addUnit(e,t){return Reflect.has(t,e)?`${e} ${Reflect.get(t,e)}`:`${e} ${t.DEFAULT}`}class TimerManager extends(null){static setTimeout(e,t,...r){const n=setTimeout((()=>{this.storedTimeouts.delete(n),e(...r)}),t);return this.storedTimeouts.add(n),n}static clearTimeout(e){clearTimeout(e),this.storedTimeouts.delete(e)}static setInterval(e,t,...r){const n=setInterval(e,t,...r);return this.storedIntervals.add(n),n}static clearInterval(e){clearInterval(e),this.storedIntervals.delete(e)}static destroy(){for(const e of this.storedTimeouts)clearTimeout(e);for(const e of this.storedIntervals)clearInterval(e);this.storedTimeouts.clear(),this.storedIntervals.clear()}}Object.defineProperty(TimerManager,"storedTimeouts",{enumerable:!0,configurable:!0,writable:!0,value:new Set}),Object.defineProperty(TimerManager,"storedIntervals",{enumerable:!0,configurable:!0,writable:!0,value:new Set});const h=new Map([["Y",e=>String(e.getFullYear()).slice(2)],["YY",e=>String(e.getFullYear()).slice(2)],["YYY",e=>String(e.getFullYear())],["YYYY",e=>String(e.getFullYear())],["Q",e=>String((e.getMonth()+1)/3)],["M",e=>String(e.getMonth()+1)],["MM",e=>String(e.getMonth()+1).padStart(2,"0")],["MMM",e=>n[e.getMonth()]],["MMMM",e=>n[e.getMonth()]],["D",e=>String(e.getDate())],["DD",e=>String(e.getDate()).padStart(2,"0")],["DDD",e=>String(Math.floor((e.getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5))],["DDDD",e=>String(Math.floor((e.getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5))],["d",e=>{const t=String(e.getDate());return"11"!==t&&t.endsWith("1")?t+"st":"12"!==t&&t.endsWith("2")?t+"nd":"13"!==t&&t.endsWith("3")?t+"rd":t+"th"}],["dd",e=>r[e.getDay()].slice(0,2)],["ddd",e=>r[e.getDay()].slice(0,3)],["dddd",e=>r[e.getDay()]],["X",e=>String(e.valueOf()/1e3)],["x",e=>String(e.valueOf())],["H",e=>String(e.getHours())],["HH",e=>String(e.getHours()).padStart(2,"0")],["h",e=>String(e.getHours()%12||12)],["hh",e=>String(e.getHours()%12||12).padStart(2,"0")],["a",e=>e.getHours()<12?"am":"pm"],["A",e=>e.getHours()<12?"AM":"PM"],["m",e=>String(e.getMinutes())],["mm",e=>String(e.getMinutes()).padStart(2,"0")],["s",e=>String(e.getSeconds())],["ss",e=>String(e.getSeconds()).padStart(2,"0")],["S",e=>String(e.getMilliseconds())],["SS",e=>String(e.getMilliseconds()).padStart(2,"0")],["SSS",e=>String(e.getMilliseconds()).padStart(3,"0")],["T",e=>`${String(e.getHours()%12||12)}:${String(e.getMinutes()).padStart(2,"0")} ${e.getHours()<12?"AM":"PM"}`],["t",e=>`${String(e.getHours()%12||12)}:${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")} ${e.getHours()<12?"am":"pm"}`],["L",e=>`${String(e.getMonth()+1).padStart(2,"0")}/${String(e.getDate()).padStart(2,"0")}/${String(e.getFullYear())}`],["l",e=>`${String(e.getMonth()+1)}/${String(e.getDate()).padStart(2,"0")}/${String(e.getFullYear())}`],["LL",e=>`${n[e.getMonth()]} ${String(e.getDate()).padStart(2,"0")}, ${String(e.getFullYear())}`],["ll",e=>`${n[e.getMonth()].slice(0,3)} ${String(e.getDate()).padStart(2,"0")}, ${String(e.getFullYear())}`],["LLL",e=>`${n[e.getMonth()]} ${String(e.getDate()).padStart(2,"0")}, ${String(e.getFullYear())} ${String(e.getHours()%12||12)}:${String(e.getMinutes()).padStart(2,"0")} ${e.getHours()<12?"AM":"PM"}`],["lll",e=>`${n[e.getMonth()].slice(0,3)} ${String(e.getDate()).padStart(2,"0")}, ${String(e.getFullYear())} ${String(e.getHours()%12||12)}:${String(e.getMinutes()).padStart(2,"0")} ${e.getHours()<12?"AM":"PM"}`],["LLLL",e=>`${r[e.getDay()]}, ${n[e.getMonth()]} ${String(e.getDate()).padStart(2,"0")}, ${String(e.getFullYear())} ${String(e.getHours()%12||12)}:${String(e.getMinutes()).padStart(2,"0")} ${e.getHours()<12?"AM":"PM"}`],["llll",e=>`${r[e.getDay()].slice(0,3)} ${n[e.getMonth()].slice(0,3)} ${String(e.getDate()).padStart(2,"0")}, ${String(e.getFullYear())} ${String(e.getHours()%12||12)}:${String(e.getMinutes()).padStart(2,"0")} ${e.getHours()<12?"AM":"PM"}`],["Z",e=>{const t=e.getTimezoneOffset(),r=t>=0,n=Math.abs(t);return`${r?"+":"-"}${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}],["ZZ",e=>{const t=e.getTimezoneOffset(),r=t>=0,n=Math.abs(t);return`${r?"+":"-"}${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}]]);class Timestamp{constructor(e){Object.defineProperty(this,"pattern",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.pattern=e,this.template=Timestamp.parse(e)}display(e=new Date){return Timestamp.display(this.template,e)}displayUTC(e){return Timestamp.display(this.template,Timestamp.utc(e))}edit(e){return this.pattern=e,this.template=Timestamp.parse(e),this}toString(){return this.display()}static displayArbitrary(e,t=new Date){return Timestamp.display(Timestamp.parse(e),t)}static displayUTCArbitrary(e,t=new Date){return Timestamp.display(Timestamp.parse(e),Timestamp.utc(t))}static utc(e=new Date){return e=Timestamp.resolveDate(e),new Date(e.valueOf()+6e4*e.getTimezoneOffset())}static display(e,t){let r="";const n=Timestamp.resolveDate(t);for(const{content:t,type:a}of e)r+=t||h.get(a)(n);return r}static parse(e){const t=[];for(let r=0;r<e.length;r++){let n="";const i=e[r],s=a.get(i);if("number"==typeof s){for(n+=i;e[r+1]===i&&n.length<s;)n+=e[++r];t.push({type:n,content:null})}else if("["===i){for(;r+1<e.length&&"]"!==e[r+1];)n+=e[++r];r++,t.push({type:"literal",content:n||"["})}else{for(n+=i;r+1<e.length&&!a.has(e[r+1])&&"["!==e[r+1];)n+=e[++r];t.push({type:"literal",content:n})}}return t}static resolveDate(e){return e instanceof Date?e:new Date(e)}}export{Cron,Duration,DurationFormatter,t as Time,e as TimeTypes,TimerManager,Timestamp};
//# sourceMappingURL=index.mjs.map