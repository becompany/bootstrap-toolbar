'use strict';

require.config({
  baseUrl: 'src',
  paths: {
    // vendor
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    jquery: '../bower_components/jquery/dist/jquery',
    lodash: '../bower_components/lodash/dist/lodash'
  },
  shim: {
    bootstrap : [ 'jquery' ]
  }
});

require([ 'jquery', 'bootstrap-toolbar' ], function($) {

  $('.btn-toolbar').on('select.bs.toolbar', function(evt, btn) {
    $('#example-simple-events').prepend('<p>Selected button: ' + $(btn).text() + '</p>');
  });
  
  $('.btn-toolbar').on('unselect.bs.toolbar', function(evt, btn){
    $('#example-simple-events').prepend('<p>Unselected button: ' + $(btn).text() + '</p>');
  });
  
});