const line1Text = "To The Man";
const line2Text = "Who Makes My Life Easier, Brighter, and Full of Love.";
const line3Text = "Happy Level Up, Jeffy ♡";
const line4Text = "Cheers For The New Chapter";

function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }
    typing();
}

window.onload = () => {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "none";

    typeWriter("line1", line1Text, 40, () => {
        typeWriter("line2", line2Text, 40, () => {
            typeWriter("line3", line3Text, 40, () => {
                typeWriter("line4", line4Text, 40, () => {
                    nextBtn.style.display = "block";
                });
            });
        });
    });
};

// tombol → pindah halaman
document.getElementById("nextBtn").addEventListener("click", () => {
    window.location.href = "letter.html";
});
