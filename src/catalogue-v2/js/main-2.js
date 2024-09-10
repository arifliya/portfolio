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





$('#1').click(function(){
	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/592057.jpg');
	$('.style-title1').text('Rainbow Stripe Top');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/523859.jpg');
	$('.style-title2').text('Skinny Jeans');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/542195.jpg');
	$('.style-title3').text('Black Stud Point Loafers');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G67/shotview-315x472/86/560-046s2.jpg');
	$('.style-title4').text('Multi Rainbow Stripe Sweater');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/164506.jpg');
	$('.style-title5').text('Denim Jacket');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/530224.jpg');
	$('.style-title6').text('Skinny Jeans');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/86.jpg');
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
        $('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/592057.jpg');
		$('.style-title1').text('Rainbow Stripe Top');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/523859.jpg');
		$('.style-title2').text('Skinny Jeans');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/542195.jpg');
		$('.style-title3').text('Black Stud Point Loafers');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G67/shotview-315x472/86/560-046s2.jpg');
		$('.style-title4').text('Multi Rainbow Stripe Sweater');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/164506.jpg');
		$('.style-title5').text('Denim Jacket');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/530224.jpg');
		$('.style-title6').text('Skinny Jeans');

		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/86.jpg');
		
    }
});




$('#2').click(function(){
		$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G67/shotview-315x472/92/518-911s.jpg');
		$('.style-title1').text('Graphic Sweat');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/186243.jpg');
		$('.style-title2').text('Casual Shirt');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/523859.jpg');
		$('.style-title3').text('Skinny Jeans');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/584568.jpg');
		$('.style-title4').text('Adidas Originals Campus');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/568637.jpg');
		$('.style-title5').text('Suede Bucket Bag');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/732672.jpg');
		$('.style-title6').text('Hoop Earrings Three Pack');


		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/92.jpg');
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

    	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G67/shotview-315x472/92/518-911s.jpg');
		$('.style-title1').text('Graphic Sweat');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/186243.jpg');
		$('.style-title2').text('Casual Shirt');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/523859.jpg');
		$('.style-title3').text('Skinny Jeans');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/584568.jpg');
		$('.style-title4').text('Adidas Originals Campus');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/568637.jpg');
		$('.style-title5').text('Suede Bucket Bag');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/732672.jpg');
		$('.style-title6').text('Hoop Earrings Three Pack');
        
		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/92.jpg');
		
    }
});





$('#3').click(function(){

		$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/516188.jpg');
		$('.style-title1').text('Romantic Blouse');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/158612.jpg');
		$('.style-title2').text('Slim Jeans');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/383251.jpg');
		$('.style-title3').text('Grecian Toe Post');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/540990.jpg');
		$('.style-title4').text('Neon Clutch Bag');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/559060.jpg');
		$('.style-title5').text('Pink Neon Belt');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/168471.jpg');
		$('.style-title6').text('Boot Cut Jeans');
		


		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/98.jpg');
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
       
    	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/516188.jpg');
		$('.style-title1').text('Romantic Blouse');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/158612.jpg');
		$('.style-title2').text('Slim Jeans');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/383251.jpg');
		$('.style-title3').text('Grecian Toe Post');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/540990.jpg');
		$('.style-title4').text('Neon Clutch Bag');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/559060.jpg');
		$('.style-title5').text('Pink Neon Belt');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/168471.jpg');
		$('.style-title6').text('Boot Cut Jeans');
		


		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/98.jpg');
    	
		
    }
});




$('#4').click(function(){

	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/770608.jpg');
	$('.style-title1').text('Flex Bi-Stretch Skinny Jeans');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/582214.jpg');
	$('.style-title2').text('Oxford Shirt');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/589103.jpg');
	$('.style-title3').text('Pink Leather Rucksack');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/542195.jpg');
	$('.style-title4').text('Black Stud Point Loafers');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/556706.jpg');
	$('.style-title5').text('Detail Hoop Earrings');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/591731.jpg');
	$('.style-title6').text('Leather Biker Jacket');
	


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/100.jpg');
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
        
    $('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/770608.jpg');
	$('.style-title1').text('Flex Bi-Stretch Skinny Jeans');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/582214.jpg');
	$('.style-title2').text('Oxford Shirt');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/589103.jpg');
	$('.style-title3').text('Pink Leather Rucksack');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/542195.jpg');
	$('.style-title4').text('Black Stud Point Loafers');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/556706.jpg');
	$('.style-title5').text('Detail Hoop Earrings');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/591731.jpg');
	$('.style-title6').text('Leather Biker Jacket');
	


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/100.jpg');

		
    }
});





