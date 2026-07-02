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
            <div class="model-header">
                <i class="fas fa-cube model-icon"></i>
                ${model.is_latest ? '<span class="model-badge">Latest</span>' : ""}
            </div>
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

  // 3.5. Rerankers Section
  const rerankersGrid = document.getElementById("rerankers-grid");
  if (rerankersGrid && KaLM_Content.rerankers) {
    KaLM_Content.rerankers.forEach((model) => {
      const card = document.createElement("div");
      card.className = "model-card";
      card.innerHTML = `
            <div class="model-header">
                <i class="fas fa-sort-amount-down model-icon"></i>
                ${model.is_latest ? '<span class="model-badge">Latest</span>' : ""}
            </div>
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
      rerankersGrid.appendChild(card);
    });
  }

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

  // 5. Survey Papers Section
  const surveyGrid = document.getElementById("survey-grid");
  if (surveyGrid) {
    KaLM_Content.survey_papers.forEach((paper) => {
      const card = document.createElement("div");
      card.className = "paper-card";
      card.innerHTML = `
            <div class="paper-header">
                <i class="fas fa-file-alt paper-icon"></i>
            </div>
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-meta">
                <span class="paper-arxiv">arXiv:${paper.arxiv_id}</span>
                <span class="paper-date">Released: ${paper.date}</span>
            </p>
            <p class="paper-description">${paper.description}</p>
            <div class="paper-links">
                <a href="${paper.arxiv_link}" target="_blank" class="paper-link">
                    <i class="fas fa-file-pdf"></i> arXiv
                </a>
                <a href="${paper.github_link}" target="_blank" class="paper-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        `;
      surveyGrid.appendChild(card);
    });
  }

  // 6. LMEB Section
  const lmeb = KaLM_Content.lmeb;
  const lmebTitle = document.getElementById("lmeb-title");
  const lmebSubtitle = document.getElementById("lmeb-subtitle");
  const lmebOverview = document.getElementById("lmeb-overview");
  const lmebStats = document.getElementById("lmeb-stats");
  const lmebMemoryGrid = document.getElementById("lmeb-memory-grid");
  const lmebLinks = document.getElementById("lmeb-links");

  if (lmeb && lmebOverview && lmebStats && lmebMemoryGrid && lmebLinks) {
    if (lmebTitle) {
      lmebTitle.textContent = lmeb.title;
    }
    if (lmebSubtitle) {
      lmebSubtitle.textContent = lmeb.subtitle;
    }

    lmebOverview.innerHTML = `
            <p>${lmeb.overview}</p>
        `;

    lmeb.stats.forEach((stat) => {
      const item = document.createElement("div");
      item.className = "lmeb-stat";
      item.innerHTML = `
            <span class="lmeb-stat-value">${stat.value}</span>
            <span class="lmeb-stat-label">${stat.label}</span>
        `;
      lmebStats.appendChild(item);
    });

    lmeb.memory_types.forEach((memoryType) => {
      const card = document.createElement("div");
      card.className = "lmeb-memory-card";
      card.innerHTML = `
            <div class="lmeb-memory-icon">
                <i class="${memoryType.icon}"></i>
            </div>
            <h3>${memoryType.title}</h3>
            <p>${memoryType.description}</p>
        `;
      lmebMemoryGrid.appendChild(card);
    });

    lmeb.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.className = "lmeb-link";
      anchor.innerHTML = `<i class="${link.icon}"></i> ${link.label}`;
      lmebLinks.appendChild(anchor);
    });
  }

  // 7. Datasets Section
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

  // Observe the LMEB panel as a whole for bounce-up animation
  const lmebPanel = document.querySelector(".lmeb-panel");
  if (lmebPanel) {
    const innerSections = lmebPanel.querySelectorAll(
      "#lmeb-overview, #lmeb-stats, #lmeb-memory-grid, #lmeb-links"
    );
    innerSections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
    });

    const lmebPanelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, 500);

            innerSections.forEach((section, index) => {
              setTimeout(() => {
                section.style.transition = "all 0.6s ease";
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
              }, 950 + index * 120);
            });

            lmebPanelObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    lmebPanelObserver.observe(lmebPanel);
  }

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