const romaf = document.getElementById('roma');
const userf = document.getElementById('user');
const cc_pos = document.getElementById('cc-pos');
const id = window.location.href.split("=").pop();
const url = "https://script.google.com/macros/s/AKfycbziaNMSmmpQI00wLbfOklS0-d_zzuth5Rt8biB0DZkR2VwoNtD4EJD7UMz5l5hG7h0/exec";
const meibo = {akitomohiro:{'name': "安藝 友宏", 'roma': "Tomohiro Aki", 'pos': "a5"}, ishizukamasateru:{'name': "石塚 匡皓", 'roma': "Masateru Ishizuka", 'pos': "g3"}, ichinoseami:{'name': "市之瀬 愛海", 'roma': "Ami Ichinose", 'pos': "e1"}, ichinosetomomi:{'name': "市之瀬 智美", 'roma': "Tomomi Ichinose", 'pos': "e3"}, ichinosehideki:{'name': "市之瀬 秀樹", 'roma': "Hideki Ichinose", 'pos': "e2"}, itokohei:{'name': "伊藤 昂平", 'roma': "Kohei Ito", 'pos': "a4"}, uchidatadashi:{'name': "内田 賢司", 'roma': "Tadashi Uchida", 'pos': "b4"}, omurotakaho:{'name': "大室 高帆", 'roma': "Takaho Omuro", 'pos': "a1"}, okanomomoka:{'name': "岡野 百花", 'roma': "Momoka Okano", 'pos': "c1"}, odachikako:{'name': "小田 千佳子", 'roma': "Chikako Oda", 'pos': "g4"}, katoshiho:{'name': "加藤 詩歩", 'roma': "Shiho Kato", 'pos': "c2"}, kamemuramiki:{'name': "亀村 美樹", 'roma': "Miki Kamemura", 'pos': "d2"}, kamemotokeita:{'name': "亀元 奎汰", 'roma': "Keita Kamemoto", 'pos': "i4"}, kamemotoyasutaka:{'name': "亀元 康敬", 'roma': "Yasutaka Kamemoto", 'pos': "i1"}, kamemotoyukiko:{'name': "亀元 佑喜子", 'roma': "Yukiko Kamemoto", 'pos': "i2"}, kawaihirokazu:{'name': "河合 洋寿", 'roma': "Hirokazu Kawai", 'pos': "b5"}, kawaharakentaro:{'name': "川原 健太郎", 'roma': "Kentaro Kawahara", 'pos': "i5"}, kawaharayoshiko:{'name': "川原 佳子", 'roma': "Yoshiko Kawahara", 'pos': "i6"}, kitokosuke:{'name': "鬼頭 幸助", 'roma': "Kosuke Kito", 'pos': "b2"}, kumazawaakira:{'name': "熊澤 晶", 'roma': "Akira Kumazawa", 'pos': "b1"}, kondohikaru:{'name': "近藤 光", 'roma': "Hikaru Kondo", 'pos': "d5"}, sawadatakuya:{'name': "澤田 拓弥", 'roma': "Takuya Sawada", 'pos': "b7"}, suzukikei:{'name': "鈴木 景", 'roma': "Kei Suzuki", 'pos': "g1"}, sudonoriko:{'name': "須藤 典子", 'roma': "Noriko Sudo", 'pos': "h8"}, sudomaiko:{'name': "須藤 舞子", 'roma': "Maiko Sudo", 'pos': "h6"}, sudomasanori:{'name': "須藤 雅教", 'roma': "Masanori Sudo", 'pos': "h9"}, sudoreiko:{'name': "須藤 怜子", 'roma': "Reiko Sudo", 'pos': "h7"}, soneharatatsuki:{'name': "曽根原 樹", 'roma': "Tatsuki Sonehara", 'pos': "g6"}, sononoyuki:{'name': "園野 有希", 'roma': "Yuki Sonono", 'pos': "c4"}, takikanari:{'name': "瀧 加菜里", 'roma': "Kanari Taki", 'pos': "d3"}, tatewakireina:{'name': "立脇 鈴菜", 'roma': "Mayu Tatewaki", 'pos': "g2"}, chibashoya:{'name': "千葉 翔也", 'roma': "Reina Chiba", 'pos': "b6"}, nakazatoriki:{'name': "中里 力", 'roma': "Shoya Nakazato", 'pos': "a6"}, nakamuramadoka:{'name': "中村 円香", 'roma': "Riki Nakamura", 'pos': "c3"}, naritayumika:{'name': "成田 弓夏", 'roma': "Madoka Narita", 'pos': "g5"}, haradatakuya:{'name': "原田 拓弥", 'roma': "Yumika Harada", 'pos': "d6"}, horiekenta:{'name': "堀江 健太", 'roma': "Takuya Horie", 'pos': "d7"}, horikawaetsuji:{'name': "堀川 悦二", 'roma': "Kenta Horikawa", 'pos': "f4"}, horikawamasakatsu:{'name': "堀川 将克", 'roma': "Etsuji Horikawa", 'pos': "f1"}, horikawamanabu:{'name': "堀川 学", 'roma': "Masakatsu Horikawa", 'pos': "f3"}, horikawayoshiko:{'name': "堀川 美子", 'roma': "Manabu Horikawa", 'pos': "f2"}, maedaakihito:{'name': "前田 照仁", 'roma': "Yoshiko Maeda", 'pos': "h2"}, maedatakeshi:{'name': "前田 健", 'roma': "Akihito Maeda", 'pos': "h5"}, maedanaoko:{'name': "前田 斉子", 'roma': "Takeshi Maeda", 'pos': "h4"}, maedanatsuki:{'name': "前田 奈槻", 'roma': "Naoko Maeda", 'pos': "h1"}, maedaharuomi:{'name': "前田 啓臣", 'roma': "Natsuki Maeda", 'pos': "h3"}, masubuchitomonori:{'name': "増渕 那典", 'roma': "Haruomi Masubuchi", 'pos': "a2"}, machidayuto:{'name': "町田 裕斗", 'roma': "Tomonori Machida", 'pos': "a3"}, matsuokanatsumi:{'name': "松岡 夏美", 'roma': "Yuto Matsuoka", 'pos': "b3"}, matsudatakanori:{'name': "松田 貴教", 'roma': "Natsumi Matsuda", 'pos': "e6"}, matsudatoshiyo:{'name': "松田 年代", 'roma': "Takanori Matsuda", 'pos': "e5"}, matsudatomoko:{'name': "松田 知子", 'roma': "Toshiyo Matsuda", 'pos': "i3"}, matsudahiromu:{'name': "松田 弘", 'roma': "Tomoko Matsuda", 'pos': "e4"}, miurakanako:{'name': "三浦 可南子", 'roma': "Hiromu Miura", 'pos': "d1"}, mizunonatsuki:{'name': "水野 夏希", 'roma': "Kanako Mizuno", 'pos': "d4"},}
const pos = {a1: [14, 28],  a2: [13, 38],  a3: [14, 48],  a4: [24, 28],  a5: [26, 38],  a6: [24, 48],  b1: [35, 28],  b2: [33, 38],  b3: [34, 48],  b4: [43.5, 28],  b5: [46, 38],  b6: [44, 48],  b7: [39, 52],  c1: [54, 28],  c2: [54, 48],  c3: [64, 28],  c4: [64, 48],  d1: [75, 28],  d2: [72.5, 38],  d3: [74, 48],  d4: [83, 28],  d5: [85.5, 38],  d6: [84, 48],  d7: [79, 52],  e1: [5, 69],  e2: [3.5, 79],  e3: [6, 89],  e4: [14.5, 69],  e5: [16, 79],  e6: [14, 89],  f1: [25.5, 69],  f2: [25.5, 88.5],  f3: [34.5, 69],  f4: [34.5, 88.5],  g1: [45.5, 69],  g2: [43.5, 79],  g3: [45.5, 89],  g4: [54, 69],  g5: [56, 79],  g6: [54, 89],  h1: [68, 66],  h2: [64, 71],  h3: [63, 79],  h4: [65.5, 87],  h5: [70, 92],  h6: [72, 66],  h7: [75.5, 71],  h8: [76, 79],  h9: [74.5, 87],  i1: [85, 69],  i2: [83, 79],  i3: [86, 89],  i4: [94.5, 69],  i5: [96, 79],  i6: [94, 89]};

romaf.textContent = meibo[id].roma
userf.textContent = meibo[id].name
cc_pos.style.left = pos[meibo[id].pos][0] + "%";
cc_pos.style.top = pos[meibo[id].pos][1] + "%";


function writeToSpreadsheet(answer) {
    var data = {
        user: id,
        answer: answer
    };

    var options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // 送信データをJSON文字列に変換
    };

    fetch(url, options)
        .then(response => response.json()) // 応答をJSON形式に解析
        .then(data => console.log(data)) // 応答データをコンソールに表示
        .catch(error => console.error('Error:', error)); // エラーハンドリング
}
