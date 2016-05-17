/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
!function(e){"use strict";var n={};n.VERSION="1.2.0";var t,o={},r=function(e,n){return function(){return n.apply(e,arguments)}},i=function(){var e,n,t=arguments,o=t[0];for(n=1;n<t.length;n++)for(e in t[n])e in o||!t[n].hasOwnProperty(e)||(o[e]=t[n][e]);return o},l=function(e,n){return{value:e,name:n}};n.DEBUG=l(1,"DEBUG"),n.INFO=l(2,"INFO"),n.TIME=l(3,"TIME"),n.WARN=l(4,"WARN"),n.ERROR=l(8,"ERROR"),n.OFF=l(99,"OFF");var f=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};f.prototype={setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},enabledFor:function(e){var n=this.context.filterLevel;return e.value>=n.value},debug:function(){this.invoke(n.DEBUG,arguments)},info:function(){this.invoke(n.INFO,arguments)},warn:function(){this.invoke(n.WARN,arguments)},error:function(){this.invoke(n.ERROR,arguments)},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(n.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(n.TIME,[e,"end"])},invoke:function(e,n){t&&this.enabledFor(e)&&t(n,i({level:e},this.context))}};var s=new f({filterLevel:n.OFF});!function(){var e=n;e.enabledFor=r(s,s.enabledFor),e.debug=r(s,s.debug),e.time=r(s,s.time),e.timeEnd=r(s,s.timeEnd),e.info=r(s,s.info),e.warn=r(s,s.warn),e.error=r(s,s.error),e.log=e.info}(),n.setHandler=function(e){t=e},n.setLevel=function(e){s.setLevel(e);for(var n in o)o.hasOwnProperty(n)&&o[n].setLevel(e)},n.get=function(e){return o[e]||(o[e]=new f(i({name:e},s.context)))},n.useDefaults=function(e){if(e=e||{},e.formatter=e.formatter||function(e,n){n.name&&e.unshift("["+n.name+"]")},"undefined"!=typeof console){var t={},o=function(e,n){Function.prototype.apply.call(e,console,n)};n.setLevel(e.defaultLevel||n.DEBUG),n.setHandler(function(r,i){r=Array.prototype.slice.call(r);var l,f=console.log;i.level===n.TIME?(l=(i.name?"["+i.name+"] ":"")+r[0],"start"===r[1]?console.time?console.time(l):t[l]=(new Date).getTime():console.timeEnd?console.timeEnd(l):o(f,[l+": "+((new Date).getTime()-t[l])+"ms"])):(i.level===n.WARN&&console.warn?f=console.warn:i.level===n.ERROR&&console.error?f=console.error:i.level===n.INFO&&console.info&&(f=console.info),e.formatter(r,i),o(f,r))})}},"function"==typeof define&&define.amd?define(n):"undefined"!=typeof module&&module.exports?module.exports=n:(n._prevLogger=e.Logger,n.noConflict=function(){return e.Logger=n._prevLogger,n},e.Logger=n)}(this);

// http://www.json.org/js.html
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(rx_one.test(text.replace(rx_two,'@').replace(rx_three,']').replace(rx_four,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());

if (typeof String.prototype.isEmail != 'function') {
    (function() {
        var pattern = /^[0-9a-zA-Z]([\-.\w]*[0-9a-zA-Z\-_+])*@([0-9a-zA-Z][\-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$/g;
        String.prototype.isEmail = function() {
            return (this.match(pattern) !== null);
        };
    })();
}
if (typeof String.prototype.trim != 'function') {
    (function() {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(rtrim, '');
        };
    })();
}
if (typeof String.prototype.nl2Br != 'function') {
    String.prototype.nl2Br = function(str) {
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br/>');
    };
}
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}
if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}
if (typeof String.prototype.stripslashes != 'function') {
    // http://phpjs.org/functions/stripslashes/
    String.prototype.stripslashes = function() {
        return this.replace(
                    /\\(.?)/g,
                    function(s, n1) {
                        switch (n1) {
                        case '\\':
                            return '\\';
                        case '0':
                            return '\u0000';
                        case '':
                            return '';
                        default:
                            return n1;
                        }
                    }
        );
    };
}

if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(value) {
        if (this.length === 0 || !value) {
            return -1;
        }
        for (var i = 0; i < this.length; i++) {
            if (this[i] == value) {
                return i;
            }
        }
        return -1;
    };
}
if (typeof Array.prototype.remove != 'function') {
    Array.prototype.remove = function(value) {
        var pos = (this.indexOf ? this.indexOf(value) : -1);

        if (pos >= 0) {
            this.splice(pos, 1);
        }
    };
}
if (typeof Array.prototype.removeDeeply != 'function') {
    Array.prototype.removeDeeply = function(key, value) {
        var pos = -1, count = this.length;

        for (var i = 0; i < count; i++) {
            if (this[i][key] == value) {
                pos = i;
                break;
            }
        }

        if (pos >= 0) {
            this.splice(pos, 1);
        }
    };
}


