define([
  'jquery',
  'lodash',
  'bootstrap'
], function(
  $,
  _
) {

  function createToolbar(opts) {
    var
      $toolbar = this,
      $buttons = $('.btn', $toolbar);
    
    $buttons.on('mousedown', function(evt) {
      // prevent focus
      evt.preventDefault();
    });
    
    $buttons.on('click', function(evt) {
      var $this = $(this);
      
      $this
        .trigger('select.bs.toolbar', this)
        .filter('[data-toolbar-toggle="button"]')
        .addClass('active');
      
      if($this.filter('[data-toolbar-toggle="button"]').length > 0) {
        $buttons
          .not(this)
          .filter('[data-toolbar-toggle="button"]')
          .filter('.active')
          .removeClass('active')
          .each(function(idx, el) {
            $(el)
              .trigger('unselect.bs.toolbar', el);
          });
      }
    });
  }
  
  $.fn.bsToolbar = function(opts) {
    var toolbar = this.data('toolbar');
    if (toolbar === undefined) {
      toolbar = createToolbar.call(this, opts);
      this.data('toolbar', toolbar);
    }
    return this;
  };
  
  _.each($('.btn-toolbar'), function(node) {
    $(node).bsToolbar();
  });
  
});