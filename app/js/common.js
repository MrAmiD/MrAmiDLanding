$(function() {
	// $(document).on("click","#menu-btn", function(event){
	// 	if($(this).hasClass('is-active')){
	// 		$(this).removeClass('is-active');
	// 	}
	// 	else
	// 		$(this).addClass('is-active');
	// });
	$("#my-menu").mmenu({
		"extensions": [
			"fx-panels-zoom",
			"effect-menu-slide",
			"pagedim-black"
		],
		"offCanvas": {
			"position": "right"
		},
		"navbars": [
			{
				"position": "bottom",
				"content": [
					"<a class='fa fa-envelope' href='mailto:mramid.ru@gmail.com'></a>",
					"<a class='fa fa-skype' href='skype:nadymov2008'></a>",
					"<a class='fa fa-paper-plane-o' href='tg://resolve?domain=<Mrramid>'></a>"
				]
			}
		]
	});
	var api = $("#my-menu").data( "mmenu" );

	//   Hook into methods
	api.bind( "open:finish", function() {
		$("#menu-btn").addClass('is-active');
	});
	api.bind( "close:finish", function( $panel ) {
		$("#menu-btn").removeClass('is-active');
	});

});



