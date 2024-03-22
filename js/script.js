// JavaScript Document
$(document).ready(function() {
	/* navigation */
	document.addEventListener('click',function(e){
		/* Hamburger menu */
		if(e.target.classList.contains('hamburger-toggle')){
			e.target.children[0].classList.toggle('active');
		}
	});
	$(".navbar-toggler").click(function () {
		$("html").toggleClass("nav-menu-open overflow-hidden");
		$(".header").toggleClass("nav-menu-open");

		setTimeout(() => {
			var header_height = $(".header").innerHeight();
			$(".navbar .navbar-collapse.show").css({"height": "calc(100% - "+ header_height +"px)"});
		}, 500);
	});
	/* navigation */

	/* fullpage */
	// $('#fullpage').fullpage({
	// // var myFullpage = new fullpage('#fullpage', {
	// 	anchors: ['1stSection', '2ndSection', '3rdSection', '4thSection'],
	// 	navigation: true,
	// 	menu: '.navigation-menu-list',
	// 	navigationPosition: 'right',
	// 	// showActiveTooltip: true,
	// 	loopTop: false, // This Is Use For Infinite Scrolling
	// 	loopBottom: false, // This Is Use For Infinite Scrolling
	// 	scrollOverflow: true,
	// 	resize: false,
	// 	touchSensitivity: 15,
	// 	touchScrollStep: 200,
	// 	normalScrollElementTouchThreshold: 10,
	// 	scrollingSpeed: 700,

	// 	// onLeave: function(index, nextIndex, direction){
    //     //     if ($(".section").is("#section0.active") == true) {
	// 	// 		$('#fp-nav').addClass('nav-disable');
	// 	// 		$('.header').addClass('h-white-layout');
	// 	// 		$('.header').removeClass('h-stick');
	// 	// 	} else {
	// 	// 		$('#fp-nav').removeClass('nav-disable');
	// 	// 		$('.header').removeClass('h-white-layout');
	// 	// 		$('.header').addClass('h-stick');
	// 	// 	}
    //     // },
	// 	// afterLoad: function(origin, destination, direction) {
	// 	// 	if ($(".section").is("#section0.active") == true) {
	// 	// 		$('#fp-nav').addClass('nav-disable');
	// 	// 		$('.header').addClass('h-white-layout');
	// 	// 	} else {
	// 	// 		$('#fp-nav').removeClass('nav-disable');
	// 	// 		$('.header').removeClass('h-white-layout');
	// 	// 	}
	// 	// },
    // });
	/* fullpage */

	// scroll-to-section
	$(".navbar .navbar-nav .nav-item .nav-link").click(function(){
		$(".navbar .navbar-nav .nav-item .nav-link").removeClass("active");

		$(".navbar-toggler").addClass("collapsed");
		$(".navbar-toggler").attr("aria-expand","false");
		$(".navbar-collapse").removeClass("show");
		$("html").removeClass("nav-menu-open overflow-hidden");
		$(".header").removeClass("nav-menu-open");
	});
	// scroll-to-section

	/* banner-carousel */
	$(".banner-carousel").slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 300,
		loop: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	/* banner-carousel */

	/* our-products-carousel */
	$(".our-products-carousel").slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: false,
		centerMode: true,
		centerPadding: "0px",
		speed: 300,
		loop: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></div>',
  		nextArrow: '<div class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></div>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				centerMode: false,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	/* our-products-carousel */

	/* our-services-carousel */
	$(".our-services-carousel").slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: false,
		centerMode: true,
		centerPadding: "0px",
		speed: 300,
		loop: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></div>',
  		nextArrow: '<div class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></div>',
		responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	/* our-services-carousel */

	/* our-products-full-detail-block toggle */
	$(".our-products-carousel .our-products-block .common-learn-more").click(function(){
		$(".our-products-section").addClass("our-products-full-show");
		// $(".our-products-slider").addClass("d-none");
		// $(".our-products-full-detail-block").removeClass("d-none");
	});

	$(".our-products-full-detail-block .common-back-link a").click(function(){
		$(".our-products-section").removeClass("our-products-full-show");
		// $(".our-products-full-detail-block").addClass("d-none");
		// $(".our-products-slider").removeClass("d-none");
	});
	/* our-products-full-detail-block toggle */

	/* AOS */
	AOS.init({
		once: true
	});
	/* AOS */

	/* lazyload */
	var myLazyLoad = new LazyLoad();
	myLazyLoad.update();
	/* lazyload */

	/* OFI Browser */
	objectFitImages();
	/* OFI Browser */
});

// $(window).on("load", function(){
// 	if ($(".section").is("#section0.active") == true) {
// 		$('#fp-nav').addClass('nav-disable');
// 		$('.header').addClass('h-white-layout');
// 	} else {
// 		$('#fp-nav').removeClass('nav-disable');
// 		$('.header').removeClass('h-white-layout');
// 	}
// });