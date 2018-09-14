$(document).ready(function() {        
        $(".nav_item_hover").hover(function(){
           $(this).stop(true).fadeTo("fast",1); // This sets the opacity to 100%     on hover
        },function(){
            $(this).stop(true).fadeTo("fast", 0); // This sets the opacity back to 60% on mouseout
        });
});

var liLength = $('#ball_con > li > img');
var ballIn = function(){
	$('#ball_con').fadeTo('slow', 1).addClass("animated slideInRight");
	setTimeout(function() {
		liLength.eq(0).fadeTo('slow', 1);
	}, 1000);
	setTimeout(function() {
		liLength.eq(1).fadeTo('slow', 1);
	}, 1400);
	setTimeout(function() {
		liLength.eq(2).fadeTo('slow', 1);
	}, 1800);
	setTimeout(function() {
		liLength.eq(3).fadeTo('slow', 1);
	}, 2200);
	setTimeout(function() {
		liLength.eq(4).fadeTo('slow', 1);
	}, 2600);
	
};

var mainT = function(){
	$("#main_tittle").removeClass("d-none").show('slow');
};

var hexagonBlock = function() {
	$('.main_sect .main_sect_container .info_about').removeClass('d-none').addClass('d-block animated fadeIn');
}

var flyCar = function(){
	$("#fly_car_img").removeClass("d-none").addClass("d-block animated slideInLeft slower");
};

var logoHeader = $('.header .logo_container');
var menuList = $('.navbar-expand-lg .navbar-collapse');
var header = function(){
	$("#header").removeClass("d-none").addClass("d-block animated fadeInDown");
	logoHeader.addClass('d-block animated fadeInDown');
	setTimeout(function() {
		menuList.addClass('d-block');
	}, 1000);
};


var scroll = function(){
	$("#scroll_down").removeClass("d-none");
	$("#join").removeClass("d-none");
	$("#scroll_down_2").removeClass("d-none");
	$("#join_2").removeClass("d-none");
	$("#main_nav").removeClass("d-none").addClass("animated bounceInRight");
	$("#main_nav_2").removeClass("d-none").addClass("animated bounceInRight");
};



$(window).load(function(){
 setTimeout(function(){
 	$('#preloader').addClass("d-none");
		setTimeout(ballIn, 3000);
		setTimeout(flyCar, 4000);
	 	setTimeout(hexagonBlock, 5000);
		setTimeout(header, 5500);
		setTimeout(mainT, 9000);
		setTimeout(scroll, 9000);
 }, 2000);
	
});


$('#fullpage').fullpage({
		navigation: false,
	    navigationPosition: 'right',
	    scrollBar: false,
	    dragAndMove: 'fingersonly',
	    normalScrollElements: '#normalScroll,',
	 });
