$(function(){

    $('.filter-btn').on('click', function(e){
        e.preventDefault();
        $('.shop-filter').toggleClass('shop-filter__active');
    });

    $('.menu__btn').on('click', function(e){
        e.preventDefault();
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.pagination-blog__link').on('click', function(e){
        e.preventDefault();
        $('.pagination-blog__link').removeClass('pagination-blog__link--active');
        $(this).addClass('pagination-blog__link--active');
    });

    $('.product-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });


    $('.product-slider__thumb').slick({
        asNavFor: '.product-slider__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });

    $('.product-slider__big').slick({
        asNavFor: '.product-slider__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".star").rateYo({
        starWidth: '14px',
        normalFill: '#ccccce',
        ratedFill: '#ffcc00',
        readOnly: true
      });

});

$('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });