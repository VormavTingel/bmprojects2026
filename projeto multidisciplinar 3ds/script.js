const games = [
  {
    id: 1,
    title: "Echoes of Orion",
    category: "RPG",
    price: 97.43,
    oldPrice: 149.90,
    discount: 35,
    description: "Uma aventura espacial com exploração, escolhas e combates táticos.",
    tags: ["RPG", "Exploração", "Espaço"],
    features: ["Controle", "Conquistas"],
    platforms: ["Windows", "Linux"],
    cover: "linear-gradient(145deg, #7b3f68, #132c4d 58%, #0b1727)"
  },
  {
    id: 2,
    title: "Iron District",
    category: "Ação",
    price: 59.90,
    oldPrice: 99.90,
    discount: 40,
    description: "Combates intensos em uma metrópole industrial dominada por facções.",
    tags: ["Ação", "Cyberpunk", "Tiro"],
    features: ["Multiplayer", "Conquistas"],
    platforms: ["Windows"],
    cover: "linear-gradient(145deg, #9b5b22, #45321c 50%, #101e2d)"
  },
  {
    id: 3,
    title: "Kingdom Architect",
    category: "Estratégia",
    price: 79.90,
    oldPrice: 79.90,
    discount: 0,
    description: "Construa cidades, administre recursos e proteja seu reino.",
    tags: ["Estratégia", "Construção", "Gestão"],
    features: ["Conquistas"],
    platforms: ["Windows", "macOS"],
    cover: "linear-gradient(145deg, #43683a, #1f3c37 55%, #10223a)"
  },
  {
    id: 4,
    title: "Velocity Apex",
    category: "Corrida",
    price: 119.90,
    oldPrice: 199.90,
    discount: 40,
    description: "Corridas futuristas em alta velocidade com pistas verticais.",
    tags: ["Corrida", "Arcade", "Futurista"],
    features: ["Multiplayer", "Controle", "Conquistas"],
    platforms: ["Windows"],
    cover: "linear-gradient(145deg, #bc2545, #48255f 55%, #102642)"
  },
  {
    id: 5,
    title: "Mosslight",
    category: "Indie",
    price: 34.90,
    oldPrice: 49.90,
    discount: 30,
    description: "Uma delicada jornada por florestas mágicas e ruínas esquecidas.",
    tags: ["Indie", "Aventura", "Relaxante"],
    features: ["Controle", "Conquistas"],
    platforms: ["Windows", "Linux", "macOS"],
    cover: "linear-gradient(145deg, #4f8b78, #213e4b 55%, #13203d)"
  },
  {
    id: 6,
    title: "Shattered Signal",
    category: "Ação",
    price: 89.90,
    oldPrice: 129.90,
    discount: 31,
    description: "Sobreviva a uma estação abandonada tomada por sinais desconhecidos.",
    tags: ["Ação", "Terror", "Sobrevivência"],
    features: ["Controle"],
    platforms: ["Windows"],
    cover: "linear-gradient(145deg, #6b6b77, #283346 55%, #101928)"
  },
  {
    id: 7,
    title: "Runes of Ash",
    category: "RPG",
    price: 139.90,
    oldPrice: 179.90,
    discount: 22,
    description: "Domine runas ancestrais em um mundo devastado por dragões.",
    tags: ["RPG", "Fantasia", "Mundo aberto"],
    features: ["Controle", "Conquistas"],
    platforms: ["Windows"],
    cover: "linear-gradient(145deg, #a24c2f, #4a2634 55%, #172238)"
  },
  {
    id: 8,
    title: "Orbit Tactics",
    category: "Estratégia",
    price: 44.90,
    oldPrice: 69.90,
    discount: 36,
    description: "Batalhas por turnos, frotas modulares e campanhas interplanetárias.",
    tags: ["Estratégia", "Turnos", "Sci-fi"],
    features: ["Multiplayer", "Conquistas"],
    platforms: ["Windows", "Linux"],
    cover: "linear-gradient(145deg, #285c8d, #252a5c 55%, #111c32)"
  },
  {
    id: 9,
    title: "Neon Drifter",
    category: "Corrida",
    price: 24.90,
    oldPrice: 39.90,
    discount: 38,
    description: "Derrapagens, música eletrônica e campeonatos noturnos.",
    tags: ["Corrida", "Indie", "Arcade"],
    features: ["Multiplayer", "Controle"],
    platforms: ["Windows", "macOS"],
    cover: "linear-gradient(145deg, #c13991, #44327e 55%, #132c49)"
  }
];

const heroSlides = [
  {
    title: "Echoes of Orion",
    description: "Explore sistemas desconhecidos, construa sua frota e mude o destino da galáxia.",
    tags: ["Exploração", "RPG", "Espaço"],
    price: "R$ 97,43",
    background: "linear-gradient(145deg, #141833 0%, #1f3352 46%, #06101e 100%)"
  },
  {
    title: "Iron District",
    description: "Entre em uma guerra urbana por território, tecnologia e sobrevivência.",
    tags: ["Ação", "Cyberpunk", "Multiplayer"],
    price: "R$ 59,90",
    background: "linear-gradient(145deg, #3f2419 0%, #703820 46%, #101d2a 100%)"
  },
  {
    title: "Kingdom Architect",
    description: "Planeje uma civilização inteira e resista às ameaças que cercam seu reino.",
    tags: ["Estratégia", "Construção", "Gestão"],
    price: "R$ 79,90",
    background: "linear-gradient(145deg, #193729 0%, #315c45 46%, #0a1821 100%)"
  }
];

