<!DOCTYPE html>	
<html class="no-js">

<head>
<title>Instagram gallery</title>
<meta charset="UTF-8" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" href="../reset-html5.css" />
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="css/slimbox2.css" media="screen" />
<link rel="stylesheet" href="css/slimbox_alt.css" media="screen" />
<script src="https://www.google.com/jsapi"></script>
<script>google.load("jquery", "1");</script>
<script src="js/slimbox2_custom_clausen.js"></script>
<script src="instagram_gallery.plugin.js"></script>
<script src="script.js"></script>
</head>

<body>
<div id="wrap">
	<h2>Instagram gallery</h2>
	<ul id="instagram_gallery" class="instagram_gallery standard"></ul>
	<div class="arrow_box">
		<p><strong>Indstillinger:</strong></p>
		<ul>
			<li>id: '' - insert your profile og fanpage id</li>
			<li>access_token: '' - insert your acces token</li>
			<li>count: 15 - you can also pass a custom count as a parameter</li>
			<li>timeout: 400 - any amount (in miliseconds)</li>
			<li>speed: 400 - any amount (in miliseconds)</li>
			<li>effect: 'slide' - choices: 'slide', 'fade' or 'none'</li>
			<li>avatar_size: 'thumbnail' - choices: 'low_resolution', 'thumbnail' or 'standard_resolution'</li>
			<li>caption_length: 200 - any amount you like. Above 0 shortens the message length</li>
		</ul>
	</div>

	- scope?
		- likes+comments+relationships+basic
		- måske man kan sortere likes og kommentarer fra ?

	http://jelled.com/instagram/lookup-user-id
	http://jelled.com/instagram/access-token
	https://forrst.com/posts/Using_the_Instagram_API-ti5

	http://instagram.com/developer/clients/manage/

	http://blog.pixelunion.net/instagram - baggrunden!

	<?php echo '<!-- Senest opdateret: ' . date( 'F d Y H:i:s.', getlastmod() ) . '-->'; ?>
</div>
</body>

</html>