
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css("background" , "#0F304F");
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })