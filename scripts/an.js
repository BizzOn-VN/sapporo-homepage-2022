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
 $("#slider-to-unlock").slideToUnlock(); 
var SITE_URL = 'http://wowslider.com/';
var owl=$('.spr-slider .gglcs-slider').owlCarousel({
        items:1,
        nav:false,
        loop:true,
        dots:true,
        stagePadding:0,
        margin:0,
        // animateIn: 'zoomIn',
        URLhashListener:false,
        startPosition: 'URLHash',
        autoplayTimeout:3000,
        autoplay:true,
        autoplayHoverPause:true
    });
$(document).ready(function(){
    

    owl.on('changed.owl.carousel', function(event) {
       setTimeout(function(){


         // var activeEls = $('.owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
         var currentItem = $(".gglcs-slider .owl-item.active").find(".item").attr("data-hash");

          window.location.hash = currentItem ;
         // $(".spr-slider .owl-item").removeClass("target");
         var data_hash=$(".gglcs-slider .owl-item.active").find(".item").attr("data-hash");
         $(".spr-url-hash .item").removeClass("active");
         $("." + data_hash).addClass("active");

       },1);
     });

});
$(document).ready(function () {  
  $(".spr-url-hash .sanh-an a")[0].click();
}); 


$('.slider-syncing-1').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  dots:false,
  nav:false,
  URLhashListener:true,
  // autoplay:true,
  animateIn: 'rotateInDownLeft',
  
    autoplayTimeout:4000
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
  // autoplay:true,
  autoplayTimeout:4000
})

  $('.dropdown')
  .dropdown({
    onChange: function(value, text, $selectedItem) {
      $("#main-play").attr('src',value);
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



