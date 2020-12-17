const sections = [{tag: 'top', style: 'flex'},
                  {tag: 'theme', style: 'block'},
                  {tag: 'works', style: 'flex'},
                  {tag: 'about', style: 'flex'},
                  {tag: 'judge', style: 'flex'},
                  {tag: 'message', style: 'flex'},
                  {tag: 'cooperation', style: 'block'},
                  {tag: 'contact', style: 'block'}
                ];

const sec_nodes = [];

function sec_index(id_name){
  return sections.findIndex((sec) => "#" + sec.tag == id_name);
}

var current_sec = location.hash;


const main_cov = document.querySelector('#main-cover');
const menu_back = document.querySelector('#menu-back');

for (var sec of sections) {
  var sec_node = document.getElementById(sec.tag);
  sec_nodes.push(sec_node);
}
//console.log(sec_nodes);

const senni = document.querySelector('#senni-part');

if (current_sec == ""){
  senni.style.display = 'block';

  var vid_index = 0;
  if (window.innerWidth < 560){
    vid_index = 1;
  }
  for (const video of senni.children) {
    var vid_disp = document.defaultView.getComputedStyle(video,null).display;
    console.log(vid_disp);
    if (vid_disp != 'none'){
      var dura = 0;
      const deb_Int = setInterval(()=>{
        //console.log(video);
        if (video_current(video) > 8){
          clearInterval(deb_Int);
          senni_fade();
        }
      }, 500);
      video.addEventListener('play', () =>{
        console.log('スタート！')
      });
      setTimeout(() => {
        if (video_current(video) < 1){
          clearInterval(deb_Int);
          senni_fade();
        }
      }, 5000);
    }
  }
  location.hash = 'top';
  current_sec = location.hash;
} else {
  senni.style.display = 'none';
}

function video_current(video){
  console.log(video.currentTime);
  return video.currentTime;
}

function senni_fade(){
  var senni_fade = senni.animate([
    {opacity: 1}, {opacity: 0}
  ],{
    duration: 3000
  });

  senni_fade.onfinish = function(){
    senni.style.display = 'none';
  }
}

hide_sections(current_sec);

function hide_sections(current_id){
  //console.log(current_id);
  for (var i = 0; i < sections.length; i++) {
    var show = 'none';
    //console.log(sections[i].tag);
    if (current_id == '#' + sections[i].tag){
      show = sections[i].style;
      if (current_id == '#works'){
        sec_nodes[1].style.display = sections[1].style;
        //document.querySelector('main').scrollBy(0,-500000);
        //sec_nodes[1].scrollBy(0,-500000);
      }
    }
    //console.log(show);
    sec_nodes[i].style.display = show;
  }
}

function move_menu(last){
  var last_top = menu_back.style.top;
  var menu_top = document.querySelector('.header-nav').getBoundingClientRect();
  var current_menu = document.querySelector('.header-nav .current');
  var btn_rect = current_menu.getBoundingClientRect();
  var goal = (btn_rect.top - menu_top.top) + 'px';
  //console.log( last_top );
  //console.log( menu_top.top );
  if (last != ""){
    menu_back.animate([
      {top: last_top}, {top: goal}
    ],{
      duration: 1000,
      easing: 'ease-in-out'
    });

    current_menu.firstElementChild.animate([
      {color: '#eee'},
      {color: '#182987'}
    ],{
      duration: 1000,
      easing: 'ease-in-out'
    });

    last.firstElementChild.animate([
      {color: '#182987'},
      {color: '#eee'}
    ],{
      duration: 1000,
      easing: 'ease-in-out'
    });
  }
  menu_back.style.top = goal;
}


const pc_menus = document.querySelectorAll('.header-nav ul li');
const sp_menus = document.querySelectorAll('.smart-nav ul li');

