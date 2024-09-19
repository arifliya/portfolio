$('.carousel-cell').click(function(){
	$('.modal').addClass('show');
	$('.modal-content').addClass('show');
	// $('.style-with-image').attr('src','');

	// if ($(window).width() < 768) {
	//    $('body').addClass('scroll-lock');
	// }
	$('.sizes-container .sizes').prop('checked', false);
});

$('#close').click(function() {
	$('.modal').removeClass('show');
	$('.modal-content').removeClass('show');
	$('.modal-content-size').removeClass('show');
	// $('body').removeClass('scroll-lock');
});

$('#close2').click(function() {
	$('#close').click();
});


$('.add-to-basket-main').click(function() {
	$('.modal').removeClass('show');
	$('.modal-content').removeClass('show');
	$('.modal-content-size').removeClass('show');
	$('.modal-content-added').addClass('show');
	setTimeout(function() { $('.modal-content-added').removeClass('show'); }, 3000);
});

$('#scrollUp').click(function(){
	var y = $(window).scrollTop();
 	$('html, body').animate({ scrollTop: y + 750 })
});

$('#scrollDown').click(function(){
	var y = $(window).scrollTop();
 	$('html, body').animate({ scrollTop: y - 750 })
});




$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest('.modal-content,.modal-content-size,.carousel-cell').length) {
    // $('body').find(".modal").removeClass('show');
    // $('body').find('.modal-content').removeClass('show');
    // $('body').find('.modal-content-size').removeClass('show');
    $('#close').click();
  }
});

$('.add-to-basket').click(function(){
	$('.modal-content-size').addClass('show');
});

// $('.var-images.button').click(function(e){
// 	e.preventDefault();
// });

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// $('#add1').click(function(){
// 	if ($('#1').isInViewport()) {
// 		alert('hello no1')
// 	$('.size-image').attr('src','https://arifliya.com/images-for-spreads/sp1/116674.jpg');
// 	}
// });

// $('#add1').click(function(){
// 	if ($('#2').isInViewport()) {
// 		alert('hello no2')
// 	$('.size-image').attr('src','https://arifliya.com/images-for-spreads/sp1/976313.jpg');
// 	}
// });


$('#1').click(function(){
	$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/116674.jpg');
	$('.style-title1').text('Brown swede Boots');

	$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/212755.jpg');
	$('.style-title2').text('Bottle Green puffer jacket');

	$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/222819.jpg');
	$('.style-title3').text('Black Puffer Jacket');

	$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/248143.jpg');
	$('.style-title4').text('White Sweater');

	$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/276744.jpg');
	$('.style-title5').text('Leather Jeans');

	$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/667439.jpg');
	$('.style-title6').text('Skinny Black Jeans');

	$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/856202.jpg');
	$('.style-title7').text('Blue Zip Jumper');

	$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/976313.jpg');
	$('.style-title8').text('Black Furry Collar Jacket');


	// $('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/86.jpg');
});


if ($(window).width() < 768) {
	var distance = $('#1').offset().top - 100;
    $window = $(window);
} else {
	var distance = $('#1').offset().top - 400;
    $window = $(window);
}
	   
// var distance = $('#1').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/116674.jpg');
	$('.style-title1').text('Brown swede Boots');

	$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/212755.jpg');
	$('.style-title2').text('Bottle Green puffer jacket');

	$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/222819.jpg');
	$('.style-title3').text('Black Puffer Jacket');

	$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/248143.jpg');
	$('.style-title4').text('White Sweater');

	$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/276744.jpg');
	$('.style-title5').text('Leather Jeans');

	$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/667439.jpg');
	$('.style-title6').text('Skinny Black Jeans');

	$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/856202.jpg');
	$('.style-title7').text('Blue Zip Jumper');

	$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp1/976313.jpg');
	$('.style-title8').text('Black Furry Collar Jacket');
    }
});




$('#2').click(function(){
		

		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/140664.jpg');
		$('.style-title1').text('Beige Purple Stripe Jumper');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/206980.jpg');
		$('.style-title2').text('Skinny Light Jeans');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/219092.jpg');
		$('.style-title3').text('Pink Peach Cardigan');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/247782.jpg');
		$('.style-title4').text('Blue Slimfit Jeans');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/274752.jpg');
		$('.style-title5').text('Lavendar Top');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/796467.jpg');
		$('.style-title6').text('Heart Necklace');

		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/840458.jpg');
		$('.style-title7').text('White Trainers');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/842549.jpg');
		$('.style-title8').text('Turquois jumper');
});



if ($(window).width() < 768) {
	var distance2 = $('#2').offset().top - 100;
    $window = $(window);
} else {
	var distance2 = $('#2').offset().top - 400;
    $window = $(window);
}

// var distance2 = $('#2').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance2 ) {

		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/140664.jpg');
		$('.style-title1').text('Beige Purple Stripe Jumper');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/206980.jpg');
		$('.style-title2').text('Skinny Light Jeans');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/219092.jpg');
		$('.style-title3').text('Pink Peach Cardigan');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/247782.jpg');
		$('.style-title4').text('Blue Slimfit Jeans');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/274752.jpg');
		$('.style-title5').text('Lavendar Top');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/796467.jpg');
		$('.style-title6').text('Heart Necklace');

		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/840458.jpg');
		$('.style-title7').text('White Trainers');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp2/842549.jpg');
		$('.style-title8').text('Turquois jumper');
		
    }
});





