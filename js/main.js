(function ($) {
    "use strict";
   
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

    $(document).ready(function () {
        // var $container = $('.zoomIn');
        // var $image = $container.find('.zoom');
        // var $imageW = $image.width();
        // var $imageH = $image.height();
        // // var $containerW = $container.innerWidth($imageW);
        // // var $containerH = $container.innerHeight($imageH);
        // var $imageClone = $image.clone();
        
        // var imageLargeW = $imageLarge.width();
        // var imageLargeH = $imageLarge.height();
        //$image.width($imageW).height($imageH);
        var $image;
        var $imageLarge;
        var $imageW;
        var $imageH;
        var element_id;
        

        $('.zoomIn').on({           

            mouseenter: function (e) {
                
                //console.log($(e.target));
                element_id = $(e.target).attr('id');
                //console.log(element_id);

                $image = $('#'+element_id);
                //console.log($image);
                
                var container_id = element_id+"-big";
                //console.log(container_id);
                //console.log(e.view.$image);
                //console.log($imageLarge);
                //console.log(e.view.$image.prevObject);
                
                var $container = $('#'+container_id);
                //console.log($container);
                // $image = $container.find('.zoom');
                $imageW = $image.width();
                $imageH = $image.height();
                //console.log($imageW, $imageH);
                var $imageClone = $image.clone();
                $imageLarge = $imageClone.width($imageW * 2);
                $imageLarge.hide().prependTo($container).fadeIn(100);
                if(element_id.substring(0,4) == "best")
                {
                    $image.hide();
                }
                    
                //console.log($imageLarge);
            },
            mousemove: function (e) {
                
                var mouseX = e.pageX - $(this).offset().left;
                var mouseY = e.pageY - $(this).offset().top;
                var amountMovedX = Math.round(-mouseX + $imageW / 2);
                var amountMovedY = Math.round(-mouseY + $imageH / 2);
                //var amountMovedX = Math.round(mouseX / $imageW * 100) / 100 * (imageLargeW - $imageW);
                //var amountMovedY = Math.round(mouseY / $imageH * 100) / 100 * (imageLargeH - $imageH);
                if(element_id.substring(0,4) == "hero")
                {
                    $imageLarge.css({
                        'top': amountMovedY + 'px',
                        'left': amountMovedX + 'px',
                        'position': 'absolute',
                        'transform': 'scale(2,2)',
                        'object-fit': 'contain',
                    });
                }
                else {
                    $imageLarge.css({
                        'top': amountMovedY + 'px',
                        'left': amountMovedX + 'px',
                        'position': 'relative',
                        'transform': 'scale(2,2)',
                        'object-fit': 'contain',                        
                        'overflow': 'hidden'
                    });
                }
                
            },
            mouseleave: function () {
                if(element_id.substring(0,4) == "best")
                {
                    $image.show();
                }                
                //console.log($imageLarge[0]);
                $imageLarge.remove();
                $imageLarge = undefined;
                
            }
        });




        });

    

})(jQuery);

