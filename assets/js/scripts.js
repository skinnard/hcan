// Show Loader when page is loading
$(window).load(function() {
	$(".loader").fadeOut(100);
});

var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader() {
	// Has scrolled class on header
	var zvalue = $(document).scrollTop();
	if (zvalue > 30) $("#header, .mobile-container").addClass("scrolled");
    else $("#header, .mobile-container").removeClass("scrolled");
    console.log("Z value is " + zvalue);
}

function parallaxBackground() {
	$(".parallax").css(
		"background-positionY",
		$(window).scrollTop() * 0.3 + "px"
	);
}

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split("&"),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split("=");

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined
				? true
				: decodeURIComponent(sParameterName[1]);
		}
	}
};

jQuery(document).ready(function($) {

	// ***********************************************
	//
	// Mobile Menu
	//
    // ***********************************************
    
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

	$(".mmenu-toggle").click(function(e) {
		$(".mmenu-nav").toggleClass("is-pushed");
        $("body").toggleClass("mmenu-open");
	});

	$(".mmenu-nav__link").click(function(e) {
        e.preventDefault();
        $(".mmenu-nav").removeClass("is-pushed");
        $("body").removeClass("mmenu-open");
	});

	$(".mmenu-nav__close").click(function() {
        $(".mmenu-nav").removeClass("is-pushed");
        $("body").removeClass("mmenu-open");
	});

	// ***********************************************
	//
	// FAQ Content page
	//
	// ***********************************************

	// Set variables
	var contentText = $(".faq-content__left > .content > .title").text();
	var urlTitle = getUrlParameter("title");
	var dataTitleLeft = $(".faq-content__left > .content").data("title");
	var dataTitleRight = $(".faq-content__right > .text").data("title");
	var leftSideContent = $(".faq-content__left > .content");
	var rightSideContent = $(".faq-content__right > .text");

	// First hide content on left
	$(".faq-content__left > .content").addClass("hide");

	// Show correct content on left side when you reach FAQ content page from the FAQ landing page
	leftSideContent.each(function(index) {
		var data = $(this).data("title");
		var btnData = $(".st-custom-button").data("link");
		if (data == urlTitle) {
			$(this).removeClass("hide");
		}

		$(".faq-social-share").each(function() {
			var btnData = $(this).data("link");

			if (btnData == data) {
				$(".faq-social-share")
					.not(this)
					.addClass("hide");
				$(this).removeClass("hide");
			}
		});
	});

	// Hide item on right side that is currently being shown on left side
	rightSideContent.each(function() {
		rightData = $(this).data("title");
		if (rightData == urlTitle) {
			$(this).addClass("hide");
		}

		// When you click the text on right...
		$(this).on("click", function(e) {
			var bw = $("body").outerWidth();
			var rsTitleData = $(this).data("title");

			leftSideContent.each(function() {
				if ($(this).data("title") == rsTitleData) {
					$(this).removeClass("hide");
					leftSideContent.not(this).addClass("hide");
				}
			});

			// Fade in and Out text on the left when it's clicked
			if (bw >= 767) {
				$(this).fadeOut(300, function() {
					$(this).addClass("hide");
				});
				rightSideContent.not(this).fadeIn(300, function() {
					$(this).removeClass("hide");
					$(this).css("display", "block");
				});
			}
		});
	});

    scrollHeader();

    // Scroll Events
    if (!isTouch) {
        $(document).scroll(function () {
            scrollHeader();
            parallaxBackground();
        });
    }

    // Touch scroll
    $(document).on({
        touchmove: function (e) {
            scrollHeader(); // Replace this with your code.
        }
    });


	//Smooth scroll to start
	$("#to-start").click(function() {
		var start_y = $("#start").position().top;
		var header_offset = 45;
		window.scroll({
			top: start_y - header_offset,
			left: 0,
			behavior: "smooth"
		});
		return false;
	});

	//Smooth scroll to top
	$("#to-top").click(function() {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
		return false;
	});

	//******************************************************************
	//
	// Expert Council Page Accordions
	//
	//******************************************************************

	var acc = $(".directors > .accordion");
	acc.click(function(e) {
		$(this)
			.find(".accordion-content")
			.slideToggle();
		$(this)
			.find(".fa-plus")
			.toggleClass("rotate");
		$(this)
			.find(".img-wrapper")
			.toggleClass("alt-icon");
		acc
			.not(this)
			.find(".accordion-content")
			.slideUp();
		acc
			.not(this)
			.find(".fa-plus")
			.removeClass("rotate");
	});

	// Mobile Nav Icon Toggle
	$(".mobile-nav-icon").click(function() {
		$(this).toggleClass("flipped");
		$(this)
			.parent()
			.find(".overlay-menu__nav__subnav")
			.slideToggle();
		$(".mobile-nav-icon")
			.not(this)
			.removeClass("flipped");
		$(".mobile-nav-icon")
			.not(this)
			.parent()
			.find(".overlay-menu__nav__subnav")
			.slideUp();
	});

	// Draggable login screen function
	$("#mobile-home").dragend();

	$("#practitioner").on("click", function() {
		$("#mobile-home").dragend({
			scrollToPage: 1
		});
	});

	$("#patient").on("click", function() {
		$("#mobile-home").dragend({
			scrollToPage: 2
		});
	});

	// Page Transition Fades
	$(".animsition").animsition({
		inDuration: 350,
		outDuration: 350,
		loading: false
	});

	//******************************************************************
	//
	// Scroll-to functions
	//
	//******************************************************************

	// Clicking on page hero down icon scrolls to target rather than jump usin this plugin
	$(".icon-down-wrapper").localScroll({
		duration: 1000,
		easing: "easeInOutCubic",
		offset: -69
	});

	// // Clicking on page hero down icon scrolls to target rather than jump usin this plugin
	// $('#faq-top').localScroll({
	//     duration: 1000,
	//     easing: 'easeInOutQuad'
	// });
    
}); // END READY