$('#3').click(function(){

		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/260330.jpg');
		$('.style-title1').text('White Jacket');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/442894.jpg');
		$('.style-title2').text('Flare Jeans');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/457015.jpg');
		$('.style-title3').text('Dark Blue Skinny Jeans');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/479996.jpg');
		$('.style-title4').text('Lavendar Top');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/489295.jpg');
		$('.style-title5').text('Teal V Neck Top');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/660285.jpg');
		$('.style-title6').text('Blue Stripe Shirt');
		
		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/688088.jpg');
		$('.style-title7').text('Pink Stripe Shirt');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/776184.jpg');
		$('.style-title8').text('Star Trainers');
});


if ($(window).width() < 768) {
	var distance3 = $('#3').offset().top - 100;
    $window = $(window);
} else {
	var distance3 = $('#3').offset().top - 400;
    $window = $(window);
}

// var distance3 = $('#3').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance3 ) {
       
    	$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/260330.jpg');
		$('.style-title1').text('White Jacket');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/442894.jpg');
		$('.style-title2').text('Flare Jeans');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/457015.jpg');
		$('.style-title3').text('Dark Blue Skinny Jeans');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/479996.jpg');
		$('.style-title4').text('Lavendar Top');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/489295.jpg');
		$('.style-title5').text('Teal V Neck Top');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/660285.jpg');
		$('.style-title6').text('Blue Stripe Shirt');
		
		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/688088.jpg');
		$('.style-title7').text('Pink Stripe Shirt');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp3/776184.jpg');
		$('.style-title8').text('Star Trainers');
		
    }
});




$('#4').click(function(){

		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/210618.jpg');
		$('.style-title1').text('Black Bag');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/234260.jpg');
		$('.style-title2').text('Stripe Top');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/259691.jpg');
		$('.style-title3').text('Rainbow Wolly Hat');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/267484.jpg');
		$('.style-title4').text('Raindow Hoodie');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/280510.jpg');
		$('.style-title5').text('Trainers With Stripes');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/334739.jpg');
		$('.style-title6').text('Skinny Dark Blue Jeans');
		
		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/641714.jpg');
		$('.style-title7').text('Black Ankle Shoes');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/871976.jpg');
		$('.style-title8').text('Purple Aviator Sunglasses');
});


if ($(window).width() < 768) {
	var distance4 = $('#4').offset().top - 100;
    $window = $(window);
} else {
	var distance4 = $('#4').offset().top - 400;
    $window = $(window);
}

// var distance4 = $('#4').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance4 ) {
        
		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/210618.jpg');
		$('.style-title1').text('Black Bag');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/234260.jpg');
		$('.style-title2').text('Stripe Top');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/259691.jpg');
		$('.style-title3').text('Rainbow Wolly Hat');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/267484.jpg');
		$('.style-title4').text('Raindow Hoodie');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/280510.jpg');
		$('.style-title5').text('Trainers With Stripes');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/334739.jpg');
		$('.style-title6').text('Skinny Dark Blue Jeans');
		
		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/641714.jpg');
		$('.style-title7').text('Black Ankle Shoes');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp4/871976.jpg');
		$('.style-title8').text('Purple Aviator Sunglasses');
		
    }
});





$('#5').click(function(){
		
		$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/265367.jpg');
		$('.style-title1').text('Blue Jeans');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/280510.jpg');
		$('.style-title2').text('White Trainers');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/288856.jpg');
		$('.style-title3').text('Brown Converse Trainers');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/641714.jpg');
		$('.style-title4').text('Black Trainers');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/815566.jpg');
		$('.style-title5').text('Brown Tiger T-Shirt');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/863350.jpg');
		$('.style-title6').text('Blue T-Shirt');
		
		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/867017.jpg');
		$('.style-title7').text('Grey Printed T-Shirt');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/896296.jpg');
		$('.style-title8').text('Star T-Shirt');
});

if ($(window).width() < 768) {
	var distance5 = $('#5').offset().top - 100;
    $window = $(window);
} else {
	var distance5 = $('#5').offset().top - 400;
    $window = $(window);
}

// var distance5 = $('#5').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance5 ) {
       
    	$('.style-image1 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/265367.jpg');
		$('.style-title1').text('Blue Jeans');

		$('.style-image2 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/280510.jpg');
		$('.style-title2').text('White Trainers');

		$('.style-image3 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/288856.jpg');
		$('.style-title3').text('Brown Converse Trainers');

		$('.style-image4 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/641714.jpg');
		$('.style-title4').text('Black Trainers');

		$('.style-image5 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/815566.jpg');
		$('.style-title5').text('Brown Tiger T-Shirt');

		$('.style-image6 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/863350.jpg');
		$('.style-title6').text('Blue T-Shirt');
		
		$('.style-image7 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/867017.jpg');
		$('.style-title7').text('Grey Printed T-Shirt');

		$('.style-image8 .style-with-image').attr('src','https://arifliya.com/images-for-spreads/sp5/896296.jpg');
		$('.style-title8').text('Star T-Shirt'); 

		
    }
});