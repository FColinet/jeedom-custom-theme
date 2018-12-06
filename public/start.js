$(document).ready(function() {

  setTimeout(function() {

    // Replace old menu if displayPlan() used
    $('#div_pageContainer').children('#custom-theme:eq(0)').remove();
    $('#div_pageContainer').append($('#custom-theme'));

    // Fullscreen forced
    fullScreen(true);

    cadreParent = $('.cadre_marges').parent().parent();
    cadreParent.before($('.cadre_marges').parent());

    $('#div_alert').each(function() {
        this.style.setProperty('position', 'relative');
      });

    $('#custom-theme').show();

  }, 0);

});
