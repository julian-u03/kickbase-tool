document.addEventListener("DOMContentLoaded", () => {
  const url = "https://raspi-kickbase.ipv64.net/health";

  const btn = document.getElementById("btn");
  const statusEl = document.getElementById("status");

  if (!btn || !statusEl) {
    console.error("Button oder Status-Element fehlt in index.html");
    return;
  }

  btn.addEventListener("click", async () => {
    statusEl.textContent = "Status: teste Verbindung…";

    try {
      const res = await fetch(url, { method: "GET" });

      if (!res.ok) {
        statusEl.textContent = `Status: Server erreichbar, aber Fehlercode ${res.status}`;
        return;
      }

      const data = await res.json();
      statusEl.textContent = `✅ Server erreichbar!`;
    } catch (err) {
      statusEl.textContent =
        "❌ Server NICHT erreichbar (CORS/Netz/Server down).\nDetails:\n" + String(err);
    }
  });
});
