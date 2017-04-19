/*global jQuery, $ */
(function(){
    "use strict";
    var $window = $(window);

    $(document).ready(function () {

        // Fading effect between transitions
        $(".animsition").animsition( {
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 300,
            outDuration: 200,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'body',
            transition: function(url){ 
                window.location.href = url; 
                location.reload(); // otherwise anismation fading effect doesn't work with React
            }
        });


        gridInit();
        contact();
        masonryInit();
        styleHelper();
        openProject();
    });

    $window.resize(function () {
        masonryInit();
    });

    function menu () {
        $('.toggle-icon').on("click", function () {
            $(this).toggleClass('pushed');
            $('.menu-content', '.menu-mobile').toggleClass('pushed');
        });
    }


    function contact() {
        console.log("at least we have this")
        addFormAnimation($('input'));
        addFormAnimation($('textarea'));
        function addFormAnimation(blurTrigger) {
            blurTrigger.blur(function () {
                if ($(this).val() !== '') {
                    $(this).addClass('filled');
                }
                else {
                    $(this).removeClass('filled');
                }
            });
        }
        var contactForm = $('#contact-form');
        contactForm.submit(function () {
            console.log('submitted')
            var $this = $(this);
            if ($this.hasClass('send')) {
                return false;
            }

            $this.addClass('send');

            $.ajax({
                method: "POST",
                url: "php/contact.php",
                data: {
                    'name': contactForm.find('input[name="name"]').val(),
                    'email': contactForm.find('input[name="email"]').val(),
                    'phone': contactForm.find('input[name="phone"]').val(),
                    'address': contactForm.find('input[name="address"]').val(),
                    'msg': contactForm.find('textarea[name="msg"]').val()
                },
                success: function (data) {
                    console.log('cool')
                    data = JSON.parse(data);

                    $('.contact-help-block').html(data.msg);

                    if (data.status === 'success') {
                        contactForm.find('input[name="name"]').val('');
                        contactForm.find('input[name="email"]').val('');
                        contactForm.find('input[name="phone"]').val('');
                        contactForm.find('input[name="address"]').val('');
                        contactForm.find('textarea[name="msg"]').val('');
                    }

                    $this.removeClass('send');
                }
            });

            return false;
        });
    }



    function customSelect(){
        $('select').each(function () {
            if (!$(this).closest('div').hasClass('custom-select')) {
                var $select_items = '';
                $('option', this).each(function () {
                    $select_items += '<div class="select-item" value="' + $(this).val() + '">' + $(this).text() + '</div>';
                });
                $(this).wrap('<div class="custom-select"></div>');
                $(this).closest('.custom-select').append(""+
                    "<div class='select-header'>" +
                    "<div class='current-item'>" + $('option:selected', this).text() + "</div>" +
                    "<div class='cleatfix'></div>" +
                    "</div>" +
                    "<div class='select-body scroll'>" +
                    $select_items +
                    "</div>");
            }
        });

        $('.select-header').on('click', function (e) {
            e.stopPropagation();
            $(this).closest('.custom-select').toggleClass('open');
        });

        $('.custom-select .select-item').on('click', function () {
            $(this).closest('.custom-select').find('.current-item').text($(this).text());
            $(this).closest('.custom-select').find('select').val($(this).attr('value')).trigger('change');
        });
    }

    $.fn.textWidth = function(text, font) {
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
        return $.fn.textWidth.fakeEl.width();
    };


    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + '';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + '';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    }

    function gridInit() {
        var $grid = $('.portfolio-list').isotope({
            masonry: {
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer'
            },
            itemSelector: '.portfolio-item'
        });

        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });

        $('.portfolio-filter').on('click', 'button', function () {
            $('.portfolio-filter button').removeClass('active');
            $(this).addClass('active');
            var filterValue = $( this ).attr( 'data-filter' );
            $grid.isotope({ filter: filterValue });
        });
    }

    function masonryInit() {
        var masonryBlock = $('.portfolio-list-masonry'),
            portfolioItem = $('.portfolio-item');
        if (masonryBlock.length > 0) {
            var $grid;
            if (window.innerWidth >= 992) {
                // location.reload();
                $grid = masonryBlock.isotope({
                    layoutMode: 'masonryHorizontal',
                    itemSelector: '.portfolio-item',
                    masonry: {
                        rowHeight: 170,
                        columnWidth: '.grid-sizer'
                    }
                });
                masonryBlock.addClass('desktop');
            }
            else {
                $grid = masonryBlock.isotope({
                    itemSelector: '.portfolio-item',
                    masonry: {
                        columnWidth: 228

                    }
                });
                masonryBlock.addClass('mobile');
            }
            $grid.imagesLoaded().progress( function() {
                $grid.isotope('layout');
            });

            $( portfolioItem, masonryBlock).hover(
                function () {
                    portfolioItem.css("opacity", 0.3);
                    $(this).css("opacity", 1);
                },
                function () {
                    portfolioItem.css("opacity", 1);
                }
            );
            $('.portfolio-filter').on('click', 'button', function () {
                $('.portfolio-filter button').removeClass('active');
                $(this).addClass('active');
                var filterValue = $( this ).attr( 'data-filter' );
                $grid.isotope({ filter: filterValue });

            });
            $('.masonry-scroll-btn span').on("click",function () {
                var $maonryScroll = $('.masonry-scroll');
                if ($(this).hasClass('prev')) {

                    $maonryScroll.stop();
                    $maonryScroll.animate({scrollLeft : $maonryScroll.scrollLeft() - window.innerWidth}, 500);
                }
                else {
                    $maonryScroll.stop();
                    $maonryScroll.animate({scrollLeft : $maonryScroll.scrollLeft() + window.innerWidth}, 500);
                }
            });
            $window.resize(function () {
                if (window.innerWidth > 992) {
                    if (masonryBlock.hasClass('mobile')){
                        $('body').css('opacity', '0');
                        location.reload();
                    }
                }
                else if(masonryBlock.hasClass('desktop')) {
                    $('body').css('opacity', '0');
                    location.reload();
                }
            });
        }
    }


    function portfolioSlider() {
        var portfolioCarousel = $(".portfolio-carousel");
        if (portfolioCarousel.length > 0) {
            portfolioCarousel.on('initialized.owl.carousel changed.owl.carousel', function (e) {
                if (!e.namespace) return;
                var carousel = e.relatedTarget;
                var $portfolioPaggination = $('#portfolio-pagination');
                $portfolioPaggination.find('span:first-child').text(carousel.relative(carousel.current()) + 1 );
                $portfolioPaggination.find('span:last-child').text( '/' + carousel.items().length);
                if (window.innerWidth >= 992) {
                    setTimeout(function () {
                        $(".owl-item.center .description").addClass("fadeInRight animated");
                    }, 1);
                    $(".owl-item .description").removeClass("fadeInRight animated");
                }

            }).owlCarousel({
                center: true,
                items: 1,
                loop: true,
                dots: true,
                autoWidth: true

            });
            portfolioCarousel.on('initialized.owl.carousel', function () {
                if (window.innerWidth < 992) {
                    $(".menu-icon*.-wrapper").append("<span class='prev'><i class='fa fa-angle-left'></i>prev</span><span class='next'>next<i class='fa fa-angle-right'></i></span>");
                }
            });
            $(document).on('click', '.menu-icon-wrapper > span', function () {
                if ($(this).hasClass('next')) {
                    portfolioCarousel.trigger('next.owl.carousel');
                }
                else  {
                    portfolioCarousel.trigger('prev.owl.carousel');
                }

            });

            $(document).on('click', '.owl-item', function(){
                var owlItemCenter = $(".owl-item.center");
                if ($(this).index() > owlItemCenter.index()) {
                    portfolioCarousel.trigger('next.owl.carousel');
                }
                else if ($(this).index() < owlItemCenter.index()) {
                    portfolioCarousel.trigger('prev.owl.carousel');
                }
            });
        }
    }

    function styleHelper() {
        $('[data-color]').each(function() {
            $(this).css("color", $(this).data("color"));
        });

        $('[data-background]').each(function() {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        });

        $('[data-background-color]').each(function() {
            $(this).css("background-color", $(this).data("background-color"));
        });

        $('[data-background-gradient]').each(function() {
            $(this).css("background", "linear-gradient(" + $(this).data("background-gradient")[0] + "," + $(this).data("background-gradient")[1] + " 0%," + $(this).data("background-gradient")[2] + " 100%)");
        });

        $('[data-opacity]').each(function() {
            $(this).css("opacity", $(this).data("opacity"));
        });

        $('[data-overlay-color]').each(function() {
            $(this).css("background-color", $(this).data("overlay-color"));
        });
    }



    function openProject() {
        openProjectCarousel();
        $(".open-project-lightbox").magnificPopup({
            image: {
                markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '</div>' +
                '</div>'
            },
            closeMarkup: '<button title="%title%" class=" custom-close mfp-close"><div class="mfp-close"><span></span><span></span></div></button>',

            fixedContentPos: true,
            closeOnBgClick: false,
            delegate: 'a',
            type: 'image',
            gallery:{
                enabled:true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><div class="mfp-arrow-%dir%"><span></span><span></span></div></button>'
            },
            callbacks: {
                buildControls: function() {
                    this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                }
            }
        });
    }

    function openProjectCarousel() {
        if ($("div").hasClass("open-project-lightbox")) {
            console.log('woah')
            $(".container-fluid > .row:first-child").prepend("<div class='open-project-carousel hidden-md-carousel open-project-lightbox'></div>");
            $(".open-project-lightbox a").clone().appendTo(".open-project-carousel");
            $(".open-project-carousel").owlCarousel({
                center: true,
                items: 1,
                loop: true,
                autoWidth: true
            });
        }

    }


