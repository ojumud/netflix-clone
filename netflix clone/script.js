// Placeholder title data for each row (swap with a real API later, e.g. TMDB)
const rowData = [
  ["Nightfall City", "The Long Drive", "Static", "Echo Chamber", "Rust & Bone", "Paper Moons", "The Quiet Ward"],
  ["Afterglow", "Concrete Garden", "The Last Signal", "Low Tide", "Winter Court", "Salt Water", "Blackout"],
  ["The Cartographer", "Glass Houses", "Midnight Runners", "Hollow Point", "The Archivist", "Firebreak", "Undertow"],
  ["New Horizon", "The Collector", "Split Second", "Radio Silence", "The Understudy", "Dead Reckoning", "Aftermath"]
];

// A small palette of gradients so each card looks distinct without real images
const gradients = [
  "linear-gradient(135deg,#5b2a86,#2b1055)",
  "linear-gradient(135deg,#8e2de2,#4a00e0)",
  "linear-gradient(135deg,#0f2027,#2c5364)",
  "linear-gradient(135deg,#654ea3,#eaafc8)",
  "linear-gradient(135deg,#232526,#414345)",
  "linear-gradient(135deg,#b91d1d,#3a0d0d)",
  "linear-gradient(135deg,#1e3c72,#2a5298)"
];

function buildRows() {
  const rowLists = document.querySelectorAll(".row__list");

  rowLists.forEach((list, rowIndex) => {
    const titles = rowData[rowIndex % rowData.length];

    titles.forEach((title, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.background = gradients[i % gradients.length];
      card.tabIndex = 0;

      const label = document.createElement("span");
      label.textContent = title;
      card.appendChild(label);

      list.appendChild(card);
    });
  });
}

function setupRowArrows() {
  document.querySelectorAll(".row__track").forEach((track) => {
    const list = track.querySelector(".row__list");
    const leftBtn = track.querySelector(".row__arrow--left");
    const rightBtn = track.querySelector(".row__arrow--right");

    leftBtn.addEventListener("click", () => {
      list.scrollBy({ left: -600, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      list.scrollBy({ left: 600, behavior: "smooth" });
    });
  });
}

function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.style.display === "flex";
    navLinks.style.display = isOpen ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "56px";
    navLinks.style.left = "4%";
    navLinks.style.background = "#141414";
    navLinks.style.padding = "12px";
    navLinks.style.borderRadius = "4px";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildRows();
  setupRowArrows();
  setupNavbarScroll();
  setupMobileMenu();
});
