const RASPI_URL = "https://powell-marketplace-groups-membrane.trycloudflare.com/api/login";

const out = document.getElementById("out");

document.getElementById("button-login").addEventListener("click", async () => {
    out.textContent = "Sende Login...";

    const payload = {
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        adminpassword: document.getElementById("adminpassword").value
    };

    try {
        const res = await fetch(RASPI_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Login fehlgeschlagen");

        out.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        out.textContent = "Fehler: " + err.message;
    }

});