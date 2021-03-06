// sub_movie.js

$(document).ready(function(){
    var tabsBox = function(){
        var tab_li = $("#movie_tabs li"),
            box_01 = $('#tab_box01'),
            box_02 = $('#tab_box02'),
            tabBoxWidth = $("#tab_box01").width(),
            movieBox = $("#movie_box"),
            movieTab = $("#movie_tabs"),
            wrap = $("#wrap"),
            index = $(this).index();
       movieBox.height(movieTab.height() + box_01.height());         
       tab_li.eq(0).on("click", function(e){
           e.preventDefault();
           box_01.removeClass("out").addClass("click").siblings().removeClass("click");
           movieBox.height(movieTab.height() + box_01.height());
           wrap.css({'overflow': 'visible'});
       });
       
       tab_li.eq(1).on("click", function(e){
           e.preventDefault();
           box_02.addClass("click").siblings().addClass("out").removeClass("click");
           movieBox.height(movieTab.height() + box_02.height());
           wrap.css({'overflow': 'hidden'});
       });
    };
    tabsBox();
    
    
    var tabs01 = $('.tabs01'),
        tabs02 = $('.tabs02');
    
    tabs01.on("click", function(){
        tabs01.addClass("on");
        tabs02.removeClass("on");
    });
    tabs02.on("click", function(){
        tabs01.removeClass("on");
        tabs02.addClass("on");
    });
    
    var banner = function(){
        var left = $("#left"),
            right = $("#right"),
            gallery = $(".film_gall").find("a"),
            galleryBox = $("#gallery_box");
        left.on("click", function(){
            var banner_li = $(".film_gall").children("li"),
                banner_li_width = banner_li.width();
            banner_li.first().stop().animate({marginLeft: banner_li_width}, 1000, function(){
                banner_li.stop().css({marginLeft: 0}).last().prependTo(".film_gall");// 메소드 체인
            });
        });// left btn
        right.on("click", function(){
            var banner_li = $(".film_gall").children("li"),
                banner_li_width = banner_li.width();
            banner_li.first().stop().animate({marginLeft: -banner_li_width}, 1000, function(){
                banner_li.stop().css({marginLeft: 0}).first().appendTo(".film_gall");// 메소드 체인
            });
         });// right btn
    }// banner
    banner();
    
    $(".fancybox").fancybox();
    
    
});// jquery