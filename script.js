const audio = document.getElementById("nirvana-audio");
const vinylBtn = document.getElementById("vinyl-btn");
const statusText = document.getElementById("player-status");

if (vinylBtn) {
    vinylBtn.onclick = function() {
        if (audio.paused) {
            audio.play().then(() => {
                vinylBtn.classList.add("spin");
                statusText.innerText = "NOW PLAYING: DRAIN YOU";
            }).catch(error => {
                console.log("Erro ao tocar:", error);
                alert("Clique novamente para confirmar o áudio.");
            });
        } else {
            audio.pause();
            vinylBtn.classList.remove("spin");
            statusText.innerText = "PAUSED";
        }
    };
}