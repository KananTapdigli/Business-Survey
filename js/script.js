$(function () {

    $('.preloader-container').fadeOut(1000);
    $('.preloader').fadeOut(700);

    $(document).on("click", "header .bar", function () {
        $(".mobile-menu").css("transform", "translateX(0)");
    })
    $(document).on("click", ".mobile-menu .close", function () {
        $(".mobile-menu").css("transform", "translateX(-100%)");
    })

    function ShowingStBtn() {
        //#region Showing-Nav-On-Scroll
        $(window).scroll(function () {
          var height = $(window).scrollTop();
    
          if (height > 200) {
            $('.st-btn').addClass('st-btn-active');
          } else {
            $('.st-btn').removeClass('st-btn-active');
          }
        });
        //#endregion Showing-Nav-On-Scroll
      }
      ShowingStBtn()
    

    $(window).scroll(function () {
        if ($(window).scrollTop() < 50) {
            $('header').css({
                'box-shadow': 'none',
            })
        } else {
            $('header').css({
                'box-shadow': '0px 2px 14px -2px rgba(0,0,0,0.75)'
            })
        }
    });

    function ScrollTop0() {
        //#region Scroll-Top-Page
        $(document).on('click', '.st-btn', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        })
        //#endregion Scroll-Top-Page
      }
      ScrollTop0()
    
})