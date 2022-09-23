// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');
	
	// tangkap elemen ybs
	var elementujuan = $(tujuan);
	var titikatas = elementujuan.offset().top - 80;
	
	// pindahkan scroll
	$('html').animate ({
		scrollTop: titikatas
	}, 1500);
	
	e.preventDefault();
});