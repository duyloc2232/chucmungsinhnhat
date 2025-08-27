
document.getElementById('play-button').addEventListener('click', function() {
    const birthdaySong = document.getElementById('birthday-song');
    
    // Kiểm tra nếu nhạc đã tạm dừng hoặc chưa phát, thì phát nhạc
    if (birthdaySong.paused) {
        birthdaySong.play()
            .then(() => {
                console.log("Nhạc đã phát thành công!");
                this.style.display = 'none'; // Ẩn nút sau khi đã phát nhạc
            })
            .catch(error => {
                console.error("Lỗi khi phát nhạc:", error);
                alert("Rất tiếc, không thể phát nhạc. Vui lòng kiểm tra lại trình duyệt!");
            });
    }
});

// --- Confetti Effect ---
const confettiContainer = document.getElementById('confetti-container');
const colors = ['#ffeb3b', '#ff4081', '#4fc3f7', '#a7ffeb', '#c7ceea'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw'; // Vị trí ngang ngẫu nhiên
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian rơi ngẫu nhiên
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = Math.random() * 0.7 + 0.3; // Độ trong suốt ngẫu nhiên
    confettiContainer.appendChild(confetti);

    // Xóa confetti sau khi rơi khỏi màn hình để tránh quá tải DOM
    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

// Tạo liên tục các mảnh confetti
setInterval(createConfetti, 100); // Mỗi 100ms tạo một mảnh

// --- Balloon Effect ---
const balloonContainer = document.getElementById('balloon-container');
const balloonColors = ['#ff9aa2', '#b5ead7', '#c7ceea', '#ffdac1'];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 80 + 10 + 'vw'; // Vị trí ngang ngẫu nhiên (tránh sát rìa)
    balloon.style.animationDuration = Math.random() * 10 + 10 + 's'; // Thời gian bay ngẫu nhiên
    balloon.style.animationDelay = Math.random() * 5 + 's'; // Độ trễ khởi tạo ngẫu nhiên
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloonContainer.appendChild(balloon);

    // Xóa balloon sau khi bay khỏi màn hình
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Tạo liên tục các quả bóng bay
setInterval(createBalloon, 2000); // Mỗi 2 giây tạo một quả