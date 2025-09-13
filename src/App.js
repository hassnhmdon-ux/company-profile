import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // يحدد أي سكشن معروض
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const companies = [
    {
      name: "Mutlu",
      logo: "/images/mutlu.png",
      products: [
        "/images/mutlu9.png",
        "/images/mutlu1.png",
        "/images/mutlu2.png",
        "/images/mutlu33.png",
        "/images/mutlu4.png",
        "/images/mutlu5.png",
        "/images/mutlu7.png",
        "/images/mutlu6.png",
        "/images/mutlu8.png",
      ],
    },
    {
      name: "Ankara",
      logo: "/images/nuh.png",
      subcategories: [
        {
          name: "Nuh'un Ankara",
          image: "/images/nuh-un-ankara.jpg",
          products: [
            "/images/ankara20.png", "/images/ankara6.png", "/images/ankara9.png",
            "/images/ankara1.png", "/images/ankara3.png", "/images/ankara5.png",
            "/images/ankara4.png", "/images/ankara10.png", "/images/ankara11.png",
            "/images/ankara12.png", "/images/ankara13.png", "/images/ankara15.png",
            "/images/ankara16.png", "/images/ankara17.png", "/images/ankara18.png",
            "/images/ankara19.png", "/images/ankara21.png", "/images/ankara22.png",
            "/images/ankara23.png", "/images/ankara24.png", "/images/ankara25.png",
            "/images/smed.png",
          ],
        },
        {
          name: "Vitamin",
          image: "/images/with-vitamins.jpg",
          products: [
            "/images/ankarav1.png", "/images/ankarav2.png", "/images/ankarav3.png",
            "/images/ankarav4.png", "/images/ankarav5.png", "/images/ankarav6.png",
            "/images/ankarav7.png", "/images/ankarav8.png", "/images/ankarav9.png",
            "/images/ankarav10.png",
          ],
        },
      ],
    },
    {
      name: "Regal",
      logo: "/images/regallogo.png",
      products: ["/images/regal2.jpg","/images/regal3.jpg","/images/regal4.jpg","/images/regal5.jpg"
        ,"/images/regal7.jpg","/images/regal8.jpg","/images/regal9.jpg","/images/regal10.jpg",
        "/images/regal6.jpg", "/images/regal11.jpg","/images/regal12.jpg",
        "/images/regal13.jpg","/images/regal115.jpg","/images/regal14.jpg"
      ],
    },
   
    {
      name: "LOLO Rice",
      logo: "/images/lolologo.png",
      products: [
        { src: "/images/lolo1.png", label: "Lolo Rice 5kg" },
        { src: "/images/lolo3.png", label: "Lolo Rice 1kg" },
      ],
    },
    {
      name: "Milk Podwer",
      logo: "/images/milk.png",
      products: ["/images/milk1.png", "/images/milk2.png", "/images/milk3.png", "/images/milk4.png"],
    },
   
    {
      name: "SAC",
      logo: "/images/sac.png",
      products: ["/images/salt.png", "/images/salt1.png"],
    },
    {
      name: "Kamarooz",
      logo: "/images/logokamrooz.png",
      products: ["/images/kamarooz.png"],
    },
     
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navLinks = ["home", "about", "products", "contact"];

  // إعداد الأنيميشن
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="App font-sans min-h-screen relative">
      {/* خلفية */}
      <div className="fixed inset-0 -z-10">
        <img src="/images/redbg1.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Header */}
<header className="bg-white/90 backdrop-blur-md shadow relative z-50">
  {/* الشعار */}
  <div className="p-4 flex justify-center">
    <img src="/images/logo1.png" alt="Company Logo" className="h-16 w-auto" />
  </div>

  {/* خط separator */}
  <div className="border-t border-gray-300 mx-10"></div>

  {/* الروابط تحت الخط */}
  <nav className="flex justify-center gap-8 py-4 font-semibold text-red-800">
    {["home", "about", "products", "contact"].map((link) => (
      <button
        key={link}
        onClick={() => setActiveSection(link)}
        className={`capitalize ${
          activeSection === link ? "underline decoration-red-600" : ""
        }`}
      >
        {link}
      </button>
    ))}
  </nav>
</header>


    <AnimatePresence mode="wait">
       {/* Home */}
{activeSection === "home" && (
  <motion.section
    key="home"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6 }}
    className="p-6"
  >
<div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow p-6 text-center">
  {/* العنوان */}
  <h1 className="text-3xl font-extrabold tracking-wide mb-2">EAWAN ALMOSUL</h1>
  <h2 className="text-base font-semibold tracking-wider mb-2">GENERAL TRADING CO. LTD.</h2>
  <h3 className="text-base font-semibold tracking-wider">- SINCE 2004 -</h3>

       <p className="text-lg text-gray-700 text-justify mt-6">
        Your trusted import, distribution, and brand-building partner in Iraq. 
        We ensure high-quality products, reliable shipments, and strong business relationships across the region.
      </p>

      {/* الصورة تحت النص */}
      <p className="text-lg text-gray-700 text-justify mt-6 mb-3">
      <img 
        src="/images/logocom1.svg" 
        alt="Eawan Almosul Overview" 
        className="w-full max-h-96 object-cover rounded-lg shadow-md mx-auto"
      /></p>
      <h3 className="text-xs font-semibold tracking-wider -mb-5">
  2004–2025 Eawan Al-Mosul General Trading Co. Ltd. · Reg. No. 19955 · Mosul, Iraq
</h3>

    </div>
  </motion.section>
)}


        {/* About */}
        {activeSection === "about" && (
          <motion.section
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="p-6"
          >
            <div className="max-w-5xl mx-auto space-y-8">
              {/* First Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-2 text-center">Company Overview</h2>

                <p className="mb-4 text-justify">
                  Established in 2004 and headquartered in Mosul, Iraq, Eawan Almosul General Trading Co. Ltd. imports high-quality food products from reputable manufacturers worldwide and distributes them across the Iraqi market. We are a registered, compliant company focused on accurate documentation, on-time shipments, and long-term partnerships.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-center">Distribution Footprint</h2>
                <p className="text-justify">
                  Nationwide coverage through trusted distributors in seven key governorates: Baghdad, Karbala, Najaf, Kirkuk, Nasiriyah, Sulaymaniyah, and Erbil. Once shipments arrive at our Mosul hub, our regional partners dispatch immediately to market.
                </p>
                <img 
        src="/images/logoabou1.png" 
        alt="Eawan Almosul Overview" 
        className="w-full max-h-86 object-cover rounded-lg shadow-md mx-auto"
      />
              </div>

              {/* Second Section */}
<div className="bg-white/80 backdrop-blur-sm rounded-xl shadow p-6">
  <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
  <ul className="list-disc pl-6 mb-4 text-left">
    <li>Import & Compliance: Complete documentation (Halal, quality reports, COO/COC).</li>
    <li>Distribution & Sales: Wholesale and retail reach with fast time-to-market.</li>
    <li>Brand Building: Pricing, positioning, and trade marketing support.</li>
    <li>Private Label: From concept and packaging to launch (when required).</li>
    <li>Logistics & Warehousing: Coordinated bookings and efficient handling.</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-2">Why Partner with Us</h2>
  <ul className="list-disc pl-6 text-left">
    <li>Deep local know-how and single-country focus (Iraq)</li>
    <li>Transparent, responsive communication with factories</li>
    <li>Proven distributor network for swift market penetration</li>
    <li>Quality-first, long-term mindset and problem-solving team</li>
  </ul>
</div>
            </div>
          </motion.section>
        )}

        {activeSection === "products" && (
          <motion.section key="products" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.6 }} className="p-6">
            <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center">Our Products</h2>

              {/* شعارات الشركات */}
              {/* شعارات الشركات */}
{/* الصف الأول */}
<div className="flex justify-center flex-wrap md:flex-nowrap gap-8 mb-6">
  {["Mutlu", "Ankara"].map((name) => {
    const company = companies.find((c) => c.name === name);
    return (
      <div key={company.name} className="flex flex-col items-center">
        <img
          src={company.logo}
          alt={company.name}
          className={`h-14 w-auto cursor-pointer rounded-lg transition-transform duration-300
            ${selectedCompany === company.name
              ? "scale-90 shadow-2xl"
              : "scale-100 hover:scale-110"}
          `}
          onClick={() => {
            setSelectedCompany(selectedCompany === company.name ? null : company.name);
            setSelectedSubCategory(null);
          }}
        />
        <span className="mt-2 font-semibold text-red-800 text-sm">{company.name}</span>
      </div>
    );
  })}
