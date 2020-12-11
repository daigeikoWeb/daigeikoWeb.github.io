const smart_open = document.querySelector('.smart-btn i');
const smart_close = document.querySelector('.smart-btn .close');
const smart_menu = document.querySelector('.smart-menu');
console.log(smart_open);

smart_open.addEventListener('click', () => {
  smart_menu.classList.remove('hide');
  smart_menu.style.display = 'flex';
  smart_menu.animate([
    {opacity: 0}, {opacity: 1}
  ],{
    duration: 500,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });

  smart_close.style.display = 'block';
  smart_close.animate([
    {opacity: 0}, {opacity: 1}
  ],{
    duration: 500,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });

  smart_open.animate([
    {opacity: 1}, {opacity: 0}
  ],{
    duration: 500,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });

});


smart_close.addEventListener('click', () => {
  menu_closing();
});

function menu_closing(){
  var menu_close = smart_menu.animate([
    {opacity: 1}, {opacity: 0}
  ],{
    duration: 500,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });
  menu_close.onfinish = () => {
    smart_menu.style.display = 'none';
    smart_menu.classList.add('hide');
  }

  var btn_fade = smart_close.animate([
    {opacity: 1}, {opacity: 0}
  ],{
    duration: 500,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });
  btn_fade.onfinish = () => {
    smart_close.style.display = 'none';
  }

  smart_open.animate([
    {opacity: 0}, {opacity: 1}
  ],{
    duration: 500,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });
}

const judge_covers = document.querySelectorAll('.judge-details-wrap');
const intros = document.querySelectorAll('.introduction1, .introduction2, .introduction3');
const intro_close = document.querySelectorAll('.introduction1 .close, .introduction2 .close, .introduction3 .close');

for (var i = 0; i < judge_covers.length; i++) {
  const link = i;
  intros[link].classList.add('hide');
  judge_covers[link].addEventListener('click', () => {
    intros[link].classList.remove('hide');
    intros[link].style.display = 'flex';
    intros[link].animate([
      {opacity: 0}, {opacity: 1}
    ],{
      duration: 300,
      fill: 'forwards'
    });
  });
}

for (var i = 0; i < intros.length; i++) {
  const link = i;
  intro_close[link].addEventListener('click', () => {
    intros[link].classList.add('hide');
    var fade_out = intros[link].animate([
      {opacity: 1}, {opacity: 0}
    ],{
      duration: 300,
      fill: 'forwards'
    });
    fade_out.onfinish = () => {
      intros[link].style.display = 'none';
    }
  });
}

function hide_intro(){
  for (const intro of intros) {
    if (!intro.classList.contains('hide')){
      intro.classList.add('hide');
      var fade_out = intro.animate([
        {opacity: 1}, {opacity: 0}
      ],{
        duration: 300,
        fill: 'forwards'
      });
      fade_out.onfinish = () => {
        intro.style.display = 'none';
      }
    }
  }
}
