(function ($) {
    "use strict";
    /*=================================
        JS Index Here
    ==================================*/
    /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image Color & Mask
    07. Global Slider
    08. Ajax Contact Form
    09. Search Box Popup
    10. Popup Sidemenu
    11. Magnific Popup
    12. Section Position
    13. Filter
    14. Counter Up
    15. Shape Mockup
    16. Progress Bar Animation 
    17. Countdown
    18. Image to SVG Code
    00. Woocommerce Toggle
    00. Right Click Disable
    */
    /*=================================
        JS Index End
    ==================================*/
    /*

  /*---------- 01. On Load Function ----------*/
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });

    // $('select').niceSelect(); 
    if ($('.nice-select').length) {
        $('.nice-select').niceSelect();
    }

    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
        $(".preloaderCls").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".preloader").css("display", "none");
            });
        });
    }

    $(document).ready(function () {
        setTimeout(function () {
            $('#loader').addClass('loaded');
            // Once the container has finished, the scroll appears
            if ($('#loader').hasClass('loaded')) {
                // It is so that once the container is gone, the entire preloader section is deleted
                $('#preloader').delay(9000).queue(function () {
                    $(this).remove();
                });
            }
        }, 3000);
    });

    /*---------- 03. Mobile Menu ----------*/
    $.fn.thmobilemenu = function (options) {
        var opt = $.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "menu-item-has-children",
                thSubMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                // appendElement: '<span class="th-mean-expand"></span>',
                subMenuToggleClass: "th-open",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function () {
            var menu = $(this); // Select menu

            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            // Class Set Up for every submenu
            menu.find("." + opt.subMenuParent).each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                $(this).addClass(opt.subMenuParent);
                $(this).addClass(opt.thSubMenuParent); // Add th-item-has-children class
                $(this).children("a").append(opt.appendElement);
            });

            // Toggle Submenu
            function toggleDropDown($element) {
                var submenu = $element.children("ul");
                if (submenu.length > 0) {
                    $element.toggleClass(opt.subMenuParentToggle);
                    submenu.slideToggle(opt.toggleSpeed);
                    submenu.toggleClass(opt.subMenuToggleClass);
                }
            }

            // Submenu toggle Button
            var itemHasChildren = "." + opt.thSubMenuParent + " > a";
            $(itemHasChildren).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    menuToggle();
                });
            });

            // Hide Menu On outside click
            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });

            // Stop Hide full menu on menu click
            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };


    $(".th-menu-wrapper").thmobilemenu();

    /*---------- 04. Sticky fix ----------*/
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 500) {
            $('.sticky-wrapper').addClass('sticky');
            $('.category-menu').addClass('close-category');
        } else {
            $('.sticky-wrapper').removeClass('sticky')
            $('.category-menu').removeClass('close-category');
        }
    })

    $(".menu-expand").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $('.category-menu').toggleClass('open-category');
        });
    });

    /*---------- 05. Scroll To Top ----------*/
    if ($('.scroll-top').length > 0) {

        var scrollTopbtn = document.querySelector('.scroll-top');
        var progressPath = document.querySelector('.scroll-top path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 750;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(scrollTopbtn).addClass('show');
            } else {
                jQuery(scrollTopbtn).removeClass('show');
            }
        });
        jQuery(scrollTopbtn).on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        })
    }

    /*---------- 06. Set Background Image Color & Mask ----------*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }

    if ($('[data-bg-color]').length > 0) {
        $('[data-bg-color]').each(function () {
            var color = $(this).attr('data-bg-color');
            $(this).css('background-color', color);
            $(this).removeAttr('data-bg-color');
        });
    };

    $('[data-border]').each(function () {
        var borderColor = $(this).data('border');
        $(this).css('--th-border-color', borderColor);
    });

    if ($('[data-mask-src]').length > 0) {
        $('[data-mask-src]').each(function () {
            var mask = $(this).attr('data-mask-src');
            $(this).css({
                'mask-image': 'url(' + mask + ')',
                '-webkit-mask-image': 'url(' + mask + ')'
            });
            $(this).addClass('bg-mask');
            $(this).removeAttr('data-mask-src');
        });
    };

    if ($('[data-theme-color]').length > 0) {
        $('[data-theme-color]').each(function () {
            var $color = $(this).attr('data-theme-color');
            $(this).get(0).style.setProperty('--theme-color', $color);
            $(this).removeAttr('data-theme-color');
        });
    };

    if ($('[data-bg-color]').length > 0) { 
        $('[data-color]').each(function () {
            var $color = $(this).attr('data-bg-color');
            $(this).get(0).style.setProperty('--theme-color', $color);
            $(this).removeAttr('data-color');
        }); 
    };


    /*----------- 21. Overlay Direction ----------*/
    if ($('.overlay-direction').length > 0) {
        if (window.innerWidth > 767) {
            const nodes = [].slice.call(document.querySelectorAll(".overlay-direction .filter-item"), 0);
            const directions = { 
                0: "top",
                1: "right",
                2: "bottom",
                3: "left"
            };
            const classNames = ["in", "out"].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));
            const getDirectionKey = (ev, node) => {
                const {
                    width,
                    height,
                    top,
                    left
                } = node.getBoundingClientRect();
                const l = ev.pageX - (left + window.pageXOffset);
                const t = ev.pageY - (top + window.pageYOffset);
                const x = l - width / 2 * (width > height ? height / width : 1);
                const y = t - height / 2 * (height > width ? width / height : 1);
                return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
            };
            class Item {
                constructor(element) {
                    this.element = element;
                    this.element.addEventListener("mouseover", ev => this.update(ev, "in"));
                    this.element.addEventListener("mouseout", ev => this.update(ev, "out"));
                }
                update(ev, prefix) {
                    this.element.classList.remove(...classNames);
                    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
                }
            }
            nodes.forEach(node => new Item(node));
        }
    }

    

    /*----------- 07. Global Slider ----------*/

    $('.th-slider').each(function () {

        var thSlider = $(this);
        var settings = $(this).data('slider-options');

        // Store references to the navigation Slider
        var prevArrow = thSlider.find('.slider-prev');
        var nextArrow = thSlider.find('.slider-next');
        var paginationEl = thSlider.find('.slider-pagination');

        var autoplayconditon = settings['autoplay'];

        var sliderDefault = {
            slidesPerView: 1,
            spaceBetween: settings['spaceBetween'] ? settings['spaceBetween'] : 24,
            loop: settings['loop'] == false ? false : true,
            speed: settings['speed'] ? settings['speed'] : 1000,
            autoplay: autoplayconditon ? autoplayconditon : {
                delay: 6000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: nextArrow.get(0),
                prevEl: prevArrow.get(0),
            },
            pagination: {
                el: paginationEl.get(0),
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '" aria-label="Go to Slide ' + (index + 1) + '"></span>';
                },
            },
        };

        var options = JSON.parse(thSlider.attr('data-slider-options'));
        options = $.extend({}, sliderDefault, options);
        var swiper = new Swiper(thSlider.get(0), options); // Assign the swiper variable

        if ($('.slider-area').length > 0) {
            $('.slider-area').closest(".container").parent().addClass("arrow-wrap");
        }

    });

    // Function to add animation classes
    function animationProperties() {
        $('[data-ani]').each(function () {
            var animationName = $(this).data('ani');
            $(this).addClass(animationName);
        });

        $('[data-ani-delay]').each(function () {
            var delayTime = $(this).data('ani-delay');
            $(this).css('animation-delay', delayTime);
        });
    }
    animationProperties();

    // Add click event handlers for external slider arrows based on data attributes
    $('[data-slider-prev], [data-slider-next]').on('click', function () {
        var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
        var targetSlider = $(sliderSelector);

        if (targetSlider.length) {
            var swiper = targetSlider[0].swiper;

            if (swiper) {
                if ($(this).data('slider-prev')) {
                    swiper.slidePrev();
                } else {
                    swiper.slideNext();
                }
            }
        }
    });

    /*-------------- 08. Slider Tab -------------*/
    $.fn.activateSliderThumbs = function (options) {
        var opt = $.extend({
                sliderTab: false,
                tabButton: ".tab-btn",
            },
            options
        );

        return this.each(function () {
            var $container = $(this);
            var $thumbs = $container.find(opt.tabButton);
            var $line = $('<span class="indicator"></span>').appendTo($container);

            var sliderSelector = $container.data("slider-tab");
            var $slider = $(sliderSelector);

            var swiper = $slider[0].swiper;

            $thumbs.on("click", function (e) {
                e.preventDefault();
                var clickedThumb = $(this);

                clickedThumb.addClass("active").siblings().removeClass("active");
                linePos(clickedThumb, $container);

                clickedThumb.prevAll(opt.tabButton).addClass('list-active');
                clickedThumb.nextAll(opt.tabButton).removeClass('list-active');

                if (opt.sliderTab) {
                    var slideIndex = clickedThumb.index();
                    swiper.slideTo(slideIndex);
                }
            });

            if (opt.sliderTab) {
                swiper.on("slideChange", function () {
                    var activeIndex = swiper.realIndex;
                    var $activeThumb = $thumbs.eq(activeIndex);

                    $activeThumb.addClass("active").siblings().removeClass("active");
                    linePos($activeThumb, $container);

                    $activeThumb.prevAll(opt.tabButton).addClass('list-active');
                    $activeThumb.nextAll(opt.tabButton).removeClass('list-active');
                });

                var initialSlideIndex = swiper.activeIndex;
                var $initialThumb = $thumbs.eq(initialSlideIndex);
                $initialThumb.addClass("active").siblings().removeClass("active");
                linePos($initialThumb, $container);

                $initialThumb.prevAll(opt.tabButton).addClass('list-active');
                $initialThumb.nextAll(opt.tabButton).removeClass('list-active');
            }

            function linePos($activeThumb) {
                var thumbOffset = $activeThumb.position();
            
                // Check if thumbOffset is defined
                if (!thumbOffset) {
                    console.error('thumbOffset is undefined or null. Ensure $activeThumb is valid.');
                    return; // Exit the function early if thumbOffset is not defined
                }
            
                var marginTop = parseInt($activeThumb.css('margin-top')) || 0;
                var marginLeft = parseInt($activeThumb.css('margin-left')) || 0;
            
                $line.css("--height-set", $activeThumb.outerHeight() + "px");
                $line.css("--width-set", $activeThumb.outerWidth() + "px");
                $line.css("--pos-y", (thumbOffset.top + marginTop) + "px");
                $line.css("--pos-x", (thumbOffset.left + marginLeft) + "px");
            }
            
        });
    };

    if ($(".product-thumb").length) {
        $(".product-thumb").activateSliderThumbs({
            sliderTab: true,
            tabButton: ".tab-btn",
        });
    }

    if ($(".team-thumb").length) {
        $(".team-thumb").activateSliderThumbs({
            sliderTab: true,
            tabButton: ".tab-btn",
        });
    }




    /*----------- 08. Ajax Contact Form ----------*/
    var form = ".ajax-contact";
    var invalidCls = "is-invalid";
    var $email = '[name="email"]';
    var $validation =
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
    var formMessages = $(".form-messages");

    function sendContact() {
        var formData = $(form).serialize();
        var valid;
        valid = validateContact();
        if (valid) {
            jQuery
                .ajax({
                    url: $(form).attr("action"),
                    data: formData,
                    type: "POST",
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    formMessages.removeClass("error");
                    formMessages.addClass("success");
                    // Set the message text.
                    formMessages.text(response);
                    // Clear the form.
                    $(
                        form +
                        ' input:not([type="submit"]),' +
                        form +
                        " textarea"
                    ).val("");
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    formMessages.removeClass("success");
                    formMessages.addClass("error");
                    // Set the message text.
                    if (data.responseText !== "") {
                        formMessages.html(data.responseText);
                    } else {
                        formMessages.html(
                            "Oops! An error occured and your message could not be sent."
                        );
                    }
                });
        }
    }

    function validateContact() {
        var valid = true;
        var formInput;

        function unvalid($validation) {
            $validation = $validation.split(",");
            for (var i = 0; i < $validation.length; i++) {
                formInput = form + " " + $validation[i];
                if (!$(formInput).val()) {
                    $(formInput).addClass(invalidCls);
                    valid = false;
                } else {
                    $(formInput).removeClass(invalidCls);
                    valid = true;
                }
            }
        }
        unvalid($validation);

        if (
            !$($email).val() ||
            !$($email)
            .val()
            .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
        ) {
            $($email).addClass(invalidCls);
            valid = false;
        } else {
            $($email).removeClass(invalidCls);
            valid = true;
        }
        return valid;
    }

    $(form).on("submit", function (element) {
        element.preventDefault();
        sendContact();
    });

    /*---------- 09. Search Box Popup ----------*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on("click", function (e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on("click", function (e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox)
            .find("form")
            .on("click", function (e) {
                e.stopPropagation();
                $($searchBox).addClass($toggleCls);
            });
        $($searchCls).on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    }
    popupSarchBox(".popup-search-box", ".searchBoxToggler", ".searchClose", "show");

    /*---------- 10. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
        // Sidebar Popup
        $($sideMunuOpen).on('click', function (e) {
            e.preventDefault();
            $($sideMenu).addClass($toggleCls);
        });
        $($sideMenu).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls)
        });
        var sideMenuChild = $sideMenu + ' > div';
        $(sideMenuChild).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu).addClass($toggleCls)
        });
        $($sideMenuCls).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls);
        });
    };
    popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');

    /*---------- 10. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu2, $sideMunuOpen2, $sideMenuCls2, $toggleCls2) {
        // Sidebar Popup
        $($sideMunuOpen2).on('click', function (e) {
            e.preventDefault();
            $($sideMenu2).addClass($toggleCls2);
        });
        $($sideMenu2).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu2).removeClass($toggleCls2)
        });
        var sideMenuChild = $sideMenu2 + ' > div';
        $(sideMenuChild).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu2).addClass($toggleCls2)
        });
        $($sideMenuCls2).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($sideMenu2).removeClass($toggleCls2);
        });
    };
    popupSideMenu('.shopping-cart', '.sideMenuToggler2', '.sideMenuCls', 'show');

   /*----------- 10. Flip Slider ----------*/
   if ($(".flip-gallery").length > 0) {
    $(".flip-gallery").flipster({
        style: 'carousel',
        spacing: -0.5,
        nav: true,
        buttons: true,
        loop: true,
        scrollwheel: false,
    });
}
    /*----------- 11. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /* magnificPopup video view */
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true,
    });

    function content_ready_scripts() {
        const boxes = gsap.utils.toArray('.global-image');
        boxes.forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top 70%",
                    end: "bottom bottom",
                    toggleClass: "active",
                    once: true,
                }
            });
        });
    }


    // var menu = ['', '', '']
    // var mySwiper = new Swiper ('.testiSlide1', {
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //             clickable: true,
    //         renderBullet: function (index, className) {
    //           return '<span class="' + className + '">' + (menu[index]) + '</span>';
    //         },
    //     },
    
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   })

    /************lettering js***********/
    function injector(t, splitter, klass, after) {
        var a = t.text().split(splitter),
            inject = '';
        if (a.length) {
            $(a).each(function (i, item) {
                inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
            });
            t.empty().append(inject);
        }
    }

    var methods = {
        init: function () {

            return this.each(function () {
                injector($(this), '', 'char', '');
            });

        },

        words: function () {

            return this.each(function () {
                injector($(this), ' ', 'word', ' ');
            });

        },

        lines: function () {

            return this.each(function () {
                var r = "eefec303079ad17405c889e092e105b0";
                // Because it's hard to split a <br/> tag consistently across browsers,
                // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
                // (of the word "split").  If you're trying to use this plugin on that 
                // md5 hash string, it will fail because you're being ridiculous.
                injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
            });

        }
    };

    $.fn.lettering = function (method) {
        // Method calling logic
        if (method && methods[method]) {
            return methods[method].apply(this, [].slice.call(arguments, 1));
        } else if (method === 'letters' || !method) {
            return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
        }
        $.error('Method ' + method + ' does not exist on jQuery.lettering');
        return this;
    };

    $(".about-anime").lettering();

    /*---------- 12. Section Position ----------*/
    // Interger Converter
    function convertInteger(str) {
        return parseInt(str, 10);
    }

    $.fn.sectionPosition = function (mainAttr, posAttr) {
        $(this).each(function () {
            var section = $(this);

            function setPosition() {
                var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
                    posData = section.attr(mainAttr), // where to position
                    posFor = section.attr(posAttr), // On Which section is for positioning
                    topMark = "top-half", // Pos top
                    bottomMark = "bottom-half", // Pos Bottom
                    parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
                    parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

                if (posData === topMark) {
                    $(posFor).css(
                        "padding-bottom",
                        parentPB + sectionHeight + "px"
                    );
                    section.css("margin-top", "-" + sectionHeight + "px");
                } else if (posData === bottomMark) {
                    $(posFor).css(
                        "padding-top",
                        parentPT + sectionHeight + "px"
                    );
                    section.css("margin-bottom", "-" + sectionHeight + "px");
                }
            }
            setPosition(); // Set Padding On Load
        });
    };

    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
        $(postionHandler).imagesLoaded(function () {
            $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
        });
    }

    /*---------- 22. Circle Progress ----------*/
    function animateElements() {
        $('.feature-circle .progressbar').each(function () {
            var pathColor = $(this).attr('data-path-color');
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 100,
                    thickness: 8,
                    emptyFill: "#E4E4E4",
                    lineCap: 'round',
                    fill: {
                        color: pathColor,
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('.circle-num').text((stepValue * 100).toFixed(0) + "%");
                }).stop();
            }
        });

        $('.skill-circle .progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 100,
                    thickness: 8,
                    emptyFill: "#E0E0E0",
                    lineCap: 'round',
                    fill: {
                        gradient: ["#F11F22", "#F2891D"]
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('.circle-num').text((stepValue * 100).toFixed(0) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);

    /*----------- 14.1 Filter ----------*/
    $(".filter-active").imagesLoaded(function () {
        var $filter = ".filter-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function (event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });

    $(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
    });

    $(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(function () {
        var $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
            $filterItem = ".filter-item, .woocommerce-Reviews .comment-list li";

        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
        $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
            $($filter).isotope({
                filter: "*",
            });
        });
    });

    /*----------- 14. Counter Up ----------*/
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });

    /*----------- 15. Shape Mockup ----------*/
    $.fn.shapeMockup = function () {
        var $shape = $(this);
        $shape.each(function () {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap");
        });
    };

    if ($(".shape-mockup")) {
        $(".shape-mockup").shapeMockup();
    }

    /*----------- 16. Progress Bar Animation ----------*/
    $('.progress-bar').waypoint(function () {
        $('.progress-bar').css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        });
    }, {
        offset: '75%'
    });

    /*----------- 17. Countdown ----------*/

    $.fn.countdown = function () {
        $(this).each(function () {
            var $counter = $(this),
                countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
                exprireCls = "expired";

            // Finding Function
            function s$(element) {
                return $counter.find(element);
            }

            // Update the count down every 1 second
            var counter = setInterval(function () {
                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                var minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Check If value is lower than ten, so add zero before number
                days < 10 ? (days = "0" + days) : null;
                hours < 10 ? (hours = "0" + hours) : null;
                minutes < 10 ? (minutes = "0" + minutes) : null;
                seconds < 10 ? (seconds = "0" + seconds) : null;

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(counter);
                    $counter.addClass(exprireCls);
                    $counter.find(".message").css("display", "block");
                } else {
                    // Output the result in elements
                    s$(".day").html(days);
                    s$(".hour").html(hours);
                    s$(".minute").html(minutes);
                    s$(".seconds").html(seconds);
                }
            }, 1000);
        });
    };

    if ($(".counter-list").length) {
        $(".counter-list").countdown();
    }

    /*---------- 18. Image to SVG Code ----------*/
    const cache = {};

    $.fn.inlineSvg = function fnInlineSvg() {
        this.each(imgToSvg);

        return this;
    };

    function imgToSvg() {
        const $img = $(this);
        const src = $img.attr("src");

        // fill cache by src with promise
        if (!cache[src]) {
            const d = $.Deferred();
            $.get(src, (data) => {
                d.resolve($(data).find("svg"));
            });
            cache[src] = d.promise();
        }

        // replace img with svg when cached promise resolves
        cache[src].then((svg) => {
            const $svg = $(svg).clone();

            if ($img.attr("id")) $svg.attr("id", $img.attr("id"));
            if ($img.attr("class")) $svg.attr("class", $img.attr("class"));
            if ($img.attr("style")) $svg.attr("style", $img.attr("style"));

            if ($img.attr("width")) {
                $svg.attr("width", $img.attr("width"));
                if (!$img.attr("height")) $svg.removeAttr("height");
            }
            if ($img.attr("height")) {
                $svg.attr("height", $img.attr("height"));
                if (!$img.attr("width")) $svg.removeAttr("width");
            }

            $svg.insertAfter($img);
            $img.trigger("svgInlined", $svg[0]);
            $img.remove();
        });
    }

    $(".svg-img").inlineSvg();


    //Image Reveal Animation
    if ($('.th-anim').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".th-anim");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });
    }


    //gsap sticky fixed 
    $(document).ready((function() {
        function e() {
            var e;
            $(".sticky-wrapper").hasClass("sticky") ? $("#smooth-wrapper").css("padding-top", "0") : (e = $(".th-header").outerHeight(),
            $("#smooth-wrapper").css("padding-top", e + "px"))
        }
        (e(),
        $(window).resize((function() {
            e()
        }
        )),
        "undefined" != typeof MutationObserver) && new MutationObserver((function($) { 
            $.forEach((function($) {
                "attributes" === $.type && "class" === $.attributeName && e()
            }
            ))
        }
        )).observe(document.querySelector(".sticky-wrapper"), {
            attributes: !0
        });
        $(document).mousemove((function(e) {
            var a = e.pageX
              , s = e.pageY;
            $(".custom-element").animate({
                left: a,
                top: s
            }, 300)
        }
        ))
    }
)),
//gsap animation start 
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin),
    gsap.config({
        nullTargetWarn: !1
    });
    ScrollSmoother.create({
        smooth: 1.35,
        effects: !0,
        smoothTouch: !1,
        normalizeScroll: !1,
        ignoreMobileResize: !0
    });
  
    gsap.utils.toArray(".flipX").forEach((t,e)=>{
        gsap.set(t, {
            opacity: .7
        });
        let a = gsap.timeline();
        a.set(t, {
            position: "relative"
        }),
        a.to(t, {
            scrollTrigger: {
                trigger: t,
                scrub: .5,
                duration: 1.5,
                start: "top bottom+=100",
                end: "bottom center+=250",
                markers: !1
            },
            scale: 1,
            opacity: 1,
            rotateY: 0
        })
    }
    ),

    gsap.utils.toArray(".gspin").forEach($=>{
        if ($) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: $,
                    start: "top 95%",
                    end: "bottom -95%",
                    scrub: !0,
                    markers: !1
                }
            }).to($, {
                duration: .4,
                rotation: 720,
                ease: "power2.out"
            })
        }
    }
    ),
    gsap.utils.toArray(".gmovingX").forEach($=>{
        if ($) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: $,
                    start: "top 95%",
                    end: "bottom -95%",
                    scrub: true,
                    toggleActions: "restart pause reverse repeat",
                    markers: !1
                }
            }).from($, {
                x: 400,
                duration: .4,
                ease: "power2.out"
            })
        }
    }
    ),
   
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

    /*----------- 00. Woocommerce Toggle ----------*/
    // Ship To Different Address
    $("#ship-to-different-address-checkbox").on("change", function () {
        if ($(this).is(":checked")) {
            $("#ship-to-different-address")
                .next(".shipping_address")
                .slideDown();
        } else {
            $("#ship-to-different-address").next(".shipping_address").slideUp();
        }
    });

    // Login Toggle
    $(".woocommerce-form-login-toggle a").on("click", function (e) {
        e.preventDefault();
        $(".woocommerce-form-login").slideToggle();
    });

    // Coupon Toggle
    $(".woocommerce-form-coupon-toggle a").on("click", function (e) {
        e.preventDefault();
        $(".woocommerce-form-coupon").slideToggle();
    });

    // Woocommerce Shipping Method
    $(".shipping-calculator-button").on("click", function (e) {
        e.preventDefault();
        $(this).next(".shipping-calculator-form").slideToggle();
    });

    // Woocommerce Payment Toggle
    $('.wc_payment_methods input[type="radio"]:checked')
        .siblings(".payment_box")
        .show();
    $('.wc_payment_methods input[type="radio"]').each(function () {
        $(this).on("change", function () {
            $(".payment_box").slideUp();
            $(this).siblings(".payment_box").slideDown();
        });
    });

    // Woocommerce Rating Toggle
    $(".rating-select .stars a").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).siblings().removeClass("active");
            $(this).parent().parent().addClass("selected");
            $(this).addClass("active");
        });
    });

    // Quantity Plus Minus ---------------------------

    $(".quantity-plus").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var $qty = $(this).siblings(".qty-input");
            var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
        });
    });

    $(".quantity-minus").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var $qty = $(this).siblings(".qty-input");
            var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal) && currentVal > 1) {
                $qty.val(currentVal - 1);
            }
        });
    });




    // /*----------- 00.Color Scheme ----------*/
    $('.color-switch-btns button').each(function () {
        // Get color for button
        const button = $(this);
        const color = button.data('color');
        button.css('--theme-color', color);

        // Change theme color on click
        button.on('click', function () {
            const clickedColor = $(this).data('color');
            $(':root').css('--theme-color', clickedColor);
        });
    });

    $(document).on('click', '.switchIcon', function () {
        $('.color-scheme-wrap').toggleClass('active');
    });



    // /*----------- 00. Right Click Disable ----------*/ 
    //   window.addEventListener('contextmenu', function (e) {
    //     // do something here...
    //     e.preventDefault(); 
    //   }, false); 

    // /*----------- 00. Inspect Element Disable ----------*/   
    //   document.onkeydown = function (e) {
    //     if (event.keyCode == 123) {  
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    //       return false;
    //     }
    //     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {  
    //       return false;
    //     }
    //   } 
    function sendContact() {
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val()
        };
    
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/contact/',  // Ensure this is the correct URL
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                console.log('Form submitted successfully:', response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error in form submission:', jqXHR.responseText);
            }
        });
    }
    
})(jQuery);