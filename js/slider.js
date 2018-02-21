window.onload = function() {
    var featuresOwl = $('#carousel-features')
    featuresOwl.owlCarousel({
      loop: true,
      margin: 10,
      items: 1
    });
    $('#features-left').click(function () {
      featuresOwl.trigger('prev.owl.carousel');
    });
    $('#features-right').click(function () {
      featuresOwl.trigger('next.owl.carousel');
    });
    
    var businessOwl = $('#carousel-business')
    businessOwl.owlCarousel({
      loop: true,
      margin: 10,
      items: 1
    });
    $('#business-left').click(function () {
      businessOwl.trigger('prev.owl.carousel');
    });
    $('#business-right').click(function () {
      businessOwl.trigger('next.owl.carousel');
    });
    businessOwl.on('changed.owl.carousel', function (property) {
      var current = property.item.index - 2;
      if (current === 6) current = 1;
      if (current === 0) current = 5;
      console.log(current);
      $('.carousel-indicators li').removeClass('active');
      $('.carousel-indicators div:nth-child(' + current + ') li').addClass('active');
    });
    $("#business1").click(function () {
      businessOwl.trigger('to.owl.carousel', [0, 500]);
    })
    $("#business2").click(function () {
      businessOwl.trigger('to.owl.carousel', [1, 500]);
    })
    $("#business3").click(function () {
      businessOwl.trigger('to.owl.carousel', [2, 500]);
    })
    $("#business4").click(function () {
      businessOwl.trigger('to.owl.carousel', [3, 500]);
    })
    $("#business5").click(function () {
      businessOwl.trigger('to.owl.carousel', [4, 500]);
    })
    
    var reviewOwl = $('#carousel-review')
    reviewOwl.owlCarousel({
      loop: true,
      margin: 10,
      items: 1
    });
    $('#review-left').click(function () {
      reviewOwl.trigger('prev.owl.carousel');
    });
    $('#review-right').click(function () {
      reviewOwl.trigger('next.owl.carousel');
    });
  }