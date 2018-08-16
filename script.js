$(".tab_item").not(":first").hide();
$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn();

}).eq(0).addClass("active");


$(".portfolioV").find("a").click(function () {
	event.preventDefault();

	var id = $(this).attr("href");
	console.log(id);

	var top = $(id).offset().top;
	console.log(top);


	$('body,html').animate({scrollTop: top}, 1500);

});

$("#menu").click(function () {
	$(".headel2").css("display","block");
});

$("#closeMenu").click(function () {
	$(".headel2").css("display","none");	
});



