$(document).ready(function() {        
        $(".nav_item_hover").hover(function(){
           $(this).stop(true).fadeTo("fast",1); // This sets the opacity to 100%     on hover
        },function(){
            $(this).stop(true).fadeTo("fast", 0); // This sets the opacity back to 60% on mouseout
        });
});


var ballIn = function(){
	$('#ball_con').addClass("animated slideInRight");
	
};

var mainT = function(){
	$("#main_tittle").removeClass("d-none").addClass("d-block animated slideInRight");
};

var flyCar = function(){

	$("#fly_car_img").removeClass("d-none").addClass("d-block animated slideInLeft");
};


var header = function(){
	$("#header").removeClass("d-none").addClass("d-block animated fadeInDown");
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
		setTimeout(ballIn, 0);
		setTimeout(flyCar, 2000);
		setTimeout(header, 8000);
		setTimeout(mainT, 9000);
		setTimeout(scroll, 9000);
 }, 2000);
});
