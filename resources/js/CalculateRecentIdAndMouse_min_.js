/* 
 *
 * Copyright (C) Joffer Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Alok Dethe <det.alex0110@gmail.com>, September 2019
 *
 *
 *
 */
!function(o,c){o.calculateRecentIdForAll=function(c,e){var l="";"LO"===c?l=o("[id^="+e+"_"+c+"_]"):"TXT"===c&&(l=o("[id^="+e+"_"+c+"_]")),console.log(" ***** check calculateRecentIdForImage ***** "+e+"_"+c),console.log(l);var n,t,a=0,r=0,s="",_="";return o.each(l,function(c,e){if(s=o(e).attr("id"),"PID"!==(_=s.substr(s.length-3)))for(console.log("**** check PID ****"),console.log(_),n=s.lastIndexOf("_"),n-=1;"_"!==s.charAt(n);)a=parseInt(s.charAt(n)),r<a&&(r=a),n-=1,console.log("**** check cnt set ****"),console.log(r)}),t=e+"_"+c+"_"+(r+1)+"_ID",console.log(t),t}}(jQuery);