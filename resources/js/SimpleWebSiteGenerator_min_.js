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
!function(t,e){"use strict";if(!e)throw new Error("jQuery not loaded");let n=["S1"],i="S1",r=["D"];let a=!0,o=!0,l="",s="",c=e("#handlerSelId"),d=e("#leftHandlerSelId"),g=function(t){let n="doc_"+t.target.id+".html";e.get("http://127.0.0.1/"+n,function(t,n){l=t,alert(" ===== "+n),"success"===n?(console.log(JSON.stringify(l)),e("#mainContainerId").append(l)):alert("Request To Server Failed")})};e.setCurrentDialogId=function(t){var n=t.getAttribute("id"),i=e.removeDialogFromId(n);s=i},e.assignFontColor=function(t){var n="#"+t.toString();console.log(s),e("#"+s).css("color",""+n)},e.removeDialogFromId=function(t){var e=t.indexOf("_");return t=t.substring(e+1),console.log(" ====> "+t),t},e.assignBackHeightMax=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),r=n.substring(i+1),a=e("#"+r).parent(),o=a.css("height"),l=o.indexOf("p"),s=o.substring(0,l);s=parseInt(s),s+=2,a.css("height",s+"px")},e.assignBackHeightMin=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),r=n.substring(i+1),a=e("#"+r).parent(),o=a.css("height"),l=o.indexOf("p"),s=o.substring(0,l);s=parseInt(s),s-=2,a.css("height",s+"px")},e.assignBackWidthMax=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),r=n.substring(i+1),a=e("#"+r).parent(),o=a.css("max-width"),l=o.indexOf("%"),s=o.substring(0,l);s=parseInt(s),(s+=2)<=100&&a.css("max-width",s+"%")},e.assignBackWidthMin=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),r=n.substring(i+1),a=e("#"+r).parent(),o=a.css("max-width");console.log(" ==> 2 "+o);let l=o.indexOf("%"),s=o.substring(0,l);s=parseInt(s),s-=2,a.css("max-width",s+"%")},e.setDialog=function(t,n){if(alert("ok"),"txt"===n){let n=e(".dialog_text");if(""===n.attr("id")){let i=e(t).attr("id");i="dialog_"+i,n.attr("id",""+i),n.css("display","")}else n.attr("id",""),n.css("display","none")}},e.SimpleWebSiteGenerator=function(){c.click(function(){a?(e("#panelSelId").animate({width:"40%"}),e("#innerPanelSelId").animate({width:"82%"}),a=!1):a||(e("#panelSelId").animate({width:"5%"}),e("#innerPanelSelId").animate({width:"1%"}),a=!0)}),d.click(function(){o?(e("#leftColorPanelSelId").animate({width:"25%"}),e("#leftInnerColorPanelSelId").animate({width:"82%"}),o=!1):o||(e("#leftColorPanelSelId").animate({width:"5%"}),e("#leftInnerColorPanelSelId").animate({width:"1%"}),o=!0)}),function(){for(var t=0;0!==e("#sampText"+(t+=1)).length;)e("#sampText"+t).click(g)}(),e("#header-id").draggable({helper:"clone",cursorAt:{top:4,left:10},containment:"#big-cont",scroll:!1,start:function(){defaults.recentElement=e(this).attr("id")},stop:function(){},revert:"invalid"});let t=function(t){e("#"+t).parent().hasClass("resizeEle")&&e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,e){t.target;console.log("======")},stop:function(t,e){t.target;console.log("======")}})};var l;!function(n){if(!n){var r=e("[id^="+i+"_H_]"),a=e("[id^="+i+"_LO_]"),o=e("[id^="+i+"_FBTXT_]"),l=e("[id^="+i+"_TXT_]");r.each(function(t,n){var i=n.getAttribute("id");!function(t){var n=function(t){return(t=(t=t.substr(t.indexOf("_"))).substring(1)).substring(0,t.indexOf("_"))}(t);"H"===n&&(e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,n){var i=t.target;console.log("======");var r=e(i).position();e(i).css("margin-top","0"),e(i).css("margin-left","0"),e(i).css("margin-right","0"),console.log(" 1 "+r.top+" 2 "+r.left+" 3 "+r.right)},stop:function(t,n){var i=t.target;console.log("======");var r=e(i).position();e(i).css("margin-top","0"),e(i).css("margin-left","0"),e(i).css("margin-right","0"),console.log(" 1 - "+r.top+" 2 - "+r.left+" 3 "+r.right)}})),e("#"+t).removeClass("ui-widget-content")}(i)}),a.each(function(e,n){var i=n.getAttribute("id");t(i)}),o.each(function(e,n){var i=n.getAttribute("id");t(i)}),l.each(function(e,n){var i=n.getAttribute("id");t(i)})}}(),function(){var t=e("body").attr("class");if(0===n.length||""===t)throw new Error("Error Extracting Samp Code");for(var i=0;i<n.length;i++)if(-1!=t.indexOf(""+n[i]))return n[i]}(),"D"===r[0]&&e("[id^="+i+"_RO]").each(function(t,e){e.getAttribute("id")}),l=e("[id$=SOR]"),console.log(l.length),l.each(function(t,n){console.log("hi"),console.log(n);var i=n.getAttribute("id");e("#"+i).sortable(),e("#"+i).disableSelection()})},e.SimpleWebSiteGenerator()}(0,jQuery);
