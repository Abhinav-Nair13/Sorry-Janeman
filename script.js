const button = document.getElementById("verifyBtn");

button.onclick = function () {

    const input = document.getElementById("girlfriendName");
    const message = document.getElementById("message");

    if (input.value.trim().toLowerCase() === "bhoot") {

        // Hide the first screen
        document.getElementById("welcomeScreen").style.display = "none";

        // Show the second screen
        document.getElementById("searchScreen").style.display = "block";

        const loading = document.getElementById("loadingText");

        loading.innerHTML = "🔍 Searching cutest girlfriend...";

        setTimeout(function () {
            loading.innerHTML = "💖 1 Match Found";
        }, 1500);

        setTimeout(function () {
            loading.innerHTML = `
                ❤️ 1 Match Found ❤️
                <br><br>
                Name: Bhoot
                <br>
                Status: Cutest Girlfriend Alive 👑
                <br><br>
                ✅ Identity Verified
            `;
        }, 3000);

    } else {

        message.style.color = "red";
        message.innerHTML = "❌ Unauthorized User";

    }
};
