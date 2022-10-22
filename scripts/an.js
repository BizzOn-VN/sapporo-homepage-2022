'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
 // set owl-carousel width equals to owl-wrapper width
    // function owlWrapperWidth( selector ) {
    //   $(selector).each(function(){
    //     $(this).find('.owl-carousel').outerWidth( $(this).closest( selector ).innerWidth() );
    //   });
    // }

    // // trigger on start and resize
    // owlWrapperWidth( '.owl-wrapper' );
    // $( window ).resize(function() {
    //   owlWrapperWidth( $('.owl-wrapper') );
    // });
$('.spr-slider .owl-carousel').owlCarousel({
    items:1,
    nav:false,
    loop:true,
    dots:true,
    stagePadding:0,
    margin:0,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    autoplayTimeout:3000,
    autoplay:true,
    autoplayHoverPause:true
});

// $('.slider-syncing-3').owlCarousel({
//   loop:true,
//   margin:10,
//   items:1,
//   dots:true,
//   nav:false,
//   URLhashListener:true,
//   // autoplay:true,
//   // animateIn: 'bounceOut',
  
//     autoplayTimeout:6000
// })
// $('.slider-syncing-4').owlCarousel({
//   loop:false,
//   margin:10,
//   nav:true,
//   items:4,
//   dots:false,
//   nav:false,
//   center: false,
//   animateIn: 'zoomIn',
//   URLhashListener:true,
//   autoplay:true,
//   autoplayTimeout:6000
// })

var owlCarousel = $('.owl-carousel').data('owl.carousel');
owlCarousel.remove(1);
$('.slider-syncing-1').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  dots:false,
  nav:false,
  URLhashListener:true,
  autoplay:true,
  animateIn: 'rotateInDownLeft',
  
    autoplayTimeout:6000
})
$('.slider-syncing-2').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  items:1,
  dots:false,
  nav:true,
  center: true,
  animateIn: 'zoomIn',
  URLhashListener:true,
  autoplay:true,
  autoplayTimeout:6000
})
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:11,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

  $('.dropdown')
  .dropdown({
    onChange: function(value, text, $selectedItem) {
      $("#main-play").attr('src',value);
      // $('html,body').animate({
      //       scrollTop: $(".video-star-tv").offset().top
      //   }, 'slow');
      $("#main-play")[0].src += "?autoplay=1";
    setTimeout(function(){ $("#yt").show(); }, 200);
    }
  })

  $(".block-videos .thumb-nail").click(function(){
        $(".block-three-videos .col-md-4").removeClass("active");
        $(this).parent(".col-md-4").addClass("active");
        var data_src=$(this).attr("data-src");
        $("#main-play").attr('src',data_src);

        // $('html,body').animate({
        //     scrollTop: $(".video-star-tv").offset().top
        // }, 'slow');
        $("#main-play")[0].src += "?autoplay=1";
        setTimeout(function(){ $("#yt").show(); }, 200);
        })
