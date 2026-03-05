// script.js
function showAdminPanel() {
    document.getElementById('adminPanel').style.display = 'block';
}

// 日历器
function displayCalendar() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const gregorian = now.toLocaleDateString('zh-CN', options);
    const lunar = '农历正月十五';
    document.getElementById('calendarDisplay').innerHTML = `公历：${gregorian}<br>农历：${lunar}<br>属性：宜出行，忌动土`;
}

// 彩票API
async function fetchLotteryResults() {
    try {
        const response = await fetch('https://1234kj.com/api/opencode/2032?type=new');
        const data = await response.json();
        document.getElementById('lotteryResults').innerHTML = `最新开奖结果：期号 ${data.expect} - ${data.openCode}`;
    } catch (error) {
        document.getElementById('lotteryResults').innerHTML = '无法加载开奖结果';
    }
}

// 初始化
displayCalendar();
fetchLotteryResults();