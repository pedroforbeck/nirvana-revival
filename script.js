const audioPlayer = document.getElementById('nirvana-audio');
const vinylBtn = document.getElementById('vinyl-btn');
const statusText = document.getElementById('player-status');

nylBtn.addEventListener('click', function() {

    // force audio
    if (audioPlayer.paused) {
        audioPlayer.play();
        vinylBtn.classList.add('spin');
        statusText.textContent = "NOW PLAYING: ANEURYSM '91";
        statusText.style.color = "var(--cyan)";
    }
    // pause
    else {
        audioPlayer.pause();
        vinylBtn.classList.remove('spin');
        statusText.textContent = "PAUSED";
        statusText.style.color = "var(--blood-red)";
    }
});