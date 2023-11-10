const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');
const userf = document.getElementById('user');
const seat = document.getElementById('seatimg');
const user = window.location.href.split("/").pop().replace(/\.html.*/, "");
const url = "https://script.google.com/macros/s/AKfycbziaNMSmmpQI00wLbfOklS0-d_zzuth5Rt8biB0DZkR2VwoNtD4EJD7UMz5l5hG7h0/exec";

userf.textContent=user;

function writeToSpreadsheet(answer) {
    var data = {
        user: user,
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

menuButton.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);