// Function to show/hide graph on button click.
    function showGraph() {
        if ($('.about-graph').length !== 0) {
            var aboutGraph = new Graph('.about-graph', '/js/graph-data', {
                clickActiveElements: []
            });

            $('#aboutGraph').on('click', function() {
                if (!$(this).hasClass('active')) {
                    aboutGraph.update('/js/graph-data', {
                        removeElements: [],
                        clickActiveElements: []
                    });

                    $('.about-graph-buttons a').each(function() {
                        if ($(this).hasClass('active')) {
                            $(this).removeClass('active');
                        }

                        if ($(this).hasClass('skills')) {
                            $(this).addClass('active');
                        }
                    });
                }

                $(this).toggleClass('active');
                $('.about-toggle-button').toggleClass('active');

                $('.hideaway-content').slideToggle('middle');

                $('.showing-content').slideToggle('middle');
            });

            $('.about-graph-buttons a.skills').on('click', function () {
                aboutGraph.update('/js/graph-data', {
                    removeElements: [],
                    clickActiveElements: []
                });
            });

            $('.about-graph-buttons a.education').on('click', function () {
                aboutGraph.update('/js/second-graph-data', {
                    removeElements: [
                        'xAxis',
                        'pathArea',
                        'yAxis',
                        'tooltips'
                    ],
                    extendedTooltip: true
                });
            });

            $('.about-graph-buttons a').on('click', function() {
                $('.about-graph-buttons a').removeClass('active');
                $(this).addClass('active');
            });


            addWidth();

            $window.resize(function () {
                addWidth();
            });
        }
        /**
         * Function to add width to graph parent container when window width less than 767px.
         */
        function addWidth() {
            if (window.innerWidth <= 767) {
                $('.about-graph').width(window.innerWidth - 100);
            } else {
                $('.about-graph').removeAttr('style');
            }
        }
    }
})();
