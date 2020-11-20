const smart_open = document.querySelector('.smart-btn i');
const smart_close = document.querySelector('.smart-menu .close');
const smart_menu = document.querySelector('.smart-menu');

smart_open.addEventListener('click', () => {
  smart_menu.style.display = 'flex';
  smart_menu.animate([
    {opacity: 0}, {opacity: 1}
  ],{
    duration: 500,
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
    fill: 'forwards'
  });
  menu_close.onfinish = () => {
    smart_menu.style.display = 'none';
  }
}

const judge_covers = document.querySelectorAll('.judge-details-wrap');
const intros = document.querySelectorAll('.introduction1, .introduction2, .introduction3');

for (var i = 0; i < judge_covers.length; i++) {
  const link = i;
  judge_covers[link].addEventListener('click', () => {
    intros[link].style.display = 'flex';
    intros[link].animate([
      {opacity: 0}, {opacity: 1}
    ],{
      duration: 500,
      fill: 'forwards'
    });
  });
}

for (var i = 0; i < intros.length; i++) {
  const link = i;
  intros[link].addEventListener('click', () => {
    var fade_out = intros[link].animate([
      {opacity: 1}, {opacity: 0}
    ],{
      duration: 500,
      fill: 'forwards'
    });
    fade_out.onfinish = () => {
      intros[link].style.display = 'none';
    }
  });
}
