//--------------------------------------

(function ($) {
	"use strict";
	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});


	// Sticky Navbar
	$(window).scroll(function () {
		if ($(this).scrollTop() > 90) {
			$('.nav-bar').addClass('nav-sticky');
			$('.carousel, .page-header').css("margin-top", "0px");
		} else {
			$('.nav-bar').removeClass('nav-sticky');
			$('.carousel, .page-header').css("margin-top", "0");
		}
	});


	// Dropdown on mouse hover
	$(document).ready(function () {
		function toggleNavbarMethod() {
			if ($(window).width() > 992) {
				$('.navbar .dropdown').on('mouseover', function () {
					$('.dropdown-toggle', this).trigger('click');
				}).on('mouseout', function () {
					$('.dropdown-toggle', this).trigger('click').blur();
				});
			} else {
				$('.navbar .dropdown').off('mouseover').off('mouseout');
			}
		}
		toggleNavbarMethod();
		$(window).resize(toggleNavbarMethod);
	});


	// Testimonials carousel
	$(".testimonials-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});


	// Blogs carousel
	$(".blog-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});


	// Portfolio isotope and filter
	var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows'
	});

	$('#portfolio-flters li').on('click', function () {
		$("#portfolio-flters li").removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});

})(jQuery);



// button

//widget

// const widget = document.querySelector('.multibutton');
const widgetButton = document.querySelector('.multibutton__button');
const widgetList = document.querySelector('.multibutton__list');
// const widgetItem = document.querySelectorAll('.multibutton__item');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector(".popup__close");
const callBack = document.querySelector('._email');


if (widgetButton) {
	widgetButton.addEventListener('click', () => {
		widgetList.classList.toggle('active');
		widgetButton.classList.toggle('active');
		// widgetItem.classList.toggle('active');
	});
	callBack.addEventListener('click', () => {
		popup.classList.remove("hide-popup");
		// widgetItem.classList.toggle('active');
	});
	closePopup.addEventListener('click', () => {
		popup.classList.add("hide-popup");
		// widgetItem.classList.toggle('active');
	});
	

	// widgetButton.addEventListener('mouseover', () => {
	// 	widgetList.classList.toggle('active');
	// 	widgetButton.classList.toggle('active');
	// 	// widgetItem.classList.toggle('active');
	// });
}


// moblie 

var mobileNumber = "+380977228962";

        // Обработчик события для иконки мобильного
        document.getElementById("mobilephone").addEventListener("click", function() {
            // Инициировать звонок на мобильный номер
            window.location.href = "tel:" + mobileNumber;
        });
        
         document.getElementById("phone").addEventListener("click", function() {
            // Инициировать звонок на мобильный номер
            window.location.href = "tel:" + mobileNumber;
        });
        
         document.getElementById("phone2").addEventListener("click", function() {
            // Инициировать звонок на мобильный номер
            window.location.href = "tel:" + mobileNumber;
        });
        
         document.getElementById("phone3").addEventListener("click", function() {
            // Инициировать звонок на мобильный номер
            window.location.href = "tel:" + mobileNumber;
        });
        
         document.getElementById("phone4").addEventListener("click", function() {
            // Инициировать звонок на мобильный номер
            window.location.href = "tel:" + mobileNumber;
        });
        
      










