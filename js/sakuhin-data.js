const data = [

/*記入例
{
  id: 999,
  title: '大芸工展web',
  genre: 3,

  //複数人関わっている場合の記法 dataという連想配列の中に、さらにauthorという連想配列が入っています
  //univは大学に相当する番号、gradeは学年
  author: [{name: '密岡稜太', univ: 0, grade: 6},
           {name: '天野公美子', univ: 0, grade: 3},
           {name: '川﨑由揮', univ: 0, grade: 3}],

  //賞を取っている場合の記法。賞に番号を振って取った賞の番号を入れたいですね〜〜〜
  award: 3,

  //サムネなどの画像のファイルパス。PC_Sとかには相当するファイルの名前を突っ込んで欲しいです
  thomb: ['PC_S','PC_M','PC_L',
          'Mobile_S','Mobile_M','Mobile_L',
          'Original']
},
*/
{
  id: 1,
  title: '',
  genre: -1,
  author: [{name: '小谷久美',  univ: 0,  grade: -1}],
  award: 0,
  link: 'works/001.html',
  thomb: ['','','',
          '','','',
          'images/works1.png']
},{
  id: 2,
  title: '',
  genre: -1,
  author: [{name: '櫻井風土',  univ: 0,  grade: -1}],
  award: 1,
  link: 'works/002.html',
  thomb: ['','','',
          '','','',
          'images/works2.png']
},{
  id: 3,
  title: '',
  genre: -1,
  author: [{name: '芝 光彩',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/003.html',
  thomb: ['','','',
          '','','',
          'images/works3.png']
},{
  id: 4,
  title: '',
  genre: -1,
  author: [{name: '山地涼介',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/004.html',
  thomb: ['','','',
          '','','',
          'images/works4.png']
},{
  id: 5,
  title: '',
  genre: -1,
  author: [{name: '緒方幸之郎',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/005.html',
  thomb: ['','','',
          '','','',
          'images/works5.png']
},{
  id: 6,
  title: '',
  genre: -1,
  author: [{name: '森皓月',  univ: 1,  grade: -1},
           {name: '石川ひなた',  univ: 1,  grade: -1},
           {name: '工藤帆夏',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/006.html',
  thomb: ['','','',
          '','','',
          'images/works6.png']
},{
  id: 7,
  title: '',
  genre: -1,
  author: [{name: '相原洸太',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/007.html',
  thomb: ['','','',
          '','','',
          'images/works7.png']
},{
  id: 8,
  title: '',
  genre: -1,
  author: [{name: '新井大地',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/008.html',
  thomb: ['','','',
          '','','',
          'images/works8.png']
},{
  id: 9,
  title: '',
  genre: -1,
  author: [{name: '磯田彩穂李',  univ: 1,  grade: -1},
           {name: '幸田悠',  univ: 1,  grade: -1},
           {name: '小林美露',  univ: 1,  grade: -1},
           {name: '佐藤ななこ',  univ: 1,  grade: -1},
           {name: '松野晴彦',  univ: 1,  grade: -1},],
  award: -1,
  link: 'works/009.html',
  thomb: ['','','',
          '','','',
          'images/works9.png']
},{
  id: 10,
  title: '',
  genre: -1,
  author: [{name: '甲斐翔',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/010.html',
  thomb: ['','','',
          '','','',
          'images/works1.png']
},{
  id: 11,
  title: '',
  genre: -1,
  author: [{name: '寺島悠太郎',  univ: 2,  grade: -1}],
  award: -1,
  link: 'works/011.html',
  thomb: ['','','',
          '','','',
          'images/works2.png']
},{
  id: 13,
  title: '',
  genre: -1,
  author: [{name: '安達大策',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/013.html',
  thomb: ['','','',
          '','','',
          'images/works3.png']
},{
  id: 14,
  title: '',
  genre: -1,
  author: [{name: '富嶋菜々香',  univ: 3,  grade: -1},
           {name: '寺崎薫',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/014.html',
  thomb: ['','','',
          '','','',
          'images/works4.png']
},{
  id: 15,
  title: '気になる木',
  genre: -1,
  author: [{name: '内尾良太朗',  univ: 3,  grade: 2}],
  award: -1,
  link: 'works/015.html',
  thomb: ['','','',
          '','','',
          'works/015/photos/015_thumbnail.png']
},{
  id: 16,
  title: '',
  genre: -1,
  author: [{name: '西村息吹',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/016.html',
  thomb: ['','','',
          '','','',
          'images/works5.png']
},{
  id: 17,
  title: '',
  genre: -1,
  author: [{name: '大嶺太聖',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/017.html',
  thomb: ['','','',
          '','','',
          'images/works6.png']
},{
  id: 18,
  title: '',
  genre: -1,
  author: [{name: '墨田知世',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/018.html',
  thomb: ['','','',
          '','','',
          'images/works7.png']
},{
  id: 19,
  title: '',
  genre: -1,
  author: [{name: '密岡稜大',  univ: 3,  grade: -1},
           {name: '土肥真維華',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/019.html',
  thomb: ['','','',
          '','','',
          'images/works8.png']
},{
  id: 20,
  title: '',
  genre: -1,
  author: [{name: '凌亮太朗',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/020.html',
  thomb: ['','','',
          '','','',
          'images/works9.png']
},{
  id: 21,
  title: '',
  genre: -1,
  author: [{name: '甲斐隆児',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/021.html',
  thomb: ['','','',
          '','','',
          'images/works1.png']
},{
  id: 22,
  title: '',
  genre: -1,
  author: [{name: '山田和佳',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/022.html',
  thomb: ['','','',
          '','','',
          'images/works2.png']
},{
  id: 23,
  title: '',
  genre: -1,
  author: [{name: '小濵行秀',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/023.html',
  thomb: ['','','',
          '','','',
          'images/works3.png']
},{
  id: 24,
  title: '',
  genre: -1,
  author: [{name: '佐名海斗',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/024.html',
  thomb: ['','','',
          '','','',
          'images/works4.png']
}];
