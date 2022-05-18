$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__link-title').click(function (event) {
		if ($('.header__link').hasClass('one')) {
			$('.header__link-title').not($(this)).removeClass('active-title');
			$('.header__link-link').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active-title').next().slideToggle(300);
	});
});