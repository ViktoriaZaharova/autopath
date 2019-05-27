$(function () {

    $('body').prepend('<span id="btn-top"></span>');

    $('input[name="phone"]').mask('(999) 999-99-99');

    // активный инпут
    $('.input-group-phone').click(function () {
        $(this).css({
            boxShadow: '0 0 10px rgba(255, 153, 0, 0.5)',
            border: '1px solid #ff9933'
        });
    });

    $('.input-group-phone').hover(function () {
        $(this).css({
            boxShadow: '0 0 10px rgba(255,153,0,.5)'
        });
    });

    $(document).mouseup(function (e) { // событие  увода мыши
        var div = $(".input-group-phone"); // тут указываем ID элемента
        if (!div.is(e.target) // если увели мышку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.css({
                boxShadow: 'none',
                borderColor: '#e4e4e4'
            });
        }
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header_fixed, .auto_select').addClass('fixed');
        } else {
            $('.header_fixed').removeClass('fixed');
            $('.links-btn, .icon-arrow.on').removeClass('on');
            $('.block_phone.in').removeClass('in');
            $('#overlay').fadeOut();
            $('.search-vin_wrapper.fixed, .search-vin_wrapper, .auto_select.fixed, .auto_select').fadeOut();
        }
    });

    $(window).resize(function () {
        $("div, nav").removeClass('in');
        $('.dropdown-menu-cabinet, .auto_select, .search-vin_wrapper, #search-mobile, .drop-menu1').slideUp();
        $('.icon-arrow, .links-btn, #cabinet_menu-mobile').removeClass('on');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".block_phone"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('in'); // скрываем его
            $('.icon-arrow').removeClass('on');
            $('#overlay').fadeOut();
        }
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".dropdown-menu-cabinet, .drop-menu1"); // тут указываем ID элемента
        var btn = $('#mobile-menu .subtitle-menu');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0 && div.siblings('.btn-dropdown, .catalog_menu, #cabinet_menu-mobile').has(e.target).length === 0) { // и не по его дочерним элементам
            div.slideUp(); // скрываем его
            $('.btn-dropdown, #cabinet_menu-mobile').removeClass('in');
        }
    });


    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".search-vin_wrapper, .auto_select"); // тут указываем ID элемента
        var btn = $('.links-btn');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
            btn.removeClass('on');
        }
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $("#search-mobile"); // тут указываем ID элемента
        var btn = $('.btn-mobile.icon-search');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target)
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
            btn.removeClass('in');
        }
    });


    $('.block_phone .btn-phone').on('click', function () {
        $(this).parent().toggleClass('in');
        $(this).find('.icon-arrow').toggleClass('on');
        $('#overlay').fadeToggle();
    });

    $('.user-menu .btn-dropdown').on('click', function () {
        $(this).find('.icon-arrow').toggleClass('on');
        $('.dropdown-menu-cabinet').slideToggle();
    });

    $('.header .vin-search').on('click', function () {
        $('.auto-search').removeClass('on');
        $('.auto_select').fadeOut();
        $(this).toggleClass('on');
        $('.search-vin_wrapper').fadeToggle().removeClass('fixed');
    });

    $('.header .auto-search').on('click', function () {
        $(this).toggleClass('on');
        $('.search-vin_wrapper').fadeOut();
        $('.vin-search').removeClass('on');
        $('.auto_select').fadeToggle().removeClass('fixed');
    });

    $('.header_fixed .vin-search').on('click', function () {
        $('.auto-search').removeClass('on');
        $('.auto_select').fadeOut();
        $(this).toggleClass('on');
        $('.search-vin_wrapper').fadeToggle().addClass('fixed');
    });

    $('.header_fixed .auto-search').on('click', function () {
        $(this).toggleClass('on');
        $('.search-vin_wrapper').fadeOut();
        $('.vin-search').removeClass('on');
        $('.auto_select').fadeToggle().addClass('fixed');
    });

    $('.btn-mobile.icon-search').on('click', function () {
        $(this).toggleClass('in');
        $('#search-mobile').fadeToggle();
    });


    // $('.btn-all').click(function () {
    //     $('.auto_item:nth-child(7) ~ .auto_item').fadeToggle().css('display', 'flex');
    // });


    $('.catalog_menu').click(function () {
        $(this).toggleClass('in').next().slideToggle().css('display', 'flex');
        // $('.catalog_menu .menu-title').not(this).removeClass('in').next().slideUp();
    });


    function mediaClick() {
        var checkWidth = $(window).width();
        if (checkWidth < 768) {
            $('.s__cabinet-content .line').click(function () {
                $(this).toggleClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn, .btn-close').fadeToggle();
                $('.cabinet_vin .s__cabinet-content .line').not(this).removeClass('in').find('.payment, .diagnostic, .comment, .number_declaration, .vin_code, .links-btn, .btn-close').slideToggle();
            });
        }

    }

    mediaClick();
    $(window).resize(mediaClick);


    $('.clarification').click(function () {
        $('.vin-request .cabinet_wrapper .tabs__content .auto_select-top .block_center, .vin-request .cabinet_wrapper .tabs__content .auto_select-top .block_right').fadeToggle();
    });

    $('#cabinet_menu-mobile').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });

    $('.auto_select-wrap .item .btn-select').click(function () {
        $(this).toggleClass('in').next().fadeToggle().css('display', 'flex');
        $('.auto_select-wrap .item .btn-select').not(this).removeClass('in').next().slideUp();
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".auto_select-wrap .item .btn-select"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('in').next().slideUp(); // скрываем его
            // $('.icon-arrow').removeClass('on');
        }
    });

    $('.subtitle-menu').click(function () {
        $(this).siblings('.drop-menu1').fadeToggle();
    });


    $('.form_delivery .input-group .radio').click(function () {
        $(this).toggleClass('in').next().fadeIn();
        $('.form_delivery .input-group .radio').not(this).removeClass('in').next().slideUp();
    });

    $('.link-comment').click(function () {
        $(this).toggleClass('in').next().fadeToggle();
        $('.link-comment').not(this).removeClass('in').next().slideUp();
    });


    $('.btn_stages-1').click(function () {
        $('.two_stages .form_delivery').fadeIn();
        $('.two_stages .subtitle').addClass('in');
        $('.one_stages .one_stages-wrap').fadeOut();
        $('.one_stages .number_stages').addClass('out');
        $('.ordering_total .btn-disable').addClass('btn');
        $('.link-comment').addClass('in');
        $('.comment-delivery').fadeIn();
    });


    $('.btn_stages-2').click(function () {
        $('.three_stages .form_delivery').fadeIn();
        $('.three_stages .subtitle').addClass('in');
        $('.two_stages .form_delivery').fadeOut();
        $('.two_stages .number_stages').addClass('out');
    });

    $('.one_stages .link-edit').click(function () {
        $('.two_stages .form_delivery').fadeOut();
        $('.two_stages .subtitle').removeClass('in');
        $('.one_stages .one_stages-wrap').fadeIn();
        $('.one_stages .number_stages').removeClass('out');
        $('.ordering_total .btn-disable').removeClass('btn');
        $('.link-comment').removeClass('in');
        $('.comment-delivery').fadeOut();
    });

    $('.two_stages .link-edit').click(function () {
        $('.three_stages .form_delivery').fadeOut();
        $('.three_stages .subtitle').removeClass('in');
        $('.two_stages .form_delivery').fadeIn();
        $('.two_stages .number_stages').removeClass('out');
    });


    $('.main_slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1
    });


    $('.catalog ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.catalog').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.vin-request ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.vin-request').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 12500,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));

    $('.cabinet_menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });

    $(".date-input").mask("99.99.9999");

    $('.add_car').click(function () {
        $('.add-auto-select').fadeToggle();
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".add-auto-select"); // тут указываем ID элемента
        var btn = $('.add_car');
        if (!div.is(e.target) // если клик был не по нашему блоку
            && !btn.is(e.target) && btn.has(e.target).length === 0
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(); // скрываем его
        }
    });

    $('.btn-save').click(function () {
        $('.message_result').fadeIn();
    });

    $('.add-line').click(function () {
        $(".details_description .form .add-line").before('<div class="line">\n' +
            '                                <div class="input-group">\n' +
            '                                    <label>Название запчасти:</label>\n' +
            '                                    <input type="text" name="name-part">\n' +
            '                                </div>\n' +
            '\n' +
            '                                <div class="input-group">\n' +
            '                                    <label>Кол-во</label>\n' +
            '                                    <input type="text" name="inp-quantity" value="1">\n' +
            '                                </div>\n' +
            '\n' +
            '                                <button class="btn-close">x</button>\n' +
            '                            </div>');
    });

    $('.details_description .form .line .btn-close').click(function (e) {
        $(this).closest('.details_description .form .line').remove();
    });


    $(".file-upload input[type=file]").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $(".filename").val(filename).after('<button type="button" class="btn-close">x</button>').toggleClass('active');
        $(this).off('change');
    });


    // hidden list > 5
    $('.s_product-group .product_item > ul.product_menu').each(function () {
        if ($(this).find('li').length > 5) {
            $(this).find('li').slice(5).hide();
            $(this).parents('.product_item').append('<button class="box-dots"></button>');
        }
    });

    $('.drop-menu1 .product_item > ul.product_menu').each(function () {
        if ($(this).find('li').length > 3) {
            $(this).find('li').slice(3).hide();
            $(this).parents('.product_item').append('<button class="box-dots"></button>');
        }
    });
    // hidden list > 5

    // show list all

    $('.s_product-group .product_item .box-dots').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('.product_menu li');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            // $this.html('<i class="fa fa-angle-up" aria-hidden="true"></i>');

            content.slideDown();
        } else {
            $this.removeClass('trigger');
            // $this.html('···');

            content.slice(5).slideUp();
        }
    });

    $('.drop-menu1 .product_item .box-dots').on('click', function (e) {
        e.preventDefault();

        var
            $this = $(this),
            content = $(this).parent().find('.product_menu li');


        if (!$this.hasClass('trigger')) {
            $this.addClass('trigger');
            // $this.html('<i class="fa fa-angle-up" aria-hidden="true"></i>');

            content.slideDown();
        } else {
            $this.removeClass('trigger');
            // $this.html('···');

            content.slice(3).slideUp();
        }
    });
    // show list all

    // line close
    $('.s__cabinet-content .line .btn-close').click(function (e) {
        e.preventDefault();
        $(this).parent('.line').fadeOut();
    });

    // mobile menu
    $('.menu_fix').click(function () {
        $('#overlay').fadeIn();
        $('#mobile-menu').animate({
            left: '0px'
        }, 700);
        $('html').css('overflow-y', 'hidden');
    });

    $('#mobile-menu .modal_close, #overlay').click(function () {
        $('#mobile-menu').animate({
            left: '-100%'
        }, 700);
        $('#overlay').fadeOut();
        $('html').css('overflow-y', 'auto');
    });
    // mobile menu end

    // ul height 100%
    $('.product_descriptions-right .box-dots').click(function () {
        $(this).parent().find('.list-accent-dots').toggleClass('on');
    });
    // ul height 100% end

    // accordeon
    $('.panel_heading .block_title').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
    });
    // accordeon end

    // amount
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    // amount


    $('.product_item .product-title').hover(function () {
        $(this).siblings('.image').toggleClass('active');
    });



});


