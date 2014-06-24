wp-javascript-event
===================

WordPress Javascript Events

```php
<?php

// From WordPress (themes or plugins) enqueue main
wp_enqueue_script( 'wp-js-events', get_template_directory_uri() . '/wp-js-events.js', false, '1.0.0' );

```

Then write your custom Javascript


```js

$( document ).on( 'wp.event.home', function() {

  console.log( 'WordPress Home loaded' );

} );
``` 
