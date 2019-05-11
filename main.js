$('.arrowdx').click(function(){
  nextFoto();
});

function nextFoto() {
  var imgActive = $('.wrap img.active');
  var dotsActive = $('.dots i.active');

  imgActive.removeClass('active');
  dotsActive.removeClass('active');

  var nextImg = imgActive.next('img');
  var nextDots = dotsActive.next('i');

  if (nextImg.length != 0) {
    nextImg.addClass('active');
    nextDots.addClass('active');
  }
  else {
    $('.wrap img').first().addClass('active');
    $('.dots i').first().addClass('active');
  }
}

$('.arrowsx').click(function(){
  previousFoto()
});

function previousFoto() {
  var imgActive = $('.wrap img.active');
  imgActive.removeClass('active');
  var dotsActive = $('.dots i.active');
  dotsActive.removeClass('active');

  var prevImg = imgActive.prev('img')

  if (prevImg.length != 0){
    prevImg.addClass('active');
    dotsActive.prev('i').addClass('active');
  }
  else {
    $('.wrap img').last().addClass('active');
    $('.dots i').last().addClass('active');
  }
}
