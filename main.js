const firstname = document.getElementById("firstname")
const middlename = document.getElementById("middleinitial")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")


/* function ValidateEmail(mail)
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
} */

function submit(){

  let text = document.getElementById("email").value;

 let testing = /^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9]+).([a-z]{2,20}).([a-z]{2,20})$/ ;

  if (firstname.value.trim() == "" || firstname.value == null){
    document.getElementById("firstlabel").style.color = 'red';
    //document.getElementById("firstlabel").style.textAlign ="left";
     document.getElementById("firstlabel").innerHTML = 'First Name is required!';
     document.getElementsByName("firstname")[0].value="";
     document.getElementsByName("firstname")[0].placeholder="First Name";
     document.getElementById("firstlabel").style.marginTop = "10px";
     document.getElementById("firstlabel").style.marginBottom = "0px";

  }
  else if (middlename.value.trim() == "" || middlename.value == null){
    document.getElementById("firstlabel").innerHTML = "";
    document.getElementById("middlelabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("middlelabel").innerHTML = 'Middle Initial is required!';
     document.getElementsByName("middleinitial")[0].value="";
     document.getElementsByName("middleinitial")[0].placeholder="Middle Initial";
     document.getElementById("middlelabel").style.marginTop = "15px";
     document.getElementById("middlelabel").style.marginBottom = "0px";
  }
  else if (lastname.value.trim() == "" || lastname.value == null){
    document.getElementById("middlelabel").innerHTML = "";
    document.getElementById("lastlabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("lastlabel").innerHTML = 'Last Name is required!';
     document.getElementsByName("lastname")[0].value="";
     document.getElementsByName("lastname")[0].placeholder="Last Name";
     document.getElementById("lastlabel").style.marginTop = "15px";
     document.getElementById("lastlabel").style.marginBottom = "0px";
  }
  else if (testing.test(text)){           //email.value.trim() == "" || email.value == null //fix this boolean
    document.getElementById("emaillabel").innerHTML = "";
    document.getElementById("container").style.opacity ="0";
    document.getElementById("container").style.visibility ="hidden";
    setTimeout(function () {
      document.getElementById("popup").style.opacity ="100";
      document.getElementById("popup").style.visibility ="visible";
      }, 900);
    document.getElementById("welcome").innerHTML =firstname.value  + " " + middlename.value  + " " + lastname.value + ", Welcome to MCM!";

  }
  else{

    document.getElementById("lastlabel").innerHTML = "";
    document.getElementById("emaillabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("emaillabel").innerHTML = "Invalid Email Address";
     document.getElementsByName("email")[0].value="";
     document.getElementsByName("email")[0].placeholder="Email Address";
     document.getElementById("emaillabel").style.marginTop = "15px";
     document.getElementById("emaillabel").style.marginBottom = "0px";
   }
}

  function okay(){
    document.getElementById("popup").style.opacity ="0";
    document.getElementById("popup").style.visibility ="hidden";
    document.getElementById("container").style.opacity ="100";
    document.getElementById("container").style.visibility ="visible";

    document.getElementsByName("firstname")[0].value="";
    document.getElementsByName("firstname")[0].placeholder="First Name";
    document.getElementsByName("middleinitial")[0].value="";
    document.getElementsByName("middleinitial")[0].placeholder="Middle Initial";
    document.getElementsByName("lastname")[0].value="";
    document.getElementsByName("lastname")[0].placeholder="Last Name";
    document.getElementsByName("email")[0].value="";
    document.getElementsByName("email")[0].placeholder="Email Address";
    document.getElementById("firstlabel").innerHTML = "";
    document.getElementById("middlelabel").innerHTML = "";
    document.getElementById("lastlabel").innerHTML = "";
    document.getElementById("emaillabel").innerHTML = "";
  }

  function reset(){
    document.getElementsByName("firstname")[0].value="";
    document.getElementsByName("firstname")[0].placeholder="First Name";
    document.getElementsByName("middleinitial")[0].value="";
    document.getElementsByName("middleinitial")[0].placeholder="Middle Initial";
    document.getElementsByName("lastname")[0].value="";
    document.getElementsByName("lastname")[0].placeholder="Last Name";
    document.getElementsByName("email")[0].value="";
    document.getElementsByName("email")[0].placeholder="Email Address";
    document.getElementById("firstlabel").innerHTML = "";
    document.getElementById("middlelabel").innerHTML = "";
    document.getElementById("lastlabel").innerHTML = "";
    document.getElementById("emaillabel").innerHTML = "";
  }

!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);
