STIL WORK IN PROGRESS!
=======================

# Instagram Gallery

jQuery plugin that lets you show the latest photos from your Instagram profile.

### Examples

The plugin can be seen live here: [http://beta.thomasclausen.dk/instagram-gallery/](http://beta.thomasclausen.dk/instagram-gallery/)

### Usage

Insert the following code to activate the pluign:

    (function($) {
        $(document).ready(function(){
            $('#instagram_gallery').instagram_gallery({
                id: 'your_id',
                access_token: 'your_access_token',
                count: 10
            });
        });
    })(jQuery);

options:

    id: '' - insert your profile og fanpage id
    access_token: '' - insert your acces token
    count: 10 - any amount from 1-15

### Feedback

I'm self-taught by scattering code across the web, so if you see some bad practices PLEASE contact me, so I can learn from the mistakes I'm making!

Also feel free to contact me if you have som great ideas for improvements.

### License

Credits would be nice, but feel free to use as often as you like.