/*
 * jQuery Format Plugin v1.3
 * http://www.asual.com/jquery/format/
 *
 * Copyright (c) 2009-2011 Rostislav Hristov
 * Uses code by Matt Kruse
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2013-09-28 11:18:54 +0300 (Sat, 28 Sep 2013)
 */
(function(z){z.format=function(){var o={date:{format:"MMM dd, yyyy h:mm:ss a",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],daysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortDateFormat:"M/d/yyyy h:mm a",longDateFormat:"EEEE, MMMM dd, yyyy h:mm:ss a"},
number:{format:"#,##0.0#",groupingSeparator:",",decimalSeparator:"."}};return{locale:function(b){a={a:6};if(b)for(var i in b)for(var g in b[i])o[i][g]=b[i][g];return o},date:function(b,i){var g=0,h=0,c=0;c=h="";var l,e;if(typeof b=="string"){var m=function(r,v,y,w){for(w=w;w>=y;w--){var x=r.substring(v,v+w);if(x.length>=y&&/^\d+$/.test(x))return x}return null};if(typeof i=="undefined")i=o.date.format;var d=0,n=new Date(0,0,0,0,0,0,0),j=n.getYear(),f=n.getMonth()+1,p=1,k=n.getHours(),t=n.getMinutes(),
u=n.getSeconds();n=n.getMilliseconds();for(var s="",q;g<i.length;){c="";for(h=i.charAt(g);i.charAt(g)==h&&g<i.length;)c+=i.charAt(g++);if(c.indexOf("MMMM")>-1&&c.length>4)c="MMMM";if(c.indexOf("EEEE")>-1&&c.length>4)c="EEEE";if(c=="yyyy"||c=="yy"||c=="y"){if(c=="yyyy")e=l=4;if(c=="yy")e=l=2;if(c=="y"){l=2;e=4}j=m(b,d,l,e);if(j===null)return 0;d+=j.length;if(j.length==2){j=parseInt(j,10);j=j>70?1900+j:2E3+j}}else if(c=="MMMM"){h=f=0;for(c=o.date.monthsFull.length;h<c;h++){q=o.date.monthsFull[h];if(b.substring(d,
d+q.length).toLowerCase()==q.toLowerCase()){f=h+1;d+=q.length;break}}if(f<1||f>12)return 0}else if(c=="MMM"){h=f=0;for(c=o.date.monthsShort.length;h<c;h++){q=o.date.monthsShort[h];if(b.substring(d,d+q.length).toLowerCase()==q.toLowerCase()){f=h+1;d+=q.length;break}}if(f<1||f>12)return 0}else if(c=="EEEE"){h=0;for(c=o.date.daysFull.length;h<c;h++){q=o.date.daysFull[h];if(b.substring(d,d+q.length).toLowerCase()==q.toLowerCase()){d+=q.length;break}}}else if(c=="EEE"){h=0;for(c=o.date.daysShort.length;h<
c;h++){q=o.date.daysShort[h];if(b.substring(d,d+q.length).toLowerCase()==q.toLowerCase()){d+=q.length;break}}}else if(c=="MM"||c=="M"){f=m(b,d,1,2);if(f===null||f<1||f>12)return 0;d+=f.length}else if(c=="dd"||c=="d"){p=m(b,d,1,2);if(p===null||p<1||p>31)return 0;d+=p.length}else if(c=="hh"||c=="h"){k=m(b,d,1,2);if(k===null||k<1||k>12)return 0;d+=k.length}else if(c=="HH"||c=="H"){k=m(b,d,1,2);if(k===null||k<0||k>23)return 0;d+=k.length}else if(c=="KK"||c=="K"){k=m(b,d,1,2);if(k===null||k<0||k>11)return 0;
d+=k.length}else if(c=="kk"||c=="k"){k=m(b,d,1,2);if(k===null||k<1||k>24)return 0;d+=k.length;k--}else if(c=="mm"||c=="m"){t=m(b,d,1,2);if(t===null||t<0||t>59)return 0;d+=t.length}else if(c=="ss"||c=="s"){u=m(b,d,1,2);if(u===null||u<0||u>59)return 0;d+=u.length}else if(c=="SSS"||c=="SS"||c=="S"){n=m(b,d,1,3);if(n===null||n<0||n>999)return 0;d+=n.length}else if(c=="a"){s=b.substring(d,d+2).toLowerCase();if(s=="am")s="AM";else if(s=="pm")s="PM";else return 0;d+=2}else if(c!=b.substring(d,d+c.length))return 0;
else d+=c.length}if(d!=b.length)return 0;if(f==2)if(j%4===0&&j%100!==0||j%400===0){if(p>29)return 0}else if(p>28)return 0;if(f==4||f==6||f==9||f==11)if(p>30)return 0;if(k<12&&s=="PM")k=k-0+12;else if(k>11&&s=="AM")k-=12;return new Date(j,f-1,p,k,t,u,n)}else{g=function(r,v){if(typeof v=="undefined"||v==2)return(r>=0&&r<10?"0":"")+r;else{if(r>=0&&r<10)return"00"+r;if(r>=10&&r<100)return"0"+r;return r}};if(typeof i=="undefined")i=o.date.format;e=b.getYear();if(e<1E3)e=String(e+1900);m=b.getMonth()+1;
d=b.getDate();j=b.getDay();f=b.getHours();p=b.getMinutes();l=b.getSeconds();k=b.getMilliseconds();b={y:e,yyyy:e,yy:String(e).substring(2,4),M:m,MM:g(m),MMM:o.date.monthsShort[m-1],MMMM:o.date.monthsFull[m-1],d:d,dd:g(d),EEE:o.date.daysShort[j],EEEE:o.date.daysFull[j],H:f,HH:g(f)};b.h=f===0?12:f>12?f-12:f;b.hh=g(b.h);b.k=f!==0?f:24;b.kk=g(b.k);b.K=f>11?f-12:f;b.KK=g(b.K);b.a=f>11?"PM":"AM";b.m=p;b.mm=g(p);b.s=l;b.ss=g(l);b.S=k;b.SS=g(k);b.SSS=g(k,3);e="";g=0;c=h="";for(l=false;g<i.length;){c="";h=
i.charAt(g);if(h=="'"){g++;if(i.charAt(g)==h){e+=h;g++}else l=!l}else{for(;i.charAt(g)==h;)c+=i.charAt(g++);if(c.indexOf("MMMM")!=-1&&c.length>4)c="MMMM";if(c.indexOf("EEEE")!=-1&&c.length>4)c="EEEE";e+=typeof b[c]!="undefined"&&!l?b[c]:c}}return e}},number:function(b,i){var g,h,c,l,e;if(typeof b=="string"){g=o.number.groupingSeparator;c=o.number.decimalSeparator;l=b.indexOf(c);e=1;if(l!=-1)e=Math.pow(10,b.length-l-1);b=b.replace(new RegExp("["+g+"]","g"),"");b=b.replace(new RegExp("["+c+"]"),".");
return Math.round(b*e)/e}else{if(typeof i=="undefined"||i.length<1)i=o.number.format;g=",";h=i.lastIndexOf(g);c=".";l=i.indexOf(c);var m=g="";c=b<0;var d=i.substr(l+1).replace(/#/g,"").length,n=i.substr(l+1).length,j=10;b=Math.abs(b);if(l!=-1){m=o.number.decimalSeparator;if(n>0){e=1E3;j=Math.pow(j,n);var f=Math.round(parseInt(b*j*e-Math.round(b)*j*e,10)/e);f=String(f<0?Math.round(parseInt(b*j*e-parseInt(b,10)*j*e,10)/e):f);var p=b.toString().split(".");if(typeof p[1]!="undefined")for(e=0;e<n;e++)if(p[1].substr(e,
1)=="0"&&e<n-1&&f.length!=n)f="0"+f;else break;for(e=0;e<n-m.length;e++)f+="0";p="";for(e=0;e<f.length;e++){n=f.substr(e,1);if(e>=d&&n=="0"&&/^0*$/.test(f.substr(e+1)))break;p+=n}m+=p}if(m==o.number.decimalSeparator)m=""}if(l!==0){g=m!=""?String(parseInt(Math.round(b*j)/j,10)):String(Math.round(b));b=o.number.groupingSeparator;d=0;if(h!=-1){d=l!=-1?l-h:i.length-h;d--}if(d>0){h=0;j="";for(e=g.length;e--;){if(h!==0&&h%d===0)j=b+j;j=g.substr(e,1)+j;h++}g=j}h=/#|,/g;i=l!=-1?i.substr(0,l).replace(h,"").length:
i.replace(h,"").length;for(e=g.length;e<i;e++)g="0"+g}i=g+m;return(c?"-":"")+i}}}}()})(jQuery);


