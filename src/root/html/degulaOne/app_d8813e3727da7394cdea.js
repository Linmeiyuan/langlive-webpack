!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){},function(e,t){},function(e,t){!function(){function e(e,t,n){var i="http://"+window.location.host+"/",a=i+e.urlStr,o=e.ajaxType,r=e.ajaxData,l=null;l=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var s=null;if(l.open(o,a,!0),"POST"===o&&null!=r){l.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");for(var c in r)s+="&"+c+"="+r[c],s=s.slice(1)}l.onreadystatechange=function(){if(4==l.readyState)if(200==l.status){var e=JSON.parse(l.responseText);t(e)}else n(l.status)},l.send(s)}function t(e){for(var t=1;t<e.length;t++)for(var i=0;i<e.length-1;i++){var a=e[i].score,o=e[i+1].score;if(o>a){var r=e[i];e[i]=e[i+1],e[i+1]=r}}n(e)}function n(e){for(var t=(new Date,""),n=0,a=e.length;n<a;n++){var o=e[n],r=o.promotion,l=o.nickname,s=n+1,c="0"+s;s>9&&(c=s);var u=o.live_id,d=o.pfid,p=o.nickname,m=o.live_url,f=o.live_key,v=o.stream_direction;o.headimg;t+="<li>",t+="<b>"+c+".</b>",t+="<div data-direction='"+v+"' data-livekey='"+f+"' data-liveurl='"+m+"' data-nickname='"+p+"' data-pfid='"+d+"' data-liveid='"+u+"' class='main-img'>",t+="<img src='"+o.headimg+"' alt=''>",null!=u&&(t+="<span></span>"),t+="</div>",t+="<span>"+l+"</span>",t+="<b class='score'>"+o.score+"</b>",t+="<b class='ticket'>"+o.count+"</b>",1==r?t+="<i class='promotion'></i>":0==r?t+="<i class='nothing'></i>":-1==r&&(t+="<i class='out'></i>"),t+="</li>"}document.getElementById("users-one").innerHTML=t;var g=new Date;console.log(g),i()}function i(){for(var e=document.getElementsByClassName("main-img"),t=e.length,n=0;n<t;n++)e[n].addEventListener("click",function(){var e=(this.getAttribute("data-pfid"),this.getAttribute("data-nickname"),this.getAttribute("data-liveid"));this.getAttribute("data-liveurl"),this.getAttribute("data-livekey"),this.getAttribute("data-direction");"null"!=e?alert("进入直播间"):alert("进入个人主页")})}!function(){e({ajaxType:"GET",urlStr:"json-datas/degula/degula.json",ajaxData:null},function(e){console.log(e),"0"==e.ret_code&&t(e.data.users)},function(e){console.log(e)})}(),function(e){function t(){n.style.display=i.scrollTop+a.scrollTop>100?"block":"none"}var n=document.getElementById(e),i=document.documentElement,a=document.body;window.onscroll=t,n.style.display="none",n.onclick=function(){n.style.display="none",window.onscroll=null,this.timer=setInterval(function(){i.scrollTop-=Math.ceil(.1*(i.scrollTop+a.scrollTop)),a.scrollTop-=Math.ceil(.1*(i.scrollTop+a.scrollTop)),i.scrollTop+a.scrollTop==0&&clearInterval(n.timer,window.onscroll=t)},10)}}("goTop");var a=navigator.userAgent;navigator.appVersion,a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}()},function(e,t){!function(e,t){function n(){var t=o.getBoundingClientRect().width;t/s>540&&(t=540*s);var n=t/10;o.style.fontSize=n+"px",u.rem=e.rem=n}var i,a=e.document,o=a.documentElement,r=a.querySelector('meta[name="viewport"]'),l=a.querySelector('meta[name="flexible"]'),s=0,c=0,u=t.flexible||(t.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),s=parseInt(1/c))}else if(l){var p=l.getAttribute("content");if(p){var m=p.match(/initial\-dpr=([\d\.]+)/),f=p.match(/maximum\-dpr=([\d\.]+)/);m&&(s=parseFloat(m[1]),c=parseFloat((1/s).toFixed(2))),f&&(s=parseFloat(f[1]),c=parseFloat((1/s).toFixed(2)))}}if(!s&&!c){var v=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),g=e.devicePixelRatio;s=v?g>=3&&(!s||s>=3)?3:g>=2&&(!s||s>=2)?2:1:1,c=1/s}if(o.setAttribute("data-dpr",s),!r)if(r=a.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(r);else{var h=a.createElement("div");h.appendChild(r),a.write(h.innerHTML)}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*s+"px":a.addEventListener("DOMContentLoaded",function(e){a.body.style.fontSize=12*s+"px"},!1),n(),u.dpr=e.dpr=s,u.refreshRem=n,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},function(e,t,n){n(3),n(0),n(1),n(2)}]);