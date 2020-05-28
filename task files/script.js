
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
    
    // image sequence
    // var images = [
    //     "../images/0.jpg",
    //     "../images/1.jpg",
    //     "../images/2.jpg",
    //     "../images/3.jpg",
    //     "../images/4.jpg",
    //     "../images/5.jpg",
    //     "../images/6.jpg",
    //     "../images/7.jpg",
    //     "../images/8.jpg",
    //     "../images/9.jpg",
    //     "../images/10.jpg",
        
    // ];
    
//     var obj = {curImg: 0};

//     var tween = TweenMax.to(obj, 0.5,
// 		{
// 			curImg: images.length - 1,	// animate propery curImg to number of images
// 			roundProps: "curImg",				// only integers so it can be used as an array index
// 			// repeat: 3,									// repeat 3 times
// 			immediateRender: true,			// load first image automatically
// 			ease: Linear.easeNone,			// show every image the same ammount of time
// 			onUpdate: function () {
//                 $(".imgsequence").attr("src", images[obj.curImg]); // set the image source
// 			}
// 		}
// 	);
        

//     // build scene
// 	var scene3= new ScrollMagic.Scene({triggerElement: ".triggersequensc", duration: 100})
//     .setTween(tween)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
    

});


    function changeView(scroll_pos) {
        var images = [
            "../images/0.jpg",
            "../industry.jpg",
            "../images/1.jpg",
            "../images/2.jpg",
            "../images/3.jpg",
            "../images/4.jpg",
            "../images/5.jpg",
            "../images/6.jpg",
            "../images/7.jpg",
            "../images/8.jpg",
            "../images/9.jpg",
            // "../images/10.jpg",
            "../images/11.jpg",
            "../images/12.jpg",
            "../images/13.jpg",
            "../images/14.jpg",
            "../images/15.jpg",
            "../images/16.jpg",
            "../images/17.jpg",
            "../images/18.jpg",
            "../images/19.jpg",
            "../images/20.jpg",
            "../images/21.jpg",
            "../images/22.jpg",
            "../images/23.jpg",
            "../images/24.jpg",
            "../images/25.jpg",
            "../images/26.jpg",
            "../images/27.jpg",
            "../images/28.jpg",
            "../images/29.jpg",
            "../images/30.jpg",
            "../images/31.jpg",
            "../images/32.jpg",
            "../images/33.jpg",
            "../images/34.jpg",
            "../images/35.jpg",
            "../images/36.jpg",
            "../images/37.jpg",
            "../images/38.jpg",
            "../images/39.jpg",
            "../images/40.jpg",
            "../images/51.jpg",
            "../images/52.jpg",
            "../images/53.jpg",
            "../images/54.jpg",
            "../images/55.jpg",
            "../images/56.jpg",
            "../images/57.jpg",
            "../images/58.jpg",
            "../images/59.jpg",
            "../images/60.jpg",
            "../images/61.jpg",
            "../images/62.jpg",
            "../images/63.jpg",
            "../images/64.jpg",
            "../images/65.jpg",
            "../images/66.jpg",
            "../images/67.jpg",
            "../images/68.jpg",
            "../images/69.jpg",
            // "../images/70.jpg",
            // "../images/71.jpg",
            // "../images/72.jpg",
            // "../images/73.jpg",
            // "../images/74.jpg",
            // "../images/75.jpg",
            // "../images/76.jpg",
            // "../images/77.jpg",
            // "../images/78.jpg",
            // "../images/79.jpg",
            // "../images/80.jpg",
            // "../images/81.jpg",
            // "../images/82.jpg",
            // "../images/83.jpg",
            // "../images/84.jpg",
            // "../images/85.jpg",
            // "../images/86.jpg",
            // "../images/87.jpg",
            // "../images/88.jpg",
            // "../images/89.jpg",
            // "../images/90.jpg",
            // "../images/91.jpg",
            // "../images/92.jpg",
            // "../images/93.jpg",
            // "../images/94.jpg",
            // "../images/95.jpg",
            // "../images/96.jpg",
            // "../images/97.jpg",
            // "../images/98.jpg",
            // "../images/99.jpg",
            // "../images/100.jpg",
            "../images/101.jpg",
            "../images/102.jpg",
            "../images/103.jpg",
            "../images/104.jpg",
            "../images/105.jpg",
            "../images/106.jpg",
            "../images/107.jpg",
            "../images/108.jpg",
            "../images/109.jpg",
            "../images/110.jpg",
            "../images/111.jpg",
            "../images/112.jpg",
            "../images/113.jpg",
            "../images/114.jpg",
            "../images/115.jpg",
            "../images/116.jpg",
            "../images/117.jpg",
            "../images/118.jpg",
            "../images/119.jpg",
            "../images/120.jpg",
            "../images/121.jpg",
            "../images/122.jpg",
            "../images/123.jpg",
            "../images/124.jpg",
            "../images/125.jpg",
            "../images/126.jpg",
            "../images/127.jpg",
            "../images/128.jpg",
            "../images/129.jpg",
            "../images/130.jpg",
            "../images/131.jpg",
            "../images/132.jpg",
            "../images/133.jpg",
            "../images/134.jpg",
            "../images/135.jpg",
            "../images/136.jpg",
            "../images/137.jpg",
            "../images/138.jpg",
            "../images/139.jpg",
            "../images/140.jpg",
            "../images/151.jpg",
            "../images/152.jpg",
            "../images/153.jpg",
            "../images/154.jpg",
            "../images/155.jpg",
            "../images/156.jpg",
            "../images/157.jpg",
            "../images/158.jpg",
            "../images/159.jpg",
            "../images/160.jpg",
            "../images/161.jpg",
            "../images/162.jpg",
            "../images/163.jpg",
            "../images/164.jpg",
            "../images/165.jpg",
            "../images/166.jpg",
            "../images/167.jpg",
            "../images/168.jpg",
            "../images/169.jpg",
            "../images/170.jpg",
            "../images/171.jpg",
            "../images/172.jpg",
            "../images/173.jpg",
            "../images/174.jpg",
            "../images/175.jpg",
            "../images/176.jpg",
            "../images/177.jpg",
            "../images/178.jpg",
            
        ];
        console.log(last_known_scroll_position)
        if(last_known_scroll_position<2800){
        // $(".mainimg").css({"top": last_known_scroll_position});
        $(".mainimg").css({"position": "fixed"},{"top": last_known_scroll_position})
        // ========================================
        // image sequence
        var index=Math.floor(last_known_scroll_position/13)
        console.log("index"+index)
        $(".imgsequence").attr("src",images[index])
        // =======================================
        }else{
        $(".mainimg").css({"position": "absolute"},{"top": "2433px"});

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
