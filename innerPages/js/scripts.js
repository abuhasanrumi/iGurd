$(document).on('ready', function () {
    // initialization of unfold
    var unfold = new HSUnfold('.js-hs-unfold-invoker').init();
    
  });
  $('.dz-dropzone').each(function () {
      // initialization of dropzone file attach module
      var dropzone = $.HSCore.components.HSDropzone.init('#' + $(this).attr('id'));
    });
