$(document).ready(function () {
	$(".menu-burger").click(function (event) {
		$(".menu-burger,.menu").toggleClass("active")

	});

	$(".contacts__spoiler").click(function (event) {
		if ($(".contacts__row").hasClass("one")) {
			$(".contacts__spoiler").not($(this)).removeClass("active");
			$(".contacts__spoiler-text").not($(this).next()).slideUp(300);
		}
		$(this).toggleClass("active").next().slideToggle(300);
	});


});
