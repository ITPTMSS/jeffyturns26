const modal = document.getElementById("letterModal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

// AUDIO PLAYER KHUSUS LETTER
const letterMusic = document.getElementById("letterMusic");

// OPEN LETTER + PLAY MUSIC
document.querySelectorAll(".open-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        // Ambil teks letter
        const target = btn.dataset.target;
        const text = document.getElementById(target).innerHTML;
        modalText.innerHTML = text;

        // Tampilkan modal
        modal.classList.remove("hidden");

        // START CONFETTI
        startConfetti();

        // --- PLAY DIFFERENT MUSIC ---
        const musicSrc = btn.dataset.music;
        if (musicSrc) {
            letterMusic.src = musicSrc;
            letterMusic.play();
        }
    });
});

// CLOSE MODAL
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    letterMusic.pause();
});

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        letterMusic.pause();
    }
});

// CONFETTI
function startConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

// NEXT → GALLERY
document.getElementById("loveBtn").addEventListener("click", () => {
    window.location.href = "gallery.html";
});
