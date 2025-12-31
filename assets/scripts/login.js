document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "https://raspi-kickbase.ipv64.net";

    const nameSpan = document.getElementById("name");
    if (nameSpan) {
        const params = new URLSearchParams(window.location.search);
        const name = params.get("name") || "Gast";
        nameSpan.textContent = name;
    }

    const form = document.getElementById("login-form");
    if (!form) return;

    const usermail = document.getElementById("user-mail");
    const userpw = document.getElementById("user-password");
    const adminpw = document.getElementById("admin-password");
    const status = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const ENDPOINT = "/login";

        const payload = {
            usermail: usermail.value.trim(),
            userpw: userpw.value,
            adminpw: adminpw.value,
        };

        try {
            const response = await fetch(BASE_URL + ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const data = await response.json();

            if (!data.ok) {
                status.textContent = data.error || "Login fehlgeschlagen!";
                return;
            }

            status.textContent = "Login erfolgreich!";
            const name = data.name || "Gast";
            window.location.href = `content.html?name=${encodeURIComponent(name)}`;
        } catch (error) {
            status.textContent = "Server nicht erreicht!";
            console.log(error);
        }
    });
});