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
!function(t,e){"use strict";if(!e)throw new Error("jQuery not loaded");let n=["S1"],o="S1",i=["D"];let r=!0,l=!0,a="",s=e("#handlerSelId"),c=e("#leftHandlerSelId"),g=function(t){let n="doc_"+t.target.id+".html";e.get("http://127.0.0.1/"+n,function(t,n){a=t,alert(" ===== "+n),"success"===n?(console.log(JSON.stringify(a)),e("#mainContainerId").append(a)):alert("Request To Server Failed")})};e.setFontColor=function(t){var e=t.parentElement.getAttribute("id");console.log("ele get id "+e)},e.assignFontColor=function(t){},e.SimpleWebSiteGenerator=function(){s.click(function(){r?(e("#panelSelId").animate({width:"40%"}),e("#innerPanelSelId").animate({width:"82%"}),r=!1):r||(e("#panelSelId").animate({width:"5%"}),e("#innerPanelSelId").animate({width:"1%"}),r=!0)}),c.click(function(){l?(e("#leftColorPanelSelId").animate({width:"25%"}),e("#leftInnerColorPanelSelId").animate({width:"82%"}),l=!1):l||(e("#leftColorPanelSelId").animate({width:"5%"}),e("#leftInnerColorPanelSelId").animate({width:"1%"}),l=!0)}),function(){for(var t=0;0!==e("#sampText"+(t+=1)).length;)e("#sampText"+t).click(g)}(),e("#header-id").draggable({helper:"clone",cursorAt:{top:4,left:10},containment:"#big-cont",scroll:!1,start:function(){defaults.recentElement=e(this).attr("id")},stop:function(){},revert:"invalid"});let t=function(t){var e=f(t);"H"===e?a(t):"LO"===e&&a(t)},a=function(t){console.log("=============="),console.log(t);var n=e("#"+t).css("left"),o=e("#"+t).css("width");n=n.substring(0,n.length-2),o=o.substring(0,o.length-2);parseInt(n),parseInt(o);e("#dialog_"+t).dialog({position:{my:"left top",at:"right",of:"#"+t}})},d=function(t){e("#"+t).parent().hasClass("resizeEle")&&e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,e){t.target;console.log("======")},stop:function(t,e){t.target;console.log("======")}})};function f(t){return(t=(t=t.substr(t.indexOf("_"))).substring(1)).substring(0,t.indexOf("_"))}var u;!function(n){if(!n){var i=e("[id^="+o+"_H_]"),r=e("[id^="+o+"_LO_]"),l=e("[id^="+o+"_FBTXT_]");i.each(function(n,o){var i=o.getAttribute("id");!function(t){var n=f(t);"H"===n&&(e("#"+t).css("top","232px"),e("#"+t).css("left","367px"),e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,n){var o=t.target;console.log("======");var i=e(o).position();e(o).css("margin-top","0"),e(o).css("margin-left","0"),e(o).css("margin-right","0"),console.log(" 1 "+i.top+" 2 "+i.left+" 3 "+i.right)},stop:function(t,n){var o=t.target;console.log("======");var i=e(o).position();e(o).css("margin-top","0"),e(o).css("margin-left","0"),e(o).css("margin-right","0"),console.log(" 1 - "+i.top+" 2 - "+i.left+" 3 "+i.right)}})),e("#"+t).removeClass("ui-widget-content")}(i),t(i)}),r.each(function(e,n){var o=n.getAttribute("id");t(o),d(o)}),l.each(function(t,e){var n=e.getAttribute("id");d(n)})}}(),function(){var t=e("body").attr("class");if(0===n.length||""===t)throw new Error("Error Extracting Samp Code");for(var o=0;o<n.length;o++)if(-1!=t.indexOf(""+n[o]))return n[o]}(),"D"===i[0]&&e("[id^="+o+"_RO]").each(function(t,e){e.getAttribute("id")}),u=e("[id$=SOR]"),console.log(u.length),u.each(function(t,n){console.log("hi"),console.log(n);var o=n.getAttribute("id");e("#"+o).sortable(),e("#"+o).disableSelection()})},e.SimpleWebSiteGenerator()}(0,jQuery);