</div>

{/* الصف الثاني */}
<div className="flex justify-center flex-wrap md:flex-nowrap gap-8 mb-6">
  {["Regal", "LOLO Rice"].map((name) => {
    const company = companies.find((c) => c.name === name);
    return (
      <div key={company.name} className="flex flex-col items-center">
        <img
          src={company.logo}
          alt={company.name}
          className={`h-20 w-auto cursor-pointer rounded-lg object-contain transition-transform duration-300
  ${selectedCompany === company.name
    ? "scale-90 shadow-2xl"
    : "scale-100 hover:scale-110"}
`}

          onClick={() => {
            setSelectedCompany(selectedCompany === company.name ? null : company.name);
            setSelectedSubCategory(null);
          }}
        />
        <span className="mt-2 font-semibold text-red-800 text-sm">{company.name}</span>
      </div>
    );
  })}
</div>

{/* الصف الثالث */}
<div className="flex justify-center flex-wrap md:flex-nowrap gap-11 mb-6">
  {["Milk Podwer", "SAC"].map((name) => {
    const company = companies.find((c) => c.name === name);
    return (
      <div key={company.name} className="flex flex-col items-center">
        <img
          src={company.logo}
          alt={company.name}
         className={`h-20 w-auto cursor-pointer rounded-lg object-contain transition-transform duration-300
  ${selectedCompany === company.name
    ? "scale-90 shadow-2xl"
    : "scale-100 hover:scale-110"}
`}

          onClick={() => {
            setSelectedCompany(selectedCompany === company.name ? null : company.name);
            setSelectedSubCategory(null);
          }}
        />
        <span className="mt-2 font-semibold text-red-800 text-sm">{company.name}</span>
      </div>
    );
  })}
