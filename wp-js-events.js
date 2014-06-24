/**
 * Description
 *
 * @class           WordPressJavascriptEvents
 * @author          =undo= <g.fazioli@undolog.com>
 * @date            2014-06-24
 * @version         1.0.0
 *
 */

jQuery( function ( $ )
{
  "use strict";

  window.WordPressJavascriptEvents = (function ()
  {

    // This object
    var _WordPressJavascriptEvents = {
      version : '1.0.0',
      init    : _init
    };

    /**
     * Return an instance of Ferrari object
     *
     * @private
     *
     * @return {}
     */
    function _init()
    {
      // Your init here
      $.each( document.body.className.replace( /-/g, '_' ).split( /\s+/ ), function ( i, classnm )
      {
        // Test
        console.log( 'wp.event.' + classnm );

        $( document ).trigger( 'wp.event.' + classnm );
      } );

      return _WordPressJavascriptEvents;
    };

    return _init();

  })();

} );