var JhWindow = {
	isIframe : function() {
		try {
			if (window !== window.parent && window.parent.frames.length > 0) {
				for (var i = 0; i < window.parent.frames.length; i++) {
			    	if (window.parent.frames[i] === window) {
			            return true;
			        }
			    }
			}			
		} catch (e) {
			return false;
		}

		return false;
	}
};

var JhCookie = {
    get : function(key) {
        var pair = null, cookies = document.cookie.split("; ");

        for ( var i = 0; i < cookies.length; i++) {
            pair = cookies[i].split("=");

            if (key.toLowerCase() == unescape(pair[0].toLowerCase())) {
                return pair[1];
            }
        }

        return "";
    },
    setSessionCookie : function(key,value) {
        document.cookie = key + "=" + value + "; path=/; domain=" + document.domain;
    },
    setInfinityCookie : function(key, value) {
        var expireDate = new Date();
        expireDate.setFullYear(2200, 12, 31);
        document.cookie = key + "=" + value + "; expires=" + expireDate.toGMTString() + "; path=/; domain="
                + document.domain;
    }
};

var JhDimmer = {
    getId : function() {
        return "jh-dimmer";
    },
    show : function() {
        var $dimmer = $("<div id='jh-dimmer'></div>");
        $dimmer.css({
            "position" : "fixed",
            "left" : 0,
            "top" : 0,
            "width" : "100%",
            "height" : "100%",
            "backgroundColor" : "#000000",
            "zIndex" : 100000
        });

        $dimmer.hide().appendTo("body").fadeTo(200, 0.5);

        return "jh-dimmer";
    },
    hide : function() {
        $("#jh-dimmer").fadeOut(200, function() {$(this).remove();});
    }
};

