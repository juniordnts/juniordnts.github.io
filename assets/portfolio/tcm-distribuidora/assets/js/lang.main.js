changeLang('br');

function changeLang(lingua) {
  $(".load-body").css('visibility', 'initial');
  setTimeout(() => {
    $(".load-body").css('visibility', 'hidden');

    switch (lingua) {
      case 'en':
        $('[data-lang-en]').each(function (index, element) {
          if($(this).attr('placeholder')){
            $(this).attr('placeholder', $(this).attr("data-lang-en"));
          } else {
            $(this).text($(this).attr("data-lang-en"));
          }
        });
        break;
      case 'ch':
        $('[data-lang-ch]').each(function (index, element) {
          if($(this).attr('placeholder')){
            $(this).attr('placeholder', $(this).attr("data-lang-ch"));
          } else {
            $(this).text($(this).attr("data-lang-ch"));
          }
        });
        break;
      case 'br':
        $('[data-lang-br]').each(function (index, element) {
          if($(this).attr('placeholder')){
            $(this).attr('placeholder', $(this).attr("data-lang-br"));
          } else {
            $(this).text($(this).attr("data-lang-br"));
          }
        });
        break;
    }

  }, 300);
}