$('.PNM .arrow-style.arrow-left').hide();
      $(function() {
        $('.PNM .arrow-style.arrow-right .arrow-svg').click(function(e) {
          e.preventDefault();
          $('.PNM .link-list ul').animate({
            scrollLeft: "+=150px"
          }, 500);
        });
        $('.PNM .arrow-style.arrow-left .arrow-svg').click(function(e) {
          e.preventDefault();
          $('.PNM .link-list ul').animate({
            scrollLeft: "-=150px"
          }, 500);
        });
        $(".PNM .link-list ul").scroll(function() {
          var $this = $(this),
            scrollLeft = $this.scrollLeft(),
            scrollWidth = $this.prop('scrollWidth'),
            clientWidth = $this.prop('clientWidth');
          // Hide left arrow if at the beginning
          if (scrollLeft === 0) {
            $(".PNM .arrow-style.arrow-left").hide();
          } else {
            $(".PNM .arrow-style.arrow-left").show();
          }
          // Hide right arrow if at the end
          if (scrollLeft + clientWidth >= scrollWidth) {
            $(".PNM .arrow-style.arrow-right").hide();
          } else {
            $(".PNM .arrow-style.arrow-right").show();
          }
        });
      });
      // header search
      $("header#paris-2024 .top-nav .search-bar .search-icon").click(function (e) { 
        e.preventDefault();
        $(this).hide();
        $(this).siblings(".search-bar-inner").addClass("show-form");
        // $(this).siblings(".search-bar-inner").show(500);
      });
      $("header#paris-2024 .top-nav .search-bar .close-search-form").click(function (e) { 
        e.preventDefault();
        $(this).removeClass("show-button");
        // $(this).parents(".search-bar").find(".search-bar-inner").hide(500);
        setTimeout(() => {
          $(this).parents(".search-bar").find(".search-icon").show();
        }, 500);
        $(this).parents(".search-bar").find(".search-bar-inner").removeClass("show-form");
      });
      $("header#paris-2024 .top-nav .search-bar .search-bar-inner .search-form .form-search").click(function(){
        $("header#paris-2024 .top-nav .search-bar .close-search-form").addClass("show-button");
      });
      // header menu mobile
      $("header#paris-2024 .top-nav .menu-toggle-icon").click(function (e) { 
        e.preventDefault();
        $(this).siblings(".nav-list").slideToggle();
        $(this).find(".menu-close, .menu-open").toggle();
      });