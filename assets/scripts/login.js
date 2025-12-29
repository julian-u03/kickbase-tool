// assets/scripts/login.js (DEBUG)
document.addEventListener("DOMContentLoaded", () => {
  // Sichtbarer Beweis, dass das Script läuft
  const badge = document.createElement("div");
  badge.textContent = "login.js wurde geladen ✅";
  badge.style.padding = "10px";
  badge.style.border = "1px solid #ddd";
  badge.style.borderRadius = "10px";
  badge.style.marginTop = "12px";
  document.body.prepend(badge);

  alert("login.js läuft ✅");
});
