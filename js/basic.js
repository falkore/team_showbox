$(document).ready(function(){
    
   var menuBox = $("#menu_box"),
       menuMenu = menuBox.children("ul"),
       nav = $("#nav"),
       navMenu = nav.find("li"),
       timing = 500;
    
    var menuSlide = function(){
        nav.on("mouseenter", function(){
          menuBox.stop().slideDown(500, function(){
           
          });
        });//  nav"mouseenter"
        menuBox.on("mouseenter", function(){
          menuBox.stop().slideDown(500, function(){
           
          });
        });//  menuBox"mouseenter"
   
        menuBox.on("mouseleave", function(){
          menuBox.stop().slideUp(500, function(){
           
          });
        });//  menuMenu"mouseleave"
    };// menuSlide
     menuSlide(); 
    
     navMenu.eq(0).on("click", function(){
         navMenu.eq(0).addClass("on");
         navMenu.removeClass();
     });
     navMenu.eq(1).on("click", function(){
         navMenu.removeClass();
         navMenu.eq(1).addClass("on");
     });
     navMenu.eq(2).on("click", function(){
         navMenu.removeClass();
         navMenu.eq(2).addClass("on");
     });
     navMenu.eq(3).on("click", function(){
         navMenu.removeClass();
         navMenu.eq(3).addClass("on");
    });
});// jQuery
 