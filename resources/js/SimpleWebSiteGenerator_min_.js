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
!function(e,t){"use strict";if(!t)throw new Error("jQuery not loaded");let n=!0,i=!0,l="",a=t("#handlerSelId"),r=t("#leftHandlerSelId"),o=function(e){let n="doc_"+e.target.id+".html";t.get("http://127.0.0.1/"+n,function(e,n){l=e,alert(" ===== "+n),"success"===n?(console.log(JSON.stringify(l)),t("#mainContainerId").append(l)):alert("Request To Server Failed")})};t.SimpleWebSiteGenerator=function(){a.click(function(){n?(t("#panelSelId").animate({width:"40%"}),t("#innerPanelSelId").animate({width:"82%"}),n=!1):n||(t("#panelSelId").animate({width:"5%"}),t("#innerPanelSelId").animate({width:"1%"}),n=!0)}),r.click(function(){i?(t("#leftColorPanelSelId").animate({width:"25%"}),t("#leftInnerColorPanelSelId").animate({width:"82%"}),i=!1):i||(t("#leftColorPanelSelId").animate({width:"5%"}),t("#leftInnerColorPanelSelId").animate({width:"1%"}),i=!0)}),function(){for(var e=0;0!==t("#sampText"+(e+=1)).length;)t("#sampText"+e).click(o)}(),t("#header-id").draggable({helper:"clone",cursorAt:{top:4,left:10},containment:"#big-cont",scroll:!1,start:function(){defaults.recentElement=t(this).attr("id")},stop:function(){},revert:"invalid"});var e;e||t("[id^=H_]").each(function(e,n){!function(e){var n=function(e){return e.substring(0,e.indexOf("_"))}(e);"H"===n&&(t("#"+e).resizable({start:function(e,t){}}),t("#"+e).draggable({containment:"#parent_"+e,scroll:!1})),t("#"+e).removeClass("ui-widget-content")}(n.getAttribute("id"))})},t.SimpleWebSiteGenerator()}(0,jQuery);
