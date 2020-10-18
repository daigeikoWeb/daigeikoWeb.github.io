var selector = 'div.art1, div.art2, div.art3, div.art4,' +
               'div.art5, div.art6, div.art7,' +
               'div.arts-tate, div.arts-cube-mini, div.arts-cube-dai';

const grids = document.querySelectorAll(selector);

console.log(grids);

const futaTemp = document.createElement('div');

futaTemp.classList.add('futa');
console.log(futaTemp);

const futas = [];

for (var gr of grids) {
  const cp = futaTemp.cloneNode(true);
  var img = gr.firstElementChild.firstElementChild;
  var w = img.clientWidth;
  var h = img.clientHeight;
  cp.style.width = w + 'px';
  cp.style.height = h + 'px';
  cp.style.display = 'none';
  if (Math.random() < 0.5){
    futaTemp.classList.add('slided');
  }
  gr.appendChild(cp);
  futas.push(cp);
}


setInterval(futaSlide, 5000);

function futaSlide(){
  for (var i=0; i < futas.length; i++) {
    const fu = futas[i];
    fu.style.display = 'block';
    //const ur = uras[wRand[i]];
    setTimeout(() => {
      const toRight = fu.classList.contains('slided');

      //ur.animate(futaKey(!toRight, true) ,futaOpt(false, true));
      const slin = fu.animate(futaKey(!toRight, true) ,futaOpt(false, true));

      slin.onfinish = function(){
        //var target = fu.previousElementSibling;
        //fillWaku(target);

        //ur.animate( futaKey(toRight, false), futaOpt(false, false));
        fu.animate( futaKey(toRight, false), futaOpt(false, false));

        if (toRight) {
          fu.classList.remove('slided');
          //ur.classList.remove('slided');
        } else {
          fu.classList.add('slided');
          //ur.classList.add('slided');
        }
      }
    }, 0 * i);
  }
}

function futaKey(is_right, is_in){
  const key = [{transform: 'translateX(0%)'}];
  if (is_right) ido = {transform: 'translateX(100%)'};
  else ido = {transform: 'translateX(-100%)'};

  if(is_in) key.unshift(ido);
  else key.push(ido);

  return key;
}

function futaOpt(is_delay, is_in){
  option = {};
  if (is_in){
    option['easing'] = 'cubic-bezier(.21,.68,.44,1)';
  } else {
    option['easing'] = 'cubic-bezier(.56,0,.79,.32)';
    option['delay'] = 100;
  }

  if (is_delay) {
    option['duration'] = 600;
    if (is_in) option['delay'] = 100;
  } else {
    option['duration'] = 700;
  }
  option['fill'] = 'forwards';
  return option;
}
