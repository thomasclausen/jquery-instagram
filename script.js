(function($) {
	$(document).ready(function(){
		$('html').removeClass('no-js');
		if ($.browser.safari || $.browser.webkit) {
			$('body').addClass('webkit');
		}

		$('#instagram_gallery').instagram_gallery({
			id: '30460799',
			access_token: '244161.d7f11ba.b079d4e3dbfc475d8c4677a0526f44bc',
			count: 5,
			on_complete: function() {
				if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
					$('#instagram_gallery').find('a[data-lightbox]').slimbox({}, null, function(el) {
						return (this == el) || (($(this).attr('data-lightbox') != undefined) && ($(this).attr('data-lightbox') == $(el).attr('data-lightbox')));
					});
				}
			}
		});

		// https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code

		// https://api.instagram.com/v1/media/popular?client_id=[ClientID]&access_token=[CODE]
		// https://api.instagram.com/v1/users/USER-ID/media/recent/?access_token=[CODE]

		// https://api.instagram.com/v1/media/recent?access_token=fb2e77d.47a0479900504cb3ab4a1f626d174d2d&callback=callbackFunction

		// sgmd = L.O.C
	});
})(jQuery);