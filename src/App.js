import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaBoxOpen,
  FaCertificate,
  FaChartLine,
  FaCheck,
  FaClock,
  FaEnvelope,
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
    category: "Pasta & Pantry",
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
    category: "Rice",
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
                <div className="absolute bottom-7 left-8 text-[80px] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[112px]">IRAQ</div>
                <div className="absolute left-7 top-7 z-10 max-w-[190px] sm:left-10 sm:top-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#df6570]">Market-ready portfolio</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">Trusted food categories for Iraqi homes and retailers.</p>
                </div>
                <img src={asset("/images/hero-mutlu-cutout.webp")} alt="Mutlu pasta product" className="product-shadow absolute bottom-5 left-[1%] z-20 h-[52%] w-[42%] object-contain sm:bottom-7 sm:left-[4%] sm:h-[60%]" />
                <img src={asset("/images/hero-lolo-cutout.webp")} alt="LOLO premium rice product" className="product-shadow absolute bottom-3 left-[29%] z-30 h-[54%] w-[43%] object-contain sm:bottom-6 sm:left-[31%] sm:h-[70%]" />
                <img src={asset("/images/hero-ankara-cutout.webp")} alt="Nuh'un Ankara pasta product" className="product-shadow absolute bottom-4 right-0 z-20 h-[58%] w-[40%] object-contain sm:bottom-5 sm:right-[2%] sm:h-[66%]" />
              </div>
              <div className="glass-card absolute -bottom-5 left-4 z-40 flex items-center gap-4 rounded-2xl px-5 py-4 text-[#17191c] sm:-left-7 sm:bottom-8">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f5e7e9] text-[#9b1c29]"><FaCheck /></span>
                <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-black/45">End-to-end</p><p className="mt-0.5 font-extrabold">From factory to shelf</p></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section aria-label="Company statistics" className="relative z-10 mx-auto -mt-px max-w-7xl px-5 sm:px-6 xl:px-8">
          <div className="grid rounded-b-[30px] bg-white shadow-[0_24px_70px_rgba(15,18,22,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} clas×~ú¶‰žËkºwµçP¹¹…µ•ôð½ Ìø(€€€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ÈÑ•áÐµÍ´Ñ•áÐµÝ¡¥Ñ”¼ÔÀˆùíÍ•±•Ñ•‘	É…¹¹…Ñ•½Éåôð½Àø(€€€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´Ô¥¹±¥¹”µ™±•àÉ½Õ¹‘•µ™Õ±°‰½É‘•È‰½É‘•ÈµÝ¡¥Ñ”¼ÄÔÁà´ÌÁä´Ä¸ÔÑ•áÐµáÌ™½¹Ðµ‰½±ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÉ•µtÑ•áÐµÝ¡¥Ñ”¼ØÔˆø(€€€€€€€€€€€€€€€€€€€€€í‘¥ÍÁ±…å•‘AÉ½‘ÕÑÌ¹±•¹Ñ¡ôÁÉ½‘ÕÑÌ(€€€€€€€€€€€€€€€€€€€€ð½Àø(€€€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ÄÀÑ•áÐµÍ´±•…‘¥¹œ´ØÑ•áÐµÝ¡¥Ñ”¼ÔÔˆùµ…É­•ÐµÉ•…‘äÍ•±•Ñ¥½¸ÍÕÁÁ½ÉÑ•‰ä…Ý…¸°µ5½ÍÕ°Ì¥µÁ½ÉÐ°‘¥ÍÑÉ¥‰ÕÑ¥½¸°…¹ÑÉ…‘”‘•Ù•±½Áµ•¹Ð…Á…‰¥±¥Ñ¥•Ì¸ð½Àø(€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰À´ÔÍ´éÀ´Üˆø(€€€€€€€€€€€€€€€€€íÍ•±•Ñ•‘	É…¹¹½±±•Ñ¥½¹Ì€˜˜€ (€€€€€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µˆ´Ô™±•à™±•àµÝÉ…À…À´Èˆ…É¥„µ±…‰•°ô‰9Õ Õ¸¹­…É„ÁÉ½‘ÕÐÉ…¹•Ìˆø(€€€€€€€€€€€€€€€€€€€€€íÍ•±•Ñ•‘	É…¹¹½±±•Ñ¥½¹Ì¹µ…À ¡½±±•Ñ¥½¸¤€ôø€ (€€€€€€€€€€€€€€€€€€€€€€€€ñ‰ÕÑÑ½¸(€€€€€€€€€€€€€€€€€€€€€€€€€­•äõí½±±•Ñ¥½¸¹¹…µ•ô(€€€€€€€€€€€€€€€€€€€€€€€€€ÑåÁ”ô‰‰ÕÑÑ½¸ˆ(€€€€€€€€€€€€€€€€€€€€€€€€€…É¥„µÁÉ•ÍÍ•õíÍ•±•Ñ•‘½±±•Ñ¥½¸ü¹¹…µ”€ôôô½±±•Ñ¥½¸¹¹…µ•ô(€€€€€€€€€€€€€€€€€€€€€€€€€½¹±¥¬õì ¤€ôøÍ•ÑÑ¥Ù•½±±•Ñ¥½¸¡½±±•Ñ¥½¸¹¹…µ”¥ô(€€€€€€€€€€€€€€€€€€€€€€€€€±…ÍÍ9…µ”õíÉ½Õ¹‘•µ™Õ±°Áà´ÐÁä´È¸ÔÑ•áÐµÍ´™½¹Ðµ•áÑÉ…‰½±ÑÉ…¹Í¥Ñ¥½¸€‘ì(€€€€€€€€€€€€€€€€€€€€€€€€€€€Í•±•Ñ•‘½±±•Ñ¥½¸ü¹¹…µ”€ôôô½±±•Ñ¥½¸¹¹…µ”(€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€ü€‰‰œµlŒåˆÅŒÈåtÑ•áÐµÝ¡¥Ñ”Í¡…‘½Üµµˆ(€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€è€‰‰½É‘•È‰½É‘•Èµ‰±…¬¼ÄÀ‰œµÝ¡¥Ñ”Ñ•áÐµ‰±…¬¼ØÀ¡½Ù•Èé‰½É‘•ÈµlŒåˆÅŒÈåt¼ÌÔ¡½Ù•ÈéÑ•áÐµlŒåˆÅŒÈåtˆ(€€€€€€€€€€€€€€€€€€€€€€€€€õô(€€€€€€€€€€€€€€€€€€€€€€€€ø(€€€€€€€€€€€€€€€€€€€€€€€€€í½±±•Ñ¥½¸¹¹…µ•ô(€€€€€€€€€€€€€€€€€€€€€€€€ð½‰ÕÑÑ½¸ø(€€€€€€€€€€€€€€€€€€€€€€¤¥ô(€€€€€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€€€¥ô(€€€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”õíÉ¥…À´Ì€‘í‘¥ÍÁ±…å•‘AÉ½‘ÕÑÌ¹±•¹Ñ €ôôô€Ä€ü€‰É¥µ½±Ì´Äˆ€è€‰É¥µ½±Ì´ÈÍ´éÉ¥µ½±Ì´Ìá°éÉ¥µ½±Ì´Ð‰õôø(€€€€€€€€€€€€€€€€€€€í‘¥ÍÁ±…å•‘AÉ½‘ÕÑÌ¹µ…À ¡ÁÉ½‘ÕÐ°¥¹‘•à¤€ôø€ (€€€€€€€€€€€€€€€€€€€€€€ñ‘¥Ø­•äõíÁÉ½‘ÕÑô±…ÍÍ9…µ”ô‰É¥µ¥¸µ µlÈÌÁÁátÁ±…”µ¥Ñ•µÌµ•¹Ñ•È½Ù•É™±½Üµ¡¥‘‘•¸É½Õ¹‘•´Éá°‰œµÝ¡¥Ñ”À´ÐÍ¡…‘½ÜµÍ´ˆø(€€€€€€€€€€€€€€€€€€€€€€€€ñ¥µœ(€€€€€€€€€€€€€€€€€€€€€€€€€ÍÉŒõí…ÍÍ•Ð¡ÁÉ½‘ÕÐ¥ô(€€€€€€€€€€€€€€€€€€€€€€€€€…±Ðõí€‘íÁÉ½‘ÕÑI…¹•9…µ•ôÁÉ½‘ÕÐ€‘í¥¹‘•à€¬€Åõô(€€€€€€€€€€€€€€€€€€€€€€€€€±…ÍÍ9…µ”õíµ…àµ ´ÔÈÜµ™Õ±°½É¥¥¸µ•¹Ñ•È½‰©•Ðµ½¹Ñ…¥¸ÑÉ…¹Í¥Ñ¥½¸µÑÉ…¹Í™½É´‘ÕÉ…Ñ¥½¸´ÌÀÀ€‘íÁÉ½‘ÕÑ%µ…•M…±”¡Í•±•Ñ•‘	É…¹¹¹…µ”°ÁÉ½‘ÕÐ¥õô(€€€€€€€€€€€€€€€€€€€€€€€€¼ø(€€€€€€€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€€€€€¤¥ô(€€€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€ð½µ½Ñ¥½¸¹‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€€€ñÍ•Ñ¥½¸¥ô‰…Á…‰¥±¥Ñ¥•Ìˆ±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼µ…àµÜ´Ýá°Áà´ÔÁä´ÈÐÍ´éÁà´Ø±œéÁä´ÌÈá°éÁà´àˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É¥…À´ÄÈ±œéÉ¥µ½±ÌµlÀ¸ÌÙ™É|À¸ØÑ™Ét±œé…À´ÈÀˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰±œéÍÑ¥­ä±œéÑ½À´ÌÈ±œéÍ•±˜µÍÑ…ÉÐˆø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸É•µtÑ•áÐµlŒåˆÅŒÈåtˆù]¡…ÐÝ”‘¼ð½Àø(€€€€€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰µÐ´ÔÑ•áÐµ‰…±…¹”Ñ•áÐ´Ñá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÑ•µtÍ´éÑ•áÐ´Õá°ˆù=¹”Á…ÉÑ¹•È…É½ÍÌå½ÕÈÉ½ÕÑ”Ñ¼µ…É­•Ð¸ð½ Èø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ØÑ•áÐµ‰…Í”±•…‘¥¹œ´ÜÑ•áÐµ‰±…¬¼ÔÔˆù½ÕÍ•…Á…‰¥±¥Ñ¥•Ì‘•Í¥¹•Ñ¼É•‘Õ”™É¥Ñ¥½¸…¹…•±•É…Ñ”É•ÍÁ½¹Í¥‰±”É½ÝÑ ¥¸%É…Ä¸ð½Àø(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰‘¥Ù¥‘”µä‘¥Ù¥‘”µ‰±…¬¼ÄÀ‰½É‘•Èµä‰½É‘•Èµ‰±…¬¼ÄÀˆø(€€€€€€€€€€€€€íÍ•ÉÙ¥•Ì¹µ…À ¡ì¥½¸è%½¸°¹Õµ‰•È°Ñ¥Ñ±”°Ñ•áÐô¤€ôø€ (€€€€€€€€€€€€€€€€ñ‘¥Ø­•äõíÑ¥Ñ±•ô±…ÍÍ9…µ”ô‰É½ÕÀÉ¥…À´ÔÁä´àÍ´éÉ¥µ½±ÌµlÜÉÁá|Å™É}…ÕÑ½tÍ´é¥Ñ•µÌµÍÑ…ÉÐÍ´éÁä´ÄÀˆø(€€€€€€€€€€€€€€€€€€ñÍÁ…¸±…ÍÍ9…µ”ô‰Ñ•áÐµÍ´™½¹Ðµ‰±…¬ÑÉ…­¥¹œµlÀ¸ÄÉ•µtÑ•áÐµlŒåˆÅŒÈåtˆùí¹Õµ‰•Éôð½ÍÁ…¸ø(€€€€€€€€€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰™±•à¥Ñ•µÌµ•¹Ñ•È…À´Ìˆøñ%½¸±…ÍÍ9…µ”ô‰Ñ•áÐµá°Ñ•áÐµlŒåˆÅŒÈåtˆ€¼øñ Ì±…ÍÍ9…µ”ô‰Ñ•áÐ´Éá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÈÕ•µtˆùíÑ¥Ñ±•ôð½ Ìøð½‘¥Øø(€€€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´Ìµ…àµÜµá°Ñ•áÐµ‰…Í”±•…‘¥¹œ´ÜÑ•áÐµ‰±…¬¼ÔÔˆùíÑ•áÑôð½Àø(€€€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€€€ñ…ÉÉ½ÝI¥¡Ð±…ÍÍ9…µ”ô‰¡¥‘‘•¸€µÉ½Ñ…Ñ”´ÐÔÑ•áÐµÍ´Ñ•áÐµ‰±…¬¼ÈÔÑÉ…¹Í¥Ñ¥½¸É½ÕÀµ¡½Ù•ÈéÑ•áÐµlŒåˆÅŒÈåtÍ´é‰±½¬ˆ€¼ø(€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€¤¥ô(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€€€ñÍ•Ñ¥½¸±…ÍÍ9…µ”ô‰‰œµl•”á”ÉtÁä´ÈÐ±œéÁä´ÌÈˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼µ…àµÜ´Ýá°Áà´ÔÍ´éÁà´Øá°éÁà´àˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µ…àµÜ´Íá°ˆø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸É•µtÑ•áÐµlŒåˆÅŒÈåtˆù]¡äÁ…ÉÑ¹•ÈÝ¥Ñ …Ý…¸°µ5½ÍÕ°ð½Àø(€€€€€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰µÐ´ÔÑ•áÐµ‰…±…¹”Ñ•áÐ´Ñá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÑ•µtÍ´éÑ•áÐ´Õá°ˆù½µµ•É¥…±±äÍ¡…ÉÀ¸=Á•É…Ñ¥½¹…±±ä‘•Á•¹‘…‰±”¸ð½ Èø(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÄÈÉ¥…À´ÐÍ´éÉ¥µ½±Ì´È±œéÉ¥µ½±Ì´Ðˆø(€€€€€€€€€€€€€íÁ…ÉÑ¹•ÉI•…Í½¹Ì¹µ…À ¡ì¥½¸è%½¸°Ñ¥Ñ±”°Ñ•áÐô°¥¹‘•à¤€ôø€ (€€€€€€€€€€€€€€€€ñ‘¥Ø­•äõíÑ¥Ñ±•ô±…ÍÍ9…µ”ô‰É½Õ¹‘•µlÈÑÁát‰½É‘•È‰½É‘•Èµ‰±…¬¼Ô‰œµÝ¡¥Ñ”À´ÜÍ¡…‘½ÜµlÁ|ÄÉÁá|ÌÉÁá}É‰„ ÈÀ°ÈÀ°ÈÀ°À¸ÀÐ¥tÑÉ…¹Í¥Ñ¥½¸¡½Ù•ÈèµÑÉ…¹Í±…Ñ”µä´Ä¡½Ù•ÈéÍ¡…‘½Üµá°ˆø(€€€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ‰•ÑÝ••¸ˆø(€€€€€€€€€€€€€€€€€€€€ñÍÁ…¸±…ÍÍ9…µ”ô‰É¥ ´ÄÈÜ´ÄÈÁ±…”µ¥Ñ•µÌµ•¹Ñ•ÈÉ½Õ¹‘•µ™Õ±°‰œµl˜Ñ”Õ”ÝtÑ•áÐµ±œÑ•áÐµlŒåˆÅŒÈåtˆøñ%½¸€¼øð½ÍÁ…¸ø(€€€€€€€€€€€€€€€€€€€€ñÍÁ…¸±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÑÉ…­¥¹œµlÀ¸ÄÙ•µtÑ•áÐµ‰±…¬¼ÈÀˆøÁí¥¹‘•à€¬€Åôð½ÍÁ…¸ø(€€€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€€€€€ñ Ì±…ÍÍ9…µ”ô‰µÐ´àÑ•áÐµá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÉ•µtˆùíÑ¥Ñ±•ôð½ Ìø(€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ÌÑ•áÐµÍ´±•…‘¥¹œ´ØÑ•áÐµ‰±…¬¼ÔÌˆùíÑ•áÑôð½Àø(€€€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€¤¥ô(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€€€ñÍ•Ñ¥½¸¥ô‰‘¥ÍÑÉ¥‰ÕÑ¥½¸ˆ±…ÍÍ9…µ”ô‰‰œµlŒÄÜÄäÅtÁä´ÈÐÑ•áÐµÝ¡¥Ñ”±œéÁä´ÌÈˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼É¥µ…àµÜ´Ýá°¥Ñ•µÌµ•¹Ñ•È…À´ÄÈÁà´ÔÍ´éÁà´Ø±œéÉ¥µ½±Ì´È±œé…À´ÈÀá°éÁà´àˆø(€€€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸É•µtÑ•áÐµl‘˜ØÔÜÁtˆù¥ÍÑÉ¥‰ÕÑ¥½¸™½½ÑÁÉ¥¹Ðð½Àø(€€€€€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰µÐ´ÔÑ•áÐµ‰…±…¹”Ñ•áÐ´Ñá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÑ•µtÍ´éÑ•áÐ´Õá°ˆùÉ½´½ÕÈ5½ÍÕ°¡ÕˆÑ¼­•ä%É…Å¤µ…É­•ÑÌ¸ð½ Èø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´Øµ…àµÜµá°Ñ•áÐµ‰…Í”±•…‘¥¹œ´ÜÑ•áÐµÝ¡¥Ñ”¼ÔÜˆù=¹”Í¡¥Áµ•¹ÑÌ…ÉÉ¥Ù”…Ð½ÕÈ5½ÍÕ°¡Õˆ°ÑÉÕÍÑ•É•¥½¹…°‘¥ÍÑÉ¥‰ÕÑ½ÉÌ‘¥ÍÁ…Ñ ¥µµ•‘¥…Ñ•±ä°ÍÕÁÁ½ÉÑ¥¹œÉ•±¥…‰±”ÁÉ½‘ÕÐ™±½Ü…¹™…ÍÑ•ÈÑ¥µ”Ñ¼µ…É­•Ð¸ð½Àø(€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´äÉ¥É¥µ½±Ì´È…Àµà´à…Àµä´ÐÍ´éÉ¥µ½±Ì´Ìˆø(€€€€€€€€€€€€€€€í½Ù•É¹½É…Ñ•Ì¹µ…À ¡½Ù•É¹½É…Ñ”¤€ôø€ (€€€€€€€€€€€€€€€€€€ñ‘¥Ø­•äõí½Ù•É¹½É…Ñ•ô±…ÍÍ9…µ”ô‰™±•à¥Ñ•µÌµ•¹Ñ•È…À´Ì‰½É‘•Èµˆ‰½É‘•ÈµÝ¡¥Ñ”¼ÄÀÁˆ´ÐÑ•áÐµÍ´™½¹Ðµ‰½±ˆøñÍÁ…¸±…ÍÍ9…µ”ô‰ ´ÈÜ´ÈÉ½Õ¹‘•µ™Õ±°‰œµläÑ„ÔÝtˆ€¼ùí½Ù•É¹½É…Ñ•ôð½‘¥Øø(€€€€€€€€€€€€€€€€¤¥ô(€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´à¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È…À´ÌÉ½Õ¹‘•µ™Õ±°‰½É‘•È‰½É‘•ÈµÝ¡¥Ñ”¼ÄÔÁà´ÐÁä´ÈÑ•áÐµáÌ™½¹Ðµ‰½±ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÑ•µtÑ•áÐµÝ¡¥Ñ”¼ØÀˆøñ…5…Á5…É­•É±Ð±…ÍÍ9…µ”ô‰Ñ•áÐµläÑ„ÔÝtˆ€¼ø5½ÍÕ°¡•…‘ÅÕ…ÉÑ•ÉÌð½‘¥Øø(€€€€€€€€€€€€ð½‘¥Øø((€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µ…Àµ‘½ÑÌÉ•±…Ñ¥Ù”µ¥¸µ µlÐàÁÁát½Ù•É™±½Üµ¡¥‘‘•¸É½Õ¹‘•µlÌÁÁát‰½É‘•È‰½É‘•ÈµÝ¡¥Ñ”¼ÄÀ‰œµÝ¡¥Ñ”½lÀ¸ÀÌÕtÀ´ÜÍ´éÀ´ÄÀˆø(€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰…‰Í½±ÕÑ”€µÉ¥¡Ð´ÄØ€µÑ½À´ÄØ ´ØÐÜ´ØÐÉ½Õ¹‘•µ™Õ±°‰œµlŒåˆÅŒÈåt¼ÌÀ‰±ÕÈµlàÁÁátˆ€¼ø(€€€€€€€€€€€€€€ñ¥µœÍÉŒõí…ÍÍ•Ð ˆ½¥µ…•Ì½±½½…‰½ÔÄ¹©Áœˆ¥ô…±Ðô‰%É…Ä‘¥ÍÑÉ¥‰ÕÑ¥½¸¹•ÑÝ½É¬µ…Àˆ±…ÍÍ9…µ”ô‰É•±…Ñ¥Ù”è´ÄÀ µ™Õ±°µ¥¸µ µlÐÄÁÁátÜµ™Õ±°É½Õ¹‘•´Éá°½‰©•Ðµ½¹Ñ…¥¸½Á…¥Ñä´àÔµ¥àµ‰±•¹µÍÉ••¸ˆ€¼ø(€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰…‰Í½±ÕÑ”‰½ÑÑ½´´Ø±•™Ð´Øè´ÈÀÉ½Õ¹‘•´Éá°‰œµÝ¡¥Ñ”Áà´ÔÁä´ÐÑ•áÐµlŒÄÜÄäÅtÍ¡…‘½Üµá°Í´é‰½ÑÑ½´´äÍ´é±•™Ð´äˆø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐ´Éá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÍ•µtˆù9…Ñ¥½¹Ý¥‘”É•… ð½Àø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµáÌ™½¹Ðµ‰½±ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÑ•µtÑ•áÐµ‰±…¬¼ÐÔˆùI•¥½¹…°‘¥ÍÑÉ¥‰ÕÑ¥½¸Á…ÉÑ¹•ÉÌð½Àø(€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€€€ñÍ•Ñ¥½¸¥ô‰Á…ÉÑ¹•Èˆ±…ÍÍ9…µ”ô‰Áà´ÔÁä´ÈÀÍ´éÁà´Ø±œéÁä´Èàá°éÁà´àˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É•±…Ñ¥Ù”µàµ…ÕÑ¼µ…àµÜ´Ýá°½Ù•É™±½Üµ¡¥‘‘•¸É½Õ¹‘•µlÌÉÁát‰œµlŒåˆÅŒÈåtÁà´ØÁä´ÄÐÑ•áÐµÝ¡¥Ñ”Í´éÁà´ÄÀ±œéÁà´ÄØ±œéÁä´ÈÀˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰…‰Í½±ÕÑ”€µÉ¥¡Ð´ÈÐ€µÑ½À´ÈÐ ´äØÜ´äØÉ½Õ¹‘•µ™Õ±°‰½É‘•ÈµlÜÁÁát‰½É‘•ÈµÝ¡¥Ñ”½lÀ¸ÀÙtˆ€¼ø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰…‰Í½±ÕÑ”‰½ÑÑ½´´ÀÉ¥¡ÐµlÈÔ•t ´ÐÀÜ´ÐÀÉ½Õ¹‘•µ™Õ±°‰œµ‰±…¬¼ÄÀ‰±ÕÈ´Íá°ˆ€¼ø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É•±…Ñ¥Ù”è´ÄÀÉ¥¥Ñ•µÌµ•¹…À´ä±œéÉ¥µ½±ÌµlÅ™É}…ÕÑ½tˆø(€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µ…àµÜ´Íá°ˆø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸É•µtÑ•áÐµÝ¡¥Ñ”¼ØÔˆù½ÈÍÕÁÁ±¥•ÉÌ€˜µ…¹Õ™…ÑÕÉ•ÉÌð½Àø(€€€€€€€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰µÐ´ÔÑ•áÐµ‰…±…¹”Ñ•áÐ´Ñá°™½¹Ðµ‰±…¬±•…‘¥¹œµlÄ¸ÀÉtÑÉ…­¥¹œµl´À¸ÀÑ•µtÍ´éÑ•áÐ´Õá°±œéÑ•áÐ´Ùá°ˆùI•…‘äÑ¼‰Õ¥±å½ÕÈ‰É…¹¥¸%É…Äüð½ Èø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´Øµ…àµÜ´Éá°Ñ•áÐµ±œ±•…‘¥¹œ´àÑ•áÐµÝ¡¥Ñ”¼ÜÈˆù	É¥¹œÕÌå½ÕÈÁÉ½‘ÕÐ…µ‰¥Ñ¥½¸¸]”Ý¥±°‰É¥¹œÑ¡”±½…°­¹½Ý±•‘”°É½ÕÑ”µÑ¼µµ…É­•Ð‘¥Í¥Á±¥¹”°…¹Á…ÉÑ¹•ÉÍ¡¥Àµ¥¹‘Í•ÐÑ¼µ½Ù”¥Ð™½ÉÝ…É¸ð½Àø(€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€€€ñ„¡É•˜ôˆ½¹Ñ…Ðˆ±…ÍÍ9…µ”ô‰¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ•¹Ñ•È…À´ÌÉ½Õ¹‘•µ™Õ±°‰œµÝ¡¥Ñ”Áà´ÜÁä´Ð™½¹Ðµ‰±…¬Ñ•áÐµlŒàÌÄØÈÅtÑÉ…¹Í¥Ñ¥½¸¡½Ù•ÈèµÑÉ…¹Í±…Ñ”µä´À¸Ô¡½Ù•ÈéÍ¡…‘½Ü´Éá°ˆø(€€€€€€€€€€€€€€€MÑ…ÉÐ„½¹Ù•ÉÍ…Ñ¥½¸€ñ…ÉÉ½ÝI¥¡Ð±…ÍÍ9…µ”ô‰Ñ•áÐµÍ´ˆ€¼ø(€€€€€€€€€€€€€€ð½„ø(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½Í•Ñ¥½¸ø((€€€€€€€€ñÍ•Ñ¥½¸¥ô‰½¹Ñ…Ðˆ±…ÍÍ9…µ”ô‰‰½É‘•ÈµÐ‰½É‘•Èµ‰±…¬¼à‰œµÝ¡¥Ñ”Áä´ÈÐ±œéÁä´Èàˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼É¥µ…àµÜ´Ýá°…À´ÄÈÁà´ÔÍ´éÁà´Ø±œéÉ¥µ½±ÌµlÀ¸ÐÉ™É|À¸Ôá™Ét±œé…À´ÈÀá°éÁà´àˆø(€€€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸É•µtÑ•áÐµlŒåˆÅŒÈåtˆù½¹Ñ…ÐÕÌð½Àø(€€€€€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰µÐ´ÔÑ•áÐ´Ñá°™½¹Ðµ‰±…¬ÑÉ…­¥¹œµl´À¸ÀÑ•µtÍ´éÑ•áÐ´Õá°ˆù1•ÐÌÑ…±¬…‰½ÕÐå½ÕÈ¹•áÐµ…É­•Ðµ½Ù”¸ð½ Èø(€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´ØÑ•áÐµ‰…Í”±•…‘¥¹œ´ÜÑ•áÐµ‰±…¬¼ÔÔˆù½È•á±ÕÍ¥Ù”‘¥ÍÑÉ¥‰ÕÑ¥½¸°ÁÉ¥¥¹œ°ÁÉ¥Ù…Ñ”±…‰•°°½È•¹•É…°‰ÕÍ¥¹•ÍÌ¥¹ÅÕ¥É¥•Ì°½¹Ñ…Ð½ÕÈÑ•…´¥¸5½ÍÕ°¸ð½Àø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰¡ÑÑÁÌè¼½Ý„¹µ”¼äØÐÜÔÄÈÈÐÐäÀÀˆÑ…É•Ðô‰}‰±…¹¬ˆÉ•°ô‰¹½É•™•ÉÉ•Èˆ±…ÍÍ9…µ”ô‰µÐ´à¥¹±¥¹”µ™±•à¥Ñ•µÌµ•¹Ñ•È…À´ÌÉ½Õ¹‘•µ™Õ±°‰œµlŒÄÜÄäÅtÁà´ØÁä´Ð™½¹Ðµ‰½±Ñ•áÐµÝ¡¥Ñ”ÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰œµlŒåˆÅŒÈåtˆøñ…]¡…ÑÍ…ÁÀ€¼ø5•ÍÍ…”½¸]¡…ÑÍÁÀð½„ø(€€€€€€€€€€€€ð½‘¥Øø((€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É¥…À´ÐÍ´éÉ¥µ½±Ì´Èˆø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰µ…¥±Ñ¼éÍ…±•Í•…Ý…¹…±µ½ÍÕ°¹½´ˆ±…ÍÍ9…µ”ô‰É½Õ¹‘•´Éá°‰½É‘•È‰½É‘•Èµ‰±…¬¼ÄÀÀ´ØÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµlŒåˆÅŒÈåt¼ÐÀ¡½Ù•ÈéÍ¡…‘½Üµ±œˆø(€€€€€€€€€€€€€€€€ñ…¹Ù•±½Á”±…ÍÍ9…µ”ô‰Ñ•áÐµá°Ñ•áÐµlŒåˆÅŒÈåtˆ€¼øñÀ±…ÍÍ9…µ”ô‰µÐ´ØÑ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÑ•µtÑ•áÐµ‰±…¬¼ÌàˆùM…±•Ìð½ÀøñÀ±…ÍÍ9…µ”ô‰µÐ´È™½¹Ðµ•áÑÉ…‰½±ˆùÍ…±•Í•…Ý…¹…±µ½ÍÕ°¹½´ð½Àø(€€€€€€€€€€€€€€ð½„ø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰µ…¥±Ñ¼é™¥¹…¹••…Ý…¹…±µ½ÍÕ°¹½´ˆ±…ÍÍ9…µ”ô‰É½Õ¹‘•´Éá°‰½É‘•È‰½É‘•Èµ‰±…¬¼ÄÀÀ´ØÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµlŒåˆÅŒÈåt¼ÐÀ¡½Ù•ÈéÍ¡…‘½Üµ±œˆø(€€€€€€€€€€€€€€€€ñ…¹Ù•±½Á”±…ÍÍ9…µ”ô‰Ñ•áÐµá°Ñ•áÐµlŒåˆÅŒÈåtˆ€¼øñÀ±…ÍÍ9…µ”ô‰µÐ´ØÑ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÑ•µtÑ•áÐµ‰±…¬¼Ìàˆù¥¹…¹”ð½ÀøñÀ±…ÍÍ9…µ”ô‰µÐ´È™½¹Ðµ•áÑÉ…‰½±ˆù™¥¹…¹••…Ý…¹…±µ½ÍÕ°¹½´ð½Àø(€€€€€€€€€€€€€€ð½„ø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰¡ÑÑÁÌè¼½Ý„¹µ”¼äØÐÜÜÈÐàààÀØØˆÑ…É•Ðô‰}‰±…¹¬ˆÉ•°ô‰¹½É•™•ÉÉ•Èˆ±…ÍÍ9…µ”ô‰É½Õ¹‘•´Éá°‰½É‘•È‰½É‘•Èµ‰±…¬¼ÄÀÀ´ØÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµlŒåˆÅŒÈåt¼ÐÀ¡½Ù•ÈéÍ¡…‘½Üµ±œˆø(€€€€€€€€€€€€€€€€ñ…A¡½¹•±Ð±…ÍÍ9…µ”ô‰Ñ•áÐµá°Ñ•áÐµlŒåˆÅŒÈåtˆ€¼øñÀ±…ÍÍ9…µ”ô‰µÐ´ØÑ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÑ•µtÑ•áÐµ‰±…¬¼Ìàˆù¥É•Ð€¼!…Í…¸M…±…´ð½ÀøñÀ±…ÍÍ9…µ”ô‰µÐ´È™½¹Ðµ•áÑÉ…‰½±ˆø¬äØÐ€ÜÜÈ€Ðààà€ÀØØð½ÀøñÀ±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµÍ´Ñ•áÐµ‰±…¬¼ÐÔˆù¡…Í…¹•…Ý…¹…±µ½ÍÕ°¹½´ð½Àø(€€€€€€€€€€€€€€ð½„ø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰¡ÑÑÁÌè¼½µ…ÁÌ¹½½±”¹½´¼ýÄõ5½ÍÕ°±%É…ÄˆÑ…É•Ðô‰}‰±…¹¬ˆÉ•°ô‰¹½É•™•ÉÉ•Èˆ±…ÍÍ9…µ”ô‰É½Õ¹‘•´Éá°‰½É‘•È‰½É‘•Èµ‰±…¬¼ÄÀÀ´ØÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµlŒåˆÅŒÈåt¼ÐÀ¡½Ù•ÈéÍ¡…‘½Üµ±œˆø(€€€€€€€€€€€€€€€€ñ…5…Á5…É­•É±Ð±…ÍÍ9…µ”ô‰Ñ•áÐµá°Ñ•áÐµlŒåˆÅŒÈåtˆ€¼øñÀ±…ÍÍ9…µ”ô‰µÐ´ØÑ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÑ•µtÑ•áÐµ‰±…¬¼Ìàˆù!•…½™™¥”ð½ÀøñÀ±…ÍÍ9…µ”ô‰µÐ´È™½¹Ðµ•áÑÉ…‰½±ˆù5½ÍÕ°°%É…Äð½ÀøñÀ±…ÍÍ9…µ”ô‰µÐ´ÄÑ•áÐµÍ´±•…‘¥¹œ´ÔÑ•áÐµ‰±…¬¼ÐÔˆùM¥¹…•…Ð°-…É…µ„°‰•¡¥¹…È…±±•É¥•Ì°4ÄÐhÈäÐð½Àø(€€€€€€€€€€€€€€ð½„ø(€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É½Õ¹‘•´Éá°‰½É‘•È‰½É‘•Èµ‰±…¬¼ÄÀÀ´ØÍ´é½°µÍÁ…¸´Èˆø(€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰™±•à¥Ñ•µÌµ•¹Ñ•È…À´Ìˆøñ…±½¬±…ÍÍ9…µ”ô‰Ñ•áÐµlŒåˆÅŒÈåtˆ€¼øñÀ±…ÍÍ9…µ”ô‰™½¹Ðµ•áÑÉ…‰½±ˆù=™™¥”¡½ÕÉÌð½Àøð½‘¥ØøñÀ±…ÍÍ9…µ”ô‰µÐ´ÈÑ•áÐµÍ´Ñ•áÐµ‰±…¬¼ÔÀˆùM…ÑÕÉ‘…äµQ¡ÕÉÍ‘…ä€¼€ÀàèÀÀ´ÄÜèÀÀð½Àø(€€€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½Í•Ñ¥½¸ø(€€€€€€ð½µ…¥¸ø((€€€€€€ñ™½½Ñ•È±…ÍÍ9…µ”ô‰‰œµlŒÄÜÄäÅtÑ•áÐµÝ¡¥Ñ”ˆø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼É¥µ…àµÜ´Ýá°…À´ÄÈÁà´ÔÁä´ÄÐÍ´éÁà´ØµéÉ¥µ½±ÌµlÅ™É}…ÕÑ½}…ÕÑ½tá°éÁà´àˆø(€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€ñ¥µœÍÉŒõí…ÍÍ•Ð ˆ½¥µ…•Ì½±½¼Ä¹Á¹œˆ¥ô…±Ðô‰…Ý…¸°µ5½ÍÕ°ˆ±…ÍÍ9…µ”ô‰ ´ÄÄÜµ…ÕÑ¼É½Õ¹‘•‰œµÝ¡¥Ñ”¼äÀÁà´Èˆ€¼ø(€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µÐ´Ôµ…àµÜµÍ´Ñ•áÐµÍ´±•…‘¥¹œ´ØÑ•áÐµÝ¡¥Ñ”¼ÐÔˆùe½ÕÈÑÉÕÍÑ•¥µÁ½ÉÐ°‘¥ÍÑÉ¥‰ÕÑ¥½¸°…¹‰É…¹µ‰Õ¥±‘¥¹œÁ…ÉÑ¹•È¥¸%É…ÄÍ¥¹”€ÈÀÀÐ¸ð½Àø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸Äá•µtÑ•áÐµÝ¡¥Ñ”¼ÌÔˆù9…Ù¥…Ñ”ð½Àø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´ÔÉ¥…À´ÌÑ•áÐµÍ´™½¹ÐµÍ•µ¥‰½±Ñ•áÐµÝ¡¥Ñ”¼Øàˆø(€€€€€€€€€€€€€í¹…Ù%Ñ•µÌ¹Í±¥” À°€Ð¤¹µ…À ¡m±…‰•°°Ñ…É•Ñt¤€ôø€ñ„­•äõíÑ…É•Ñô¡É•˜õí€Œ‘íÑ…É•Ñõô±…ÍÍ9…µ”ô‰ÑÉ…¹Í¥Ñ¥½¸¡½Ù•ÈéÑ•áÐµÝ¡¥Ñ”ˆùí±…‰•±ôð½„ø¥ô(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áÐµáÌ™½¹Ðµ‰±…¬ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸Äá•µtÑ•áÐµÝ¡¥Ñ”¼ÌÔˆù½±±½Üð½Àø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µÐ´Ô™±•à…À´Ìˆø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰¡ÑÑÁÌè¼½ÝÝÜ¹¥¹ÍÑ…É…´¹½´½”Å}…±µ½ÍÕ°ý¥Í õ9Å!I½¹±©•¹¼Ìˆ…É¥„µ±…‰•°ô‰%¹ÍÑ…É…´ˆÑ…É•Ðô‰}‰±…¹¬ˆÉ•°ô‰¹½É•™•ÉÉ•Èˆ±…ÍÍ9…µ”ô‰É¥ ´ÄÀÜ´ÄÀÁ±…”µ¥Ñ•µÌµ•¹Ñ•ÈÉ½Õ¹‘•µ™Õ±°‰½É‘•È‰½É‘•ÈµÝ¡¥Ñ”¼ÄÔÑ•áÐµÝ¡¥Ñ”¼ÜÀÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµläÑ„ÔÝt¡½Ù•ÈéÑ•áÐµÝ¡¥Ñ”ˆøñ…%¹ÍÑ…É…´€¼øð½„ø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰¡ÑÑÁÌè¼½ÝÝÜ¹™…•‰½½¬¹½´½Í¡…É”¼ÄÕÅÀÝAå1T¼ˆ…É¥„µ±…‰•°ô‰…•‰½½¬ˆÑ…É•Ðô‰}‰±…¹¬ˆÉ•°ô‰¹½É•™•ÉÉ•Èˆ±…ÍÍ9…µ”ô‰É¥ ´ÄÀÜ´ÄÀÁ±…”µ¥Ñ•µÌµ•¹Ñ•ÈÉ½Õ¹‘•µ™Õ±°‰½É‘•È‰½É‘•ÈµÝ¡¥Ñ”¼ÄÔÑ•áÐµÝ¡¥Ñ”¼ÜÀÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµläÑ„ÔÝt¡½Ù•ÈéÑ•áÐµÝ¡¥Ñ”ˆøñ……•‰½½­€¼øð½„ø(€€€€€€€€€€€€€€ñ„¡É•˜ô‰¡ÑÑÁÌè¼½Ý„¹µ”¼äØÐÜÜÈÐàààÀØØˆ…É¥„µ±…‰•°ô‰]¡…ÑÍÁÀˆÑ…É•Ðô‰}‰±…¹¬ˆÉ•°ô‰¹½É•™•ÉÉ•Èˆ±…ÍÍ9…µ”ô‰É¥ ´ÄÀÜ´ÄÀÁ±…”µ¥Ñ•µÌµ•¹Ñ•ÈÉ½Õ¹‘•µ™Õ±°‰½É‘•È‰½É‘•ÈµÝ¡¥Ñ”¼ÄÔÑ•áÐµÝ¡¥Ñ”¼ÜÀÑÉ…¹Í¥Ñ¥½¸¡½Ù•Èé‰½É‘•ÈµläÑ„ÔÝt¡½Ù•ÈéÑ•áÐµÝ¡¥Ñ”ˆøñ…]¡…ÑÍ…ÁÀ€¼øð½„ø(€€€€€€€€€€€€ð½‘¥Øø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½‘¥Øø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰‰½É‘•ÈµÐ‰½É‘•ÈµÝ¡¥Ñ”¼ÄÀˆø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µàµ…ÕÑ¼™±•àµ…àµÜ´Ýá°™±•àµ½°…À´ÈÁà´ÔÁä´ÔÑ•áÐµlÄÅÁát™½¹ÐµÍ•µ¥‰½±ÕÁÁ•É…Í”ÑÉ…­¥¹œµlÀ¸ÄÉ•µtÑ•áÐµÝ¡¥Ñ”¼ÌÀÍ´é™±•àµÉ½ÜÍ´é¥Ñ•µÌµ•¹Ñ•ÈÍ´é©ÕÍÑ¥™äµ‰•ÑÝ••¸Í´éÁà´Øá°éÁà´àˆø(€€€€€€€€€€€€ñÀùì‰qÔÀÁä‰ôí¹•Ü…Ñ” ¤¹•ÑÕ±±e•…È ¥ô…Ý…¸°µ5½ÍÕ°•¹•É…°QÉ…‘¥¹œ¼¸1Ñ¸ð½Àø(€€€€€€€€€€€€ñÀùI•œ¸9¼¸€ÄääÔÔ€¼5½ÍÕ°°%É…Äð½Àø(€€€€€€€€€€ð½‘¥Øø(€€€€€€€€ð½‘¥Øø(€€€€€€ð½™½½Ñ•Èø(€€€€ð½‘¥Øø(€€¤ì)ô()•áÁ½ÉÐ‘•™…Õ±ÐÁÀì(