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
}

function parallaxBackground() {
	$(".parallax").css(
		"background-positionY",
		$(window).scrollTop() * 0.3 + "px"
	);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

jQuery(document).ready(function($) {

    // ***********************************************
    //
    // Alert when user clicks external link
    //
    // ***********************************************

    var attr;

    // Click outbound link...
    $('a.ob-link').on('click', function(e){
        attr = $(this).attr('href');
        e.preventDefault();
        $('#site-leave-modal').removeClass('hide');
        $('body').addClass('no-scroll');
    });

    // Modal window clicks
    $('#slm-proceed').click(function (e) {
        e.preventDefault();
        window.open(attr, '_blank');
        $('#site-leave-modal').addClass('hide');
        $('body').removeClass('no-scroll');
    });

    $('#slm-cancel').click(function () {
        $('#site-leave-modal').addClass('hide');
        $('body').removeClass('no-scroll');
    });

    $('#slm-close-btn').click(function () {
        $('#site-leave-modal').addClass('hide');
        $('body').removeClass('no-scroll');
    });


    // ***********************************************
    //
    // Mobile Menu
    //
    // ***********************************************
    
    $('.mmenu-toggle').click(function(e) {
        $(this).find('.button_container').toggleClass('active');
        $('.mmenu-nav').toggleClass('is-pushed');
        $('.mmenu-nav__level').removeClass('is-active has-overlay');
        $('.mmenu-nav__sublevel').removeClass('is-active');
        $('body').toggleClass('mmenu-open');
        $('.mmenu-nav').scrollTop(0);
        e.stopPropagation();     
        if ( $('body').hasClass('mmenu-open') ) {
            $('#header').addClass('blue-bg');
        } else {
            $('#header').removeClass('blue-bg');
        } 
    });

    $(document).click(function() {
        $('.mmenu-pusher').removeClass('is-pushed');
        $('.mmenu-nav__level').removeClass('is-active');
    });
        $('.mmenu-nav').click(function(e) {
        e.stopPropagation();
    });
    
    $('.mmenu-nav__link').click(function(e) {
        if ($(this).parent('.is-parent').length) {
            e.preventDefault();
            $(this).next('.mmenu-nav__sublevel').addClass('is-active').parent().closest('.mmenu-nav__level').addClass('has-overlay');
        } else if ($(this).parent('.sub-list').length) {
            console.log('Sub list item');
        } else {
            $('.mmenu-pusher').toggleClass('is-pushed');
            $('.mmenu-nav__sublevel').removeClass('is-active has-overlay');
          }
    });
      
      $('.mmenu-nav__close').click(function() {
        if ( $(this).closest('.mmenu-nav__sublevel').length ) {
            
            $(this).closest('.mmenu-nav__sublevel').removeClass('is-active');
            $(this).closest('.mmenu-nav__sublevel').parent().closest('.mmenu-nav__level').removeClass('has-overlay');

        } else {
            $('.mmenu-nav').removeClass("is-pushed");
            $('.mmenu-toggle').removeClass('active');
        }
    })

    // ***********************************************
    //
    // FAQ Content page 
    //
    // ***********************************************

    // Set variables
    var contentText = $('.faq-content__left > .content > .title').text();
    var urlTitle = getUrlParameter('title');
    var dataTitleLeft = $('.faq-content__left > .content').data("title");
    var dataTitleRight = $('.faq-content__right > .text').data("title");
    var leftSideContent = $('.faq-content__left > .content');
    var rightSideContent = $('.faq-content__right > .text');
   
    // First hide content on left
    $('.faq-content__left > .content').addClass('hide');

    // Show correct content on left side when you reach FAQ content page from the FAQ landing page
    leftSideContent.each(function( index ) {
        var data = $( this ).data("title");
        var btnData = $(".st-custom-button").data("link");
        if ( data == urlTitle ) {
            $( this ).removeClass('hide');
        }

        $(".faq-social-share").each(function() {
            var btnData = $(this).data("link");

            if (btnData == data) {
                $(".faq-social-share").not(this).addClass("hide");
                $(this).removeClass("hide");
            }
        });
    });

    // Hide item on right side that is currently being shown on left side
    rightSideContent.each(function() {
        rightData = $( this ).data("title");
        if ( rightData == urlTitle ) {
            $( this ).addClass('hide');
        }

        // When you click the text on right...
        $(this).on('click', function(e) {

            var bw = $('body').outerWidth();
            var rsTitleData = $( this ).data("title"); 

            leftSideContent.each(function() {
                if ( $(this).data("title") == rsTitleData ) {

                    $(this).removeClass("hide");
                    leftSideContent.not(this).addClass('hide');
                }
            });

            // Fade in and Out text on the left when it's clicked
            if ( bw >= 767 ) {
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
		$(document).scroll(function() {
			scrollHeader();
			parallaxBackground();
		});
	}

	// Touch scroll
	$(document).on({
		touchmove: function(e) {
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
    // Risk Page Accordions
    //
    //******************************************************************
     
     $(".accordion-wrapper").click(function(e) {
        $(this).toggleClass('open');
        $(this).next().slideToggle();
        $(this).find('.img-wrapper').toggleClass('rotate');
        $(this).find('.img-wrapper').toggleClass('alt-icon');
        $(".accordion-wrapper").not(this).removeClass('open');
        $(".accordion-wrapper").not(this).next().slideUp();
        $(".accordion-wrapper").not(this).find('.img-wrapper').removeClass('rotate');
        $(".accordion-wrapper").not(this).find('.img-wrapper').removeClass('alt-icon');
    });


    //******************************************************************
    //
    // Expert Council Page Accordions
    //
    //******************************************************************

    var acc = $('.directors > .accordion');
    acc.click(function(e) {
        $(this).find('.accordion-content').slideToggle();
        $(this).find('.fa-plus').toggleClass('rotate');
        $(this).find('.img-wrapper').toggleClass('alt-icon');
        acc.not(this).find('.accordion-content').slideUp();
        acc.not(this).find('.fa-plus').removeClass('rotate');
    });


    //******************************************************************
    //
    // Full Width Carousels
    //
    //******************************************************************


    // Add carousel dots and dot id, also add a class to each slide
    $('.full-width-slider').each(function() {
        var numSlides = $(this).find(".fw-carousel-content-wrapper").length;
        var addId = numSlides;
        for (var i = 0; i < numSlides; i++) {
            $(this).find(".carousel-dots > .dots").prepend( '<li class="dot" id="carousel-' + addId + '"></li>' );
            var addId = addId - 1;
        }
    });

    $('.full-width-slider .fw-carousel-content-wrapper').not('.current').fadeOut(1);

    // Make the first dot in the carousel active
    $(".full-width-slider .carousel-dots > .dots .dot:first").addClass('active');

    // Change slides when you click a dot
    $(".full-width-slider .dot").click(function() {

        var findIdClicked = $(this).attr("id");
        var splitString = findIdClicked.split("carousel-");
        var findTheNumb = splitString[1];

        var adjustNumberforSlide = findTheNumb - 1;
        next = $('[data-slide="' + findTheNumb + '"]');
        console.log(next);
        $('.full-width-slider .current').fadeOut(500, function() {
            $('.full-width-slider .current').removeClass('current');
            next.addClass('current');
            onSlideChange();
            $('.full-width-slider .current').fadeIn(500);
        });
        
    });

    // Changes current slide when an arrow is clicked
    $(".full-width-slider .nav-arrows > div").click(function() {
        if ($(this).hasClass('right')) {
            nextSlide = ($('.full-width-slider .current').next('.fw-carousel-content-wrapper').length != 0) ? $('.full-width-slider .current').next('.fw-carousel-content-wrapper') : $('.full-width-slider .fw-carousel-content-wrapper:first');
        } else {
            nextSlide = ($('.full-width-slider .current').prev('.fw-carousel-content-wrapper').length != 0) ? $('.full-width-slider .current').prev('.fw-carousel-content-wrapper') : $('.full-width-slider .fw-carousel-content-wrapper:last');
        }
        $('.full-width-slider .current').fadeOut(400, function() {
            $('.full-width-slider .current').removeClass('current');
            nextSlide.addClass('current');
            onSlideChange();
            nextSlide.fadeIn(400);
        });
    });

    // Updates active dot and arrow text
    function onSlideChange() {
        $('.dots .active').removeClass('active');
        $('.dots .dot:nth-child(' + $('.full-width-slider .current').data('slide') + ')').addClass('active');
        next = ($('.full-width-slider .current').next('.fw-carousel-content-wrapper').length != 0) ? $('.full-width-slider .current').next('.fw-carousel-content-wrapper') : $('.full-width-slider .fw-carousel-content-wrapper:first');
        $('.full-width-slider .nav-arrows .right p').text(next.data('name'));
        prev = ($('.full-width-slider .current').prev('.fw-carousel-content-wrapper').length != 0) ? $('.full-width-slider .current').prev('.fw-carousel-content-wrapper') : $('.full-width-slider .fw-carousel-content-wrapper:last');
        $('.full-width-slider .nav-arrows .left p').text(prev.data('name'));
    }

	// Mobile Nav Icon Toggle
	$(".mobile-nav-icon").click(function() {
		$(this).toggleClass("flipped");
		$(this).parent().find(".overlay-menu__nav__subnav").slideToggle();
		$(".mobile-nav-icon").not(this).removeClass("flipped");
		$(".mobile-nav-icon").not(this).parent().find(".overlay-menu__nav__subnav").slideUp();
	});

	// Accordion Toggle
	$(".acc-content").addClass("hide");

	// Close accordion on click
	$('.faq-grid').on('click', function() {
		console.log(this);
		$(this).find('.acc-content').slideToggle();
		$(this).find('.faq-arrow').toggleClass('rotate');
		$(this).find('.acc-title-text').toggleClass('green');
		$('.faq-grid').not(this).find('.acc-content').slideUp();
		$('.faq-grid').not(this).find('.faq-arrow').removeClass('rotate');
		$('.faq-grid').not(this).find('.acc-title-text').removeClass('green');
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
    $('.icon-down-wrapper').localScroll({
        duration: 1000,
        easing: 'easeInOutCubic',
        offset: -69
    });

    // // Clicking on page hero down icon scrolls to target rather than jump usin this plugin
    // $('#faq-top').localScroll({
    //     duration: 1000,
    //     easing: 'easeInOutQuad'
    // });

    //******************************************************************
    //
    // Download PDF Funtion
    //
    //******************************************************************

    // $('#gpdf').click(function () {   
    //     downloadPDF();
    // });

    // $('#gpdf-risk').click(function () {   
    //     downloadPDFRisk();
    // });

    // $('#fr-gpdf').click(function () {   
    //     downloadPDFFR();
    // });

    // $('#fr-gpdf-risk').click(function () {   
    //     downloadPDFRiskFR();
    // });


    //******************************************************************
    //
    // Parallax Blood Cell BG 
    //
    //******************************************************************

    $('#body-circles-wrapper').paroller({
        factor: 0.5,            // multiplier for scrolling speed and offset
        factorXs: 0.1,          // multiplier for scrolling speed and offset if window width is <576px
        factorSm: 0.2,          // multiplier for scrolling speed and offset if window width is <=768px
        factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
        factorLg: 0.3,          // multiplier for scrolling speed and offset if window width is <=1200px
        type: 'background',     // background, foreground
        direction: 'vertical' // vertical, horizontal
    });

    //******************************************************************
    //
    // Making Carousels Touch Sensitive
    //
    //******************************************************************

    if ($('.hb-carousel').length != 0) {
        $('.hb-carousel .carousel-content-wrapper').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            ImagesLoaded: true,
            setGallerySize: false
        });
    }

    
    if ($('.full-width-slider').length != 0) {
        $('.full-width-slider .carousel-content-wrapper').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            ImagesLoaded: true,
            setGallerySize: false
        });
    }

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    { }
    else {
        $('.flickity-prev-next-button.next').append('<span class="hide-med no-ie">Next</span>');
        $('.flickity-prev-next-button.previous').append('<span class="hide-med no-ie">Previous</span>');
    }

    $('.hb-carousel').addClass('hide');

    // Opens modal to correct slide when clicked
    $('.icons-wrapper > .icons').on('click', function(e) {
        $('.carousel-' + $(this).data('modal')).removeClass('hide');
        currentModal = $('.carousel-' + $(this).data('modal'));
        currentModal.find('.carousel-content-wrapper').flickity('resize');
        $('.hb-carousel .carousel-content-wrapper').flickity( 'select', $(this).data('modal-slide') - 1, true, true );
        onModalSlideChange();
        if (!$('body').hasClass('en-home') && !$('body').hasClass('fr-home') && !$('body').hasClass('en-exercise') && !$('body').hasClass('fr-exercise') ) {
            $('body').addClass('no-scroll');
        }
    });

    // Closes the modal when clicked
    $('.close-btn').click(function(){
        $('.hb-carousel').addClass('hide');
        $('body').removeClass('no-scroll');
    });

    function onModalSlideChange() {
        next = (currentModal.find('.is-selected').next('.carousel-content').length != 0) ? currentModal.find('.is-selected').next('.carousel-content') : currentModal.find('.carousel-content-wrapper').find('.carousel-content:first');
        currentModal.find('.flickity-prev-next-button.next span').text(next.data('name'));

        prev = (currentModal.find('.is-selected').prev('.carousel-content').length != 0) ? currentModal.find('.is-selected').prev('.carousel-content') : currentModal.find('.carousel-content-wrapper').find('.carousel-content:last');
        currentModal.find('.flickity-prev-next-button.previous span').text(prev.data('name'));
    }
    
    $('.hb-carousel .carousel-content-wrapper').on( 'change.flickity', function() {
        onModalSlideChange();
    });

    if ($('.full-width-slider').length != 0) {
        currentModal = $('#' + $('.full-width-slider').attr('id'));
        onModalSlideChange();
        $('.full-width-slider .carousel-content-wrapper').on( 'change.flickity', function() {
            onModalSlideChange();
        });
    }

    var bodyHeight = $('body').height();
    if ( bodyHeight < 450 ) {
        $('.modal-text').css({ 
            "line-height": "1.3",
            "font-size": "15px" 
        });

        $('.carousel-content').css({
            "padding": "30px",
            "font-size": "15px"
        });

        $('.flickity-prev-next-button.next').css({
            "right": "5%",
            "bottom": "10px",
            "height": "30px"
        });

        $('.flickity-prev-next-button.previous').css({
            "left": "5%",
            "bottom": "10px",
            "height": "30px"
        });

        $('.flickity-page-dots').css({
            "bottom": "10px"
        });
    }

}); // END READY



