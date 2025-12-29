document.addEventListener("DOMContentLoaded", () => {
    const BASE_URL = "https://raspi-kickbase.ipv64.net";
    const ENDPOINT = "/login";

    const form = document.getElementById("login-form");
    const usermail = document.getElementById("user-mail");
    const userpw = document.getElementById("user-password");
    const adminpw = document.getElementById("admin-password");
    const status = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

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
            status.textContent = "Login erfolgreich!";
        } catch (error) {
            status.textContent = "Login fehlgeschlagen!";
        }
    });
});