
$(function(){




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






  // $(window).scroll(function (event) {
  //     var target_go_1_h = $('.target_go_1').offset().top;
  //     var target_go_2_h = $('.target_go_2').offset().top;
  //     var target_go_3_h = $('.target_go_3').offset().top;
  //     var sc_1 = $(window).scrollTop() + 250;

  //     // console.log(target_go_1_h);
  //     // console.log(sc);
  //     if(sc_1 > target_go_1_h){
  //       $(".thoughts_motion_1 .dot_circle").addClass('motion_dot')
  //       $(".funnel").addClass('motion_funnel')
  //       $(".data_1").addClass('motion_data_1')
  //       $(".data_2").addClass('motion_data_2')
  //       $(".file").addClass('motion_file')
  //     }
  //     else{
  //       $(".thoughts_motion_1 .dot_circle").removeClass('motion_dot')
  //       $(".funnel").removeClass('motion_funnel')
  //       $(".data_1").removeClass('motion_data_1')
  //       $(".data_2").removeClass('motion_data_2')
  //       $(".file").removeClass('motion_file')
  //     }


  //     if(sc_1 > target_go_2_h){
  //       $(".thoughts_motion_2 .dot_circle").addClass('motion_dot')
  //       $(".w1").addClass('motion_w1')
  //       $(".w2").addClass('motion_w2')
  //       $(".w3").addClass('motion_w3')
  //       $(".w4").addClass('motion_w4')
  //       $(".w5").addClass('motion_w5')
  //       $(".data_windows").addClass('motion_show')
  //       $(".magnifier").addClass('motion_magnifier')
  //     }
  //     else{
  //       $(".thoughts_motion_2 .dot_circle").removeClass('motion_dot')
  //       $(".w1").removeClass('motion_w1')
  //       $(".w2").removeClass('motion_w2')
  //       $(".w3").removeClass('motion_w3')
  //       $(".w4").removeClass('motion_w4')
  //       $(".w5").removeClass('motion_w5')
  //       $(".data_windows").removeClass('motion_show')
  //       $(".magnifier").removeClass('motion_magnifier')
  //     }


  //     if(sc_1 > target_go_3_h){
  //       $(".thoughts_motion_3 .dot_circle").addClass('motion_dot')
  //       $(".f1").addClass('motion_f1')
  //       $(".f2").addClass('motion_f2')
  //       $(".f3").addClass('motion_f3')
  //       $(".flash_windows").addClass('motion_show')
  //       $(".godown").addClass('motion_godown')
  //     }
  //     else{
  //       $(".thoughts_motion_3 .dot_circle").removeClass('motion_dot')
  //       $(".f1").removeClass('motion_f1')
  //       $(".f2").removeClass('motion_f2')
  //       $(".f3").removeClass('motion_f3')
  //       $(".flash_windows").removeClass('motion_show')
  //       $(".godown").removeClass('motion_godown')
  //     }
  // });








});








