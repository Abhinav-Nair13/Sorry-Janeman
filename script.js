const button = document.getElementById("verifyBtn");

button.onclick = function () {

    const input = document.getElementById("girlfriendName");
    const message = document.getElementById("message");

    if (input.value.trim().toLowerCase() === "bhoot") {

        // Hide first screen
        document.getElementById("welcomeScreen").style.display = "none";

        // Show search screen
        document.getElementById("searchScreen").style.display = "block";

        const loading = document.getElementById("loadingText");

        loading.innerHTML = `
        🔍 Initializing Love Scanner...
        `;

        setTimeout(function () {
            loading.innerHTML = `
            🔍 Initializing Love Scanner... ✅
            <br><br>
            📡 Searching for cutest girlfriend...
            `;
        }, 1000);

        setTimeout(function () {
            loading.innerHTML = `
            🔍 Initializing Love Scanner... ✅
            <br>
            📡 Searching for cutest girlfriend... ✅
            <br><br>
            😊 Analyzing smile...
            `;
        }, 2000);

        setTimeout(function () {
            loading.innerHTML = `
            🔍 Initializing Love Scanner... ✅
            <br>
            📡 Searching for cutest girlfriend... ✅
            <br>
            😊 Smile Analysis... ✅
            <br><br>
            ❤️ Measuring Cuteness...
            `;
        }, 3000);

        setTimeout(function () {
            loading.innerHTML = `
            🔍 Initializing Love Scanner... ✅
            <br>
            📡 Searching for cutest girlfriend... ✅
            <br>
            😊 Smile Analysis... ✅
            <br>
            ❤️ Cuteness Level... 1000/100 ❤️
            <br><br>
            🎀 Verifying Identity...
            `;
        }, 4000);

        setTimeout(function () {
            loading.innerHTML = `
            <h2>❤️ 1 MATCH FOUND ❤️</h2>

            <br>

            👑 <b>Name:</b> Bhoot

            <br><br>

            💖 <b>Status:</b> Cutest Girlfriend Alive

            <br><br>

            🌹 <b>Relationship Status:</b> Apple's Forever Person

            <br><br>

            ✅ Identity Verified
            `;
        }, 5500);

    }

    else {

        message.style.color = "red";
        message.innerHTML = "❌ Unauthorized User";

    }

};
