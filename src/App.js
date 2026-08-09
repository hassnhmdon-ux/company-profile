import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaBoxOpen,
  FaCertificate,
  FaChartLine,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaExpandAlt,
  FaFacebookF,
  FaGlobeAsia,
  FaHandshake,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTimes,
  FaTruck,
  FaWarehouse,
  FaWhatsapp,
} from "react-icons/fa";

const ASSET_ROOT = process.env.REACT_APP_ASSET_ORIGIN || "";
const asset = (path) => `${ASSET_ROOT}${path}`;

const brands = [
  {
    name: "Mutlu",
    category: "Premium Pasta",
    logo: "/images/mutlu.png",
    products: [
      "/images/mutlu9.jpg",
      "/images/mutlu1.jpg",
      "/images/mutlu2.jpg",
      "/images/mutlu33.jpg",
      "/images/mutlu4.jpg",
      "/images/mutlu5.jpg",
      "/images/mutlu7.jpg",
      "/images/mutlu6.jpg",
      "/images/mutlu8.jpg",
    ],
  },
  {
    name: "Nuh'un Ankara",
    category: "Pasta & Semolina",
    logo: "/images/nuh.png",
    collections: [
      {
        name: "Nuh'un Ankara",
        products: [
          "/images/ankara20.jpg",
          "/images/ankara6.jpg",
          "/images/ankara9.jpg",
          "/images/ankara1.jpg",
          "/images/ankara3.jpg",
          "/images/ankara5.jpg",
          "/images/ankara4.jpg",
          "/images/ankara10.jpg",
          "/images/ankara11.jpg",
          "/images/ankara12.jpg",
          "/images/ankara13.jpg",
          "/images/ankara15.jpg",
          "/images/ankara16.jpg",
          "/images/ankara17.jpg",
          "/images/ankara18.jpg",
          "/images/ankara19.jpg",
          "/images/ankara21.jpg",
          "/images/ankara22.jpg",
          "/images/ankara23.jpg",
          "/images/ankara24.jpg",
          "/images/ankara25.jpg",
          "/images/smed.jpg",
        ],
      },
      {
        name: "Vitamin Enriched",
        products: [
          "/images/ankarav1.jpg",
          "/images/ankarav2.jpg",
          "/images/ankarav3.jpg",
          "/images/ankarav4.jpg",
          "/images/ankarav5.jpg",
          "/images/ankarav6.jpg",
          "/images/ankarav7.jpg",
          "/images/ankarav8.jpg",
          "/images/ankarav9.jpg",
          "/images/ankarav10.jpg",
        ],
      },
    ],
  },
  {
    name: "Regal",
    category: "Biscuits",
    logo: "/images/regallogo.png",
    products: [
      "/images/regal2.jpg",
      "/images/regal3.jpg",
      "/images/regal4.jpg",
      "/images/regal5.jpg",
      "/images/regal7.jpg",
      "/images/regal8.jpg",
      "/images/regal9.jpg",
      "/images/regal10.jpg",
      "/images/regal6.jpg",
      "/images/regal11.jpg",
      "/images/regal12.jpg",
      "/images/regal13.jpg",
      "/images/regal115.jpg",
      "/images/regal14.jpg",
    ],
  },
  {
    name: "LOLO Rice",
    category: "Premium Rice",
    logo: "/images/lolologo.png",
    products: ["/images/lolo1.jpg", "/images/lolo3.jpg"],
  },
  {
    name: "MIGITA",
    category: "Hard Candy & Confectionery",
    badge: "New agency",
    logo: "/images/migita-logo.png",
    products: [
      {
        image: "/images/migita-ginger-70g.jpg",
        name: "Migita Ginger Hard Candy",
        packaging: "Plastic bag",
        weight: "70g",
      },
      {
        image: "/images/migita-mint-70g.jpg",
        name: "Migita Mint Hard Candy",
        packaging: "Plastic bag",
        weight: "70g",
      },
      {
        image: "/images/migita-cinnamon-70g.jpg",
        name: "Migita Cinnamon Hard Candy",
        packaging: "Plastic bag",
        weight: "70g",
      },
      {
        image: "/images/migita-ginger-honey-140g.jpg",
        name: "Migita Ginger Hard Candy with Honey Filling",
        packaging: "Plastic bag",
        weight: "140g",
      },
      {
        image: "/images/migita-pink-lemon-honey-140g.jpg",
        name: "Migita Pink Lemon Hard Candy with Honey Filling",
        packaging: "Plastic bag",
        weight: "140g",
      },
    ],
  },
  {
    name: "Milk Powder",
    category: "Dairy Essentials",
    logo: "/images/milk.png",
    products: ["/images/milk1.jpg", "/images/milk2.jpg", "/images/milk3.jpg", "/images/milk4.jpg"],
  },
  {
    name: "SAC",
    category: "Salt & Staples",
    logo: "/images/sac.png",
    products: ["/images/salt.jpg", "/images/salt1.jpg"],
  },
  {
    name: "Kamarooz",
    category: "Tomato Paste",
    logo: "/images/logokamrooz.png",
    products: ["/images/kamarooz.jpg"],
  },
];

