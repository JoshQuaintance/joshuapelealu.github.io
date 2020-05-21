/***********************************
 * JavaScript for Personal Website *
 ***********************************/
//AOS Plugin
AOS.init({
	duration : 1200
});

/**********************
 * Checks User Device *
 **********************/

//prettier-ignore
function checkDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        
        $(".WebsiteCSS").attr("href", "device-mobile.css");
        if (/Android/i.test(navigator.userAgent)){
            console.log("User Device - Android") 
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)){
            console.log("User Device - iOS")
        } else if (/Kindle/i.test(navigator.userAgent)) {
            console.log("User Agent Device - Kindle")
        }
        console.log("Using " + $(".WebsiteCSS").attr("href") + " for Website Style");
        return "Android";
        
    } else {
        $(".WebsiteCSS").attr("href", "main.css");
        console.log("User Agent Detected - PC or Mac")
        console.log("Using " + $(".WebsiteCSS").attr("href") + " for Website Style");
        return "PC";
     }
    }

checkDevice();

/****************************
 * Nav Bar Resize on Scroll *
 ****************************/
$(document).on("scroll", () => {
	if ($(document).scrollTop() > 100) {
		$("header").addClass("scrolled-over");
		$("#responsiveBars").addClass("bar-scrolled-over");
		$(".headerContainer").addClass("headerContScrolled");
	} else if ($(document).scrollTop() < 100) {
		$("header").removeClass("scrolled-over");
		$("#responsiveBars").removeClass("bar-scrolled-over");
		$(".headerContainer").removeClass("headerContScrolled");
	}
});

$(document).ready(() => {
	console.log("run");
	$("body").addClass("pageLoaded");

	if ($(document).scrollTop() > 100) {
		$("header").addClass("scrolled-over");
		$("#responsiveBars").addClass("bar-scrolled-over");
		$(".headerContainer").addClass("headerContScrolled");
	} else if ($(document).scrollTop() < 100) {
		$("header").removeClass("scrolled-over");
		$("#responsiveBars").removeClass("bar-scrolled-over");
		$(".headerContainer").removeClass("headerContScrolled");
	}
});

/**
 * Nav Bar trigger when device is small
 */
const openNavBar = () => {
	console.log($(".navbar a").hasClass("resized-nav-toggled"));
	if ($("nav a").hasClass("resized-nav-toggled")) {
		$("nav a").removeClass("resized-nav-toggled");
		$("nav").removeClass("nav-toggled");
	} else {
		$("nav").addClass("nav-toggled");
		$("nav a").addClass("resized-nav-toggled");
	}
};
