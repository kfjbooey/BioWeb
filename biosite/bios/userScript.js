const overlay = document.getElementById('overlay');
const music = document.getElementById('bgMusic')
const video = document.getElementById('bgVideo');

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    music.play();
    video.play();
});