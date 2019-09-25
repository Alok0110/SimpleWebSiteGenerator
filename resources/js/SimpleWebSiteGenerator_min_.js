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
!function(t,e){"use strict";if(!e)throw new Error("jQuery not loaded");let n=["S1"],i="S1",r=["D"];let o=!0,a=!0,l="",s="",c=e("#handlerSelId"),g=e("#leftHandlerSelId"),d=function(t){let n="doc_"+t.target.id+".html";e.get("http://127.0.0.1/"+n,function(t,n){l=t,alert(" ===== "+n),"success"===n?(console.log(JSON.stringify(l)),e("#mainContainerId").append(l)):alert("Request To Server Failed")})};e.setCurrentDialogId=function(t){var n=t.getAttribute("id"),i=e.removeDialogFromId(n);s=i},e.assignFontColor=function(t){var n="#"+t.toString();console.log(s),e("#"+s).css("color",""+n)},e.removeDialogFromId=function(t){var e=t.indexOf("_");return t=t.substring(e+1),console.log(" ====> "+t),t},e.assignBackHeightMax=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),r=n.substring(i+1),o=e("#"+r).parent(),a=o.css("height"),l=a.indexOf("p"),s=a.substring(0,l);s=parseInt(s),s+=2,o.css("height",s+"px")},e.assignBackHeightMin=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),r=n.substring(i+1),o=e("#"+r).parent(),a=o.css("height"),l=a.indexOf("p"),s=a.substring(0,l);s=parseInt(s),s-=2,o.css("height",s+"px")},e.assignBackWidthMax=function(t){},e.assignBackWidthMin=function(t){},e.SimpleWebSiteGenerator=function(){c.click(function(){o?(e("#panelSelId").animate({width:"40%"}),e("#innerPanelSelId").animate({width:"82%"}),o=!1):o||(e("#panelSelId").animate({width:"5%"}),e("#innerPanelSelId").animate({width:"1%"}),o=!0)}),g.click(function(){a?(e("#leftColorPanelSelId").animate({width:"25%"}),e("#leftInnerColorPanelSelId").animate({width:"82%"}),a=!1):a||(e("#leftColorPanelSelId").animate({width:"5%"}),e("#leftInnerColorPanelSelId").animate({width:"1%"}),a=!0)}),function(){for(var t=0;0!==e("#sampText"+(t+=1)).length;)e("#sampText"+t).click(d)}(),e("#header-id").draggable({helper:"clone",cursorAt:{top:4,left:10},containment:"#big-cont",scroll:!1,start:function(){defaults.recentElement=e(this).attr("id")},stop:function(){},revert:"invalid"});let t=function(t){var e=u(t);"H"===e?l(t):"LO"===e&&l(t)},l=function(t){console.log("=============="),console.log(t);var n=e("#"+t).css("left"),i=e("#"+t).css("width");n=n.substring(0,n.length-2),i=i.substring(0,i.length-2);parseInt(n),parseInt(i);e("#dialog_"+t).dialog({position:{my:"left top",at:"right",of:"#"+t}})},s=function(t){e("#"+t).parent().hasClass("resizeEle")&&e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,e){t.target;console.log("======")},stop:function(t,e){t.target;console.log("======")}})};function u(t){return(t=(t=t.substr(t.indexOf("_"))).substring(1)).substring(0,t.indexOf("_"))}var f;!function(n){if(!n){var r=e("[id^="+i+"_H_]"),o=e("[id^="+i+"_LO_]"),a=e("[id^="+i+"_FBTXT_]"),l=e("[id^="+i+"_TXT_]");r.each(function(n,i){var r=i.getAttribute("id");!function(t){var n=u(t);"H"===n&&(e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,n){var i=t.target;console.log("======");var r=e(i).position();e(i).css("margin-top","0"),e(i).css("margin-left","0"),e(i).css("margin-right","0"),console.log(" 1 "+r.top+" 2 "+r.left+" 3 "+r.right)},stop:function(t,n){var i=t.target;console.log("======");var r=e(i).position();e(i).css("margin-top","0"),e(i).css("margin-left","0"),e(i).css("margin-right","0"),console.log(" 1 - "+r.top+" 2 - "+r.left+" 3 "+r.right)}})),e("#"+t).removeClass("ui-widget-content")}(r),t(r)}),o.each(function(e,n){var i=n.getAttribute("id");t(i),s(i)}),a.each(function(t,e){var n=e.getAttribute("id");s(n)}),l.each(function(t,e){var n=e.getAttribute("id");s(n)})}}(),function(){var t=e("body").attr("class");if(0===n.length||""===t)throw new Error("Error Extracting Samp Code");for(var i=0;i<n.length;i++)if(-1!=t.indexOf(""+n[i]))return n[i]}(),"D"===r[0]&&e("[id^="+i+"_RO]").each(function(t,e){e.getAttribute("id")}),f=e("[id$=SOR]"),console.log(f.length),f.each(function(t,n){console.log("hi"),console.log(n);var i=n.getAttribute("id");e("#"+i).sortable(),e("#"+i).disableSelection()})},e.SimpleWebSiteGenerator()}(0,jQuery);
