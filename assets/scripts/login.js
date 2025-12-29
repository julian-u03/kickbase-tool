// assets/scripts/login.js
document.addEventListener("DOMContentLoaded", () => {
  const url = "https://raspi-kickbase.ipv64.net/health";

  // UI bauen (Button + Status)
  const container = document.createElement("div");
  container.style.marginTop = "16px";

  const btn = document.createElement("button");
  btn.textContent = "Backend testen";
  btn.style.padding = "10px 14px";
  btn.style.fontSize = "16px";
  btn.style.cursor = "pointer";

  const statusEl = document.createElement("div");
  statusEl.textContent = "Status: (noch nicht getestet)";
  statusEl.style.marginTop = "12px";
  statusEl.style.padding = "10px";
  statusEl.style.border = "1px solid #ddd";
  statusEl.style.borderRadius = "10px";

  container.appendChild(btn);
  container.appendChild(statusEl);
  document.body.appendChild(container);

  btn.addEventListener("click", async () => {
    statusEl.textContent = "Status: teste Verbindung…";
    try {
      const res = await fetch(url, { method: "GET" });

      if (!res.ok) {
        statusEl.textContent = `Status: Server erreichbar, aber Fehlercode ${res.status}`;
        return;
      }

      const data = await res.json();
      statusEl.textContent = `✅ Server erreichbar! Antwort: ${JSON.stringify(data)}`;
    } catch (err) {
      statusEl.textContent = "❌ Server NICHT erreichbar (CORS/Netz/Server down). Details: " + err;
    }
  });
});
