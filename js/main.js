$(function(){
	
	//Wywołanie efektu pojawiania się elementów za pomocą biblioteki ScrollReveal
	window.sr = ScrollReveal().reveal('[class*=col-], .row, row>h2');
	
	
	
	//Zmiana tła i koloru linków w menu przy skrolowaniu
	$(window).scroll(function(){
		
		if($(window).scrollTop() >= 100){
			$("#main-nav").addClass('scroll');
		} else {
			$("#main-nav").removeClass('scroll');
		}
		
	});