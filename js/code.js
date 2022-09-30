// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');
	
	// tangkap elemen ybs
	var elementujuan = $(tujuan);
	var titikatas = elementujuan.offset().top - 50;
	
	// pindahkan scroll
	$('html').animate ({
		scrollTop: titikatas
	}, 1500);
	
	e.preventDefault();
});


// parallax
// about
$(window).on('load', function(){
	$('.pkiri').css({
		'opacity': '1',
		'transform': 'translate(0,0)'
	});
	$('.pkanan').css({
		'opacity': '1',
		'transform': 'translate(0,0)'
	});
});

$(window).scroll(function() {
	
	var wScroll = $(this).scrollTop();
	
	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});
	
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});
	
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});
	
	// portfolio
	if ( wScroll > $('.portfolio').offset().top - 250) {
		$('.portfolio .img-thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .img-thumbnail').eq(i).css({
					'opacity' : '1',
					'transform' : 'translate(0,0)'
				});
			}, 300 * (i+1));
		});
	}
	
});