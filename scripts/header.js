$('header').html(`
  <article>
    <a href="//supertone.ai" target="_self"><img src="./images/logo.svg" alt="" class="logo"></a>

    <div class="lang"></div>

    <div class="header-rolling post-slider only-m">
      <div class="post-wrapper">
        <div class="post"><a href="//supertone.ai/people/index.html" target="_self">People</a></div>
        <div class="post"><a href="//supertone.ai/media/index.html" target="_self">Media</a></div>
      </div>
    </div>

    <div class="menu">
      <a href="//supertone.ai/people/index.html" target="_self">People</a>
      <a href="//supertone.ai/media/index.html" target="_self">Media</a>
    </div>
  </article>

  <div class="progress-wrap">
    <div class="progress"></div>
  </div>
`);

// Header Rolling Menu
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

$('footer').html(`
  <article>
    <div data-langNum="0"></div>
    <div><a href="mailto:contact@supertone.ai" class="footer-mail">contact@supertone.ai</a></div>
    <div>© 2022 Supertone Inc, All Rights Reserved</div>
  </article>
`);
