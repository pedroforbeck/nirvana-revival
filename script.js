document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("nirvana-audio");
    const vinylBtn = document.getElementById("vinyl-btn");
    const statusText = document.getElementById("player-status");

    if (vinylBtn && audio) {
        vinylBtn.addEventListener("click", function() {
            if (audio.paused) {
                // Tenta dar o play
                audio.play().then(() => {
                    vinylBtn.classList.add("spin");
                    statusText.innerText = "NOW PLAYING: DRAIN YOU";
                    statusText.style.color = "var(--cyan)";
                }).catch(error => {
                    console.error("Erro ao tocar áudio:", error);
                });
            } else {
                audio.pause();
                vinylBtn.classList.remove("spin");
                statusText.innerText = "PAUSED";
                statusText.style.color = "var(--blood-red)";
            }
        });
    }
});