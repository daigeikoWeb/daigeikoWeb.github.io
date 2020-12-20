const input = document.querySelector('#comment-in');
const button = document.querySelector('#sousin');

input.setAttribute('placeholder','展示会は終了いたしました。ご来場いただきありがとうございました。');
input.setAttribute('disabled','');
input.setAttribute('rows',2);
button.style.display = 'none';

var comm_req = new XMLHttpRequest();
var current_id = 37;

comment_request("", -1);

function comment_request(comment, target){
  comm_req.open('POST', '../comment/comment.php', true);
  comm_req.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  comm_req.responseType = 'json';
  var variable = 'current='+ current_id +'&honbun=' + comment +'&target='+target+'&sakuhin='+sakuhin_id
                  + '&user_id='+login_id;
  comm_req.send(variable);
  //console.log(variable);
  //console.log(input.value);
  input.value = "";
}

const chats = document.querySelector('.comment-zone');
//console.log(chats);
const comment_temp = document.querySelector('.comment');
var reply_height = comment_temp.children[3].clientHeight;
console.log(reply_height);

const comments = [];
const counter = document.querySelector('.comment-count span');


comm_req.addEventListener('load', function (response) {
  var com = response.target.response;

  if (com != null) {
    for (var c of com) {
      var comment = comment_temp.cloneNode(true);
      var comm_child = comment.children;
      var icon_img = comm_child[0].firstElementChild;
      var name = comm_child[1].firstElementChild;
      var honbun = comm_child[2];
      const rep_btn = comm_child[3];
      const rep_wrap = comm_child[4];
      var rep_child = rep_wrap.children;
      const rep_in = rep_child[0];
      const rep_send = rep_child[1];
      const comm_id = c['id'];

      comment.setAttribute('data-id', comm_id);
      honbun.innerHTML = c['honbun'];
      current_id = comm_id;

      rep_btn.style.display = 'none';
      rep_wrap.style.display = 'none';

      if (c['target'] < 0){
        chats.insertBefore(comment, chats.firstElementChild);
      } else {
        comment.classList.add('reply');
        for (var tag of comments) {
          if (c['target'] == tag.getAttribute('data-id')){
            tag.after(comment);
            break;
          }
        }
      }
      if (c['name'] != null){
        if (c['name'].length > 0) name.innerHTML = c['name'];
      } else {
        comm_child[1].remove();
      }
      if (c['image'] != null){
        if (c['image'].length > 0) icon_img.src = '../comment/' + c['image'];
      }

      comments.push(comment);
    }
  }

  counter.innerHTML = comments.length;
  comment_temp.remove();

  resize_comment();
});


window.addEventListener('resize', ()=>{
  resize_comment();
});

function resize_comment(){
  if (comments.length < 1) return;
  var rep_temp = document.querySelector('.reply');
  var comm_child = comments[0].children;
  var icon_width = comm_child[0].clientWidth;
  var com_width = comments[0].clientWidth - 40 - icon_width + 'px';

  if (rep_temp != null){
    var rep_width = rep_temp.clientWidth - 40 - icon_width + 'px';
  }

  for (var comment of comments) {
    var comm_child = comment.children;
    var comm_contents = comm_child[comm_child.length - 3];
    var rep_wrap = comm_child[comm_child.length - 1];
    if (comment.classList.contains('reply')){
      comm_contents.style.width = rep_width;
      rep_wrap.style.width = rep_width;
    } else {
      comm_contents.style.width = com_width;
      rep_wrap.style.width = com_width;
    }
  }
}
