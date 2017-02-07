jQuery.fn.exists = function () {
    return $(this).length;
};


///* jQuery custom content scroller
// ========================================================*/
//$(document).ready(function () {
$(window).load(function () {
    if ($(".customScroll").exists()) {
        $(".customScroll").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark",
            horizontalScroll: true,
            advanced: {
                autoExpandHorizontalScroll: "ух",
                updateOnImageLoad: "ух",
            },
            axis: "xy",
            setHeight: 'auto',
            setWidth: "auto",
            documentTouchScroll: true,
            autoDraggerLength: false
        });
    }
});
//});

///* rd-navbar
// ========================================================*/
;
$(document).ready(function () {
    if ($(".rd-navbar").exists()) {
        $('.rd-navbar').RDNavbar({
            responsive: {
                0: {
                    layout: 'rd-navbar-fixed',
                    focusOnHover: false
                },
                768: {
                    layout: 'rd-navbar-static',
                    focusOnHover: true,
                    focusOnHover: true,
                }
            }
        });
    }
});

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $(".copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


///* Select FormStyller
// ========================================================*/
;
$(document).ready(function () {
    if ($(".select_style").exists()) {
        $('.select_style').styler({
            selectVisibleOptions: 6
        });
    }
    if ($(".search_select").exists()) {
        $('.search_select').styler({
            selectSearch: true,
            selectVisibleOptions: 6
        });
    }
});


///* ionRangeSlider
// ========================================================*/
;
$(document).ready(function () {
    var irs_from = $('.irs-from'),
        irs_to = $('.irs-to');
    $(".range_121").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100000000,
        //step: 1000,
        from: 0,
        to: 100000000,
        drag_interval: true,
        hide_min_max: false,
        onStart: function (data) {
            //$("#month-credit-value").val(data.from);
            console.log(data.from);
        },
        onChange: function (data) {
            $("#range_121-to").val(data.from);
            console.log(data.to);
            $("#range_121-from").val(data.to);
            console.log(data.from);
        },
        onFinish: function (data) {
            $("#range_121-from").val(data.to);
            console.log(data.to);
            $("#range_121-to").val(data.from);
            console.log(data.from);
        },
        onUpdate: function (data) {
            console.log(data.from);
        }
    });
    var slider = $(".range_121").data("ionRangeSlider");


    $("#range_121-to").change(function () {
        slider.update({
            from: $("#range_121-to").val(),
        });
    });

    $("#range_121-from").change(function () {
        slider.update({
            to: $("#range_121-from").val(),
        });
    });

});

$(document).ready(function () {
    $(".range_122").ionRangeSlider({
        type: "double",
        min: 50,
        max: 100000,
        from: 50,
        to: 100000,
        drag_interval: true,
        hide_min_max: false,
        onStart: function (data) {
            //$("#month-credit-value").val(data.from);
            console.log(data.from);
        },
        onChange: function (data) {
            $("#range_122-to").val(data.from);
            console.log(data.to);
            $("#range_122-from").val(data.to);
            console.log(data.from);
        },
        onFinish: function (data) {
            $("#range_122-from").val(data.to);
            console.log(data.to);
            $("#range_122-to").val(data.from);
            console.log(data.from);
        },
        onUpdate: function (data) {
            console.log(data.from);
        }
    });
    var slider = $(".range_122").data("ionRangeSlider");
    $("#range_122-to").change(function () {
        slider.update({
            from: $("#range_122-to").val(),
        });
    });

    $("#range_122-from").change(function () {
        slider.update({
            to: $("#range_122-from").val(),
        });
    });
});

$(document).ready(function () {
    $(".range_123").ionRangeSlider({
        type: "double",
        min: 1,
        max: 10,
        from: 1,
        to: 10,
        drag_interval: true,
        step: 1,
        onStart: function (data) {
            //$("#month-credit-value").val(data.from);
            console.log(data.from);
        },
        onChange: function (data) {
            $("#range_123-to").val(data.from);
            console.log(data.to);
            $("#range_123-from").val(data.to);
            console.log(data.from);
        },
        onFinish: function (data) {
            $("#range_123-from").val(data.to);
            console.log(data.to);
            $("#range_123-to").val(data.from);
            console.log(data.from);
        },
        onUpdate: function (data) {
            console.log(data.from);
        }
    });
    var slider = $(".range_123").data("ionRangeSlider");
    $("#range_123-to").change(function () {
        slider.update({
            from: $("#range_123-to").val(),
        });
    });

    $("#range_123-from").change(function () {
        slider.update({
            to: $("#range_123-from").val(),
        });
    });
});