var JhLanguage = {
    DEFAULT_LANG : "ko-KR",
    getLang : function() {
        if (typeof _lang_ == "string") {
            return _lang_;  
        }

        var lang = null;

        if (navigator) {
            if (navigator.language) {
                lang = navigator.language;
            } else if (navigator.browserLanguage) {
                lang = navigator.browserLanguage;
            } else if (navigator.systemLanguage) {
                lang = navigator.systemLanguage;
            } else if (navigator.userLanguage) {
                lang = navigator.userLanguage;
            }
        }

        if (lang == null || lang.indexOf("ko") >= 0) {
            return this.DEFAULT_LANG;
        }

        return lang;
    }   
};

$.fn.extend({
    /**
     * 엘리먼트의 텍스트를 리턴한다. 리턴할 텍스트가 없는 경우에는 파라미터로 전달한 값을 리턴한다.
     * 
     * @param defaultValue
     * @return 문자열
     */
    jhText : function(defaultValue) {
        var text = $(this).text();
        return text.length == 0 ? defaultValue : text;
    },
    /**
     * 상위 엘리먼트 중 특정 태그명을 가지는 첫번째 것을 리턴한다.
     *
     * @param tagName 최상위 엘리먼트의 태그명
     * @return 찾은 엘리먼트 jQuery 객체
     */
    jhFindRootParent : function(tagName) {
        var upperName = tagName.toUpperCase(), $root = null;

        $(this).parents().each(function() {
            if (this.tagName.toUpperCase() == upperName) {
                $root = $(this);
                return false;
            }           
        });

        return $root;
    },
    /**
    * 스크롤이 맨 밑에 와있는지 체크
    *
    * @return boolean
    */
    jhIsScrollBottom : function() {
        return this[0].scrollHeight == this.scrollTop() + this.height();
    },
    /**
    * 맨 밑으로 스크롤하여 이동
    *
    * @param duration 스크롤링 속도. 숫자|문자열
    * @return jQuery
    */
    jhScrollToBottom : function(duration) {
        return this.each(function () {
            var $this = $(this);
            $this.animate({scrollTop : $this[0].scrollHeight}, duration);
        });
    },
    /**
     * 특정 엘리먼트로 스크롤링한다.
     * 
     * @param $target 대상 엘리먼트
     * @param duration 스크롤링 속도. 숫자|문자열
     * @return boolean
     */
    jhScrollTo : function($target, duration) {
        if (!$target || $target.length == 0) {
            return false;
        }

        var marginTop = 0;
        try {
            marginTop = parseInt($target.css("margin-top"), 10);
        } catch (e) {
        }

        var top = $target.offset().top - marginTop - (this.offset().top < 0 ? 0 : this.offset().top);
        this.animate({scrollTop : (top < 0) ? 0 : top}, duration);
        return true;
    },
    /**
     * TEXTAREA에 MAXLENGTH 속성이 동작하도록 한다.<br>
     * 추가 설정
     * <ul>
     * <li>data-callback : 콜백 메서드 이름</li>
     * </ul>
     * 
     * @return jQuery
     */
    jhMaxLength : function() {
        return this.each(function () {
            var $textarea = $(this), callback = $textarea.data("callback");

            if ($textarea[0].tagName.toUpperCase() == 'TEXTAREA') {
                $textarea.bind("keyup change", function() {
                    var $this = $(this), text = $this.val();
                    var limit = parseInt($this.attr("maxlength")); // prop 대신 꼭 attr을 사용해야함

                    // 길이 체크
                    if (text.length > limit) {
                        text = text.substr(0, limit);
                        $this.val(text);
                    }

                    if (callback && window[callback]) {
                        window[callback]($this, text);
                    }
                });
            }
        });
    },
    /**
     * 화면 정중앙으로 이동시킨다.
     * 
     * @params horizontal true/false. 수평으로 중앙에 위치할지 여부
     * @params vertical true/false. 수직으로 중앙에 위치할지 여부 
     */
    jhMoveToCenter : function(horizontal, vertical) {
        var $window = $(window), windowWidth = $window.width(), windowHeight = $window.height();
        var scrollLeft = $window.scrollLeft(), scrollTop = $window.scrollTop();

        return this.each(function() {
            var $this = $(this), left = (windowWidth - $this.outerWidth()) / 2 + scrollLeft, top = (windowHeight - $this.outerHeight()) / 2 + scrollTop;

            if (horizontal && vertical) {
                $this.css({"left":Math.max(0, left), "top":Math.max(0, top)});
            } else if (horizontal) {
                $this.css({"left":Math.max(0, left), "top":scrollTop});
            } else if (vertical) {
                $this.css({"left":scrollLeft, "top":Math.max(0, top)});
            }
        });
    },
    /**
     * 엘리먼트의 text의 '\n' 문자를 HTML 태그 '<br/>' 로 치환한다.
     */
    jhNl2Br : function() {
        return this.each(function() {
            var $this = $(this), text = $this.html();
            $this.html((text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br/>'));
        });
    }
});

var _FORMATTER_ = {
    "ko-KR" : {
        date : {
            format : 'yyyy년 MM월 dd일 a h:mm:ss',
            monthsFull : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
            monthsShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ],
            daysFull : [ '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ],
            daysShort : [ '일', '월', '화', '수', '목', '금', '토' ],
            shortDateFormat : 'yyyy/m/d a h:mm ',
            longDateFormat : 'yyyy년 MM월 dd일 a h:mm:ss'
        },
        number : {
            format : '#,##0.0#',
            groupingSeparator : ',',
            decimalSeparator : '.'
        }
    }
};

if ($.format && _FORMATTER_[JhLanguage.getLang()]) {
    $.format.locale(_FORMATTER_[JhLanguage.getLang()]);
}