const stats = [
  { value: "20+", label: "Years in the Iraqi market" },
  { value: "7", label: "Key governorates covered" },
  { value: "360\u00B0", label: "Market-entry support" },
  { value: "1", label: "Focused national market" },
];

const services = [
  {
    icon: FaGlobeAsia,
    number: "01",
    title: "Import & Compliance",
    text: "Complete import documentation, including Halal certificates, quality reports, COO and COC coordination.",
  },
  {
    icon: FaTruck,
    number: "02",
    title: "Distribution & Sales",
    text: "A trusted wholesale and retail network designed for fast, disciplined market penetration across Iraq.",
  },
  {
    icon: FaChartLine,
    number: "03",
    title: "Brand Development",
    text: "Local pricing, positioning, trade marketing and launch support tailored to Iraqi consumers and channels.",
  },
  {
    icon: FaBoxOpen,
    number: "04",
    title: "Private Label",
    text: "From product concept and packaging adaptation to a coordinated, market-ready launch when required.",
  },
];

const partnerReasons = [
  {
    icon: FaShieldAlt,
    title: "Local market intelligence",
    text: "Two decades of practical experience navigating Iraqi demand, documentation and channel dynamics.",
  },
  {
    icon: FaWarehouse,
    title: "Reliable execution",
    text: "Coordinated bookings, efficient handling and immediate dispatch through our Mosul hub.",
  },
  {
    icon: FaHandshake,
    title: "Manufacturer alignment",
    text: "Transparent, responsive factory communication built around long-term, sustainable partnerships.",
  },
  {
    icon: FaCertificate,
    title: "Quality-first discipline",
    text: "Reputable suppliers, accurate documentation and consistent product standards at every stage.",
  },
];

const governorates = ["Baghdad", "Karbala", "Najaf", "Kirkuk", "Nasiriyah", "Sulaymaniyah", "Erbil"];

const mapPoints = [
  { name: "Mosul hub", top: "22%", left: "55%", hub: true },
  { name: "Erbil", top: "27%", left: "66%" },
  { name: "Sulaymaniyah", top: "34%", left: "72%" },
  { name: "Kirkuk", top: "36%", left: "58%" },
  { name: "Baghdad", top: "51%", left: "55%" },
  { name: "Karbala", top: "57%", left: "47%" },
  { name: "Najaf", top: "64%", left: "45%" },
  { name: "Nasiriyah", top: "73%", left: "59%" },
];

const compactAnkaraProducts = new Set([
  "/images/ankara10.jpg",
  "/images/ankara18.jpg",
  "/images/ankara22.jpg",
  "/images/ankara24.jpg",
]);

