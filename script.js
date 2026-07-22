const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", verifyName);

function verifyName(){

    const name = document
    .getElementById("girlfriendName")
    .value
    .trim()
    .toLowerCase();

    const message = document.getElementById("message");

    if(name === "Mansi Singh"){

        message.style.color = "green";

        message.innerHTML = "✅ Identity Verified ❤️";

    }

    else{

        message.style.color = "red";

        message.innerHTML = "❌ Unauthorized User";

    }

}