$(document).ready(function () {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
        $('html').css('overflow-y', 'hidden');
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
        $('html').css('overflow-y', 'auto');
    });
});


// $(document).ready(function () {
// 	var open_modal = $('.btn-open_modal');
// 	var close = $('.modal_close, .btn-ok');
// 	var modal = $('#modal_result');
//
// 	open_modal.click(function (event) {
// 		event.preventDefault();
// 		var div = $('#modal_result');
// 		$(div).css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
// 	});
//
// 	close.click(function () {
// 		modal
// 			.animate({
// 				opacity: 0,
// 				top: '45%'
// 			}, 200,
// 				function () {
// 					$(this).css('display', 'none');
// 				}
// 			);
// 	});
// });

$(document).ready(function () {
    var overlay = $('#overlay');
    var open_filter = $('.filter_mnu');
    var close = $('.icon-close, #overlay');
    var filter_menu = $('#filter_menu');

    open_filter.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('left', '0')
                    .animate(200);
            });
        $('html').css('overflow-y', 'hidden');
    });

    close.click(function () {
        filter_menu
            .animate(200,
                function () {
                    $(this).css('left', '-300px');
                    overlay.fadeOut(400);
                }
            );
        $('html').css('overflow-y', 'auto');
    });

    $('#btn-top').mouseover(function () {
        $(this).show();
    });
});


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});


// mobile slide
$('.s_sale .cart-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 2,
                centerPadding: '60px'
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.product_content-left-image .image_max').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    arrows: false
});

$(window).on("load resize", function () {
    var width = $(window).width();


    if (width > 768) {
        $('.s_sale .cart-wrapper').slick('unslick');
    } else {
        $('.s_sale .cart-wrapper').not('.slick-initialized').slick();

    }

    if (width > 510) {
        $('.product_content-left-image .image_max').slick('unslick');
    } else {
        $('.product_content-left-image .image_max').not('.slick-initialized').slick();

    }


});


$("body").on("click", "#btn-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

// setTimeout(function () {
//     $('#btn-top').fadeOut();
// }, 3000);
//
//
// $(window).scroll(function () {
//     $('#btn-top').show();
//     setTimeout(function () {
//         $('#btn-top').hide();
//     }, 3000);
//
//     $('#btn-top').mouseover(function () {
//         $(this).show();
//     });
// });



