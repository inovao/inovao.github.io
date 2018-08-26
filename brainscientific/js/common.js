$(document).ready(function () {
    // Отправка формы
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "email.php", //Change
        data: th.serialize()
      }).done(function() {
        $('form button.sectOne__openWin').text('Спасибо, заявка принята').css('marginTop', '0');
        $('form button.sectOne__openWin').prop("disabled", true);
        $('form input, .title_sect, form br').css('display', 'none');
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });


    // Закрыть окна
    $('.bg_body, .close_win').click(function () {
        $('#pop_up_3, #pop_up_1_2, #call_me, #pop_up_thanks, #pop_up_3, .bg_body').fadeOut();
    });
    // открыть/закрыть главное меню
    $('.buttOpenMenu').click(function () {
        $('.header__ContMenu, .bg_body').slideDown();
    });
    $('.close_win').click(function () {
        $('.header__ContMenu, .bg_body').fadeOut();
    });




    $('.slider_paper').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

 



     // закрыть блок при клике вне его поля
     jQuery(document).on('click', function(e) {
      if (!jQuery(e.target).closest("#menu-right-menu").length) {
        jQuery('#menu-right-menu ul').slideUp();
        jQuery('#menu-right-menu i.active_i').removeClass("active_i");
      }
      e.stopPropagation();
    });


     // выносим главное меню с плашки
    jQuery(function() {
        var first = jQuery(".mobile_menu");
        var second = jQuery(".header__ContMenu");
        jQuery(window).resize(function() {
            var i = jQuery(".mobile_menu, .header__ContMenu").index(first);
            if (jQuery(window).width() <= "992" && !i) {
                var a = jQuery("<abracadabra/>");
                a.insertAfter(first);
                first.insertAfter(second);
                second.insertAfter(a);
                a.remove()
            } else if (jQuery(window).width() > "992" && i) {
                var a = jQuery("<abracadabra/>");
                a.insertAfter(first);
                first.insertAfter(second);
                second.insertAfter(a);
                a.remove()
            }
        }).resize()
    });

    jQuery('.tab_item').hide();
    $('.tab_item:first').show();
    $('.item_sect_13:first .butt_js_click:first').addClass('active');

    $('.butt_js_click').hover(function (event) {
       $('.butt_js_click').removeClass('active');
       $(this).addClass('active');
       $('.tab_item').hide();
       event.preventDefault();

       var selectTab = $(this).find('a').attr('href')
       $(selectTab).show();
    });
    
    $('.butt_js_click a').on('click',
      function(){
        var scroll_el = $(this).attr('href');
          if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 500);
          }
          return false;
      }
    ); 
    

    
    // скрипт для меню
    $(document).ready(function(){
    	var menu = $('.header__ContMenu');
    	var wid = $(window).width();

    	$(window).resize(function(){
    		if(wid > 320 && menu.is(':hidden')) {
    		    menu.removeAttr('style');
    		}
    	});
    });


});
