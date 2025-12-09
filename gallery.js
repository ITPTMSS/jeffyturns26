// ANIMASI MASUK SATU-SATU
document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".polaroid");

    photos.forEach((item, index) => {
        setTimeout(() => item.classList.add("show"), index * 300);
    });
});

// RANDOM ROTATION BIAR AESTHETIC
document.querySelectorAll(".polaroid").forEach(card => {
    const rotate = (Math.random() * 10) - 5;
    card.style.rotate = `${rotate}deg`; // ← FIX
});

const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeModal = modal.querySelector(".close");

document.querySelectorAll(".polaroid").forEach(card => {
    card.addEventListener("click", () => {
        modalImg.src = card.querySelector("img").src;
        modalCaption.textContent = card.querySelector("p").textContent;
        modal.classList.remove("hidden");

        confetti({
            particleCount: 60,
            spread: 50,
            origin: { y: 0.6 },
            zIndex: 9999    // ← CONFETTI KELIATAN DI ATAS MODAL
        });
    });
});



window.onload = () => {
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        zIndex: 9999    // ← SUPAYA MUNCUL
    });
};