let currentCategory = "Todos";
let currentSlide = 0;
let currentSearch = "";

const gamesGrid = document.getElementById("gamesGrid");
const emptyState = document.getElementById("emptyState");
const priceRange = document.getElementById("priceRange");
const priceOutput = document.getElementById("priceOutput");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const cartToast = document.getElementById("cartToast");
const toastGameName = document.getElementById("toastGameName");

function money(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

function renderGames() {
  const maxPrice = Number(priceRange.value);
  const selectedFeatures = [...document.querySelectorAll(".feature-filter:checked")].map(el => el.value);
  const selectedPlatforms = [...document.querySelectorAll(".platform-filter:checked")].map(el => el.value);

  let filtered = games.filter(game => {
    const matchCategory = currentCategory === "Todos" || game.category === currentCategory;
    const matchSearch = game.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      game.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase()));
    const matchPrice = game.price <= maxPrice;
    const matchFeatures = selectedFeatures.every(feature => game.features.includes(feature));
    const matchPlatforms = selectedPlatforms.every(platform => game.platforms.includes(platform));

    return matchCategory && matchSearch && matchPrice && matchFeatures && matchPlatforms;
  });

  if (sortSelect.value === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "discount") filtered.sort((a, b) => b.discount - a.discount);

  gamesGrid.innerHTML = filtered.map(game => `
    <article class="game-card">
      <div class="game-cover" style="--cover: ${game.cover}">
        <span class="cover-label">${game.title}</span>
      </div>
      <div class="game-body">
        <h3>${game.title}</h3>
        <p class="game-description">${game.description}</p>
        <div class="game-tags">
          ${game.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="platform-row">${game.platforms.join(" · ")}</div>
        <div class="game-footer">
          <div class="game-price">
            ${game.discount > 0 ? `<span class="mini-discount">-${game.discount}%</span>` : ""}
            <div class="price-stack">
              ${game.discount > 0 ? `<del>${money(game.oldPrice)}</del>` : ""}
              <strong>${money(game.price)}</strong>
            </div>
          </div>
          <button class="buy-button" data-game="${game.title}">Comprar</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.classList.toggle("hidden", filtered.length > 0);
  bindBuyButtons();
}

function bindBuyButtons() {
  document.querySelectorAll(".buy-button").forEach(button => {
    button.addEventListener("click", () => showToast(button.dataset.game));
  });
}

function showToast(gameName) {
  toastGameName.textContent = gameName;
  cartToast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => cartToast.classList.remove("show"), 2600);
}

function updateHero() {
  const slide = heroSlides[currentSlide];
  document.getElementById("heroTitle").textContent = slide.title;
  document.getElementById("heroSideTitle").textContent = slide.title;
  document.getElementById("heroDescription").textContent = slide.description;
  document.getElementById("heroPrice").textContent = slide.price;
  document.querySelector(".hero-art").style.background = slide.background;
  document.getElementById("heroTags").innerHTML = slide.tags.map(tag => `<span>${tag}</span>`).join("");

  [...document.querySelectorAll("#sliderDots button")].forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function createDots() {
  const dots = document.getElementById("sliderDots");
  dots.innerHTML = heroSlides.map((_, index) =>
    `<button class="${index === 0 ? "active" : ""}" data-slide="${index}" aria-label="Ir para slide ${index + 1}"></button>`
  ).join("");

  dots.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      currentSlide = Number(button.dataset.slide);
      updateHero();
    });
  });
}

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    currentCategory = card.dataset.category;
    document.querySelectorAll(".category-card").forEach(item => item.classList.remove("active"));
    card.classList.add("active");
    renderGames();
  });
});

priceRange.addEventListener("input", () => {
  priceOutput.textContent = `Até ${money(Number(priceRange.value))}`;
  renderGames();
});

document.querySelectorAll(".feature-filter, .platform-filter").forEach(input => {
  input.addEventListener("change", renderGames);
});

sortSelect.addEventListener("change", renderGames);

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  currentSearch = searchInput.value.trim();
  renderGames();
  document.querySelector(".games-section").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.trim();
  renderGames();
});

document.getElementById("clearFilters").addEventListener("click", () => {
  currentCategory = "Todos";
  currentSearch = "";
  searchInput.value = "";
  priceRange.value = 250;
  priceOutput.textContent = "Até R$ 250";
  sortSelect.value = "featured";
  document.querySelectorAll(".feature-filter, .platform-filter").forEach(input => input.checked = false);
  document.querySelectorAll(".category-card").forEach(item => item.classList.remove("active"));
  renderGames();
});

document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  updateHero();
});

document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateHero();
});

document.getElementById("heroBuyButton").addEventListener("click", () => {
  showToast(heroSlides[currentSlide].title);
});

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail");
  showToast(`Cadastro realizado: ${email.value}`);
  email.value = "";
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

createDots();
renderGames();

setInterval(() => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateHero();
}, 7000);