///* SORTED on Big-filrer and All-Reviews
// ========================================================*/
$(document).ready(function () {
    var rooms_count = $('#rooms-count.choice-element span');
    rooms_count.on('click', function (e) {
        e.preventDefault();
        rooms_count.removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
    var rooms_count = $('#sorted-on.sorted-on-parameter span');
    rooms_count.on('click', function (e) {
        e.preventDefault();
        rooms_count.removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
    var rooms_count = $('#show-on.show-on-parameter span');
    rooms_count.on('click', function (e) {
        e.preventDefault();
        rooms_count.removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
    var rooms_count = $('#show-page.show-page-parameter span');
    rooms_count.on('click', function (e) {
        e.preventDefault();
        rooms_count.removeClass('active');
        $(this).addClass('active');
    });
});

/* Sorted By
 ========================================================*/
$(document).ready(function () {
    $(".sorted-by .inline-list li a").on('click', function (e) {
        e.preventDefault();
        $(".sorted-by .inline-list li").removeClass('active');
        $(this).closest('li').addClass('active');
        $(this).find('em').toggleClass('sorted_trigger-down').toggleClass('sorted_trigger-up');
    });

    $(".sorted-by .inline-list li.sorted-by_category").on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('active');

        $('.sorted-by_category-list').removeClass('invisible').addClass('visible');

        $(document).on("click", function (e) {
            if ($(e.target).closest(".sorted-by .inline-list li.sorted-by_category").length || $(e.target).closest('.sorted-by_category-list').length) return;
            $('.sorted-by_category-list').removeClass('visible').addClass("invisible");
            e.stopPropagation();
        });
    });
});


///* JQ UI Datepicker
// ============================================================*/
var disabledDays = [0, 6];
$('.datepicker-here').datepicker({
    autoClose: true,
    onRenderCell: function (date, cellType) {
        if (cellType == 'day') {
            var day = date.getDay(),
                isDisabled = disabledDays.indexOf(day) != -1;

            return {
                disabled: isDisabled
            }
        }
    }

});


$('.datepicker-icon').click(function(){
    $(this).parent().find('.datepicker-here').focus();
});


///* Show -> Hide on index page Search Project forms
// ========================================================*/
function filterTrigger(filter1, filter2) {
    filter1.toggleClass("show").toggleClass("hide");
    filter2.toggleClass("hide").toggleClass("show");
    setTimeout(function () {
        $('.select_style').trigger('refresh');
    }, 1)
}
$(document).ready(function () {
    var $small_filter = $('.small-filter');
    var $big_filter = $('.big-filter');
    var $on_big_filter = $('.on-big-filter');
    var $on_small_filter = $('.on-small-filter');

    $on_big_filter.on('click', function (e) {
        e.preventDefault();
        filterTrigger($small_filter, $big_filter);
    });
    $on_small_filter.on('click', function (e) {
        e.preventDefault();
        filterTrigger($big_filter, $small_filter);
    });
});


/* UI Tabs
 ========================================================*/
;
$(document).ready(function () {
    if ($("#lk-tabs").exists()) {
        $("#lk-tabs").tabs({
            //collapsible: true
        });
    }
});


/* Multiple Select
 ========================================================*/
;
$(document).ready(function () {
    if ($("select[multiple]").exists()) {
        $("select[multiple]").multipleSelect({
            filter: true,
            selectAll: false,
            placeholder: "Место проведения акции"
        });
    }
});

/* Responsive Tabs
 ========================================================*/
;
$(document).ready(function () {
    if ($(".resp-tabs").exists()) {
        $('.resp-tabs').easyResponsiveTabs({
            activate: function () {
                //console.log(3);
                setTimeout(function () {
                    //console.log(2);
                    $('.select_style').trigger('refresh');
                }, 1)
            }
        });
    }
});


/* Fancybox
 ========================================================*/
;
$(document).ready(function () {
    if ($(".fancybox").exists()) {
        $(".fancybox").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            padding: 0
        });
    }


});

function openPopUp(id) {
    $.fancybox({
        wrapCSS: 'openPopUp',
        href: '#' + id,
        //padding: 0,
        titleShow: false,
        autoScale: true,
        helpers:{
            overlay: {
                closeClick: true,
                locked: true
            }
        }

    });
}





///* SWIPER SLIDER
// ========================================================*/
$(document).ready(function () {

    var horizontal_swiper = new Swiper('.horizontal_swiper', {
        paginationClickable: true,
        //spaceBetween: 30,
        //loop: true

        slidesPerView: '1',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        height: 260,
        centeredSlides: true,
        parallax: true,
        speed: 2000,
        //effect: "slide",
        //effect: "fade",
        //effect: "cube",
        effect: "coverflow"
        //effect: "flip"

    });

    var vertical_swiper = new Swiper('.vertical_swiper', {
        //pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 5,
        mousewheelControl: true,
        autoHeight: true,
        height: 260,
        centeredSlides: true,
        watchSlidesProgress: true,
        //watchSlidesVisibility: true,
    });

    horizontal_swiper.params.control = vertical_swiper;
    vertical_swiper.params.control = horizontal_swiper;
});


/* Collapse
 ============================================================*/
;
$(document).ready(function () {
    var collapse_wrapper = $('.collapse-wrapper'),
        collapse_status = $('.collapse-status'),
        collapse_link = $('.collapse-link'),
        collapse_cnt = $('.collapse-cnt');

    collapse_link.on('click', function (e) {
        e.preventDefault();
        if ($(this).closest(collapse_status).hasClass('.collapse-status__opened')) {
            $(this).closest(collapse_status).find(collapse_cnt).slideToggle(300, function () {
                $(this).closest(collapse_status).removeClass('collapse-status__opened');
            });
        } else {
            $(this).toggleClass('collapse-link__opened').toggleClass('collapse-link__close');
            $(this).closest(collapse_status).addClass('collapse-status__opened').find(collapse_cnt).slideToggle(300, function () {

            });
        }
    });
});
