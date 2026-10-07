document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded","false");
    }));
  }

  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name")?.trim() || "";
      const phone = data.get("phone")?.trim() || "";
      const email = data.get("email")?.trim() || "";
      const service = data.get("service") || "";
      const message = data.get("message")?.trim() || "";
      const note = document.getElementById("formMessage");
      if (!name || !phone || !service || !message) {
        if (note) { note.textContent = "Please complete the required fields."; note.className = "form-note error"; }
        return;
      }
      const text = [
        "Hello Mulwanyi International,",
        "",
        `Name: ${name}`,
        `Phone/WhatsApp: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Service: ${service}`,
        "",
        `Project details: ${message}`
      ].join("\n");
      if (note) { note.textContent = "Opening WhatsApp with your enquiry…"; note.className = "form-note success"; }
      window.open(`https://wa.me/256709450043?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    });
  }

  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", e => e.preventDefault());
    img.addEventListener("dragstart", e => e.preventDefault());
  });

  document.addEventListener("keydown", e => {
    const blocked = (e.ctrlKey || e.metaKey) && ["s","u"].includes(e.key.toLowerCase());
    if (blocked) e.preventDefault();
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});