</div>

{/* الصف الرابع */}
<div className="flex justify-center flex-wrap md:flex-nowrap gap-6 mb-6">
  {["Kamarooz"].map((name) => {
    const company = companies.find((c) => c.name === name);
    return (
      <div key={company.name} className="flex flex-col items-center">
        <img
          src={company.logo}
          alt={company.name}
          className={`h-12 w-auto cursor-pointer rounded-lg transition-transform duration-300
            ${selectedCompany === company.name
              ? "scale-90 shadow-2xl"
              : "scale-100 hover:scale-110"}
          `}
          onClick={() => {
            setSelectedCompany(selectedCompany === company.name ? null : company.name);
            setSelectedSubCategory(null);
          }}
        />
        <span className="mt-2 font-semibold text-red-800 text-sm">{company.name}</span>
      </div>
    );
  })}
</div>




              {/* عرض منتجات الشركة أو الأقسام الفرعية */}
              {selectedCompany && (
                <>
                  {companies.find(c => c.name === selectedCompany).subcategories ? (
                    <div className="flex flex-col items-center gap-6 mb-6">
                      {companies
                        .find(c => c.name === selectedCompany)
                        .subcategories.map((sub, idx) => (
                          <div key={idx} className="flex flex-col items-center">
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className={`h-32 w-auto cursor-pointer rounded transition-transform duration-300 ${
                                selectedSubCategory === sub ? "scale-105 shadow-2xl" : "hover:scale-110"
                              }`}
                              onClick={() => setSelectedSubCategory(sub)}
                            />
                            <span className="mt-2 font-semibold text-red-800">{sub.name}</span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {companies
                        .find(c => c.name === selectedCompany)
                        .products.map((product, index) => (
                          <div
                            key={index}
                            className="bg-white rounded shadow hover:scale-105 hover:shadow-lg transition-transform duration-300 p-4 text-center"
                          >
                            <img
                              src={product.src || product}
                              alt={product.label || `Product ${index + 1}`}
                              className="w-full max-h-52 mx-auto object-contain rounded"
                            />
                            {selectedCompany === "lolorice" && product.label && (
                              <p className="mt-2 text-sm font-semibold text-gray-700">{product.label}</p>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </>
              )}

              {/* عرض منتجات القسم الفرعي */}
              {selectedSubCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                  {selectedSubCategory.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded shadow p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300"
                    >
                      <img
                        src={product}
                        alt={`Product ${idx + 1}`}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        )}

{activeSection === "contact" && (
  <motion.section
    key="contact"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.6 }}
    className="p-6"
  >
    <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

      {/* Company Contacts */}
      <div className="mb-9">
        <h3 className="text-xl font-bold mb-3">Company Contacts</h3>
        <p className="flex items-center gap-2">
  <FaPhone className="text-green-600 rotate-90" /> 
  <a href="https://wa.me/9647512244900" target="_blank" rel="noopener noreferrer">
    +964 751 2244 900 (WhatsApp)
  </a>
</p>

        <p className="flex items-center gap-2 mt-2">
          <FaEnvelope className="text-blue-600" /> 
          <a href="mailto:sales@eawanalmosul.com">sales@eawanalmosul.com</a>
          
        </p>
        <p className="flex items-center gap-2 mt-2">
          <FaEnvelope className="text-blue-600" /> 
          <a href="mailto:finance@eawanalmosul.com">finance@eawanalmosul.com</a>
        </p>
        <p className="flex items-start gap-2 mt-2">
  <FaMapMarkerAlt className="text-red-600 text-2xl -mt-0.9" />
  <span>
    IRAQ - MOSUL / SINAEAT AL KARAMA, BEHIND CAR GALLERYS, M14 Z29 B4.
    <br />
    <a
      href="https://maps.google.com/?q=Mosul,Iraq"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-red-700"
    >
      Open in Google Maps
    </a>
  </span>
</p>

        <p className="mt-2"><strong>Office Hours:</strong> Sat–Thu , 08:00–17:00</p>
      </div>

      {/* Direct Contact */}
      <div className="mb-9">
        <h3 className="text-xl font-bold mb-3">Direct Contact - Hasan Salam </h3>
        <p className="flex items-center gap-2">
  <FaPhone className="text-green-600 rotate-90" /> 
  <a href="https://wa.me/9647724888066" target="_blank" rel="noopener noreferrer">
    +964 772 4888 066 (WhatsApp)
  </a>
</p>

        <p className="flex items-center gap-2 mt-2">
          <FaEnvelope className="text-blue-600" /> 
          <a href="mailto:hasan@eawanalmosul.com">hasan@eawanalmosul.com</a>
        </p>
      </div>

      {/* Business Inquiry */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">Business Inquiry</h3>
        <form
          action="mailto:sales@eawanalmosul.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <input type="text" name="company" placeholder="Company Name" className="w-full p-2 border rounded" required />
          <input type="text" name="country" placeholder="Country" className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <textarea name="request" placeholder="Request Type (Exclusive Distribution / Pricing / Other)" rows="3" className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700">
            Send Inquiry
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://www.instagram.com/e1_almosul?igsh=NGd1cHRocnljeno3" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-3xl hover:scale-110 transition">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/share/15qp7PAyLU/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:scale-110 transition">
          <FaFacebook />
        </a>
        <a href="https://wa.me/9647724888066" target="_blank" rel="noopener noreferrer" className="text-green-600 text-3xl hover:scale-110 transition">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  </motion.section>
)}


      </AnimatePresence>
    </div>
  );
}

export default App;
