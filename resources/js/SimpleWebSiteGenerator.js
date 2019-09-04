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
            
                    if(codeHold === 'H'){
                        $("#"+id).resizable({
                              start: function( event, ui ) {
                                  
                              }
                          });
                        $( "#"+id ).draggable({ 
                            containment: "#parent_"+id, 
                            scroll: false 
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
        let searchAllHeader = function(gotId){
            
            if(!gotId){
                var allHeader = $("[id^=H_]");
                
                allHeader.each(function(ind,ele){
                    var id = ele.getAttribute("id");
                    
                    registerEventsOnElements(id);
                    
                });
            }
            else{
                
            }
            
        }
        searchAllHeader();
        
               
       /**
        * Var
        *
        * @description Sequence
        */
        function getCode(id){
            var s = id.substring(0,id.indexOf("_"));
            return s;
        }
        
        
        
        
    } //End
    

    $.SimpleWebSiteGenerator();

}(this,jQuery));