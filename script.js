// --- Content Rendering Logic ---

function renderContent() {
  // 1. Hero Section
  const heroTitleEl = document.getElementById("hero-title");
  if (heroTitleEl && !heroTitleEl.querySelector(".wordmark")) {
    heroTitleEl.textContent = KaLM_Content.hero.title;
  }
  document.getElementById("hero-subtitle").textContent =
    KaLM_Content.hero.subtitle;
  document.getElementById("hero-description").textContent =
    KaLM_Content.hero.description;

  // 2. Features Section
  const featuresGrid = document.getElementById("features-grid");
  KaLM_Content.features.forEach((feature) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
    featuresGrid.appendChild(card);
  });

  // 3. Models Section
  const modelsGrid = document.getElementById("models-grid");
  KaLM_Content.models.forEach((model) => {
    const card = document.createElement("div");
    card.className = model.is_latest ? "model-card featured" : "model-card";
    card.innerHTML = `
            ${model.is_latest ? '<div class="model-badge">Latest</div>' : ""}
            <h3 class="model-name">${model.name}</h3>
            <p class="paper-date">Released: ${model.date}</p>
            <p class="model-type">${model.type}</p>
            <p class="model-description">${model.description}</p>
            <div class="model-links">
                <a href="${model.link}" target="_blank" class="model-link">
                    <i class="fas fa-external-link-alt"></i> Hugging Face
                </a>
            </div>
        `;
    modelsGrid.appendChild(card);
  });

  // 4. Papers Section
  const papersGrid = document.getElementById("papers-grid");
  KaLM_Content.papers.forEach((paper) => {
    const card = document.createElement("div");
    card.className = "paper-card";
    card.innerHTML = `
            <div class="paper-header">
                <i class="fas fa-file-alt paper-icon"></i>
                ${
                  paper.is_latest
                    ? '<span class="paper-badge">Latest</span>'
                    : ""
                }
            </div>
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-meta">
                <span class="paper-arxiv">arXiv:${paper.arxiv_id}</span>
                <span class="paper-date">Released: ${paper.date}</span>
            </p>
            <p class="paper-description">${paper.description}</p>
            <div class="paper-links">
                <a href="${
                  paper.arxiv_link
                }" target="_blank" class="paper-link">
                    <i class="fas fa-file-pdf"></i> arXiv
                </a>
                <a href="${paper.hf_link}" target="_blank" class="paper-link">
                    <i class="fab fa-huggingface"></i> Hugging Face
                </a>
            </div>
        `;
    papersGrid.appendChild(card);
  });

  // 5. Datasets Section
  const datasetsGrid = document.getElementById("datasets-grid");
  KaLM_Content.datasets.forEach((dataset) => {
    const card = document.createElement("div");
    card.className = "dataset-card";
    card.innerHTML = `
            <div class="dataset-icon">
                <i class="fas fa-database"></i>
            </div>
            <h3 class="dataset-name">${dataset.name}</h3>
            <p class="dataset-description">${dataset.description}</p>
            <a href="${dataset.link}" target="_blank" class="dataset-link">
                <i class="fas fa-external-link-alt"></i> View Dataset
            </a>
        `;
    datasetsGrid.appendChild(card);
  });
}

// --- Interactivity Logic ---

document.addEventListener("DOMContentLoaded", () => {
  // Render content first
  renderContent();

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all cards
  const cards = document.querySelectorAll(
    ".feature-card, .model-card, .paper-card, .dataset-card"
  );
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add hover effect to logo
  const logo = document.querySelector(".logo-circle");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "scale(1.1) rotate(5deg)";
    });
    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // Add copy functionality for model names
  const modelNames = document.querySelectorAll(".model-name");
  modelNames.forEach((name) => {
    name.style.cursor = "pointer";
    name.title = "Click to copy model name";
    name.addEventListener("click", () => {
      const text = name.textContent;
      // Use a temporary textarea to copy text to clipboard
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // Show feedback
      const originalText = name.textContent;
      name.textContent = "✓ Copied!";
      setTimeout(() => {
        name.textContent = originalText;
      }, 1500);
    });
  });

  // Add external link icon animation
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const icon = link.querySelector("i");
      if (icon) {
        icon.style.transform = "translateX(3px) translateY(-3px)";
      }
    });
    link.addEventListener("mouseleave", (e) => {
      const icon = link.querySelector("i");
      if (icon) {
        icon.style.transform = "translateX(0) translateY(0)";
      }
    });
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});
