async function checkFlag(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const response = await fetch("../flags.json");
    const flags = await response.json();

    if (username === "admin" && password === "' OR '1'='1") {
        document.getElementById("result").innerText = "Correct Flag: " + flags[0];
    } else {
        document.getElementById("result").innerText = "Incorrect credentials. Try again!";
    }
}
