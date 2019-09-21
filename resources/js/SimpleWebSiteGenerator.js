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

;(function(global, $){


  "use strict";

  /**
  * jQuery
  *
  * @description
  */

  if(!$){
    throw new Error("jQuery not loaded");
  }

  /**
  * Defaults
  *
  * @description Set all the required defaults
  */

  /**
    * Var
    *
    * @description Samp Code's, Very Important
    */
  let arrSampCodes = ["S1"];    
    
  /**
    * Var
    *
    * @description Samp Code currently in use, Very Important
    * auto set
    */
  let sampCodeCurrentlyInUse = "S1";    
    
  /**
    * Var
    *
    * @description Samp Code's
    */
  let arrOfAllRow = [];
    
    
  /**
    * Var
    *
    * @description Samp Code's
    */    
  let checkMode = ["D"];    
    
    
  /**
	  * Var
	  *
	  * @description Grid attributes
	  */
  const gridAttrContainer = [
  				  "display",
                  "grid-template-columns",
                  "grid-template-rows",
                  "grid-template-areas",
                  "grid-template",
                  "grid-column-gap",
                  "grid-row-gap",
                  "grid-gap",
                  "justify-items",
                  "align-items",
                  "place-items",
                  "justify-content",
                  "align-content",
                  "place-content",
                  "grid-auto-columns",
                  "grid-auto-rows",
                  "grif-auto-flow",
                  "grid"];


  /**
	  * Var
	  *
	  * @description Grid attributes child
	  */  
  const gridAttrItems = [
   						"grid-column-start",
   						"grid-column-end",
   						"grid-row-start",
   						"grid-row-end",
   						"grid-column",
   						"grid-row",
   						"grid-area",
   						"justify-self",
   						"align-self",
   						"place-self"

   						];

   	/**
	  * Var
	  *
	  * @description Layout holder
	  */				
   	let matrixArr = [];

    /**
	  * Var
	  *
	  * @description Layout holder
	  */
   	let collapseButton = true;

    /**
	  * Var
	  *
	  * @description Layout holder
	  */
    let collapseRightButton = true;

    /**
	  * Var
	  *
	  * @description Layout holder
	  */
    let isSampData = false;

    /**
	  * Var
	  *
	  * @description Layout holder
	  */
    let gotHtmlDomObject="";
    
    /**
	  * Var
	  *
	  * @description Layout holder
	  */
    let singleCurrentDialogHolder="";
    
   	/**
	  * Var
	  *
	  * @description Layout holder
	  */	
   	let setHandlerSelectorId = "handlerSelId";

   	let setPanelId = "panelSelId";

   	let setInnerPanel = "innerPanelSelId";

   	/**
	  * Var
	  *
	  * @description Layout holder
	  */
   	let isFunction = function isFunction(obj){
   		return typeof obj === "function" && typeof obj.nodeType !== "number"; 
   	}

   	/**
	  * Var
	  *
	  * @description Layout holder
	  */
   	let isWindow = function isWindow(obj){
   		return obj != null && obj === this.window;
   	} 

   	/**
	  * Var
	  *
	  * @description Layout holder
	  */
   let generateSpaceForElem = function(){

   }

   	/**
	  * Var
	  *
	  * @description Layout holder
	  */
   let createParentElem = function(){

   }


   /**
    * Var
    *
    * @description Handler Img
    */
  
  let handlerObj = $("#handlerSelId");
    
  /*handlerObj.hover(function(){

    if(collapseButton){
              
          $("#panelSelId").animate({
              width: '25%'
          });

          $("#innerPanelSelId").animate({
              width: '82%'
          });

          

          collapseButton = false;
        }

  },function(){

    if(!collapseButton){
                
          $("#panelSelId").animate({
              width: '5%'
          });

          $("#innerPanelSelId").animate({
              width: '1%'
          });

          
            collapseButton = true;
        }

  });*/    
  /*handlerObj.click(function(){

      if(collapseButton){
              
          $("#panelSelId").animate({
              width: '25%'
          });

          $("#innerPanelSelId").animate({
              width: '82%'
          });

          

          collapseButton = false;
        }
      else if(!collapseButton){
                
          $("#panelSelId").animate({
              width: '5%'
          });

          $("#innerPanelSelId").animate({
              width: '1%'
          });

          
            collapseButton = true;
        }
            

    });*/

    /**
    * Var
    *
    * @description Handler Img
    */
  let handlerRightPanelObj = $("#leftHandlerSelId");

  

   let registerEvents = function(){

   		let panelHandler = document.getElementById(setHandlerSelectorId);
   		let panel = document.getElementById(setPanelId);
   		//let innerPanel = document.getElementById(setInnerPanel);

   		panelHandler.onclick = function(event){
   			//console.log("inside event handler");
   			//console.log(event);
   			var ob = setInterval(anim, 10);
   			var pos = 0;
   			if(collapseButton){
   				pos = 0;
   			}else if(!collapseButton){
   				pos = 30;
   			}
   			function anim(){


   				if(collapseButton === true){
   					pos++
   					panel.style.width = pos+"%";
   					//innerPanel.style.width = (pos * 3)+"%";
   					//panelHandler.style.width = (pos - 20)+"%";
   					if(pos === 30){

   						collapseButton=false;
   						clearInterval(ob);
   						return;
   					}

   				}else if(collapseButton === false){
   					pos--
   					panel.style.width = pos+"%";
   					if(pos === 5){

   						collapseButton=true;
   						clearInterval(ob);
   						return;
   					}
   					
   				}

   				
   			}
   		}
   }

   /**
    * Var
    *
    * @description Handler Img
    */
   let getSampData = function(e){
       let urlN = "doc_"+e.target.id+".html";
       
       $.get("http://127.0.0.1/"+urlN,function(htmlDom, status){
           gotHtmlDomObject = htmlDom;
           alert(" ===== "+status);
           if( status === "success" ){
                console.log(JSON.stringify(gotHtmlDomObject));
                //$("#mainContainerId").remove();
                $("#mainContainerId").append(gotHtmlDomObject);
           }else{
               alert("Request To Server Failed");
           }
           
           
       });
   }

   //registerEvents();
   //Sequence 
   
   /**
    * Var
    *
    * @description Sequence
    */
    let registerSampEvents = function(){
        var i=0;
        while(true){
          i = i + 1;

          if($("#sampText"+i).length === 0){
            break;
          }
          $("#sampText"+i).click(getSampData);
        }
    }

    /**
    * Var
    *
    * @description Sequence
    */
    $.setCurrentDialogId = function(elem){
        var ele = elem.getAttribute("id");
        var id = $.removeDialogFromId(ele);
        singleCurrentDialogHolder=id;
    }
    
    /**
    * Var
    *
    * @description Sequence
    */
    $.assignFontColor = function(picker){
        //document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
        //console.log(" ==> "+picker);
        var pick = '#'+picker.toString();
        console.log(singleCurrentDialogHolder);
        $("#"+singleCurrentDialogHolder).css("color",""+pick);
    }
    
    /**
    * Var
    *
    * @description Sequence
    */
    $.removeDialogFromId = function(id){
        var num = id.indexOf("_");
        id = id.substring( (num+1) );
        console.log(" ====> "+id);
        return id;
    }
    
    /**
    * Var
    *
    * @description Sequence
    */
    $.SimpleWebSiteGenerator = function(){
        
        let self = this;
        
        
       /**
        * Var
        *
        * @description Sequence
        */
        handlerObj.click(function(){

              if(collapseButton){

                  $("#panelSelId").animate({
                      width: '40%'
                  });

                  $("#innerPanelSelId").animate({
                      width: '82%'
                  });

                  collapseButton = false;
                }
              else if(!collapseButton){

                  $("#panelSelId").animate({
                      width: '5%'
                  });

                  $("#innerPanelSelId").animate({
                      width: '1%'
                  });

                    collapseButton = true;
                }


            });
        
       /**
        * Var
        *
        * @description Sequence
        */
        handlerRightPanelObj.click(function(){

              if(collapseRightButton){

                  $("#leftColorPanelSelId").animate({
                      width: '25%'
                  });

                  $("#leftInnerColorPanelSelId").animate({
                      width: '82%'
                  });

                  collapseRightButton = false;
                }
              else if(!collapseRightButton){

                  $("#leftColorPanelSelId").animate({
                      width: '5%'
                  });

                  $("#leftInnerColorPanelSelId").animate({
                      width: '1%'
                  });

                    collapseRightButton = true;
                }
            

        });
        
        
       /**
        * Var
        *
        * @description Sequence
        */
        registerSampEvents();
        
       /**
        * Var
        *
        * @description Sequence
        */
        $( "#header-id" ).draggable({  
                   /* connectToSortable: "#ele-container-id", */
                    helper: "clone", 
                    cursorAt: { top: 4, left: 10 }, 
                    containment: "#big-cont", scroll: false, 
                    start: function() {
                        defaults.recentElement = $( this ).attr("id");

                     },
                    stop: function() {

                        //console.log( "==>"+$( this ).attr("id")+" ok "+$("#drag-here-id").hasClass("hide-ele") );
                    },                      
                    revert: "invalid"
        });
        
       /**
        * Var
        *
        * @description Sequence
        */
        let registerEventsOnElements = function(id){
            var codeHold = getCode(id);
                    //alert("reg => "+id);
                    if(codeHold === 'H'){
                        //$("#"+id).css("top","232px");
                        //$("#"+id).css("left","367px");
                        
                        $("#"+id).resizable({
                              start: function( event, ui ) {
                                  
                              }
                          });
                        
                        $( "#"+id ).draggable({ 
                            containment: ".parent_"+id, 
                            scroll: false,
                            start: function( event, ui ){
                                var obj = event.target;
                                console.log("======");
                                var pos = $(obj).position();
                                $(obj).css("margin-top","0");
                                $(obj).css("margin-left","0");
                                $(obj).css("margin-right","0");
                                
                                console.log(" 1 "+pos.top+" 2 "+pos.left+" 3 "+pos.right);
                            },
                            stop: function( event, ui ){
                                var obj = event.target;
                                console.log("======");
                                var pos = $(obj).position();
                                $(obj).css("margin-top","0");
                                $(obj).css("margin-left","0");
                                $(obj).css("margin-right","0");
                                
                                console.log(" 1 - "+pos.top+" 2 - "+pos.left+" 3 "+pos.right);
                            }
                          });
                        
                        
                      }
                    else if(codeHold === 'LB'){
                        
                    }
                    
                    $("#"+id).removeClass("ui-widget-content");
        }
        
        /**
        * Var
        *
        * @description Sequence
        */
        let registerCustomizationBox = function(id){
            var codeHold = getCode(id);
            
            if(codeHold === 'H'){
                
                setDialogOnLoad(id);
            }
            else if(codeHold === 'LO'){
                
                setDialogOnLoad(id);
            }
        }
        
        /**
        * Var
        *
        * @description Sequence
        */
        let setDialogOnLoad = function(id){
                console.log("==============");
                console.log(id);
                var leftVal = $("#"+id).css("left");
                var widthVal = $("#"+id).css("width");
                
                leftVal = leftVal.substring(0,leftVal.length-2);
                widthVal = widthVal.substring(0, widthVal.length - 2);
                
                var posVal = parseInt(leftVal) + parseInt(widthVal);
                
                $("#dialog_"+id).dialog({position: {my: "left top", at: "right", of: "#"+id}});
        }
        
        
        /**
        * Var
        *
        * @description Register drag events also set 
        * resizeEle if required
        */
        let registerDragEvent = function(id){
            
            var setResize = $("#"+id).parent().hasClass("resizeEle");
            
            if(setResize){
                $("#"+id).resizable({
                              start: function( event, ui ) {
                                  
                              }
                          });
            }
            
            $("#"+id).draggable({ 
                            containment: ".parent_"+id, 
                            scroll: false,
                            start: function( event, ui ){
                                var obj = event.target;
                                console.log("======");
                                //var pos = $(obj).position();
                                
                                //console.log(" 1 "+pos.top+" 2 "+pos.left+" 3 "+pos.right);
                            },
                            stop: function( event, ui ){
                                var obj = event.target;
                                console.log("======");
                                //var pos = $(obj).position();
                                
                                //console.log(" 1 - "+pos.top+" 2 - "+pos.left+" 3 "+pos.right);
                            }
                          });
            
        }
        
        
       /**
        * Var
        *
        * @description Sequence
        */
        let searchAllHeader = function(gotId){ //Events are assigned when Website has all elements
            
            if(!gotId){
                var allHeader = $("[id^="+sampCodeCurrentlyInUse+"_H_]");
                
                var logoObj = $("[id^="+sampCodeCurrentlyInUse+"_LO_]");
                
                var textObj = $("[id^="+sampCodeCurrentlyInUse+"_FBTXT_]");
                
                var textMidObj = $("[id^="+sampCodeCurrentlyInUse+"_TXT_]");
                
                allHeader.each(function(ind,ele){
                    var id = ele.getAttribute("id");
                    
                    registerEventsOnElements(id);
                    
                    registerCustomizationBox(id);
                    
                });
                
                logoObj.each(function(ind, ele){
                    var id = ele.getAttribute("id");
                    
                    registerCustomizationBox(id);
                    
                    registerDragEvent(id);
                    
                });
                
                textObj.each(function(ind, ele){
                    var id = ele.getAttribute("id");
                    
                    registerDragEvent(id);
                });
                
                textMidObj.each(function(ind, ele){
                    var id = ele.getAttribute("id");
                    
                    registerDragEvent(id);
                });
                
                
            }
            else{
                
            }
            
        }
        searchAllHeader(); //check below function, make them permanent if required
        
        
        
        
        
        
        
               
       /**
        * Var
        *
        * @description Sequence
        */
        function getCode(id){
            id=id.substr(id.indexOf("_"));
            id=id.substring(1);
            //console.log(id);
            var s = id.substring(0,id.indexOf("_"));
            return s;
        }
        
        
        
        /**
        * Var
        *
        * @description Sequence
        */
        function getSampCode(){
            var sampCode = $("body").attr("class");
            
            if(arrSampCodes.length !== 0 && sampCode !== ""){
              for(var i=0; i<arrSampCodes.length; i++){
                if(sampCode.indexOf(""+arrSampCodes[i]) != -1){
                    return arrSampCodes[i];
                }
              }
            }else{
                throw new Error("Error Extracting Samp Code");
            }
            
        }
        
        getSampCode();
        
        /**
        * Var
        *
        * @description Sequence
        */
        function setOnLoad(){
            
            if(checkMode[0] === "D"){
                var allRo = $("[id^="+sampCodeCurrentlyInUse+"_RO]");
                
                allRo.each(function(ind,ele){
                    var id = ele.getAttribute("id");
                    
                    
                });
            }
        }
        
        setOnLoad(); //Check Mode and start the application
        
        
        /**
        * Var
        *
        * @description Make sortable
        */
        function addAllSortableEvent(){
            
            var allSor = $("[id$=SOR]");
            //alert("here");
            console.log(allSor.length);
            allSor.each(function(ind,ele){
                console.log("hi");
                console.log(ele);
                var id = ele.getAttribute("id");
                //alert("==>"+id);
                $("#"+id).sortable();
                $("#"+id).disableSelection();
            });
            
        }
        
        addAllSortableEvent();
        
        /**
        * Var
        *
        * @description Make sortable
        */
        function addAllFontColorEvent(){
            
            var allFontColorElem = $(".jscolor");
            
            allFontColorElem.each(function(ind,ele){
               var par = ele.parentElement;
                par.getAttribute("id");
            });
        }
        
        
        
        
    } //End
    

    $.SimpleWebSiteGenerator();

}(this,jQuery));