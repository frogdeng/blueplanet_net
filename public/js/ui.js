
$(function(){

	$('.deskmenu ul').hover(

		function() {

			if($('.sub_a').length > 0 ){
				$('.submenu').addClass('submenu-open')
			}else{
				$('.submenu').removeClass('submenu-open')
			}

		}, function() {

			$('.submenu').removeClass('submenu-open').delay( 200 )
		}


	);




 //  $(".hamburg").click(function(){
 //     $('.aside').delay(200).toggleClass("hamburg-open");
 //     $(this).delay(200).toggleClass("active");
 //    });




	$('.boxtitle').click(function(){
		$('.display_1').toggleClass( "active" )
  // 		if($(this).hasClass("open")){
		// 	$(this).removeClass("open");
		// 	$(this).parent().find('.display_1').slideUp(200);
		// } else{
		// 	$(this).addClass("open");
		// 	$(this).parent().find('.display_1').slideDown(300);
		// }

	});





  $(".hamburg").click(function(){
     $('.aside').delay(200).toggleClass("hamburg-open");
     $(this).delay(200).toggleClass("cross");
    });


  $(".go_submenu").click(function(){
      $('.m-second_bg').addClass("second-open");
    });

  $(".second-goback").click(function(){
      $('.m-second_bg').removeClass("second-open");

    });


  $(".hamburg").click(function(){
      $('.m-second_bg').removeClass("second-open");
  	});

  $(".switch_btn").click(function(){
      $('.interpretation_data').toggleClass("auto_height");
  	});



  $(".show_aside").click(function(){
      $('.classification_screening').toggleClass("show_aisde_postsearch");
       $('.classification_screening').css('top', 'top_dis + 200' )
  	});

  $(".aside_close").click(function(){
      $('.classification_screening').removeClass("show_aisde_postsearch");
  	});





// working
    $('.our_clients_go_a').click(function(){
        $.scrollTo('.target_1', 300);
    });
    $('.our_clients_go_b').click(function(){
        $.scrollTo('.target_2', 300);
    });

    
   $('.expertise_a').click(function(){
        $.scrollTo('.target_go_1', 300);
    });
    $('.expertise_b').click(function(){
        $.scrollTo('.target_go_2', 300);
    });
   $('.expertise_c').click(function(){
        $.scrollTo('.target_go_3', 300);
    });






    $(".btn_service").click(function(){
      $(this).addClass("active");
      $('.btn_product').removeClass("active");

      $('.contnat_a').addClass("div_hidden");
      $('.contnat_b').removeClass("div_hidden");
      });

    $(".btn_product").click(function(){
      $(this).addClass("active");
      $('.btn_service').removeClass("active");

      $('.contnat_b').addClass("div_hidden");
      $('.contnat_a').removeClass("div_hidden");
      });







});








