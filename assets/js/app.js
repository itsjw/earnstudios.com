$(document).foundation();

$('body').removeClass('fade-out');

$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});

/*
var $heroCarouselText;

var $heroCarousel = $('.hero-carousel');

var prevIndex;

function animateText(e){
	
	var flkty = Flickity.data( $heroCarousel[0] );
	
	
	var index =  flkty.selectedIndex;
	
	if( prevIndex === index){
		return;
	}
	prevIndex = index;
	
	if(!$heroCarouselText){
		$heroCarouselText = $( ".hero-carousel-text-inside" );
	}
	$heroCarouselText.addClass( "animated fadeInUp" );
	setTimeout(function(){
		 $heroCarouselText.removeClass( "animated fadeInUp" );
	}, 1000);
}

$(function(){
	animateText();
});


$heroCarousel.flickity({
  // options
  contain: true,
  draggable: false,
  setGallerySize: false,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: true,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
}).on( 'select.flickity', animateText );
*/


$('.hero-carousel').flickity({
  // options
  contain: true,
  setGallerySize: false,
  wrapAround: false,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});



wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
wow.init();
  


