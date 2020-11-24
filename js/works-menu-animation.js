//console.log('読めた！');

const toggler = document.querySelector('.smart-btn');
const open_btn = document.querySelector('i.fas');
const close_btn = document.querySelector('img.close');
const menu = document.querySelector('.hide-menu');

toggler.addEventListener('click', () => {
  if(menu.classList.contains('hide')){
    menu.style.display = 'flex';
    menu.classList.remove('hide');
    menu.animate([{transform:'translateY(-100%)'},{transform:'translateY(0%)'}],
      {duration: 500, fill: 'forwards', easing: 'ease-out'});
    //elem_fadeout(open_btn);
    //elem_fadein(close_btn);
  } else {
    var menu_out = menu.animate([{transform:'translateY(0%)'},{transform:'translateY(-100%)'}],
      {duration: 500, fill: 'forwards', easing: 'ease-out'});
    menu_out.onfinish = () => {
      menu.style.display = 'none';
    }
    menu.classList.add('hide');
    //elem_fadeout(close_btn);
    //elem_fadein(open_btn);
  }
});

function elem_fadeout(element){
  element.animate([{opacity: 1, opacity:0}],{
    duration: 500,
    fill: 'forwards'
  });
}

function elem_fadein(element){
  element.animate([{opacity: 0, opacity:1}],{
    duration: 500,
    fill: 'forwards'
  });
}
