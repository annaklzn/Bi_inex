$(document).ready(function() {        
        $(".nav_item_hover").hover(function(){
           $(this).stop(true).fadeTo("fast",1); // This sets the opacity to 100%     on hover
        },function(){
            $(this).stop(true).fadeTo("fast", 0); // This sets the opacity back to 60% on mouseout
        }); });

