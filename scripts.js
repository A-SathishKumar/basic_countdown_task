function displayCountdown(count, callback) {
    var countdownDiv = document.getElementById("countdown");
    var delay = 1000;

    function updateCountdown() {
        countdownDiv.innerHTML = count;
        count--;

        // Base case: when count reaches 0
        if (count < 0) {
            countdownDiv.innerHTML = "Happy Independence Day!";
            countdownDiv.setAttribute("style","font-size: 40px")
            if (typeof callback === 'function') {
                callback();
            }
        } else {
            setTimeout(updateCountdown, delay);
        }
    }

    updateCountdown();
}

displayCountdown(10, function() {
    console.log("Independence Day message displayed!");
});

function createPaperPiece() {
    var paperPiece = document.createElement("div");
    paperPiece.className = "paper-piece";
    paperPiece.style.left = Math.random() * window.innerWidth + "px";
    paperContainer.appendChild(paperPiece);

    // Remove paper piece after animation ends
    paperPiece.addEventListener("animationend", function() {
        paperContainer.removeChild(paperPiece);
    });
}

// Create paper pieces at intervals
setInterval(createPaperPiece, 500);