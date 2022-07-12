$('header').html(`
  <article>
    <a href="//dan-supertone.github.io/supertone-wip" target="_self"><img src="images/logo.svg" alt="" class="logo"></a>

    <div class="lang"></div>

    <!--<img src="images/menu-toggle.svg" alt="" class="menu-toggle" width="20px">-->

    <div class="header-rolling post-slider only-m">
      <div class="post-wrapper">
        <!--<div class="post"><a href="/people/index.html" target="_self">People</a></div>-->
        <!--<div class="post"><a href="/media/index.html" target="_self">Media</a></div>-->
        <div class="post"><a href="//dan-supertone.github.io/supertone-wip/people/index.html" target="_self">People</a></div>
        <div class="post"><a href="//dan-supertone.github.io/supertone-wip/media/index.html" target="_self">Media</a></div>
      </div>
    </div>

    <div class="menu">
      <a href="//dan-supertone.github.io/supertone-wip/people/index.html" target="_self">People</a>
      <a href="//dan-supertone.github.io/supertone-wip/index.html" target="_self">Media</a>
    </div>
  </article>

  <div class="progress-wrap">
    <div class="progress"></div>
  </div>
`);

// Progress Bar
window.onscroll = function () {
  progressBar()
};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementsByClassName("progress")[0].style.width = scrolled + "%";
};

// Header
$('.menu-toggle').click(function () {
  $('.menu-m').toggleClass('close');
});

$('footer').html(`
  <article>
    <div data-langNum="0"></div>
    <div>contact@supertone.ai</div>
    <div>© 2022 Supertone Inc, All Rights Reserved</div>
  </article>
`);

$('header .header-rolling .post-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  vertical: true,
  draggable: false,
  pauseOnFocus: false,
});