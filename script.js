const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');
const romaf = document.getElementById('roma');
const userf = document.getElementById('user');
const seat = document.getElementById('seatimg');
const id = window.location.href.split("/").pop().replace(/\.html.*/, "");
const url = "https://script.google.com/macros/s/AKfycbziaNMSmmpQI00wLbfOklS0-d_zzuth5Rt8biB0DZkR2VwoNtD4EJD7UMz5l5hG7h0/exec";
const meibo = {kawaihirokazu:{'name':"河合洋寿",'roma':"Kawai",'role':"新郎"},akitomohiro:{'name':"安藝友宏",'roma':"Aki",'role':"新郎"},matsudatakanori:{'name':"松田貴教",'roma':"Matsuda",'role':"新郎(親族)"},matsudatoshiyo:{'name':"松田年代",'roma':"Matsuda",'role':"新郎(親族)"},matsudahiromu:{'name':"松田弘",'roma':"Matsuda",'role':"新郎(親族)"},ichinoseami:{'name':"市之瀬愛海",'roma':"Ichinose",'role':"新郎(親族)"},ichinosetomomi:{'name':"市之瀬智美",'roma':"Ichinose",'role':"新郎(親族)"},ichinosehideki:{'name':"市之瀬秀樹",'roma':"Ichinose",'role':"新郎(親族)"},omurotakaho:{'name':"大室高帆",'roma':"Omuro",'role':"新郎"},itokohei:{'name':"伊藤昂平",'roma':"Ito",'role':"新郎"},matsuokanatsumi:{'name':"松岡夏美",'roma':"Matsuoka",'role':"新郎"},kitokosuke:{'name':"鬼頭幸助",'roma':"Kito",'role':"新郎"},kumazawaakira:{'name':"熊澤晶",'roma':"Kumazawa",'role':"新郎"},masubuchitomonori:{'name':"増渕那典",'roma':"Masubuchi",'role':"新郎"},chibashoya:{'name':"千葉翔也",'roma':"Chiba",'role':"新郎"},machidayuto:{'name':"町田裕斗",'roma':"Machida",'role':"新郎"},sawadatakuya:{'name':"澤田拓弥",'roma':"Sawada",'role':"新郎"},nakazatoriki:{'name':"中里力",'roma':"Nakazato",'role':"新郎"},uchidatadashi:{'name':"内田賢司",'roma':"Uchida",'role':"新郎"},horiekenta:{'name':"堀江健太",'roma':"Horie",'role':"新婦"},haradatakuya:{'name':"原田拓弥",'roma':"Harada",'role':"新婦"},kondohikaru:{'name':"近藤光",'roma':"Kondo",'role':"新婦"},takenakamayu:{'name':"竹中茉佑",'roma':"Takenaka",'role':"新婦"},mizunonatsuki:{'name':"水野夏希",'roma':"Mizuno",'role':"新婦"},tatewakireina:{'name':"立脇鈴菜",'roma':"Tatewaki",'role':"新婦"},suzukikei:{'name':"鈴木景",'roma':"Suzuki",'role':"新婦"},ishizukamasateru:{'name':"石塚匡皓",'roma':"Ishizuka",'role':"新婦"},naritayumika:{'name':"成田弓夏",'roma':"Narita",'role':"新婦"},soneharatatsuki:{'name':"曽根原樹",'roma':"Sonehara",'role':"新婦"},odachikako:{'name':"小田千佳子",'roma':"Oda",'role':"新婦"},takikanari:{'name':"瀧加菜里",'roma':"Taki",'role':"新婦"},miurakanako:{'name':"三浦可南子",'roma':"Miura",'role':"新婦"},kamemuramiki:{'name':"亀村美樹",'roma':"Kamemura",'role':"新婦"},katoshiho:{'name':"加藤詩歩",'roma':"Kato",'role':"新婦"},okanomomoka:{'name':"岡野百花",'roma':"Okano",'role':"新婦"},sononoyuki:{'name':"園野有希",'roma':"Sonono",'role':"新婦"},nakamuramadoka:{'name':"中村円香",'roma':"Nakamura",'role':"新婦"},maedatakeshi:{'name':"前田健",'roma':"Maeda",'role':"新婦(親族)"},maedanaoko:{'name':"前田斉子",'roma':"Maeda",'role':"新婦(親族)"},maedaharuomi:{'name':"前田啓臣",'roma':"Maeda",'role':"新婦(親族)"},maedaakihito:{'name':"前田照仁",'roma':"Maeda",'role':"新婦(親族)"},maedanatsuki:{'name':"前田奈槻",'roma':"Maeda",'role':"新婦(親族)"},sudomasanori:{'name':"須藤雅教",'roma':"Sudo",'role':"新婦(親族)"},sudonoriko:{'name':"須藤典子",'roma':"Sudo",'role':"新婦(親族)"},sudoreiko:{'name':"須藤怜子",'roma':"Sudo",'role':"新婦(親族)"},sudomaiko:{'name':"須藤舞子",'roma':"Sudo",'role':"新婦(親族)"},horikawaetsuji:{'name':"堀川悦二",'roma':"Horikawa",'role':"新婦(親族)"},horikawayoshiko:{'name':"堀川美子",'roma':"Horikawa",'role':"新婦(親族)"},horikawamanabu:{'name':"堀川学",'roma':"Horikawa",'role':"新婦(親族)"},horikawamasakatsu:{'name':"堀川将克",'roma':"Horikawa",'role':"新婦(親族)"},matsudatomoko:{'name':"松田知子",'roma':"Matsuda",'role':"新婦(親族)"},kamemotoyukiko:{'name':"亀元佑喜子",'roma':"Kamemoto",'role':"新婦(親族)"},kamemotokeita:{'name':"亀元奎汰",'roma':"Kamemoto",'role':"新婦(親族)"},kamemotoyasutaka:{'name':"亀元康敬",'roma':"Kamemoto",'role':"新婦(親族)"},kawaharakentaro:{'name':"川原健太郎",'roma':"Kawahara",'role':"新婦(親族)"},kawaharayoshiko:{'name':"川原佳子",'roma':"Kawahara",'role':"新婦(親族)"}}

