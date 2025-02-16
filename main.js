document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play-btn");
    const gameContainer = document.getElementById("game-container");
    const gameImage = document.getElementById("game-image");
    const fullscreenBtn = document.getElementById("fullscreen-btn");

    function startGame() {
        console.log("Game Started");

        // Remove image & button
        playBtn.style.display = "none";
        gameImage.style.display = "none";

        // Create iframe
        const iframe = document.createElement("iframe");
        iframe.src = "https://ludoking.com/online/ludo.html";
        iframe.id = "game-frame";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        gameContainer.appendChild(iframe);
        fullscreenBtn.style.display = "block"; // Show fullscreen button
    }

    // Click events for button & image
    playBtn.addEventListener("click", startGame);
    gameImage.addEventListener("click", startGame);

    // Fullscreen functionality
    fullscreenBtn.addEventListener("click", function () {
        let gameFrame = document.getElementById("game-frame");

        if (gameFrame.requestFullscreen) {
            gameFrame.requestFullscreen();
        } else if (gameFrame.mozRequestFullScreen) {
            gameFrame.mozRequestFullScreen();
        } else if (gameFrame.webkitRequestFullscreen) {
            gameFrame.webkitRequestFullscreen();
        } else if (gameFrame.msRequestFullscreen) {
            gameFrame.msRequestFullscreen();
        }
    });
});
