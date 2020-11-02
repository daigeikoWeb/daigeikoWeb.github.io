const link_map = [
  {
    tag: 'Exhibition',
    link: 'index.html'
  },{
    tag: 'Exhibition2020',
    link: 'Exhibition2020.html'
  },{
    tag: 'About',
    link: 'About.html'
  },{
    tag: 'Message',
    link: 'Message.html'
  },{
    tag: 'Live',
    link: 'Live.html'
  },{
    tag: 'Contact',
    link: 'Contact.html'
  }];

function map_index(tag_name){
  return link_map.findIndex((map) => map.tag == tag_name);
}

const prev = location.hash;
const current_menu = document.querySelector('.current');
var prev_menu = null;
if (prev != "")  prev_menu = document.querySelector(prev);

const main_cov = document.createElement('div');
main_cov.id = 'main-cover';
document.querySelector('main').appendChild(main_cov);

const menu_back = document.createElement('li');
menu_back.innerHTML = '<a><br></a>';
menu_back.id = 'menu-back';
document.querySelector('.header-nav').appendChild(menu_back);

window.onload = function(){
  const menu = document.querySelector('ul');
  var menu_top_y = menu.getBoundingClientRect();

  var current_y = current_menu.getBoundingClientRect();
  var out_y = (current_y.top - menu_top_y.top) + 'px';
  menu_back.style.top = out_y;


  if (prev != ""){
    const prev_menu = document.querySelector(prev);
    var prev_y = prev_menu.getBoundingClientRect();
    var in_y = (prev_y.top - menu_top_y.top) + 'px';

    //current_menu、prev_menu内の全ての子要素の色をアニメーション
    for (var prev_child of prev_menu.children){
      prev_child.animate([
        {color: '#fff'},
        {color: '#182987'}
      ],{
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
    }

    for (var current_child of current_menu.children){
      current_child.animate([
        {color: '#182987'},
        {color: '#fff'}
      ],{
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
    }

    //メニューの後ろにある青いやつをアニメーション
    menu_back.animate([
      {top: in_y},
      {top: out_y}
    ],{
      duration: 1000,
      easing: 'ease-in-out'
    });

    var prev_menu_index = map_index(prev_menu.id);
    var current_menu_index = map_index(current_menu.id);

    var cov_anim = main_cov.animate(
      main_cov_keyframes(false, prev_menu_index < current_menu_index)
    ,{
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    cov_anim.onfinish = function(){
      del_main_cov();
    }
  } else {
    del_main_cov();
  }
}

function del_main_cov(){
  main_cov.style.display = 'none';
}


const menu_btns = document.querySelectorAll('ul li');

for (const btn of menu_btns){
  var tagA = btn.firstElementChild;
  tagA.removeAttribute('href');
  btn.addEventListener('click', () => {
    if (current_menu == btn) return;

    main_cov.style.display = 'block';
    var current_menu_index = map_index(current_menu.id);
    var next_menu_index = map_index(btn.id);
    var pageTransition = main_cov.animate(
      main_cov_keyframes(true, (current_menu_index < next_menu_index))
    ,{
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    pageTransition.onfinish = function(){
      del_main_cov();
      window.location.href = link_map[next_menu_index].link + '#' + current_menu.id;
    }
  });
}

function main_cov_keyframes(is_in, is_up){
  //キーフレームを格納する配列
  const key = [{transform: 'translateY(0%)'}];
  if (is_up == is_in) transition = {transform: 'translateY(100%)'};
  else transition = {transform: 'translateY(-100%)'};

  if(is_in) key.unshift(transition);
  else key.push(transition);

  return key;
}