romaf.textContent = meibo[id].roma
userf.textContent = meibo[id].name

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
function openSidebar() {
    sidebar.style.left = '0';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; /* スクロールを無効化 */
}

function closeSidebar() {
    sidebar.style.left = '-250px';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; /* スクロールを有効化 */
}

function loadTopPage() {
    content.innerHTML = `
                <h1 style="font-family:cursive">`+ user + `-San<br>Welcome to <br> Tatsuki & Sakiko 's Wedding Party</h1>
            `;
    closeSidebar();
    header.style.display = 'none';
    // body.style.background-color=null;
    document.body.style.backgroundImage = "url(https://drive.google.com/uc?id=1lT3eqossuwzjPbpvTQ4TonSOTF7wV4lh)";
}

function loadSeatPage() {
    content.innerHTML = seatHtml;
    closeSidebar();
    header.style.display = 'block';
    header.style.backgroundImage = "url(https://drive.google.com/uc?id=1eonxUWg3Bk3EaunGqelRpSKVOEUv3mbJ)";
    headerTitle.textContent = "席次";
    document.body.style.backgroundImage = "none";
}

function loadProfilePage() {
    content.innerHTML = profileHtml;
    closeSidebar();
    header.style.display = 'block';
    header.style.backgroundImage = "url(https://drive.google.com/uc?id=1eonxUWg3Bk3EaunGqelRpSKVOEUv3mbJ)";
    headerTitle.textContent = "Profile";
    document.body.style.backgroundImage = "none";
}

function loadMenuPage() {
    content.innerHTML = menuHtml;
    closeSidebar();
    header.style.display = 'block';
    header.style.backgroundImage = "url(https://drive.google.com/uc?id=198cEPypWrpHRwLoet4LOkkIB2AkVoViA)";
    headerTitle.textContent = "Menu";
    document.body.style.backgroundImage = "none";
}

function loadQuizPage() {
    content.innerHTML = quizHtml;
    closeSidebar();
    header.style.display = 'block';
    header.style.backgroundImage = "url(https://drive.google.com/uc?id=198cEPypWrpHRwLoet4LOkkIB2AkVoViA)";
    headerTitle.textContent = "Quiz";
    document.body.style.backgroundImage = "none";
}

// menuButton.addEventListener('click', openSidebar);
// overlay.addEventListener('click', closeSidebar);