
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function formFunction() {
	document.getElementById("form").style.background = "#f2f2f2";
}
function blurFunction() {
	document.getElementById("form").style.background = "white";
}

function openSlidemenu (){
	document.getElementById('side-menu').style.width = '100%';
		
}

function closeSlidemenu (){
	document.getElementById('side-menu').style.width = '0px';
		
}

$(document).ready(function () {
            $("#slideshow div:gt(0)").hide();

            var index;
            index = 0;
            var totalslides;
            totalslides = 4;

            var nextSlide = function () {
                $('#slideshow div').eq(index).fadeOut(1000);
                $('#nav' + index).toggleClass('navselected');
                index++;
                if (index > totalslides - 1) { index = 0; }
                $('#slideshow div').eq(index).fadeIn(1000);
                $('#nav' + index).toggleClass('navselected');
            }
            var nextSlideTimer = setInterval(nextSlide, 7000);

            function nav(selectedSlide) {
                clearInterval(nextSlideTimer);

                $('#slideshow div').eq(index).fadeOut(1000);
                $('#nav' + index).toggleClass('navselected');
                index = selectedSlide;
                $('#slideshow div').eq(index).fadeIn(1000);
                $('#nav' + index).toggleClass('navselected');

                nextSlideTimer = setInterval(nextSlide, 4000);
            }

            $("#nav0").click(function () { nav(0); });
            $("#nav1").click(function () { nav(1); });
            $("#nav2").click(function () { nav(2); });
          
        });
$(document).ready(function () {
            $("#slideshow2 div:gt(0)").hide();

            var index;
            index = 0;
            var totalslides;
            totalslides = 4;

            var nextSlide = function () {
                $('#slideshow2 div').eq(index).fadeOut(1000);
                $('#nav' + index).toggleClass('navselected');
                index++;
                if (index > totalslides - 1) { index = 0; }
                $('#slideshow2 div').eq(index).fadeIn(1000);
                $('#nav' + index).toggleClass('navselected');
            }
            var nextSlideTimer = setInterval(nextSlide, 7000);

            function nav(selectedSlide) {
                clearInterval(nextSlideTimer);

                $('#slideshow2 div').eq(index).fadeOut(1000);
                $('#nav' + index).toggleClass('navselected');
                index = selectedSlide;
                $('#slideshow2 div').eq(index).fadeIn(1000);
                $('#nav' + index).toggleClass('navselected');

                nextSlideTimer = setInterval(nextSlide, 4000);
            }

            $("#nav0").click(function () { nav(0); });
            $("#nav1").click(function () { nav(1); });
            $("#nav2").click(function () { nav(2); });
          
        });
$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});
