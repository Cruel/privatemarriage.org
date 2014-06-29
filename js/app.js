$(document).foundation();

$(document).ready(function(){
	$('#carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		//fade: true,
		//slide: 'div',
		//cssEase: 'linear',
	});
});