const productImageScale = (brandName, product) => {
  if (brandName === "Nuh'un Ankara") {
    return compactAnkaraProducts.has(product) ? "scale-[2.05]" : "scale-[1.65]";
  }

  if (brandName === "LOLO Rice" && product === "/images/lolo3.jpg") {
    return "scale-[0.84]";
  }

  return "scale-100";
};

const brandLogoScale = (brandName) => {
  if (brandName === "Regal") return "scale-[1.65]";
  if (brandName === "LOLO Rice") return "scale-[2]";
  if (brandName === "MIGITA") return "scale-[1.12]";
  return "scale-100";
};

const navItems = [
  ["About", "about"],
  ["Brands", "brands"],
  ["Capabilities", "capabilities"],
  ["Distribution", "distribution"],
  ["Contact", "contact"],
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState("Mutlu");
  const [activeCollection, setActiveCollection] = useState(null);
  const [previewProduct, setPreviewProduct] = useState(null);

  const selectedBrand = useMemo(
    () => brands.find((brand) => brand.name === activeBrand) || brands[0],
    [activeBrand]
  );

  const selectedCollection = useMemo(
    () =>
      selectedBrand.collections?.find(
        (collection) => collection.name === activeCollection
      ) || selectedBrand.collections?.[0] || null,
    [activeCollection, selectedBrand]
  );

  const displayedProducts = selectedCollection?.products || selectedBrand.products || [];
  const productRangeName = selectedCollection?.name || selectedBrand.name;

  const selectBrand = (brand) => {
    setActiveBrand(brand.name);
    setActiveCollection(brand.collections?.[0]?.name || null);
  };

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    if (!previewProduct) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setPreviewProduct(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [previewProduct]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f5f2] text-[#17191c]">
      <div className="hidden bg-[#17191c] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 xl:px-8">
          <p>Iraq market specialists since 2004</p>
          <div className="flex items-center gap-6">
            <a className="transition hover:text-white" href="mailto:sales@eawanalmosul.com">sales@eawanalmosul.com</a>
            <a className="transition hover:text-white" href="https://wa.me/9647512244900" target="_blank" rel="noreferrer">+964 751 2244 900</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f5f2]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 xl:px-8">
          <a href="#home" aria-label="Eawan Al-Mosul home" className="shrink-0">
            <img src={asset("/images/logo1.png")} alt="Eawan Al-Mosul General Trading Co. Ltd." className="h-10 w-auto sm:h-11" />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, target]) => (
              <a key={target} href={`#${target}`} className="text-sm font-semibold text-[#34373b] transition hover:text-[#9b1c29]">
                {label}
              </a>
            ))}
          </nav>

          <a href="#partner" className="hidden items-center gap-2 rounded-full bg-[#9b1c29] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#7e1520] lg:inline-flex">
            Partner With Us <FaArrowRight className="text-xs" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-xl lg:hidden"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-black/5 bg-[#f7f5f2] px-5 pb-6 pt-3 lg:hidden">
            {navItems.map(([label, target]) => (
              <a key={target} href={`#${target}`} onClick={closeMobile} className="flex items-center justify-between border-b border-black/5 py-4 text-base font-semibold">
                {label} <FaArrowRight className="text-xs text-[#9b1c29]" />
              </a>
            ))}
            <a href="#partner" onClick={closeMobile} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#9b1c29] px-5 py-3.5 font-bold text-white">
              Partner With Us <FaArrowRight className="text-xs" />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative bg-[#17191c] text-white">
          <div className="hero-grid absolute inset-0 opacity-70" />
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#9b1c29]/25 blur-[100px]" />
          <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:py-24 xl:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                <span className="h-2 w-2 rounded-full bg-[#d94a57]" /> Established in Mosul / 2004
              </div>
              <h1 className="max-w-3xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
                Your Gateway to the <span className="text-[#df6570]">Iraqi Food Market</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl">
                We help international food manufacturers enter, distribute, and grow in Iraq with proven local execution and long-term brand stewardship.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold uppercase tracking-[0.12em] text-white/82">
                {["Import", "Distribution", "Brand Development"].map((item) => (
                  <span key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#d94a57]" />{item}</span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#brands" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#9b1c29] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ae2331]">
                  Explore Our Brands <FaArrowRight className="text-sm" />
                </a>
                <a href="#partner" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:border-white/60 hover:bg-white/5">
                  Partner With Us
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative mx-auto w-full max-w-[570px] lg:mx-0 lg:justify-self-end">
              <div className="relative aspect-[1/0.92] overflow-hidden rounded-[36px] border border-white/10 bg-[#24272b] p-7 sm:p-10">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#9b1c29]/35 blur-[70px]" />
                <div aria-hidden="true" className="absolute bottom-7 left-8 text-[80px] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[112px]">IRAQ</div>
                <div className="absolute left-7 top-7 z-10 max-w-[190px] sm:left-10 sm:top-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e36c77]">Market-ready portfolio</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">Trusted food categories for Iraqi homes and retailers.</p>
                </div>
                <img src={asset("/images/hero-mutlu-cutout.webp")} alt="Mutlu pasta product" decoding="async" className="product-shadow absolute bottom-5 left-[1%] z-20 h-[52%] w-[42%] object-contain sm:bottom-7 sm:left-[4%] sm:h-[60%]" />
                <img src={asset("/images/hero-lolo-cutout.webp")} alt="LOLO premium rice product" decoding="async" fetchPriority="high" className="product-shadow absolute bottom-3 left-[29%] z-30 h-[54%] w-[43%] object-contain sm:bottom-6 sm:left-[31%] sm:h-[70%]" />
                <img src={asset("/images/hero-ankara-cutout.webp")} alt="Nuh'un Ankara pasta product" decoding="async" className="product-shadow absolute bottom-4 right-0 z-20 h-[58%] w-[40%] object-contain sm:bottom-5 sm:right-[2%] sm:h-[66%]" />
              </div>
              <div className="glass-card absolute -bottom-5 left-4 z-40 flex items-center gap-4 rounded-2xl px-5 py-4 text-[#17191c] sm:-left-7 sm:bottom-8">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f5e7e9] text-[#9b1c29]"><FaCheck /></span>
                <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-black/60">End-to-end</p><p className="mt-0.5 font-extrabold">From factory to shelf</p></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Company statistics" className="relative z-10 mx-auto -mt-px max-w-7xl px-5 sm:px-6 xl:px-8">
          <div className="grid rounded-b-[30px] bg-white shadow-[0_24px_70px_rgba(15,18,22,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`px-7 py-7 sm:px-8 lg:py-9 ${index !== 0 ? "border-t border-black/5 sm:border-t-0" : ""} ${index > 0 ? "sm:border-l" : ""}`}>
                <p className="text-3xl font-black tracking-[-0.04em] text-[#9b1c29] sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-black/54">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32 xl:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9b1c29]">Built for the Iraqi market</p>
              <h2 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl">Local insight. International standards. One committed partner.</h2>
            </div>
            <div className="border-l-2 border-[#9b1c29] pl-6 sm:pl-9">
              <p className="text-lg leading-8 text-black/62">
                Established in 2004 and headquartered in Mosul, Eawan Al-Mosul General Trading Co. Ltd. imports high-quality food products from reputable manufacturers worldwide and distributes them across Iraq.
              </p>
              <p className="mt-5 text-base leading-7 text-black/54">
                We combine accurate documentation, dependable logistics, disciplined sales execution, and market-specific brand development to turn supplier ambition into durable Iraqi market presence.
              </p>
            </div>
          </div>
        </section>

        <section id="brands" className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9b1c29]">Our portfolio</p>
                <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Brands built for everyday demand.</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-black/55">A selection from our growing portfolio of food brands and products that we import, distribute, and develop across Iraq. Select a brand to explore.</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
              {brands.map((brand) => (
                <button
                  key={brand.name}
                  type="button"
                  data-active={activeBrand === brand.name}
                  onClick={() => selectBrand(brand)}
                  className={`brand-card relative flex min-h-[152px] flex-col items-center justify-center rounded-2xl border px-4 py-5 text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9b1c29] focus-visible:ring-offset-2 ${activeBrand === brand.name ? "border-[#9b1c29] bg-[#fcf6f6] shadow-lg" : "border-black/10 bg-white hover:-translate-y-1 hover:border-black/20 hover:shadow-lg"}`}
                >
                  {brand.badge && (
                    <span className="absolute right-2.5 top-2.5 rounded-full bg-[#9b1c29] px-2 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-white">
                      New
                    </span>
                  )}
                  <img
                    src={asset(brand.logo)}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className={`h-14 w-full object-contain transition-transform duration-300 ${brandLogoScale(brand.name)}`}
                  />
                  <span className="mt-4 text-sm font-extrabold">{brand.name}</span>
                  <span className="mt-1 text-[11px] font-semibold text-black/60">{brand.category}</span>
                </button>
              ))}
            </div>

            <motion.div key={`${selectedBrand.name}-${productRangeName}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-7 overflow-hidden rounded-[28px] bg-[#f3f0ec]">
              <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
                <div className="flex flex-col justify-between bg-[#17191c] p-8 text-white sm:p-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#df6570]">Featured range</p>
                    <h3 className="mt-4 text-3xl font-black tracking-[-0.03em]">{selectedBrand.name}</h3>
                    <p className="mt-2 text-sm text-white/50">{selectedBrand.category}</p>
                    {selectedBrand.badge && (
                      <p className="mt-4 inline-flex rounded-full bg-[#9b1c29] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                        {selectedBrand.badge}
                      </p>
                    )}
                    <p className="mt-5 inline-flex rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/65">
                      {displayedProducts.length} products
                    </p>
                  </div>
                  <p className="mt-10 text-sm leading-6 text-white/55">A market-ready selection supported by Eawan Al-Mosul's import, distribution, and trade development capabilities.</p>
                </div>
                <div className="p-5 sm:p-7">
                  {selectedBrand.collections && (
                    <div className="mb-5 flex flex-wrap gap-2" aria-label="Nuh'un Ankara product ranges">
                      {selectedBrand.collections.map((collection) => (
                        <button
                          key={collection.name}
                          type="button"
                          aria-pressed={selectedCollection?.name === collection.name}
                          onClick={() => setActiveCollection(collection.name)}
                          className={`rounded-full px-4 py-2.5 text-sm font-extrabold transition ${
                            selectedCollection?.name === collection.name
                              ? "bg-[#9b1c29] text-white shadow-md"
                              : "border border-black/10 bg-white text-black/60 hover:border-[#9b1c29]/35 hover:text-[#9b1c29]"
                          }`}
                        >
                          {collection.name}
                        </button>
                      ))}
                    </div>
                  )}
                  <div
                    className={`grid gap-3 ${
                      displayedProducts.length === 1
                        ? "grid-cols-1"
                        : displayedProducts.length === 5
                          ? "five-product-grid grid-cols-2"
                          : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                    }`}
                  >
                    {displayedProducts.map((product, index) => {
                      const imagePath = typeof product === "string" ? product : product.image;
                      const productName = typeof product === "string" ? null : product.name;
                      const previewName = productName || `${productRangeName} product ${index + 1}`;

                      return (
                        <motion.button
                          key={imagePath}
                          type="button"
                          aria-label={`View ${previewName}`}
                          onClick={() =>
                            setPreviewProduct({
                              imagePath,
                              name: previewName,
                              brand: selectedBrand.name,
                              packaging: typeof product === "string" ? null : product.packaging,
                              weight: typeof product === "string" ? null : product.weight,
                              imageScale: productImageScale(selectedBrand.name, imagePath),
                            })
                          }
                          whileHover={{ y: -4 }}
                          whileTap={{ scale: 0.985 }}
                          transition={{ duration: 0.2 }}
                          className="group relative flex min-h-[230px] cursor-zoom-in flex-col overflow-hidden rounded-2xl bg-white p-4 text-left shadow-sm outline-none transition-shadow hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#9b1c29] focus-visible:ring-offset-2"
                        >
                          <span className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-black/8 bg-white/90 text-[11px] text-black/45 opacity-70 shadow-sm backdrop-blur transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                            <FaExpandAlt aria-hidden="true" />
                          </span>
                          <div className="grid min-h-0 flex-1 place-items-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                            <img
                              src={asset(imagePath)}
                              alt={previewName}
                              loading="lazy"
                              decoding="async"
                              className={`max-h-52 w-full origin-center object-contain transition-transform duration-300 ${productImageScale(selectedBrand.name, imagePath)}`}
                            />
                          </div>
                          {productName && (
                            <div className="mt-4 border-t border-black/8 pt-4 text-left">
                              <h4 className="text-sm font-black leading-5 tracking-[-0.01em]">{productName}</h4>
                              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-black/48">
                                {product.packaging} / {product.weight}
                              </p>
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:py-32 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9b1c29]">What we do</p>
              <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">One partner across your route to market.</h2>
              <p className="mt-6 text-base leading-7 text-black/55">Focused capabilities designed to reduce friction and accelerate responsible growth in Iraq.</p>
            </div>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {services.map(({ icon: Icon, number, title, text }) => (
                <div key={title} className="group grid gap-5 py-8 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:py-10">
                  <span className="text-sm font-black tracking-[0.12em] text-[#9b1c29]">{number}</span>
                  <div>
                    <div className="flex items-center gap-3"><Icon className="text-xl text-[#9b1c29]" /><h3 className="text-2xl font-black tracking-[-0.025em]">{title}</h3></div>
                    <p className="mt-3 max-w-xl text-base leading-7 text-black/55">{text}</p>
                  </div>
                  <FaArrowRight className="hidden -rotate-45 text-sm text-black/25 transition group-hover:text-[#9b1c29] sm:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ece8e2] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 xl:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9b1c29]">Why partner with Eawan Al-Mosul</p>
              <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">Commercially sharp. Operationally dependable.</h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partnerReasons.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="rounded-[24px] border border-black/5 bg-white p-7 shadow-[0_12px_32px_rgba(20,20,20,0.04)] transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f4e5e7] text-lg text-[#9b1c29]"><Icon /></span>
                    <span aria-hidden="true" className="text-xs font-black tracking-[0.16em] text-black/20">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-black tracking-[-0.02em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/53">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="distribution" className="bg-[#17191c] py-24 text-white lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 xl:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#df6570]">Distribution footprint</p>
              <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.04em] sm:text-5xl">From our Mosul hub to key Iraqi markets.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/57">Once shipments arrive at our Mosul hub, trusted regional distributors dispatch immediately, supporting reliable product flow and faster time to market.</p>
              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
                {governorates.map((governorate, index) => (
                  <motion.div
                    key={governorate}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.045, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-bold"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#d94a57] transition group-hover:scale-150 group-hover:shadow-[0_0_14px_rgba(217,74,87,0.8)]" />
                    {governorate}
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ y: -2 }} className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                <span className="relative grid h-5 w-5 place-items-center">
                  <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#d94a57]/30 motion-safe:animate-ping" />
                  <FaMapMarkerAlt className="relative text-[#d94a57]" />
                </span>
                Mosul headquarters
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="map-dots group/map relative min-h-[480px] overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#9b1c29]/30 blur-[80px]" />
              <div className="relative z-10 mx-auto aspect-square w-full max-w-[500px]">
                <img src={asset("/images/logoabou1.jpg")} alt="Iraq distribution network map" loading="lazy" decoding="async" className="h-full w-full rounded-2xl object-contain opacity-85 mix-blend-screen transition-transform duration-700 group-hover/map:scale-[1.018]" />
                <div aria-hidden="true" className="absolute inset-0">
                  {mapPoints.map((point, index) => (
                    <span key={point.name} className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ top: point.top, left: point.left }}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.07, type: "spring", stiffness: 240, damping: 18 }}
                        className="relative grid h-4 w-4 place-items-center"
                      >
                        {point.hub && <span className="absolute h-8 w-8 rounded-full border border-[#d94a57]/60 motion-safe:animate-ping" />}
                        <span className={`relative h-2.5 w-2.5 rounded-full border-2 border-white shadow-[0_0_16px_rgba(217,74,87,0.9)] ${point.hub ? "bg-[#d94a57]" : "bg-[#9b1c29]"}`} />
                        {point.hub && (
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#17191c]/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur">
                            Mosul hub
                          </span>
                        )}
                      </motion.span>
                    </span>
                  ))}
                </div>
              </div>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="absolute bottom-6 left-6 z-30 rounded-2xl bg-white px-5 py-4 text-[#17191c] shadow-xl sm:bottom-9 sm:left-9">
                <p className="text-2xl font-black tracking-[-0.03em]">Nationwide reach</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-black/60">Regional distribution partners</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="partner" className="px-5 py-20 sm:px-6 lg:py-28 xl:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#9b1c29] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[70px] border-white/[0.06]" />
            <div className="absolute bottom-0 right-[25%] h-40 w-40 rounded-full bg-black/10 blur-3xl" />
            <div className="relative z-10 grid items-end gap-9 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">For suppliers & manufacturers</p>
                <h2 className="mt-5 text-balance text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Ready to build your brand in Iraq?</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Bring us your product ambition. We will bring the local knowledge, route-to-market discipline, and partnership mindset to move it forward.</p>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-black text-[#831621] transition hover:-translate-y-0.5 hover:shadow-2xl">
                Start a Conversation <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-black/8 bg-white py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20 xl:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9b1c29]">Contact us</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Let's talk about your next market move.</h2>
              <p className="mt-6 text-base leading-7 text-black/55">For exclusive distribution, pricing, private label, or general business inquiries, contact our team in Mosul.</p>
              <a href="https://wa.me/9647512244900" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17191c] px-6 py-4 font-bold text-white transition hover:bg-[#9b1c29]"><FaWhatsapp /> Message on WhatsApp</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:sales@eawanalmosul.com" className="rounded-2xl border border-black/10 p-6 transition hover:border-[#9b1c29]/40 hover:shadow-lg">
                <FaEnvelope className="text-xl text-[#9b1c29]" /><p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-black/60">Sales</p><p className="mt-2 font-extrabold">sales@eawanalmosul.com</p>
              </a>
              <a href="mailto:finance@eawanalmosul.com" className="rounded-2xl border border-black/10 p-6 transition hover:border-[#9b1c29]/40 hover:shadow-lg">
                <FaEnvelope className="text-xl text-[#9b1c29]" /><p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-black/60">Finance</p><p className="mt-2 font-extrabold">finance@eawanalmosul.com</p>
              </a>
              <a href="https://wa.me/9647724888066" target="_blank" rel="noreferrer" className="rounded-2xl border border-black/10 p-6 transition hover:border-[#9b1c29]/40 hover:shadow-lg">
                <FaPhoneAlt className="text-xl text-[#9b1c29]" /><p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-black/60">Direct / Hasan Salam</p><p className="mt-2 font-extrabold">+964 772 4888 066</p><p className="mt-1 text-sm text-black/60">hasan@eawanalmosul.com</p>
              </a>
              <a href="https://maps.google.com/?q=Mosul,Iraq" target="_blank" rel="noreferrer" className="rounded-2xl border border-black/10 p-6 transition hover:border-[#9b1c29]/40 hover:shadow-lg">
                <FaMapMarkerAlt className="text-xl text-[#9b1c29]" /><p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-black/60">Head office</p><p className="mt-2 font-extrabold">Mosul, Iraq</p><p className="mt-1 text-sm leading-5 text-black/60">Sinaeat Al Karama, behind car galleries, M14 Z29 B4</p>
              </a>
              <div className="rounded-2xl border border-black/10 p-6 sm:col-span-2">
                <div className="flex items-center gap-3"><FaClock className="text-[#9b1c29]" /><p className="font-extrabold">Office hours</p></div><p className="mt-2 text-sm text-black/60">Saturday-Thursday / 08:00-17:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {previewProduct && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-preview-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setPreviewProduct(null)}
            className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-[#101215]/78 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#f7f5f2] shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
            >
              <button
                type="button"
                autoFocus
                aria-label="Close product preview"
                onClick={() => setPreviewProduct(null)}
                className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/90 text-lg text-[#17191c] shadow-lg backdrop-blur transition hover:rotate-90 hover:bg-[#9b1c29] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9b1c29]"
              >
                <FaTimes />
              </button>

              <div className="grid md:grid-cols-[1.15fr_0.85fr]">
                <div className="grid min-h-[360px] place-items-center overflow-hidden bg-white p-7 sm:min-h-[500px] sm:p-10">
                  <motion.img
                    key={previewProduct.imagePath}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.08, duration: 0.35 }}
                    src={asset(previewProduct.imagePath)}
                    alt={previewProduct.name}
                    decoding="async"
                    className={`max-h-[60vh] w-full origin-center object-contain ${previewProduct.imageScale}`}
                  />
                </div>

                <div className="flex flex-col justify-between bg-[#f3f0ec] p-7 pt-20 sm:p-10 sm:pt-20">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9b1c29]">Product preview</p>
                    <p className="mt-4 text-sm font-bold text-black/48">{previewProduct.brand}</p>
                    <h3 id="product-preview-title" className="mt-2 text-2xl font-black leading-tight tracking-[-0.025em] sm:text-3xl">
                      {previewProduct.name}
                    </h3>
                    {previewProduct.packaging && (
                      <p className="mt-4 inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-black/55">
                        {previewProduct.packaging} / {previewProduct.weight}
                      </p>
                    )}
                    <p className="mt-6 text-sm leading-6 text-black/55">
                      Part of Eawan Al-Mosul's growing portfolio for the Iraqi market.
                    </p>
                  </div>
                  <button type="button" onClick={() => setPreviewProduct(null)} className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#17191c] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#9b1c29]">
                    Continue exploring <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-[#17191c] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 md:grid-cols-[1fr_auto_auto] xl:px-8">
          <div>
            <img src={asset("/images/logo1.png")} alt="Eawan Al-Mosul" loading="lazy" decoding="async" className="h-11 w-auto rounded bg-white/90 px-2" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">Your trusted import, distribution, and brand-building partner in Iraq since 2004.</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">Navigate</p>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/68">
              {navItems.slice(0, 4).map(([label, target]) => <a key={target} href={`#${target}`} className="transition hover:text-white">{label}</a>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">Follow</p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/e1_almosul?igsh=NGd1cHRocnljeno3" aria-label="Instagram" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d94a57] hover:text-white"><FaInstagram /></a>
              <a href="https://www.facebook.com/share/15qp7PAyLU/" aria-label="Facebook" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d94a57] hover:text-white"><FaFacebookF /></a>
              <a href="https://wa.me/9647724888066" aria-label="WhatsApp" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d94a57] hover:text-white"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 xl:px-8">
            <p>{"\u00A9"} {new Date().getFullYear()} Eawan Al-Mosul General Trading Co. Ltd.</p>
            <p>Reg. No. 19955 / Mosul, Iraq</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
