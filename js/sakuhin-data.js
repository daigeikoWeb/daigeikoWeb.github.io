const data = [

//記入例
{
  id: 999,
  title: '大芸工展web',
  genre: 3,

  //複数人関わっている場合の記法 dataという連想配列の中に、さらにauthorという連想配列が入っています
  //univは大学に相当する番号
  author: [{
    name: '密岡稜太',
    univ: 0,
    grade: 6,
    photo: ''
  },{
    name: '天野公美子',
    univ: 0,
    grade: 3,
    photo: ''
  },{
    name: '川﨑由揮',
    univ: 0,
    grade: 3,
    photo: ''
  }],

  //複数の賞を取っている場合の記法。でも表示ダルそうだし章がかぶることなさそうですね
  award: [0, 1, 2, 3],

  //サムネなどの画像のファイルパス。
  PC_S: '',
  PC_M: '',
  PC_L: '',
  Mobile_S: '',
  Mobile_M: '',
  Mobile_L: '',
  Original: ''
},

{
  id: -1,
  title: '',
  genre: -1,
  author: [{
    name: '',
    univ: -1,
    grade: -1,
    photo: ''
  }],
  award: [-1],
  PC_S: '',
  PC_M: '',
  PC_L: '',
  Mobile_S: '',
  Mobile_M: '',
  Mobile_L: '',
  Original: ''
},

{
  id: -1,
  title: '',
  genre: -1,
  author: [{
    name: '',
    univ: -1,
    grade: -1,
    photo: ''
  }],
  award: [-1],
  PC_S: '',
  PC_M: '',
  PC_L: '',
  Mobile_S: '',
  Mobile_M: '',
  Mobile_L: '',
  Original: ''
}];

//console.log(data[0]['author'][0]['name']);
