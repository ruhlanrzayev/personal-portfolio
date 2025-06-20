const music = document.getElementById('sonBaharAudio');
const mainCont = document.getElementById('mainContainer');
const clickCont = document.getElementById('clickContainer');
const copyName = document.getElementById('copyDiscordName');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

clickCont.addEventListener('click', () => {
    clickCont.style.display = 'none';
    mainCont.style.display = 'flex';

    setTimeout(() => {
        mainCont.style.opacity = '1';
        mainCont.style.transform = 'translateY(0)';
    }, 10); 

    music.volume = 1;
    music.loop = true;
    music.play();
});

music.addEventListener('loadedmetadata', () => {
    progressBar.max = Math.floor(music.duration);
    durationEl.textContent = formatTime(music.duration);
});

music.addEventListener('timeupdate', () => {
    progressBar.value = Math.floor(music.currentTime);
    currentTimeEl.textContent = formatTime(music.currentTime);
});

progressBar.addEventListener('input', () => {
    music.currentTime = progressBar.value;
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}
