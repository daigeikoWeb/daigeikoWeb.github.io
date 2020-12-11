const grids = document.querySelectorAll('.grid-area1, .grid-area2, .grid-area3, .grid-area4,' +
                                         '.grid-area5, .grid-area6, .grid-area7');

const grids_size = [1, 0, 0, 1, 2, 0, 0];

function isTablet(){
  //タブレット、スマホ版ページの時にtrueを返す
  return window.innerWidth < 1024;
}

const futas = [];

const futaTemplate = document.createElement('div');
futaTemplate.classList.add('futa');

for (var grid of grids) {
  const futaCopy = futaTemplate.cloneNode(true);
  if (Math.random() > 0.5){
    futaCopy.classList.add('slided');
  }
  if (grid.classList.contains('thomb_L')){
    futaCopy.classList.add('thomb_L');
  } else if (grid.classList.contains('thomb_M')){
    futaCopy.classList.add('thomb_M');
  } else {
    futaCopy.classList.add('thomb_S');
  }
  futas.push(futaCopy);
  grid.firstElementChild.appendChild(futaCopy);

  var grid_child = grid.firstElementChild.firstElementChild.children;
  var image = grid_child[0].firstElementChild;
  var detail = grid_child[1].children;
  var link = detail[0];
  var title = detail[1].firstElementChild;

  link.removeAttribute('href');
  title.innerHTML = 'Coming Soon…';
}

var fRand = makeRandomArray(futas.length);


var wRand = makeRandomArray(data.length);
var wCount = 0;

for (var fu of futas) {
  fillWaku(fu);
}

setInterval(futaSlide, 5000);

function futaSlide(){
  for (var i=0; i < futas.length; i++) {
    const fu = futas[fRand[i]];
    setTimeout(() => {
      const toRight = fu.classList.contains('slided');

      const slideIn = fu.animate(futaKey(toRight, true) ,futaOpt(false, true));

      slideIn.onfinish = function(){
        fillWaku(fu);
        fu.animate( futaKey(toRight, false), futaOpt(false, false));

        if (toRight) {
          fu.classList.remove('slided');
        } else {
          fu.classList.add('slided');
        }
      }
    }, 100 * i);
  }
  fRand = makeRandomArray(fRand.length);
}


function futaKey(is_right, is_in){
  //キーフレームを格納する配列
  const key = [{transform: 'translateX(0%)'}];
  if (is_right == is_in) transition = {transform: 'translateX(100%)'};
  else transition = {transform: 'translateX(-100%)'};

  /*
  is_in(futaが入っていくか・出ていくかを表すフラグ)
  trueであればtransitionをunshift(配列の先頭に追加)、
  falseならtransitionをpush(配列の末尾に追加)することで、入るモーション・出ていくモーションのキーフレーム配列を返す
  */
  if(is_in) key.unshift(transition);
  else key.push(transition);

  return key;
}

function futaOpt(is_delay, is_in){
  option = {};
  if (is_in){
    option['easing'] = 'cubic-bezier(.49,.01,.31,.99)';
  } else {
    option['easing'] = 'cubic-bezier(.49,.01,.31,.99)';
    option['delay'] = 100;
  }

  if (is_delay) {
    option['duration'] = 1300;
    if (is_in) option['delay'] = 500;
  } else {
    option['duration'] = 1300;
  }
  option['fill'] = 'forwards';
  return option;
}

var wRand = makeRandomArray(data.length);
var wCount = 0;

function fillWaku(futa){
  var children = futa.previousElementSibling.children;
  var image = children[0].firstElementChild;
  var detail = children[1].children;
  var link = detail[0];
  var title = detail[1].firstElementChild;
  var sakuhin = data[wRand[wCount]];

  var thomb_size = 0;
  if (futa.classList.contains('thomb_M')) thomb_size = 1;
  else if (futa.classList.contains('thomb_L')) thomb_size = 2;

  var query = 0;
  if (isTablet()) query = 3; //タブレット、スマホ版の場合サムネイルのインデックスをずらす
  // image.src = sakuhin['thomb'][thomb_size + query];
  image.src = sakuhin['thomb'][6];
/*
  link.href = sakuhin['link'];
  //console.log(thomb_size + query);
  title.innerHTML = sakuhin['title'];
  if (sakuhin['title'] == ''){
    title.innerHTML = 'wakaran';
  }*/

  if (++wCount == wRand.length) wCount = 0;
}


const works_in = document.querySelector('.works-covers');
const work_temp = document.querySelector('.works-cover');
work_temp.remove();
//console.log(work_temp);

for (var d of data){
  var copy = work_temp.cloneNode(true);
  var children = copy.firstElementChild.children;
  //console.log(children);
  var award_icon = children[0];
  var img = children[1].firstElementChild.firstElementChild;
  var detail = children[2].firstElementChild.children;
  var link = detail[0];
  var title = detail[1];
  var award_name = detail[2];


  award_icon.remove();
  award_name.remove();

  img.src = d['thomb'][6];
  link.removeAttribute('href');
  title.innerHTML = 'Coming Soon…';

  works_in.appendChild(copy);
}


const works = document.querySelectorAll('.works-cover');

setWorksSize();

window.onload = function(){
  setWorksSize();
}

window.onresize = function(){
  setWorksSize();
  find_menu(location.hash); // from page-page-transition.js
  move_menu(""); // from page-page-transition.js
}

function setWorksSize(){
  var work_width = works[0].clientWidth;
  var work_margin = window.innerWidth * 0.01;

  //console.log(work_margin);
  for (var work of works) {
    work.style.height = work_width + 'px';
    work.style.marginBottom = work_margin + 'px';
  }

  var judge_images = document.querySelectorAll('.judge-image-wrap');
  var judge_width = judge_images[0].clientWidth;

  for (var judge of judge_images) {
    judge.style.height = judge_width + 'px';
  }
}


function makeRandomArray(length){
  const array = [];
  for (var i = 0; i < length; i++) {
    array.push(i);
  }
  for (var i = length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  //console.log(array);
  return array;
}