$('#5').click(function(){
		
		$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/522598.jpg');
		$('.style-title1').text('360° Super Skinny Jeans');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/599994.jpg');
		$('.style-title2').text('Leather Zip Top Clutch Bag');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/178928.jpg');
		$('.style-title3').text('Ruched Sleeve Jacket');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/539228.jpg');
		$('.style-title4').text('360° Super Skinny Jeans');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/595482.jpg');
		$('.style-title5').text('Multi Sequin Boxy Top');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/549030.jpg');
		$('.style-title6').text('Gladiator Stud Sandals');


		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/88.jpg');
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
       
    	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/522598.jpg');
		$('.style-title1').text('360° Super Skinny Jeans');

		$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/599994.jpg');
		$('.style-title2').text('Leather Zip Top Clutch Bag');

		$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/178928.jpg');
		$('.style-title3').text('Ruched Sleeve Jacket');

		$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/539228.jpg');
		$('.style-title4').text('360° Super Skinny Jeans');

		$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/595482.jpg');
		$('.style-title5').text('Multi Sequin Boxy Top');

		$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/549030.jpg');
		$('.style-title6').text('Gladiator Stud Sandals');


		$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/88.jpg');

		
    }
});




$('#6').click(function(){
	
	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/540247.jpg');
	$('.style-title1').text('Denim Leggings');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/575086.jpg');
	$('.style-title2').text('V-Neck Sweater');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/531440.jpg');
	$('.style-title3').text('Leopard Print Scarf');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/590830.jpg');
	$('.style-title4').text('Denim Leggings');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/508233.jpg');
	$('.style-title5').text('V-Neck Sweater');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/567366.jpg');
	$('.style-title6').text('Ankle Strap Sandals');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/90.jpg');
});

if ($(window).width() < 768) {
	var distance6 = $('#6').offset().top - 100;
    $window = $(window);
} else {
	var distance6 = $('#6').offset().top - 400;
    $window = $(window);
}

// var distance6 = $('#6').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance6 ) {
        
    $('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/540247.jpg');
	$('.style-title1').text('Denim Leggings');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/575086.jpg');
	$('.style-title2').text('V-Neck Sweater');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/531440.jpg');
	$('.style-title3').text('Leopard Print Scarf');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/590830.jpg');
	$('.style-title4').text('Denim Leggings');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/508233.jpg');
	$('.style-title5').text('V-Neck Sweater');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/567366.jpg');
	$('.style-title6').text('Ankle Strap Sandals');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/90.jpg');

		
    }
});





$('#7').click(function(){
		
	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/157082.jpg');
	$('.style-title1').text('Jersey Denim Leggings');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/543964.jpg');
	$('.style-title2').text('Bobble Cardigan');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/569497.jpg');
	$('.style-title3').text('Button Long Sleeve Stripe Top');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/158736.jpg');
	$('.style-title4').text('Baseball Lace-Up Trainers');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/502124.jpg');
	$('.style-title5').text('Jersey Denim Leggings');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/506918.jpg');
	$('.style-title6').text('Bobble Cardigan');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/96.jpg');
});

if ($(window).width() < 768) {
	var distance7 = $('#7').offset().top - 100;
    $window = $(window);
} else {
	var distance7 = $('#7').offset().top - 400;
    $window = $(window);
}

// var distance7 = $('#7').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance7 ) {
       
    $('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/157082.jpg');
	$('.style-title1').text('Jersey Denim Leggings');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/543964.jpg');
	$('.style-title2').text('Bobble Cardigan');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/569497.jpg');
	$('.style-title3').text('Button Long Sleeve Stripe Top');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/158736.jpg');
	$('.style-title4').text('Baseball Lace-Up Trainers');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/502124.jpg');
	$('.style-title5').text('Jersey Denim Leggings');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/506918.jpg');
	$('.style-title6').text('Bobble Cardigan');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/96.jpg');

		
    }
});




$('#8').click(function(){
		
	$('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/594762.jpg');
	$('.style-title1').text('Bobble Cardigan');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/536569.jpg');
	$('.style-title2').text('Striped T-Shirt');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/199865.jpg');
	$('.style-title3').text('Jersey Denim Leggings');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/528868.jpg');
	$('.style-title4').text('Top Handle Rucksack');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/137833.jpg');
	$('.style-title5').text('Converse Chuck Taylor All Star Ox');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/550655.jpg');
	$('.style-title6').text('Suede Fringe Duffle Bag');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/2096.jpg');
});

if ($(window).width() < 768) {
	var distance8 = $('#8').offset().top - 100;
    $window = $(window);
} else {
	var distance8 = $('#8').offset().top - 400;
    $window = $(window);
}

// var distance8 = $('#8').offset().top - 400;
//     $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance8 ) {
       
    $('.style-image1 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/594762.jpg');
	$('.style-title1').text('Bobble Cardigan');

	$('.style-image2 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/536569.jpg');
	$('.style-title2').text('Striped T-Shirt');

	$('.style-image3 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/199865.jpg');
	$('.style-title3').text('Jersey Denim Leggings');

	$('.style-image4 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/528868.jpg');
	$('.style-title4').text('Top Handle Rucksack');

	$('.style-image5 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/137833.jpg');
	$('.style-title5').text('Converse Chuck Taylor All Star Ox');

	$('.style-image6 .style-with-image').attr('src','https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/550655.jpg');
	$('.style-title6').text('Suede Fringe Duffle Bag');


	$('.var-images-modal img').attr('src','https://xcdn.next.co.uk/COMMON/Items/default/default/publications/G67/spreads/972/2096.jpg');

		
    }
});



