document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const msg =
        `Hello Mulwanyi International,%0A%0A` +
        `Name: ${encodeURIComponent(data.get("name"))}%0A` +
        `Phone/WhatsApp: ${encodeURIComponent(data.get("phone"))}%0A` +
        `Project type: ${encodeURIComponent(data.get("project"))}%0A` +
        `Project details: ${encodeURIComponent(data.get("message") || "Not provided")}`;
      window.open(`https://wa.me/256709450043?text=${msg}`, "_blank", "noopener");
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  // Discourage casual image saving. This is not absolute protection against screenshots or developer tools.
  document.addEventListener("contextmenu", e => {
    if (e.target.closest("img,.project-card")) e.preventDefault();
  });
  document.addEventListener("dragstart", e => {
    if (e.target.closest("img,.project-card")) e.preventDefault();
  });
  document.addEventListener("keydown", e => {
    const blocked = (e.ctrlKey || e.metaKey) && ["s","u"].includes(e.key.toLowerCase());
    if (blocked) e.preventDefault();
  });
});
