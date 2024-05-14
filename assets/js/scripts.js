$(document).ready(function(){
	var count = 0;

	$(document).on('click','.mobile_click',function(){
		if(count == 0){ 
			$('.menu').fadeIn(); 
			$(this).html('<i class="fa-solid fa-xmark"></i>');
			count = 1;
		}else{
			$('.menu').fadeOut(); 
			$(this).html('<i class="fas fa-bars"></i>');
			count = 0;
		}
	})





});