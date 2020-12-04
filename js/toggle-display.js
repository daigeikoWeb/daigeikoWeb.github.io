const smart_open = document.querySelector('.smart-btn i');
//const smart_close = document.querySelector('.smart-menu .close');
const smart_menu = document.querySelector('.smart-menu');

smart_open.addEventListener('click', () => {
  if (smart_menu.classList.contains('hide')){
    smart_menu.classList.remove('hide');
    smart_menu.style.display = 'flex';
    smart_menu.animate([
      {transform: 'translateY(-100%)'}, {transform: 'translateY(0%)'}
    ],{
      duration: 1000,
      easing: 'cubic-bezier(.44,.01,.42,1)',
      fill: 'forwards'
    });
  } else {
    menu_closing();
  }

});

/*
smart_close.addEventListener('click', () => {
  menu_closing();
});
*/
function menu_closing(){
  var menu_close = smart_menu.animate([
    {transform: 'translateY(0%)'}, {transform: 'translateY(-100%)'}
  ],{
    duration: 1000,
    easing: 'cubic-bezier(.44,.01,.42,1)',
    fill: 'forwards'
  });
  menu_close.onfinish = () => {
    smart_menu.style.display = 'none';
    smart_menu.classList.add('hide');
  }
}

const judge_covers = document.querySelectorAll('.judge-details-wrap');
const intros = document.querySelectorAll('.introduction1, .introduction2, .introduction3');
const intro_close = document.querySelectorAll('.introduction1 .close, .introduction2 .close, .introduction3 .close');

for (var i = 0; i < judge_covers.length; i++) {
  const link = i;
  judge_covers[link].addEventListener('click', () => {
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
