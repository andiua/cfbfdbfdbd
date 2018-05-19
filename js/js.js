$(document).ready(function(){
  $('.slider-wrap').slick({
  	  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
   arrows: false,
  });
});
   function initMap() {
        var uluru = {lat: 50.4890686, lng: 30.4752407};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }