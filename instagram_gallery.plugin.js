(function($) {
	$.fn.instagram_gallery = function(options) {
		if (options.id === undefined || options.access_token === undefined) {
			return;
		}
		
		options = $.extend({
			id: '',
			access_token: '',
			count: 15, // You can also pass a custom count as a parameter.
			timeout: 400,
			speed: 400,
			effect: 'slide', // slide | fade | none
			avatar_size: 'thumbnail', // low_resolution | thumbnail | standard_resolution
			caption_length: 200, // Any amount you like. Above 0 shortens the message length
			on_complete: null
		}, options);

		var instagramURL = 'https://api.instagram.com/v1/';
		var instagramALBUMS = instagramURL + 'users/' + options.id + '/media/recent/?access_token=' + options.access_token + '&count=' + options.count + '&callback=?';
		var e = $(this);

		e.append('<div class="instagram-loading"></div>');

		$.getJSON(instagramALBUMS, function(photos) {
			$.each(photos.data, function() {
				var output = '';

				output += '<li id="photo-' + this.id + '" class="photo type-photo avatar-size-' + options.avatar_size + '">';
					if (this.caption != undefined) {
						var title = ' title="' + this.caption.text + '"';
					}
					if (options.avatar_size === 'low_resolution') {
						var image = this.images.low_resolution.url;
					} else if (options.avatar_size === 'thumbnail') {
						var image = this.images.thumbnail.url;
					} else {
						var image = this.images.standard_resolution.url;
					}
					output += '<a href="' + this.images.standard_resolution.url + '"' + title + ' data-lightbox="photo-' + this.id + '"><img src="' + image + '" /></a>';

					if (this.caption != undefined) {
						if (options.caption_length > 0 && this.caption.text.length > options.caption_length) {
							output += '<div class="caption">Beskrivelse: ' + modText(this.caption.text.substring(0, options.caption_length)) + '...</div>';
						} else {
							output += '<div class="caption">Beskrivelse: ' + modText(this.caption.text) + '</div>';
						}
					}
				output += '</li>';
				
				e.append(output);
			});
		}).complete(function() {
			$('.instagram-loading', e).fadeOut(800, function() {
				for (var p = 0; p < e.children('li').length; p++) {
					if (options.effect === 'none') {
						e.children('li').eq(p).show();
					} else if (options.effect === 'fade') {
						e.children('li').eq(p).delay(p*options.timeout).fadeIn(options.speed);
					} else {
						e.children('li').eq(p).delay(p*options.timeout).slideDown(options.speed, function() {
							$(this).css('overflow', 'visible');
						});
					}
				}
				$(this).remove();
			});
			if ($.isFunction(options.on_complete)) {
				options.on_complete.call();
			}
		});
	
		function modText(text) {
			return nl2br(autoLink(escapeTags(text)));
		}
		function nl2br(str) {
			return str.replace(/(\r\n)|(\n\r)|\r|\n/g, '<br />');
		}
		function autoLink(str) {
			return str.replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1" target="_blank">$1</a>');
		}
		function escapeTags(str) {
			return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
		}
		function timeToHuman(time) {
			var timestamp = new Date(time*1000);
			dateString = timestamp.toGMTString();
	
			var time_difference = Math.round(new Date().getTime()/1000)-time;
			
			if (time_difference < 10) {
				return 'F&aring; sekunder siden';
			} else if (time_difference < 60) {
				return Math.round(time_difference) + ' sekunder siden';
			} else if (Math.round(time_difference/60) === 1) {
				return Math.round(time_difference/60) + ' minut siden';
			} else if (Math.round(time_difference/60) < 60) {
				return Math.round(time_difference/60) + ' minutter siden';
			} else if (Math.round(time_difference/(60*60)) === 1) {
				return Math.round(time_difference/(60*60)) + ' time siden';
			} else if (Math.round(time_difference/(60*60)) < 24) {
				return Math.round(time_difference/(60*60)) + ' timer siden';
			} else if (Math.round(time_difference/(60*60*24)) === 1) {
				return Math.round(time_difference/(60*60*24)) + ' dag siden';
			} else if (Math.round(time_difference/(60*60*24)) <= 10) {
				return Math.round(time_difference/(60*60*24)) + ' dage siden';
			} else {
				var days = new Array('S&oslash;ndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'L&oslash;rdag');
				var months = new Array('januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december');
	
				var day = timestamp.getDay();
				var day_no = timestamp.getDate();
				var month = timestamp.getMonth();
				var year = timestamp.getFullYear();
				return days[day] + ' d. ' + day_no + '. ' + months[month] + ' ' + year;
			}
		}
	};
})(jQuery);
