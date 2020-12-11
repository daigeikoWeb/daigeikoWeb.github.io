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
  title: '漂い',
  genre: -1,
  author: [{name: '小谷久美',  univ: 0,  grade: -1}],
  award: 0,
  link: 'works/001.html',
  thomb: ['001_thumbnail_rect_blur.png','001_thumbnail_sq_blur.png']
},{
  id: 2,
  title: '',
  genre: -1,
  author: [{name: '櫻井風土',  univ: 0,  grade: -1}],
  award: 1,
  link: 'works/002.html',
  thomb: ['002_thumbnail_rect_blur.png','002_thumbnail_sq_blur.png']
},{
  id: 3,
  title: 'だれか ト なにか ニ うつりこむ',
  genre: -1,
  author: [{name: '芝 光彩',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/003.html',
  thomb: ['003_thumbnail_rect_blur.png','003_thumbnail_sq_blur.png']
},{
  id: 4,
  title: 'moon',
  genre: -1,
  author: [{name: '山地涼介',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/004.html',
  thomb: ['004_thumbnail_rect_blur.png','004_thumbnail_sq_blur.png']
},/*{
  id: 5,
  title: '',
  genre: -1,
  author: [{name: '緒方幸之郎',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/005.html',
  thomb: ['','','',
          '','','',
          'images/works5.png']
},*/{
  id: 6,
  title: 'papp',
  genre: -1,
  author: [{name: '森皓月',  univ: 1,  grade: -1},
           {name: '石川ひなた',  univ: 1,  grade: -1},
           {name: '工藤帆夏',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/006.html',
  thomb: ['006_thumbnail_rect_blur.png','006_thumbnail_sq_blur.png']
},{
  id: 7,
  title: 'mino',
  genre: -1,
  author: [{name: '相原洸太',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/007.html',
  thomb: ['007_thumbnail_rect_blur.png','007_thumbnail_sq_blur.png']
},/*{
  id: 8,
  title: '',
  genre: -1,
  author: [{name: '新井大地',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/008.html',
  thomb: ['001_thumbnail_rect_blur.png','001_thumbnail_sq_blur.png']
},*/{
  id: 9,
  title: 'KOA',
  genre: -1,
  author: [{name: '磯田彩穂李',  univ: 1,  grade: -1},
           {name: '幸田悠',  univ: 1,  grade: -1},
           {name: '小林美露',  univ: 1,  grade: -1},
           {name: '佐藤ななこ',  univ: 1,  grade: -1},
           {name: '松野晴彦',  univ: 1,  grade: -1},],
  award: -1,
  link: 'works/009.html',
  thomb: ['009_thumbnail_rect_blur.png','009_thumbnail_sq_blur.png']
},{
  id: 10,
  title: 'emat',
  genre: -1,
  author: [{name: '甲斐翔',  univ: 1,  grade: -1}],
  award: -1,
  link: 'works/010.html',
  thomb: ['010_thumbnail_rect_blur.png','010_thumbnail_sq_blur.png']
},/*{
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
},*/{
  id: 14,
  title: '香の音',
  genre: -1,
  author: [{name: '富嶋菜々香',  univ: 3,  grade: -1},
           {name: '寺崎薫',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/014.html',
  thomb: ['014_thumbnail_rect_blur.png','014_thumbnail_sq_blur.png']
},{
  id: 15,
  title: '気になる木',
  genre: -1,
  author: [{name: '内尾良太朗',  univ: 3,  grade: 2}],
  award: -1,
  link: 'works/015.html',
  thomb: ['015_thumbnail_rect_blur.png','015_thumbnail_sq_blur.png']
},{
  id: 16,
  title: 'CLAY SOUND',
  genre: -1,
  author: [{name: '西村息吹',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/016.html',
  thomb: ['016_thumbnail_rect_blur.png','016_thumbnail_sq_blur.png']
},{
  id: 17,
  title: '自由気ままに',
  genre: -1,
  author: [{name: '大嶺太聖',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/017.html',
  thomb: ['017_thumbnail_rect_blur.png','017_thumbnail_sq_blur.png']
},{
  id: 18,
  title: '高架下のキラキラ',
  genre: -1,
  author: [{name: '墨田知世',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/018.html',
  thomb: ['018_thumbnail_rect_blur.png','018_thumbnail_sq_blur.png']
},{
  id: 19,
  title: '',
  genre: -1,
  author: [{name: '密岡稜大',  univ: 3,  grade: -1},
           {name: '土肥真維華',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/019.html',
  thomb: ['019_thumbnail_rect_blur.png','019_thumbnail_sq_blur.png']
},{
  id: 20,
  title: 'NON NEUTRAL',
  genre: -1,
  author: [{name: '凌亮太朗',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/020.html',
  thomb: ['020_thumbnail_rect_blur.png','020_thumbnail_sq_blur.png']
},{
  id: 21,
  title: 'アートのたねと半農半芸',
  genre: -1,
  author: [{name: '甲斐隆児',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/021.html',
  thomb: ['021_thumbnail_rect_blur.png','021_thumbnail_sq_blur.png']
},{
  id: 22,
  title: 'postmouillette',
  genre: -1,
  author: [{name: '山田和佳',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/022.html',
  thomb: ['022_thumbnail_rect_blur.png','022_thumbnail_sq_blur.png']
},{
  id: 23,
  title: '『Silhouette。』',
  genre: -1,
  author: [{name: '小濵行秀',  univ: 3,  grade: -1}],
  award: -1,
  link: 'works/023.html',
  thomb: ['023_thumbnail_rect_blur.png','023_thumbnail_sq_blur.png']
},{
  id: 24,
  title: '「they」',
  genre: -1,
  author: [{name: '佐名海斗',  univ: 0,  grade: -1}],
  award: -1,
  link: 'works/024.html',
  thomb: ['024_thumbnail_rect_blur.png','024_thumbnail_sq_blur.png']
}];
