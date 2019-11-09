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
!function(t,e){"use strict";if(!e)throw new Error("jQuery not loaded");let n=["S1"],i="S1",o=["D"];let r=!0,l=!0,a="",s="",c="",g=e("#handlerSelId"),d=e("#leftHandlerSelId"),u=function(t){let n=t.lastIndexOf("_");"_PID"!==t.substring(n)&&(e("#"+t).resizable({start:function(t,e){}}),e("#"+t).draggable({containment:".parent_"+t,scroll:!1,start:function(t,n){var i=t.target;console.log("======");var o=e(i).position();e(i).css("margin-top","0"),e(i).css("margin-left","0"),e(i).css("margin-right","0"),console.log(" 1 "+o.top+" 2 "+o.left+" 3 "+o.right)},stop:function(t,n){var i=t.target;console.log("======");var o=e(i).position();e(i).css("margin-top","0"),e(i).css("margin-left","0"),e(i).css("margin-right","0"),console.log(" 1 - "+o.top+" 2 - "+o.left+" 3 "+o.right)}}))},f=function(t){var n=h(t);"H"===n?u(t):"LB"===n?u(t):"TXT"===n?u(t):"FBTXT"===n?u(t):"LO"===n&&u(t),e("#"+t).removeClass("ui-widget-content")},p=function(t){let n="doc_"+t.target.id+".html";e.get("http://127.0.0.1/"+n,function(t,n){a=t,"success"===n?(console.log(JSON.stringify(a)),e("#mainContainerId").append(a)):alert("Request To Server Failed")})};e.setCurrentDialogId=function(t){var n=t.getAttribute("id"),i=e.removeDialogFromId(n);s=i},e.setDeleteDialogId=function(t){var n=t.getAttribute("id"),i=e.removeDialogFromId(n);c=i},e.assignFontColor=function(t){var n="#"+t.toString();console.log(s),e("#"+s).css("color",""+n)},e.removeDialogFromId=function(t){var e=t.indexOf("_");return t=t.substring(e+1),console.log(" ====> "+t),t},e.assignBackHeightMax=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),o=n.substring(i+1),r=e("#"+o).parent(),l=r.css("height"),a=l.indexOf("p"),s=l.substring(0,a);s=parseInt(s),s+=2,r.css("height",s+"px")},e.assignBackHeightMin=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),o=n.substring(i+1),r=e("#"+o).parent(),l=r.css("height"),a=l.indexOf("p"),s=l.substring(0,a);s=parseInt(s),s-=2,r.css("height",s+"px")},e.assignBackWidthMax=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),o=n.substring(i+1),r=e("#"+o).parent(),l=r.css("max-width"),a=l.indexOf("%"),s=l.substring(0,a);s=parseInt(s),(s+=2)<=100&&r.css("max-width",s+"%")},e.assignBackWidthMin=function(t){let n=t.parentElement.parentElement.parentElement.getAttribute("id"),i=n.indexOf("_"),o=n.substring(i+1),r=e("#"+o).parent(),l=r.css("max-width");console.log(" ==> 2 "+l);let a=l.indexOf("%"),s=l.substring(0,a);s=parseInt(s),s-=2,r.css("max-width",s+"%")},e.setTextDescription=function(t){let n=t.parentElement.parentElement.getAttribute("id");console.log("eleId "+n);let i=e(t).val(),o=e.removeDialogFromId(n);console.log("===> change text "+o+" "+i),e("#"+o+"_PID").empty(),e("#"+o+"_PID").append(""+i)};let m=function(t){console.log("=============="),console.log(t);var n=e("#"+t).css("left"),i=e("#"+t).css("width");n=n.substring(0,n.length-2),i=i.substring(0,i.length-2);parseInt(n),parseInt(i);e("#dialog_"+t).dialog({position:{my:"left top",at:"right",of:"#"+t},close:function(n,i){console.log("before close function!"+n.target.getAttribute("id")+" "+t),n.target.setAttribute("id",""),e(n.target).css("display","none"),f(t)}})};function h(t){return t=(t=t.substr(t.indexOf("_"))).substring(1),console.log("finally inside getCode ===> "+t),t.substring(0,t.indexOf("_"))}e.registerCustomizationBox=function(t){let e=h(t);console.log("codeHold "+e),"H"===e?m(t):"LO"===e?m(t):"TXT"===e?m(t):"FBTXT"===e?m(t):"RO"===e?(alert(" Few More Change's "),m(t)):"DEL"===e&&m(t)},e.setDialog=function(t,n){console.log("this ele "+t),console.log(" reponse box ==> "+JSON.stringify(n)+" "+t+" "),e(t).click(function(i){if(i.stopPropagation(),"txt"===n){let n=e(".dialog_text");if(""===n.attr("id")){let i=e(t).attr("id");console.log("ele id => "+i);let o="dialog_"+i;n.attr("id",""+o),console.log("ele dia id => "+o),e.registerCustomizationBox(i),n.css("display","")}}else if("img"===n){let n=e(".dialog_image");if(""===n.attr("id")){let i=e(t).attr("id"),o="dialog_"+i;n.attr("id",""+o),e.registerCustomizationBox(i),n.css("display","")}}else if("del"===n){let n=e(".dialog_delete");if(""===n.attr("id")){let i=e(t).attr("id");alert(" =====> "+i);let o="dialog_"+i;n.attr("id",""+o),e.registerCustomizationBox(i),n.css("display","")}}})},e.SimpleWebSiteGenerator=function(){g.click(function(){r?(e("#panelSelId").animate({width:"40%"}),e("#innerPanelSelId").animate({width:"82%"}),r=!1):r||(e("#panelSelId").animate({width:"5%"}),e("#innerPanelSelId").animate({width:"1%"}),r=!0)}),d.click(function(){l?(e("#leftColorPanelSelId").animate({width:"25%"}),e("#leftInnerColorPanelSelId").animate({width:"82%"}),l=!1):l||(e("#leftColorPanelSelId").animate({width:"5%"}),e("#leftInnerColorPanelSelId").animate({width:"1%"}),l=!0)}),function(){for(var t=0;0!==e("#sampText"+(t+=1)).length;)e("#sampText"+t).click(p)}(),e("#header-id").draggable({helper:"clone",cursorAt:{top:4,left:10},containment:"#big-cont",scroll:!1,start:function(){defaults.recentElement=e(this).attr("id")},stop:function(){},revert:"invalid"});var t;!function(t){if(!t){var n=e("[id^="+i+"_H_]"),o=e("[id^="+i+"_LO_]"),r=e("[id^="+i+"_FBTXT_]"),l=e("[id^="+i+"_TXT_]");n.each(function(t,e){var n=e.getAttribute("id");f(n)}),o.each(function(t,e){var n=e.getAttribute("id");f(n)}),r.each(function(t,e){var n=e.getAttribute("id");f(n)}),l.each(function(t,e){var n=e.getAttribute("id");f(n)})}}(),function(){var t=e("body").attr("class");if(0===n.length||""===t)throw new Error("Error Extracting Samp Code");for(var i=0;i<n.length;i++)if(-1!=t.indexOf(""+n[i]))return n[i]}(),"D"===o[0]&&e("[id^="+i+"_RO]").each(function(t,e){e.getAttribute("id")}),t=e("[id$=SOR]"),console.log(t.length),t.each(function(t,n){console.log("hi"),console.log(n);var i=n.getAttribute("id");e("#"+i).sortable(),e("#"+i).disableSelection()})},e.SimpleWebSiteGenerator()}(0,jQuery);
