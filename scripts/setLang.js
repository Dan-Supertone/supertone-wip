var userLang
var lang

$(document).ready(function () {
  lang = localStorage.getItem('siteLang');
  detectLang();
});

// Detect Language
function detectLang() {
  if (lang != 'ko' && lang != 'en') {
    getLang();
  };
  setLang(lang);
};

// Get Language
function getLang() {
  userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.toLowerCase().substring(0, 2);
  if (userLang = 'ko') {
    lang = 'ko';
  } else {
    lang = 'en';
  };
  localStorage.setItem('siteLang', lang);
};

// Set Language
function setLang(currentLanguage) {
  $('[data-langNum]').each(function () {
    var $this = $(this);
    $this.html($.lang[currentLanguage][$this.data('langnum')]);

    if (localStorage.getItem('siteLang') == 'ko') {
      $('.lang').html('A');
      $this.addClass('ko');
      $this.removeClass('en');
      $('.team-detail').addClass('ko');
      $('.team-detail').removeClass('en');
      $('section.team').removeClass('team-hidden');
    } else {
      $('.lang').html('가');
      $this.addClass('en');
      $this.removeClass('ko');
      $('.team-detail').addClass('en');
      $('.team-detail').removeClass('ko');
      $('section.team').addClass('team-hidden');
    };
  });

  $('.random-ko').html(randomItem(teamKo));
  $('.random-en').html(randomItem(teamEn));
};

// Change Language
/*
$('.lang').click(function() {
  lang = $(this).data('lang');
  localStorage.setItem('siteLang', lang);
  setLang(lang);
});
*/

$('.lang').click(function () {
  if (lang == 'ko') {
    lang = 'en';
    localStorage.setItem('siteLang', lang);
    setLang(lang);
  } else {
    lang = 'ko';
    localStorage.setItem('siteLang', lang);
    setLang(lang);
  };
});