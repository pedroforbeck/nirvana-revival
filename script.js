document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("nirvana-audio");
    const vinylBtn = document.getElementById("vinyl-btn");
    const statusText = document.getElementById("player-status");

    // Verifica se os elementos existem antes de tentar usá-los
    if (vinylBtn && audio) {
        vinylBtn.addEventListener("click", function() {
            if (audio.paused) {
                audio.play();
                vinylBtn.classList.add("spin");
                statusText.innerText = "NOW PLAYING: DRAIN YOU";
            } else {
                audio.pause();
                vinylBtn.classList.remove("spin");
                statusText.innerText = "PAUSED";
            }
        });
    }
});
