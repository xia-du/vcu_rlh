$(document)
  .ready(function() {
    console.log('application page');

    // Process tabs
    var $tabs = $('#process-tabs');
    var $incomingBtn = $tabs.find('#incoming-btn');
    var $returningBtn = $tabs.find('#returning-btn');
    var $incomingProc = $('#incoming-students-process');
    var $returningProc = $('#returning-students-process');

    // bind filter button click
    function toggleActive(el) {
      // Active state
      $('.process-tabs-btn')
        .removeClass('btn-primary')
        .addClass('btn-default');
      $(el)
        .removeClass('btn-default')
        .addClass('btn-primary');
    }

    $incomingBtn
      .on('click', function() {
        toggleActive(this);

        $incomingProc = $('#incoming-students-process');
        $returningProc = $('#returning-students-process');

        $returningProc
          .slideUp('fast', function() {
            $(this).insertBefore($incomingProc);
          });

        $incomingProc
          .slideDown('fast')
          .fadeIn('fast');
      });

    $returningBtn.on('click', function() {
      toggleActive(this);

      $incomingProc = $('#incoming-students-process');
      $returningProc = $('#returning-students-process');

      $incomingProc
        .slideUp('fast', function() {
          $(this).insertBefore($returningProc);
        });

      $returningProc
        .insertBefore($incomingProc)
        .slideDown('fast');
    });
  });