for (const btn of pc_menus) {
  btn.addEventListener('click', () =>{
    var last_menu = document.querySelector('.header-nav .current');

    if (!(btn.classList.contains('current'))) {
      last_menu.classList.remove('current');
      btn.classList.add('current');
      move_menu(last_menu);
    }
    hide_intro(); //from toggle-display.js

    var last_index = sec_index(last_menu.firstElementChild.getAttribute('href'));
    var current_index = sec_index(btn.firstElementChild.getAttribute('href'));
    //console.log(last_menu.firstElementChild.getAttribute('href') + "," + btn.firstElementChild.getAttribute('href'));
    //console.log(last_index + "," + current_index);
    main_cov.style.display = 'block';

    var page_in = main_cov.animate(
      main_cov_keyframes(true, last_index < current_index),{
        duration: 1000,
        easing: 'ease-in-out'
      }
    );

    page_in.onfinish = function(){
      hide_sections(btn.firstElementChild.getAttribute('href'));
      location.hash = btn.firstElementChild.getAttribute('href');
      current_sec = location.hash;

      setWorksSize(); //from grid-animation.js
      var page_out = main_cov.animate(
        main_cov_keyframes(false, last_index < current_index),{
          duration: 1000,
          easing: 'ease-in-out'
        }
      );
      page_out.onfinish = () => {
        main_cov.style.display = 'none';
      }
    }
  });
}


for (const btn of sp_menus) {
  btn.addEventListener('click', () => {
    /*
    if (btn.classList.contains('current')) {
      return;
    }*/
    var last_menu = document.querySelector('.smart-nav .current');
    last_menu.classList.remove('current');
    btn.classList.add('current');

    menu_closing(); //from toggle-display.js

    var last_index = sec_index(last_menu.firstElementChild.getAttribute('href'));
    var current_index = sec_index(btn.firstElementChild.getAttribute('href'));
    //console.log(last_index + ',' + current_index);

    main_cov.style.display = 'block';

    var page_in = main_cov.animate(
      main_cov_keyframes(true, last_index < current_index),{
        duration: 1000,
        easing: 'ease-in-out'
      }
    );

    page_in.onfinish = function(){
      hide_sections(btn.firstElementChild.getAttribute('href'));
      location.hash = btn.firstElementChild.getAttribute('href');
      current_sec = location.hash;

      setWorksSize(); //from grid-animation.js
      var page_out = main_cov.animate(
        main_cov_keyframes(false, last_index < current_index),{
          duration: 1000,
          easing: 'ease-in-out'
        }
      );
      page_out.onfinish = () => {
        main_cov.style.display = 'none';
      }
    }
  });
}

find_menu(current_sec);
move_menu("");

function find_menu(current_id){
  for (const btn of pc_menus) {
    if (btn.firstElementChild.getAttribute('href') == current_id){
      btn.classList.add('current');
    } else {
      btn.classList.remove('current');
    }
  }
  for (const btn of sp_menus) {
    if (btn.firstElementChild.getAttribute('href') == current_id){
      btn.classList.add('current');
    } else {
      btn.classList.remove('current');
    }
  }
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

var last_intersect = false;

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

let callback = (entries, observer) => {
  entries.forEach(entry => {

/*
    console.log('交差検知');
    console.log(entry);
    if (!entry.isIntersecting) return;

    var current_index = sec_index(current_sec);

    var offset = 1;
    if (entry.target == obs_top){
      offset = -1;
      if (current_index == 2) offset = -2;
    } else {
      if (current_index == 0) offset = 2;
    }
    next_index = current_index + offset;
    if (next_index < 0 || next_index >= sec_nodes.length) return;
    console.log('発火');

    observer.disconnect();

    var next_sec = '#' + sections[next_index]['tag'];

    main_cov.style.display = 'block';
    var page_in = main_cov.animate(
      main_cov_keyframes(true, current_index < next_index),{
        duration: 1000,
        easing: 'ease-in-out'
      }
    );

    page_in.onfinish = function(){
      hide_sections(next_sec);
      current_sec = next_sec;
      location.hash = next_sec;

      setWorksSize(); //from grid-animation.js
      var page_out = main_cov.animate(
        main_cov_keyframes(false, current_index < next_index),{
          duration: 1000,
          easing: 'ease-in-out'
        }
      );
      page_out.onfinish = () => {
        main_cov.style.display = 'none';
        setObs();
      }
    }
*/


    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let observer = new IntersectionObserver(callback, options);
const obs_top = document.querySelector('.cross-top');
const obs_bottom = document.querySelector('.cross-bottom');
setTimeout(setObs, 1000);

function setObs(){
  observer.observe(obs_top);
  observer.observe(obs_bottom);
}
