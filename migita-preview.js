(() => {
  const products = [
    {
      image: "/images/migita-ginger-70g.svg",
      name: "Migita Ginger Hard Candy",
      detail: "Plastic bag / 70g",
    },
    {
      image: "/images/migita-mint-70g.svg",
      name: "Migita Mint Hard Candy",
      detail: "Plastic bag / 70g",
    },
    {
      image: "/images/migita-cinnamon-70g.svg",
      name: "Migita Cinnamon Hard Candy",
      detail: "Plastic bag / 70g",
    },
    {
      image: "/images/migita-ginger-honey-140g.svg",
      name: "Migita Ginger Hard Candy with Honey Filling",
      detail: "Plastic bag / 140g",
    },
    {
      image: "/images/migita-pink-lemon-honey-140g.svg",
      name: "Migita Pink Lemon Hard Candy with Honey Filling",
      detail: "Plastic bag / 140g",
    },
  ];

  const style = document.createElement("style");
  style.textContent = `
    #brands .migita-brand-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    #brands .migita-preview-button { position: relative; }
    #brands .migita-new-chip { position:absolute; right:10px; top:10px; border-radius:999px; background:#9b1c29; color:white; padding:4px 8px; font-size:9px; font-weight:900; letter-spacing:.1em; text-transform:uppercase; }
    #brands .migita-panel { display:grid; overflow:hidden; border-radius:28px; background:#f3f0ec; }
    #brands .migita-panel-copy { display:flex; flex-direction:column; justify-content:space-between; background:#17191c; color:white; padding:32px; }
    #brands .migita-panel-products { padding:20px; }
    #brands .migita-product-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
    #brands .migita-product-card { display:flex; min-height:290px; flex-direction:column; overflow:hidden; border-radius:16px; background:white; padding:16px; box-shadow:0 1px 2px rgba(0,0,0,.06); }
    #brands .migita-product-image { display:grid; min-height:0; flex:1; place-items:center; overflow:hidden; }
    #brands .migita-product-image img { max-height:208px; width:100%; object-fit:contain; }
    #brands .migita-product-caption { margin-top:16px; border-top:1px solid rgba(0,0,0,.08); padding-top:16px; text-align:left; }
    #brands .migita-product-caption h4 { font-size:14px; font-weight:900; line-height:20px; letter-spacing:-.01em; }
    #brands .migita-product-caption p { margin-top:6px; font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:rgba(0,0,0,.48); }
    @media (max-width:639px) {
      #brands .migita-product-card:last-child { grid-column:1 / -1; width:calc(50% - 6px); justify-self:center; }
    }
    @media (min-width:640px) {
      #brands .migita-brand-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
      #brands .migita-product-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
      #brands .migita-panel-copy { padding:40px; }
      #brands .migita-panel-products { padding:28px; }
    }
    @media (min-width:1024px) {
      #brands .migita-brand-grid { grid-template-columns:repeat(4,minmax(0,1fr)); }
      #brands .migita-panel { grid-template-columns:.34fr .66fr; }
    }
    @media (min-width:1280px) {
      #brands .migita-brand-grid { grid-template-columns:repeat(8,minmax(0,1fr)); }
      #brands .migita-product-grid { grid-template-columns:repeat(6,minmax(0,1fr)); }
      #brands .migita-product-card { grid-column:span 2 / span 2; }
      #brands .migita-product-card:nth-last-child(2) { grid-column-start:2; }
    }
    #brands .professional-product-card { position:relative; cursor:zoom-in; outline:none; transition:transform .22s ease,box-shadow .22s ease; }
    #brands .professional-product-card:hover { transform:translateY(-4px); box-shadow:0 18px 42px rgba(19,21,24,.14); }
    #brands .professional-product-card:focus-visible { box-shadow:0 0 0 3px rgba(155,28,41,.35),0 18px 42px rgba(19,21,24,.14); }
    #brands .professional-product-card > div:first-of-type { transition:transform .3s ease; }
    #brands .professional-product-card:hover > div:first-of-type { transform:translateY(-4px); }
    #brands .professional-view-hint { position:absolute;right:12px;top:12px;z-index:5;border:1px solid rgba(0,0,0,.08);border-radius:999px;background:rgba(255,255,255,.92);padding:7px 9px;font-size:9px;font-weight:900;letter-spacing:.12em;color:rgba(0,0,0,.5);box-shadow:0 4px 12px rgba(0,0,0,.08);opacity:.72;transition:opacity .2s ease; }
    #brands .professional-product-card:hover .professional-view-hint { opacity:1; }
    .professional-product-modal { position:fixed;inset:0;z-index:1000;display:grid;place-items:center;overflow:auto;background:rgba(16,18,21,.8);padding:24px;backdrop-filter:blur(10px);animation:professional-fade-in .2s ease both; }
    .professional-product-dialog { position:relative;display:grid;width:min(900px,100%);overflow:hidden;border:1px solid rgba(255,255,255,.1);border-radius:28px;background:#f7f5f2;box-shadow:0 30px 90px rgba(0,0,0,.38);animation:professional-dialog-in .28s cubic-bezier(.22,1,.36,1) both; }
    .professional-product-visual { display:grid;min-height:420px;place-items:center;overflow:hidden;background:white;padding:40px; }
    .professional-product-visual img { max-height:65vh;width:100%;object-fit:contain; }
    .professional-product-copy { display:flex;flex-direction:column;justify-content:center;background:#f3f0ec;padding:68px 36px 36px; }
    .professional-product-copy small { color:#9b1c29;font-size:11px;font-weight:900;letter-spacing:.18em;text-transform:uppercase; }
    .professional-product-copy h3 { margin-top:12px;font-size:30px;font-weight:900;line-height:1.15;letter-spacing:-.025em; }
    .professional-product-copy p { margin-top:16px;color:rgba(0,0,0,.55);font-size:14px;line-height:24px; }
    .professional-product-close { position:absolute;right:16px;top:16px;z-index:5;display:grid;height:44px;width:44px;place-items:center;border:1px solid rgba(0,0,0,.1);border-radius:999px;background:rgba(255,255,255,.94);color:#17191c;font-size:22px;box-shadow:0 8px 24px rgba(0,0,0,.12);transition:transform .2s ease,background .2s ease,color .2s ease; }
    .professional-product-close:hover { transform:rotate(90deg);background:#9b1c29;color:white; }
    .professional-map { transition:border-color .3s ease,box-shadow .3s ease; }
    .professional-map:hover { border-color:rgba(255,255,255,.2);box-shadow:0 24px 70px rgba(0,0,0,.22); }
    .professional-map > img { transition:transform .7s ease; }
    .professional-map:hover > img { transform:scale(1.018); }
    .professional-map-points { position:absolute;inset:7%;z-index:15;pointer-events:none; }
    .professional-map-point { position:absolute;height:10px;width:10px;transform:translate(-50%,-50%);border:2px solid white;border-radius:50%;background:#9b1c29;box-shadow:0 0 16px rgba(217,74,87,.9);animation:professional-point-in .45s cubic-bezier(.22,1,.36,1) both; }
    .professional-map-point.is-hub { height:12px;width:12px;background:#d94a57; }
    .professional-map-point.is-hub::after { position:absolute;inset:-10px;border:1px solid rgba(217,74,87,.7);border-radius:50%;content:"";animation:professional-map-pulse 2.5s ease-out infinite; }
    .professional-map-label { position:absolute;left:17px;top:50%;transform:translateY(-50%);white-space:nowrap;border-radius:999px;background:rgba(23,25,28,.88);padding:5px 9px;color:white;font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase; }
    @keyframes professional-fade-in { from { opacity:0; } to { opacity:1; } }
    @keyframes professional-dialog-in { from { opacity:0;transform:translateY(18px) scale(.98); } to { opacity:1;transform:none; } }
    @keyframes professional-point-in { from { opacity:0;transform:translate(-50%,-50%) scale(0); } to { opacity:1;transform:translate(-50%,-50%) scale(1); } }
    @keyframes professional-map-pulse { 0% { opacity:.8;transform:scale(.45); } 75%,100% { opacity:0;transform:scale(1.45); } }
    @media (min-width:768px) { .professional-product-dialog { grid-template-columns:1.15fr .85fr; } }
    @media (max-width:767px) { .professional-product-modal { padding:16px; } .professional-product-visual { min-height:330px;padding:28px; } .professional-product-copy { padding:28px; } .professional-product-copy h3 { font-size:24px; } }
    @media (prefers-reduced-motion:reduce) { .professional-product-card,.professional-product-card > div:first-of-type,.professional-map > img,.professional-product-modal,.professional-product-dialog,.professional-map-point,.professional-map-point.is-hub::after { animation:none!important;transition:none!important; } }
  `;
  document.head.appendChild(style);

  const renderMigita = (section, button) => {
    section.querySelectorAll(".brand-card").forEach((card) => {
      card.dataset.active = "false";
      card.style.borderColor = "";
      card.style.background = "";
      card.style.boxShadow = "";
    });
    button.dataset.active = "true";
    button.style.borderColor = "#9b1c29";
    button.style.background = "#fcf6f6";
    button.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

    const currentPanel = section.querySelector(".mt-7.overflow-hidden");
    if (!currentPanel) return;

    const cards = products
      .map(
        (product) => `
          <article class="migita-product-card">
            <div class="migita-product-image">
              <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
            </div>
            <div class="migita-product-caption">
              <h4>${product.name}</h4>
              <p>${product.detail}</p>
            </div>
          </article>`
      )
      .join("");

    currentPanel.innerHTML = `
      <div class="migita-panel">
        <div class="migita-panel-copy">
          <div>
            <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:#df6570">Featured range</p>
            <h3 style="margin-top:16px;font-size:30px;font-weight:900;letter-spacing:-.03em">MIGITA</h3>
            <p style="margin-top:8px;font-size:14px;color:rgba(255,255,255,.5)">Hard Candy &amp; Confectionery</p>
            <p style="display:inline-flex;margin-top:16px;border-radius:999px;background:#9b1c29;padding:6px 12px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.14em">New agency</p>
            <div><p style="display:inline-flex;margin-top:20px;border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:6px 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.65)">5 products</p></div>
          </div>
          <p style="margin-top:40px;font-size:14px;line-height:24px;color:rgba(255,255,255,.55)">A market-ready candy selection supported by Eawan Al-Mosul's import, distribution, and trade development capabilities.</p>
        </div>
        <div class="migita-panel-products"><div class="migita-product-grid">${cards}</div></div>
      </div>`;
  };

  let previewBodyOverflow = "";
  let previewKeydownHandler = null;

  const closeProductPreview = () => {
    document.querySelector(".professional-product-modal")?.remove();
    document.body.style.overflow = previewBodyOverflow;
    if (previewKeydownHandler) window.removeEventListener("keydown", previewKeydownHandler);
    previewKeydownHandler = null;
  };

  const openProductPreview = (card, section) => {
    closeProductPreview();

    const sourceImage = card.querySelector("img");
    if (!sourceImage) return;
    const featuredRange = [...section.querySelectorAll("p")].find(
      (paragraph) => paragraph.textContent.trim() === "Featured range",
    );
    const brandName = featuredRange?.parentElement?.querySelector("h3")?.textContent.trim() || "Product";
    const productName = card.querySelector("h4")?.textContent.trim() || sourceImage.alt || `${brandName} product`;

    previewBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const modal = document.createElement("div");
    modal.className = "professional-product-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "professional-product-title");

    const dialog = document.createElement("div");
    dialog.className = "professional-product-dialog";
    dialog.addEventListener("click", (event) => event.stopPropagation());

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "professional-product-close";
    closeButton.setAttribute("aria-label", "Close product preview");
    closeButton.textContent = "Ã—";
    closeButton.addEventListener("click", closeProductPreview);

    const visual = document.createElement("div");
    visual.className = "professional-product-visual";
    const previewImage = document.createElement("img");
    previewImage.src = sourceImage.currentSrc || sourceImage.src;
    previewImage.alt = productName;
    const sourceTransform = getComputedStyle(sourceImage).transform;
    if (sourceTransform && sourceTransform !== "none") previewImage.style.transform = sourceTransform;
    visual.appendChild(previewImage);

    const copy = document.createElement("div");
    copy.className = "professional-product-copy";
    const eyebrow = document.createElement("small");
    eyebrow.textContent = "Product preview";
    const brand = document.createElement("p");
    brand.textContent = brandName;
    const title = document.createElement("h3");
    title.id = "professional-product-title";
    title.textContent = productName;
    const description = document.createElement("p");
    description.textContent = "Part of Eawan Al-Mosul's growing portfolio for the Iraqi market.";
    copy.append(eyebrow, brand, title, description);

    dialog.append(closeButton, visual, copy);
    modal.appendChild(dialog);
    modal.addEventListener("click", closeProductPreview);
    document.body.appendChild(modal);

    previewKeydownHandler = (event) => {
      if (event.key === "Escape") closeProductPreview();
    };
    window.addEventListener("keydown", previewKeydownHandler);
    closeButton.focus();
  };

  const enhanceProductCards = (section) => {
    section.querySelectorAll(".mt-7.overflow-hidden article").forEach((card) => {
      if (card.dataset.professionalPreview) return;
      card.dataset.professionalPreview = "true";
      card.classList.add("professional-product-card");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      const hint = document.createElement("span");
      hint.className = "professional-view-hint";
      hint.textContent = "View";
      card.appendChild(hint);
      card.addEventListener("click", () => openProductPreview(card, section));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProductPreview(card, section);
        }
      });
    });
  };

  const enhanceDistributionMap = () => {
    const map = document.querySelector(".map-dots");
    if (!map || map.dataset.professionalEffects) return;
    map.dataset.professionalEffects = "true";
    map.classList.add("professional-map");

    const points = [
      ["Mosul hub", "22%", "55%", true],
      ["Erbil", "27%", "66%"],
      ["Sulaymaniyah", "34%", "72%"],
      ["Kirkuk", "36%", "58%"],
      ["Baghdad", "51%", "55%"],
      ["Karbala", "57%", "47%"],
      ["Najaf", "64%", "45%"],
      ["Nasiriyah", "73%", "59%"],
    ];
    const layer = document.createElement("div");
    layer.className = "professional-map-points";
    layer.setAttribute("aria-hidden", "true");
    points.forEach(([name, top, left, hub], index) => {
      const point = document.createElement("span");
      point.className = `professional-map-point${hub ? " is-hub" : ""}`;
      point.style.top = top;
      point.style.left = left;
      point.style.animationDelay = `${0.12 + index * 0.07}s`;
      if (hub) {
        const label = document.createElement("span");
        label.className = "professional-map-label";
        label.textContent = name;
        point.appendChild(label);
      }
      layer.appendChild(point);
    });
    map.appendChild(layer);
  };

  const fixPreviewLabels = (section) => {
    const grid = section.querySelector(".mt-12.grid");
    if (!grid) return;

    const portfolioIntro = [...section.querySelectorAll("p")].find((paragraph) =>
      paragraph.textContent.startsWith("Select a brand to explore products"),
    );
    if (portfolioIntro) {
      portfolioIntro.textContent =
        "A selection from our growing portfolio of food brands and products that we import, distribute, and develop across Iraq. Select a brand to explore.";
    }

    const kamaroozButton = [...grid.querySelectorAll("button")].find((brandButton) =>
      brandButton.textContent.includes("Kamarooz"),
    );
    const kamaroozCategory = kamaroozButton?.querySelector("span:last-child");
    if (kamaroozCategory?.textContent.trim() !== "Tomato Paste") {
      kamaroozCategory.textContent = "Tomato Paste";
    }

    const regalButton = [...grid.querySelectorAll("button")].find((brandButton) =>
      brandButton.textContent.includes("Regal"),
    );
    const regalCategory = regalButton?.querySelector("span:last-child");
    if (regalCategory?.textContent.trim() !== "Biscuits") {
      regalCategory.textContent = "Biscuits";
    }

    const featuredRange = [...section.querySelectorAll("p")].find(
      (paragraph) => paragraph.textContent.trim() === "Featured range",
    );
    const featuredPanel = featuredRange?.parentElement;
    const featuredBrand = featuredPanel?.querySelector("h3");
    if (featuredBrand?.textContent.trim() === "Kamarooz") {
      const featuredCategory = [...featuredPanel.querySelectorAll("p")].find(
        (paragraph) => paragraph.textContent.trim() === "Rice",
      );
      if (featuredCategory) featuredCategory.textContent = "Tomato Paste";
    }
    if (featuredBrand?.textContent.trim() === "Regal") {
      const featuredCategory = [...featuredPanel.querySelectorAll("p")].find(
        (paragraph) => paragraph.textContent.trim() === "Pasta & Pantry",
      );
      if (featuredCategory) featuredCategory.textContent = "Biscuits";
    }
  };

  const ensureMigita = () => {
    const section = document.querySelector("#brands");
    if (!section) return false;
    const grid = section.querySelector(".mt-12.grid");
    if (!grid) return false;
    grid.classList.add("migita-brand-grid");

    fixPreviewLabels(section);
    enhanceProductCards(section);
    enhanceDistributionMap();
    if (!section.dataset.brandPreviewObserver) {
      section.dataset.brandPreviewObserver = "true";
      const observer = new MutationObserver(() => {
        fixPreviewLabels(section);
        enhanceProductCards(section);
      });
      observer.observe(section, { childList: true, subtree: true, characterData: true });
    }

    if (grid.querySelector("[data-migita-preview]")) return true;

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.migitaPreview = "true";
    button.dataset.active = "false";
    button.setAttribute("aria-label", "MIGITA logo â€” Hard Candy & Confectionery â€” New agency");
    button.className = "brand-card migita-preview-button flex min-h-[152px] flex-col items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-5 text-center transition focus:outline-none";
    button.innerHTML = `
      <span class="migita-new-chip">New</span>
      <img src="/images/migita-logo.svg" alt="MIGITA logo" style="height:56px;width:100%;object-fit:contain;transform:scale(1.12)" loading="lazy" decoding="async" />
      <span style="margin-top:16px;font-size:14px;font-weight:800">MIGITA</span>
      <span style="margin-top:4px;font-size:11px;font-weight:600;color:rgba(0,0,0,.6)">Hard Candy &amp; Confectionery</span>`;
    button.addEventListener("click", () => renderMigita(section, button));
    grid.appendChild(button);

    if (window.location.hash === "#brands") button.click();
    return true;
  };

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (ensureMigita() || attempts > 40) window.clearInterval(timer);
  }, 100);
})();
