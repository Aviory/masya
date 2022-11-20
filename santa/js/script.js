$(document).ready(function() {
	$('.parallax__list>li').addClass('layer');
	$('.parallax__list').parallax();
	$('.wrapper').addClass('active');
	$('.slider').slick({
		dots: true,
		slidesToShow:3,
		speed: 700,
		infinite: true,
		initialSlide: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		waitForAnimate: false,
		centerMode:true,
		asNavFor:".sliderBig",
	
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 1500,
			  }
			}			
		]
	});
	$('.sliderBig').slick({
		arrows: false,
		fade:true,
		asNavFor:".slider",
		slidesToShow:1,	
		initialSlide: 1,
				
	});
});
