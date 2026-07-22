// ----------------------
// GIRLFRIEND VERIFICATION
// ----------------------

const button = document.getElementById("verifyBtn");

button.onclick = function () {

    const input = document.getElementById("girlfriendName");
    const message = document.getElementById("message");

    if (input.value.trim().toLowerCase() === "bhoot") {

        // Hide first screen
        document.getElementById("welcomeScreen").style.display = "none";

        // Show scanner
        document.getElementById("searchScreen").style.display = "block";

        const loading = document.getElementById("loadingText");

        // Hide Continue button initially
        document.getElementById("continueBtn").style.display = "none";

        // Step 1
        loading.innerHTML = `
        🔍 Initializing Love Scanner...
        `;

        // Step 2
        setTimeout(function () {

            loading.innerHTML = `
            🔍 Initializing Love Scanner... ✅
            <br><br>
            📡 Searching for cutest girlfriend...
            `;

        }, 2000);

        // Step 3
        setTimeout(function () {

            loading.innerHTML = `
            🔍 Initializing Love Scanner... ✅
            <br>
            📡 Searching for cutest girlfriend... ✅
            <br><br>
            😊 Analyzing smile...
            `;

        }, 5000);

        // Step 4
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

        }, 8000);

        // Step 5
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

        }, 11000);

        // Final Result
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

            // Show Continue button
            document.getElementById("continueBtn").style.display = "block";

        }, 15000);

    } else {

        message.style.color = "red";
        message.innerHTML = "❌ Unauthorized User";

    }

};


// ----------------------
// CONTINUE BUTTON
// ----------------------

const continueBtn = document.getElementById("continueBtn");

continueBtn.onclick = function () {

    document.getElementById("searchScreen").style.display = "none";
    document.getElementById("boyfriendScreen").style.display = "block";

};


// ----------------------
// BOYFRIEND VERIFICATION
// ----------------------

const boyfriendBtn = document.getElementById("boyfriendBtn");

boyfriendBtn.onclick = function () {

    const boyfriendName = document
        .getElementById("boyfriendName")
        .value
        .trim()
        .toLowerCase();

    const boyfriendMessage = document.getElementById("boyfriendMessage");

    if (boyfriendName === "apple") {

        boyfriendMessage.style.color = "green";

        boyfriendMessage.innerHTML =
            "✅ Boyfriend Verified ❤️<br><br>Loading Secret Surprise...";

        setTimeout(function () {

            document.getElementById("boyfriendScreen").style.display = "none";
            document.getElementById("envelopeScreen").style.display = "block";

        }, 2000);

    } else {

        boyfriendMessage.style.color = "red";

        boyfriendMessage.innerHTML =
            "❌ Incorrect Boyfriend!<br>Only Bhoot's Apple can continue ❤️";

    }

};
