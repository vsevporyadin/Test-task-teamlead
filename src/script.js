$(document).ready(function () {

	$(".scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
});

	$('input[type=text]').tooltip({
		placement: "top",
		trigger: "focus"
	});

	$(".eTimer").eTimer({
		etType: 0, etDate: "25.07.2020.0.0", etSep: "", etShowSign: 2,etNumberFontFamily: "Impact", etNumberSize: 27, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#343434", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
	});

});

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '360',
		width: '640',
		videoId: 'DLyhGVorOp0',
		playerVars: { 'autoplay': 1, 'playsinline': 1 },
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	event.target.mute()
	event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 10000);
		done = true;
	}
}
function stopVideo() {
	player.stopVideo();
}