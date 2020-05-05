
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// $(window).load(function(){
//     // $('#overlay').fadeOut();
//     // $(".se-pre-con").fadeOut();
//  });
document.addEventListener('DOMContentLoaded', () => {
    // on load animation
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    timeline
    .from('.blueScreen', 2, {
        width: 2000,
        ease: Power3.easeInOut
    })
    .from('.blueScreen-logo_img', 2, {
        x:120,
        y:150,
        opacity:0.1,
        scale:4,
        ease: Power3.easeInOut
    },'-=2')
    .from('.list', 2, {
        y:-100,
        ease: Power3.easeInOut
    },'-=2')
    .from('.side-nav', 2, {
        width:0,
        ease: Power3.easeInOut
    },'-=2')
    .from('.menu', 2, {
        x:100,
        ease: Power3.easeInOut
    },'-=2')
    .from('.blueScreen-text', 2, {
        y:550,
        ease: Power3.easeInOut
    },'-=2')
    .from('.blueScreen-underline', 2, {
        width:0,
        ease: Power3.easeInOut
    },'-=2')
    .from('.logoside-text', 2, {
        y:100,
        ease: Power3.easeInOut
    },'-=2')

    // on scroll animation

    let timeline2 = new TimelineMax();
    timeline2
            .to('.blueScreen', 1, {
                width: 0,
                ease: Power3.easeInOut
            })
            .to('.blueScreen-text', 1, {
                opacity:0,
                ease: Power3.easeInOut
            },'-=1')
            .to('.blueScreen-underline', 1, {
                width:0,
                ease: Power3.easeInOut
            },'-=1')
            .to('.logoside-text', 1, {
                opacity:0,
                ease: Power3.easeInOut
            },'-=1')
            .to('.list', 1, {
                y:-100,
                ease: Power3.easeInOut
            },'-=1')
            .to('.secondview', 1, {
                y:-500,
                ease: Power3.easeInOut
            },'-=1')

            
            let scene2 = new ScrollMagic.Scene({
                triggerElement: '.trigger1',
                // duration: '10%',
                triggerHook: 0,
                offset: '100'
            })
            .setTween(timeline2)
            .setPin('.trigger1')
            .addTo(controller);

    // menu bar button
    
    $(".bar-button").hover(function(){
        if(click==false){
        $(".menu-bars").animate({
            "margin-bottom":"0"
        },300)
        $(".menu").animate({
            "margin-left":"80%"
        },300)
    }
    },
    function(){
        if(click==false){
        $(".menu-bars").animate({
            "margin-bottom":"10px"
        },300);
        $(".menu").animate({
            "margin-left":"75%"
        },300)
    }
    }
    )
    // menu bar button on click
    var click=false;
    $(".bar-button").click(function(){
        if(click==false){
            $(".menu-bars").css({"margin-bottom":"0","background-color":"white"})
            $(".menu-bars").eq(0).css({"transform":"rotate(45deg)"})
            $(".menu-bars").eq(1).css({"transform":"rotate(-45deg)"})
            $(".menu p").text("close")
            $(".menu p").css({"color":"white"})
            $(".side-nav").css({"background-color":"#5551f7"})
            $(".clickmenu").animate({"width":"70%" , "opacity":"1"},700)
            click=true;
        }else{
            $(".menu-bars").css({"margin-bottom":"10px","background-color":"black"})
            $(".menu-bars").eq(0).css({"transform":"rotate(0deg)"})
            $(".menu-bars").eq(1).css({"transform":"rotate(0deg)"})
            $(".menu p").text("menu")
            $(".menu p").css({"color":"black"})
            $(".side-nav").css({"background-color":"#d6d6d6"})
            $(".clickmenu").animate({"width":"0" , "opacity":"0"},1000)   
            click=false; 
        }
    })
    // product 
    $(".products-item").hover(function(){
        $(this).find(".products-img").animate({
            "opacity":"1",
        })
        $(this).find(".products-img").toggleClass('animate');
        $(this).find("a").css({
            "color":"white"
        })
        $(this).find(".rotated-arrow").animate({"width":"30px"},300)
    },function(){
        $(this).find(".products-img").animate({
            "opacity":"0",
        })
        $(this).find("a").css({
            "color":"black"
        })
        $(this).find(".rotated-arrow").animate({"width":"0px"},300)
    })
    // leave a request
    $(".leaverequest").hover(function(){
        $(this).find(".rotated-arrow").animate({"width":"30px"},300)
    },function(){
        $(this).find(".rotated-arrow").animate({"width":"0px"},300)
    })
    // industry links
    $(".industries-item").find("a").hover(function(){
        $(this).parent().find("img").animate({
            "opacity":"1",
        },400)
        $(".industries-number6 p,.industries-text_aboutcompany ,.industries-text p, .industries-text i").css({
            "color":"white"
        })
        $(".industries-text_links a ,.industries-text_links span").css({
            "color":"#d6d6d6"
        })
        $(this).css({"color":"white"})
    },function(){
        $(this).parent().find("img").animate({
            "opacity":"0",
        },400)
        $(".industries-number6 p").css({
            "color":"#5551f7"
        })
        $(".industries-text_links a,.industries-text_aboutcompany ,.industries-text p ,.industries-text_links span ,.industries-text i").css({
            "color":"black"
        })
    })
    // btn style
    $(".btn").hover(function(){
        $(this).find(".btn-underline ").animate({
            "width":"100px",
        },400)
        $(this).next("div").animate({
            "width":"100px",
        },400)
    },function(){
        $(".btn-underline ,.btn-arrowline").animate({
            "width":"0",
        },400)
    })
});


    function changeView(scroll_pos) {
        console.log(last_known_scroll_position)
        if(last_known_scroll_position<2368){
        $(".mainimg").css({"top": last_known_scroll_position});
        }
        //contact us section 
        if(last_known_scroll_position>6400){
            $(".contact").css({"background-color":"#5551f7","color":"white"})
            $(".desc").css({"border-bottom":"1px solid white"})
            $(".bottom-text").css({"border-bottom":"1px solid white"})
            $(".contact-wrapper").css({"border-bottom":"1px solid white"})
        }else {
            $(".contact").css({"background-color":"white","color":"black"})
            $(".desc").css({"border-bottom":"1px solid black"})
            $(".bottom-text").css({"border-bottom":"1px solid black"})
            $(".contact-wrapper").css({"border-bottom":"1px solid black"})
        }
    }
    window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
        window.requestAnimationFrame(function() {
            changeView(last_known_scroll_position);
        })
    });
