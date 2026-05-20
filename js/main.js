/* ===========================================
   FRANCISTOWN BUSINESS HUB — main.js
   =========================================== */

const businesses = [
  {
    id: 1,
    name: "Cresta Thapama Hotel",
    category: "Hotels & Lodging",
    desc: "Francistown's premier hotel featuring 84 rooms, a swimming pool, conference facilities, and the iconic Zebra Bar & Restaurant.",
    longDesc: "Cresta Thapama Hotel has served as Francistown's landmark accommodation since 1988. Situated along Blue Jacket Street, it offers 84 fully appointed rooms, a fully equipped gymnasium, outdoor pool, and the iconic Zebra Bar. Conference facilities can accommodate up to 300 delegates, making it a top choice for corporate events.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 241 3991",
    hours: "Reception open 24 hours",
    rating: 4.4,
    open: true,
    color: "#4A7C59",
    emoji: "🏨",
    image: "https://picsum.photos/seed/crestabw/600/400",
    website: "www.crestahotels.com"
  },
  {
    id: 2,
    name: "Choppies Hypermarket",
    category: "Shopping",
    desc: "Botswana's largest home-grown supermarket chain with groceries, fresh produce, clothing, electronics, and household goods.",
    longDesc: "Choppies Enterprises is Botswana's proudest retail brand with over 200 stores across Southern and East Africa. The Francistown branch on Haskins Street is one of the largest, featuring a full butchery, bakery, fresh deli, clothing section, and electronics. Loyalty card members enjoy exclusive discounts.",
    address: "Haskins St, Francistown",
    phone: "+267 241 5500",
    hours: "Mon–Sun  07:00–20:00",
    rating: 4.0,
    open: true,
    color: "#E8C42A",
    emoji: "🛒",
    image: "https://picsum.photos/seed/choppiesbw/600/400",
    website: "www.choppies.co.bw"
  },
  {
    id: 3,
    name: "First National Bank Francistown",
    category: "Finance",
    desc: "Full banking services including personal and business accounts, home loans, vehicle finance, forex exchange, and multiple ATMs across the city.",
    longDesc: "FNB Botswana is a subsidiary of FirstRand Group and one of Botswana's leading commercial banks. The Francistown branch on Blue Jacket Street provides retail and commercial banking. Customers have access to the eWallet service, FNB App, and Online Banking Portal.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 370 3000",
    hours: "Mon–Fri  08:30–15:30",
    rating: 3.9,
    open: false,
    color: "#1A6198",
    emoji: "🏦",
    image: "https://picsum.photos/seed/fnbbw/600/400",
    website: "www.fnbbotswana.co.bw"
  },
  {
    id: 4,
    name: "Chicken Inn Blue Jacket",
    category: "Food & Drink",
    desc: "Beloved fast food chain serving golden fried chicken, burgers, chips, wraps, and milkshakes. A family staple across Botswana for over 30 years.",
    longDesc: "Chicken Inn is one of Zimbabwe and Botswana's most recognised fast-food brands. The Blue Jacket Mall branch is consistently one of Francistown's busiest dining spots. Their signature Golden Crunch Chicken, Creamy Chicken Burgers, and Stopper Meal Deals keep customers coming back. Delivery available via OrderIn.",
    address: "Blue Jacket Mall, Francistown",
    phone: "+267 241 7890",
    hours: "Mon–Sun  08:00–21:00",
    rating: 4.1,
    open: true,
    color: "#E8572A",
    emoji: "🍗",
    image: "https://picsum.photos/seed/chickeninnbw/600/400",
    website: "www.chickeninn.co.bw"
  },
  {
    id: 5,
    name: "Pick n Pay Francistown",
    category: "Shopping",
    desc: "South African supermarket chain with quality groceries, fresh produce, bakery, butchery, and everyday household items. Smart Shopper loyalty rewards available.",
    longDesc: "Pick n Pay Botswana operates several branches nationwide, with the Dube Mall store serving Francistown's central shoppers. Renowned for its fresh produce, in-store bakery, and extensive wine section. The Smart Shopper programme allows customers to earn points on every purchase.",
    address: "Dube Mall, Francistown",
    phone: "+267 241 8800",
    hours: "Mon–Sun  07:00–19:30",
    rating: 4.3,
    open: true,
    color: "#E8572A",
    emoji: "🛍️",
    image: "https://picsum.photos/seed/picknpaybw/600/400",
    website: "www.pnp.co.za"
  },
  {
    id: 6,
    name: "Marang Hotel",
    category: "Hotels & Lodging",
    desc: "Riverside hotel, lodge, and camping site set on the banks of the Tati River. Offers rooms, camping pitches, a pool, restaurant, and conference facilities.",
    longDesc: "Marang Hotel is one of Francistown's most unique lodging options, combining hotel comfort with the natural beauty of the Tati River. Popular with overlanders, families, and conference groups. The hotel restaurant serves traditional Botswana dishes alongside international favourites.",
    address: "Tati River Rd, Francistown",
    phone: "+267 241 3991",
    hours: "Reception open 24 hours",
    rating: 4.2,
    open: true,
    color: "#4A7C59",
    emoji: "🌿",
    image: "https://picsum.photos/seed/marangbw/600/400",
    website: "www.maranghotel.co.bw"
  },
  {
    id: 7,
    name: "Francistown Auto Spares",
    category: "Automotive",
    desc: "Stockist of vehicle spare parts, tyres, motor oils, batteries, and accessories for most major car brands. Knowledgeable staff and competitive pricing.",
    longDesc: "Francistown Auto Spares has been serving drivers in the North-East for over 20 years. The store carries an extensive range of OEM and aftermarket parts for Japanese, German, and American vehicles. Services include parts sourcing, tyre-fitting consultation, and a mechanical workshop on site.",
    address: "Gerald Molapo St, Francistown",
    phone: "+267 241 2211",
    hours: "Mon–Sat  07:30–17:30",
    rating: 4.0,
    open: true,
    color: "#6B4226",
    emoji: "🔧",
    image: "https://picsum.photos/seed/autosparebw/600/400",
    website: null
  },
  {
    id: 8,
    name: "Chicken Licken Francistown",
    category: "Food & Drink",
    desc: "South Africa's famous spicy chicken chain. Known for their fiery Hot Box, Soul meals, and crinkle-cut chips. A must-visit for spice lovers.",
    longDesc: "Chicken Licken was founded in South Africa in 1981 and has expanded across Southern Africa. The Francistown outlet is a high-traffic dining destination. Their famous Hot Box meals come in varying heat levels. They also offer the Big John Burger, Wicked Wings, and freshly squeezed juices.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 241 5544",
    hours: "Mon–Sun  09:00–21:30",
    rating: 4.0,
    open: true,
    color: "#E8572A",
    emoji: "🔥",
    image: "https://picsum.photos/seed/chickenlickbw/600/400",
    website: null
  },
  {
    id: 9,
    name: "Boikago Primary Clinic",
    category: "Health",
    desc: "Government primary healthcare clinic offering consultations, immunisations, chronic disease management, and basic treatment to Boikago Ward residents.",
    longDesc: "Boikago Primary Clinic operates under the Francistown City Council Health Services department. It provides free primary healthcare to all Botswana citizens, including maternal and child health services, HIV/AIDS counselling, tuberculosis management, and chronic disease clinics.",
    address: "Boikago Ward, Francistown",
    phone: "+267 241 0210",
    hours: "Mon–Fri  07:30–16:30",
    rating: 3.5,
    open: false,
    color: "#5B8FA8",
    emoji: "🩺",
    image: "https://picsum.photos/seed/clinicbw/600/400",
    website: null
  },
  {
    id: 10,
    name: "Speedy Tyre & Auto",
    category: "Automotive",
    desc: "Tyre fitting, balancing, wheel alignment, and basic vehicle servicing. Quick turnaround and quality brands including Bridgestone, Michelin, and Pirelli.",
    longDesc: "Speedy Tyre & Auto specialises in passenger and light commercial vehicle tyres, with a full workshop for wheel alignment, suspension checks, brake servicing, and oil changes. Their team of qualified technicians ensures vehicles leave in top condition.",
    address: "Somerset West Rd, Francistown",
    phone: "+267 241 3344",
    hours: "Mon–Sat  07:00–17:00",
    rating: 4.1,
    open: true,
    color: "#6B4226",
    emoji: "🚗",
    image: "https://picsum.photos/seed/tyrebw/600/400",
    website: null
  },
  {
    id: 11,
    name: "Standard Chartered Bank",
    category: "Finance",
    desc: "International banking with local heart. Personal accounts, savings, mortgages, investment products, and business banking services.",
    longDesc: "Standard Chartered has operated in Botswana since 1950, making it one of the country's oldest financial institutions. The Francistown branch provides retail banking, forex exchange, Priority Banking for high-net-worth clients, and SME business banking solutions.",
    address: "Haskins St, Francistown",
    phone: "+267 370 2000",
    hours: "Mon–Fri  08:00–15:00",
    rating: 3.7,
    open: false,
    color: "#1A6198",
    emoji: "💳",
    image: "https://picsum.photos/seed/stanchartbw/600/400",
    website: "www.sc.com/bw"
  },
  {
    id: 12,
    name: "Nando's Francistown",
    category: "Food & Drink",
    desc: "Flame-grilled peri-peri chicken served with bold Portuguese-inspired sauces. Dine in, takeaway, or order delivery.",
    longDesc: "Nando's is a South African restaurant chain with a global presence and a cult following for its PERi-PERi flame-grilled chicken. The Francistown outlet offers a full dine-in experience as well as takeaway and delivery. Popular dishes include the Half Chicken, Chicken Livers, and the Fino Rolls.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 241 0000",
    hours: "Mon–Sun  08:00–21:00",
    rating: 4.2,
    open: true,
    color: "#E8572A",
    emoji: "🍖",
    image: "https://picsum.photos/seed/nandosbw/600/400",
    website: "www.nandos.co.bw"
  },
  {
    id: 13,
    name: "Tati Hotel",
    category: "Hotels & Lodging",
    desc: "Affordable, centrally located hotel with clean rooms, an on-site restaurant and bar. Popular with business travellers needing budget-friendly city centre accommodation.",
    longDesc: "Tati Hotel is one of Francistown's original accommodation establishments. Centrally located on Blue Jacket Street, it provides 36 comfortable rooms with en-suite bathrooms, DStv, and air conditioning. The hotel bar is a popular evening gathering spot. A complimentary light breakfast is included for all guests.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 241 1900",
    hours: "Reception open 24 hours",
    rating: 3.6,
    open: true,
    color: "#4A7C59",
    emoji: "🛏️",
    image: "https://picsum.photos/seed/tatibw/600/400",
    website: null
  },
  {
    id: 14,
    name: "OK Hypermarket",
    category: "Shopping",
    desc: "Budget-friendly supermarket with a wide selection of groceries, cleaning products, and household goods. One of Francistown's most accessible stores.",
    longDesc: "OK Zimbabwe is a trusted retail brand across Southern Africa. The Dube Mall branch caters to budget-conscious shoppers with a broad selection of dry goods, fresh produce, and household supplies. Their monthly specials and bulk deals are particularly popular with large families.",
    address: "Dube Mall, Francistown",
    phone: "+267 241 6600",
    hours: "Mon–Sun  07:00–20:00",
    rating: 3.9,
    open: true,
    color: "#E8C42A",
    emoji: "🏪",
    image: "https://picsum.photos/seed/okbw/600/400",
    website: null
  },
  {
    id: 15,
    name: "Absa (Barclays) Francistown",
    category: "Finance",
    desc: "Full-service bank offering personal and business banking, home and vehicle loans, insurance, investment accounts, and multiple ATMs across Francistown.",
    longDesc: "Absa Bank Botswana (formerly Barclays Bank of Botswana) has served the country since 1950. The Francistown branch provides FlexiReserve savings accounts, vehicle and asset finance, personal loans, and business overdraft facilities. An Absa ATM is accessible after banking hours.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 395 1500",
    hours: "Mon–Fri  08:00–15:30",
    rating: 3.8,
    open: false,
    color: "#C1121F",
    emoji: "🏦",
    image: "https://picsum.photos/seed/absabw/600/400",
    website: "www.absa.co.bw"
  },
  {
    id: 16,
    name: "Kgosi Hair & Beauty Salon",
    category: "Beauty & Wellness",
    desc: "Full-service beauty salon offering braiding, weaves, natural hair care, facials, manicures, and pedicures in a modern, welcoming environment.",
    longDesc: "Kgosi Hair & Beauty Salon is a popular destination for women, men, and children looking for quality hair and beauty services. Specialising in African hair braiding, Brazilian weaves, relaxers, and loc maintenance, the salon also offers nail art, eyebrow threading, and skin facials. Walk-ins welcome.",
    address: "Minestone, Francistown",
    phone: "+267 241 7001",
    hours: "Mon–Sat  08:00–18:00",
    rating: 4.5,
    open: true,
    color: "#e91e8c",
    emoji: "💇",
    image: "https://picsum.photos/seed/salonbw/600/400",
    website: null
  },
  {
    id: 17,
    name: "Tshwaragano General Dealer",
    category: "Shopping",
    desc: "Community general store offering everyday essentials — groceries, cold drinks, airtime, stationery, and basic household goods. Convenient and affordable.",
    longDesc: "Tshwaragano General Dealer has been a cornerstone of its neighbourhood for over a decade. Open early and late, this family-run store stocks a wide variety of everyday items. They offer bulk buying options, fresh bread daily, and a small butchery section popular with local families.",
    address: "Somerset West, Francistown",
    phone: "+267 241 8001",
    hours: "Mon–Sun  06:30–20:00",
    rating: 4.0,
    open: true,
    color: "#8BC34A",
    emoji: "🏪",
    image: "https://picsum.photos/seed/generaldealerbw/600/400",
    website: null
  },
  {
    id: 18,
    name: "Corner Bakery & Pastries",
    category: "Food & Drink",
    desc: "Artisan bakery serving freshly baked bread, vetkoek, pies, cakes, and pastries daily. Custom birthday and wedding cakes made to order.",
    longDesc: "Corner Bakery & Pastries is Francistown's go-to destination for freshly baked goods. From traditional vetkoek and fat cakes to custom celebration cakes, this family-owned bakery uses quality local ingredients. Catering orders for events and office deliveries are available. Try their signature pumpkin bread!",
    address: "Tati Siding Rd, Francistown",
    phone: "+267 244 0055",
    hours: "Mon–Sat  05:30–17:00",
    rating: 4.6,
    open: true,
    color: "#FF9800",
    emoji: "🥐",
    image: "https://picsum.photos/seed/bakerybw/600/400",
    website: null
  },
  {
    id: 19,
    name: "BW Mobile Repairs",
    category: "Electronics & Tech",
    desc: "Fast and affordable smartphone, tablet, and laptop repairs. Screen replacements, battery swaps, software fixes, and accessories in stock.",
    longDesc: "BW Mobile Repairs is your trusted tech fix-it shop in the heart of Francistown. With certified technicians on site, they handle everything from cracked iPhone screens to water-damaged Android devices. Software unlocking, data recovery, and network troubleshooting services are also offered. Same-day repairs available on most common issues.",
    address: "Blue Jacket Mall, Francistown",
    phone: "+267 722 0099",
    hours: "Mon–Sat  08:00–19:00",
    rating: 4.3,
    open: true,
    color: "#607D8B",
    emoji: "📱",
    image: "https://picsum.photos/seed/mobilebw/600/400",
    website: null
  },
  {
    id: 20,
    name: "Tsholofelo Catering & Events",
    category: "Events & Catering",
    desc: "Full-service catering and event management company specialising in weddings, corporate events, funerals, and birthday parties throughout Francistown.",
    longDesc: "Tsholofelo Catering & Events brings people together through exceptional food and seamless event coordination. Their team handles menus featuring both traditional Setswana dishes and modern cuisine. Tent hire, décor, sound equipment, and waiting staff can all be arranged through one contact. Book early to secure your date.",
    address: "Satellite, Francistown",
    phone: "+267 716 3344",
    hours: "Mon–Sat  08:00–17:00",
    rating: 4.7,
    open: true,
    color: "#9C27B0",
    emoji: "🍽️",
    image: "https://picsum.photos/seed/cateringbw/600/400",
    website: null
  },
  {
    id: 21,
    name: "Naledi Fashion Boutique",
    category: "Shopping",
    desc: "Trendy women's fashion boutique stocking local and imported clothing, shoes, bags, and accessories. New arrivals every week.",
    longDesc: "Naledi Fashion Boutique is where Francistown's fashion-forward women shop. Featuring a carefully curated selection of African prints, contemporary workwear, casual wear, and evening gowns, the boutique also offers a tailoring service for custom fits. Follow them on social media for flash sales and new arrivals.",
    address: "Monarch, Francistown",
    phone: "+267 244 1122",
    hours: "Mon–Sat  09:00–18:00",
    rating: 4.4,
    open: true,
    color: "#E91E63",
    emoji: "👗",
    image: "https://picsum.photos/seed/fashionbw/600/400",
    website: null
  },
  {
    id: 22,
    name: "Motswana Print & Design",
    category: "Services",
    desc: "Professional printing and graphic design studio. Business cards, banners, branded uniforms, flyers, and signage produced in-house with fast turnaround.",
    longDesc: "Motswana Print & Design is the preferred printing partner for businesses large and small across Francistown. Their state-of-the-art digital printing equipment produces vibrant, sharp results on paper, fabric, vinyl, and canvas. Graphic design services are available for clients who need branding help.",
    address: "Gerald Molapo St, Francistown",
    phone: "+267 241 9900",
    hours: "Mon–Fri  08:00–17:00, Sat 09:00–13:00",
    rating: 4.5,
    open: true,
    color: "#3F51B5",
    emoji: "🖨️",
    image: "https://picsum.photos/seed/printbw/600/400",
    website: null
  },
  {
    id: 23,
    name: "Diphala Hardware & Building Supplies",
    category: "Hardware",
    desc: "Your one-stop building and hardware shop. Cement, bricks, tools, paint, plumbing supplies, and electrical fittings at competitive prices.",
    longDesc: "Diphala Hardware & Building Supplies has been trusted by builders, contractors, and homeowners across the North-East District for over 15 years. Offering a comprehensive range of construction materials, power tools, hand tools, and safety equipment. Bulk delivery available to project sites within Francistown.",
    address: "Francistown Industrial, Francistown",
    phone: "+267 241 5566",
    hours: "Mon–Sat  07:00–17:30",
    rating: 4.1,
    open: true,
    color: "#795548",
    emoji: "🔨",
    image: "https://picsum.photos/seed/hardwarebw/600/400",
    website: null
  },
  {
    id: 24,
    name: "Sunrise City Pharmacy",
    category: "Health",
    desc: "Private pharmacy dispensing prescription and OTC medications, vitamins, baby products, and cosmetics. Qualified pharmacist on duty at all times.",
    longDesc: "Sunrise City Pharmacy provides friendly, professional pharmaceutical services to Francistown residents. A qualified pharmacist is always available for medication counselling and health advice. The pharmacy stocks a wide range of chronic disease medications, baby care products, medical devices, and health supplements.",
    address: "Haskins St, Francistown",
    phone: "+267 241 7788",
    hours: "Mon–Fri  08:00–18:00, Sat 08:00–13:00",
    rating: 4.4,
    open: true,
    color: "#00897B",
    emoji: "💊",
    image: "https://picsum.photos/seed/pharmacybw/600/400",
    website: null
  },
  {
    id: 25,
    name: "Garden Fresh Produce Market",
    category: "Food & Drink",
    desc: "Fresh fruits, vegetables, and farm produce sourced directly from local farmers. Affordable prices with organic and pesticide-free options available.",
    longDesc: "Garden Fresh Produce Market brings the farm directly to Francistown shoppers. Partnering with smallholder farmers from around the North-East District, the market ensures fresh seasonal produce at prices lower than supermarkets. Look out for morogo, samp, dried beans, and homemade jams.",
    address: "Dube Market Area, Francistown",
    phone: "+267 714 2299",
    hours: "Mon–Sun  06:00–18:00",
    rating: 4.3,
    open: true,
    color: "#4CAF50",
    emoji: "🥬",
    image: "https://picsum.photos/seed/producebw/600/400",
    website: null
  },
  {
    id: 26,
    name: "Bright Future Academy",
    category: "Education",
    desc: "Private tutoring centre offering after-school and holiday classes for primary and secondary school learners. Small class sizes ensure personalised attention.",
    longDesc: "Bright Future Academy was founded by qualified teachers dedicated to improving learner outcomes in Francistown. Subjects covered include Mathematics, English, Science, and Setswana. Holiday intensives prepare BGCSE students for exams. Transportation assistance available for students within central Francistown wards.",
    address: "Boikago Ward, Francistown",
    phone: "+267 241 4411",
    hours: "Mon–Fri  14:00–18:00, Sat 08:00–13:00",
    rating: 4.8,
    open: false,
    color: "#FF5722",
    emoji: "📚",
    image: "https://picsum.photos/seed/schoolbw/600/400",
    website: null
  },
  {
    id: 27,
    name: "Kabo's Car Wash & Valeting",
    category: "Automotive",
    desc: "Professional car wash and full interior valeting service. Hand wash, wax, polish, leather conditioning, and engine bay cleaning at great value.",
    longDesc: "Kabo's Car Wash & Valeting is Francistown's most trusted vehicle cleaning service. Their team of trained valets uses premium products to clean, polish, and protect your vehicle inside and out. Monthly packages offer significant savings for regular customers. Fleet cleaning for businesses available on contract.",
    address: "Blue Jacket St, Francistown",
    phone: "+267 723 5577",
    hours: "Mon–Sun  07:00–18:00",
    rating: 4.6,
    open: true,
    color: "#1565C0",
    emoji: "🚘",
    image: "https://picsum.photos/seed/carwashbw/600/400",
    website: null
  }
];

/* ── STATE ────────────────────────────────── */
let activeCategory = "all";
let searchTerm     = "";
let sortMode       = "default";

/* ── UTILS ───────────────────────────────── */
function stars(r) {
  const full = Math.round(r);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function showToast(msg, type = "success") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.className = `toast toast-${type} show`;
  setTimeout(() => t.classList.remove("show"), 3500);
}

/* ── NAVBAR ACTIVE + SCROLL EFFECT ──────── */
function setActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-links a").forEach(a => {
    const href = a.getAttribute("href").split("/").pop();
    if (href === page || (page === "index.html" && href === "index.html") || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

function initNavbarScroll() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE MENU ─────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const links  = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.addEventListener("click", e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ── MODAL ───────────────────────────────── */
function openModal(biz) {
  const overlay = document.getElementById("biz-modal");
  if (!overlay) return;

  document.getElementById("modal-title").textContent     = biz.name;
  document.getElementById("modal-cat").textContent       = biz.category;
  document.getElementById("modal-long-desc").textContent = biz.longDesc;
  document.getElementById("modal-addr").textContent      = biz.address;
  document.getElementById("modal-phone").textContent     = biz.phone;
  document.getElementById("modal-hours").textContent     = biz.hours;
  document.getElementById("modal-rating").textContent    = `${stars(biz.rating)}  ${biz.rating.toFixed(1)} / 5.0`;
  document.getElementById("modal-status").textContent    = biz.open ? "Open Now" : "Closed";
  document.getElementById("modal-status").className      = biz.open ? "badge-open" : "badge-closed";

  const thumb = document.getElementById("modal-thumb");
  if (thumb) {
    if (biz.image) {
      thumb.innerHTML = `<img src="${biz.image}" alt="${biz.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-md);" onerror="this.parentNode.innerHTML='<div style=font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%;>${biz.emoji}</div>'">`;
    } else {
      thumb.textContent = biz.emoji;
    }
  }

  const webWrap = document.getElementById("modal-website-wrap");
  const webEl   = document.getElementById("modal-website");
  if (webEl && webWrap) {
    if (biz.website) {
      webEl.textContent = biz.website;
      webEl.href = biz.website.startsWith("http") ? biz.website : "https://" + biz.website;
      webWrap.style.display = "block";
    } else {
      webWrap.style.display = "none";
    }
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("biz-modal");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function initModal() {
  const overlay = document.getElementById("biz-modal");
  if (!overlay) return;
  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

/* ── RENDER DIRECTORY ───────────────────── */
function renderDirectory(limit = null) {
  const grid    = document.getElementById("directory-grid");
  const empty   = document.getElementById("empty-state");
  const countEl = document.getElementById("results-count");
  if (!grid) return;

  let filtered = businesses.filter(b => {
    const matchCat    = activeCategory === "all" || b.category === activeCategory;
    const q           = searchTerm.toLowerCase();
    const matchSearch =
      b.name.toLowerCase().includes(q) ||
      b.desc.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (sortMode === "name")   filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sortMode === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sortMode === "open")   filtered.sort((a, b) => (b.open ? 1 : 0) - (a.open ? 1 : 0));

  const toShow = limit ? filtered.slice(0, limit) : filtered;

  if (countEl) countEl.textContent = `${filtered.length} result${filtered.length !== 1 ? "s" : ""}`;

  Array.from(grid.children).forEach(c => { if (c.id !== "empty-state") c.remove(); });

  if (filtered.length === 0) {
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  toShow.forEach(biz => {
    const card = document.createElement("article");
    card.className = "biz-card reveal";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View details for ${biz.name}`);

    const imgHtml = biz.image
      ? `<img src="${biz.image}" alt="${biz.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : "";
    const emojiHtml = `<div class="card-thumb-placeholder" style="background:${biz.color}22;${biz.image ? 'display:none' : ''}">${biz.emoji}</div>`;

    card.innerHTML = `
      <div class="card-thumb">
        ${imgHtml}
        ${emojiHtml}
        <div class="card-accent-bar" style="background:${biz.color}"></div>
        <span class="card-open-badge ${biz.open ? 'badge-open' : 'badge-closed'}">${biz.open ? 'Open' : 'Closed'}</span>
      </div>
      <div class="card-body">
        <span class="card-cat">${biz.category}</span>
        <h3 class="card-name">${biz.name}</h3>
        <p class="card-desc">${biz.desc}</p>
        <div class="card-meta">
          <div class="meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${biz.address}</span>
          </div>
          <div class="meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.19 2 2 0 0 1 3.89 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${biz.phone}</span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div>
          <span class="star-rating">${stars(biz.rating)}</span>
          <span class="rating-num">${biz.rating.toFixed(1)}</span>
        </div>
        <button class="card-detail-btn">View details →</button>
      </div>
    `;

    card.addEventListener("click",   () => openModal(biz));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openModal(biz); });
    grid.insertBefore(card, empty || null);
  });

  observeReveal();
}

/* ── CATEGORY PILLS ─────────────────────── */
function initPills() {
  const container = document.getElementById("cat-pills");
  if (!container) return;

  const urlCat = new URLSearchParams(window.location.search).get("cat") || "all";
  if (urlCat !== "all") activeCategory = urlCat;

  const cats = ["all", ...new Set(businesses.map(b => b.category))];

  container.innerHTML = "";
  cats.forEach(cat => {
    const isActive = cat === urlCat || (urlCat === "all" && cat === "all");
    const btn = document.createElement("button");
    btn.className = "pill" + (isActive ? " active" : "");
    btn.textContent = cat === "all" ? "All Businesses" : cat;
    btn.setAttribute("data-cat", cat);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    btn.addEventListener("click", () => {
      activeCategory = cat;
      document.querySelectorAll(".pill").forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderDirectory();
    });
    container.appendChild(btn);
  });
}

/* ── SEARCH & SORT ──────────────────────── */
function initSearchSort() {
  const searchInput = document.getElementById("search-input");
  const sortSelect  = document.getElementById("sort-select");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchTerm = e.target.value.trim();
      renderDirectory();
    });
  }
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      sortMode = e.target.value;
      renderDirectory();
    });
  }
}

/* ── ANIMATED STATS COUNTER ─────────────── */
function animateCounter(el, target, duration = 1800) {
  const startTime = performance.now();
  const update = now => {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 4);
    const val      = Math.floor(ease * target);
    el.textContent = val + (el.dataset.suffix || "");
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + (el.dataset.suffix || "");
  };
  requestAnimationFrame(update);
}

function initStats() {
  const totalEl = document.getElementById("stat-total");
  const openEl  = document.getElementById("stat-open");
  const catEl   = document.getElementById("stat-cats");
  if (totalEl) totalEl.textContent = businesses.length;
  if (openEl)  openEl.textContent  = businesses.filter(b => b.open).length;
  if (catEl)   catEl.textContent   = new Set(businesses.map(b => b.category)).size;
}

function initAnimatedStats() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = "1";
        animateCounter(e.target, parseInt(e.target.dataset.count));
      }
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

/* ── SCROLL REVEAL ───────────────────────── */
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger").forEach(el => obs.observe(el));
}

/* ── DOWNLOAD CSV ────────────────────────── */
function downloadCSV() {
  const headers = ["Business Name", "Category", "Phone", "Address", "Rating", "Status", "Website"];
  const rows = businesses.map(b => [
    b.name, b.category, b.phone, b.address,
    b.rating.toFixed(1), b.open ? "Open" : "Closed", b.website || ""
  ]);
  const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "francistown-business-hub.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("CSV downloaded successfully!", "success");
}

/* ── DOWNLOAD PDF ────────────────────────── */
function downloadPDF() {
  if (typeof window.jspdf === "undefined") {
    showToast("PDF library loading, please try again.", "error");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape" });

  doc.setFontSize(18);
  doc.setTextColor(232, 114, 42);
  doc.text("Francistown Business Hub", 14, 16);
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Home to all micro / macro businesses — francistown-biz.co.bw", 14, 23);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-BW")}`, 14, 29);

  const tableData = businesses.map(b => [
    b.name, b.category, b.phone, b.address,
    b.rating.toFixed(1) + " / 5", b.open ? "Open" : "Closed"
  ]);

  if (typeof doc.autoTable === "function") {
    doc.autoTable({
      startY: 34,
      head: [["Business Name", "Category", "Phone", "Address", "Rating", "Status"]],
      body: tableData,
      headStyles: { fillColor: [232, 114, 42], textColor: 255, fontStyle: "bold" },
      alternateRowStyles: { fillColor: [255, 248, 240] },
      styles: { fontSize: 8, cellPadding: 3 }
    });
  } else {
    let y = 40;
    doc.setFontSize(9);
    businesses.forEach(b => {
      doc.text(`${b.name} | ${b.category} | ${b.phone} | ${b.address}`, 14, y);
      y += 7;
      if (y > 190) { doc.addPage(); y = 20; }
    });
  }

  doc.save("francistown-business-hub.pdf");
  showToast("PDF downloaded successfully!", "success");
}

/* ── FEEDBACK FORM ───────────────────────── */
function initFeedbackForm() {
  const form = document.getElementById("feedback-form");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sending…";
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.textContent = "Submit Review";
      btn.disabled = false;
      showToast("Thank you! Your review has been received.", "success");
      const successMsg = document.getElementById("form-success");
      if (successMsg) { successMsg.style.display = "flex"; setTimeout(() => successMsg.style.display = "none", 5000); }
    }, 1200);
  });
}

/* ── SWIPER CATEGORY CAROUSEL ────────────── */
function initCategorySwiper() {
  if (typeof Swiper === "undefined") return;
  const el = document.querySelector(".cat-swiper");
  if (!el) return;
  new Swiper(".cat-swiper", {
    slidesPerView: 1.4,
    spaceBetween: 16,
    grabCursor: true,
    loop: false,
    navigation: { nextEl: ".cat-next", prevEl: ".cat-prev" },
    breakpoints: {
      480:  { slidesPerView: 2.2, spaceBetween: 16 },
      768:  { slidesPerView: 3.2, spaceBetween: 20 },
      1024: { slidesPerView: 4.2, spaceBetween: 24 },
      1280: { slidesPerView: 5,   spaceBetween: 24 }
    }
  });
}

/* ── ANALYTICS CHARTS ────────────────────── */
function initAnalyticsCharts() {
  if (typeof Chart === "undefined") return;

  const cats   = [...new Set(businesses.map(b => b.category))];
  const counts = cats.map(c => businesses.filter(b => b.category === c).length);
  const avgRat = cats.map(c => {
    const grp = businesses.filter(b => b.category === c);
    return (grp.reduce((s, b) => s + b.rating, 0) / grp.length).toFixed(2);
  });

  const palette = ["#e8722a","#4A7C59","#1A6198","#E8C42A","#5B8FA8","#6B4226","#e91e8c","#9C27B0","#3F51B5","#795548","#FF5722","#00897B"];

  const catCtx = document.getElementById("catChart");
  if (catCtx) {
    new Chart(catCtx, {
      type: "doughnut",
      data: {
        labels: cats,
        datasets: [{ data: counts, backgroundColor: palette.slice(0, cats.length), borderWidth: 2, borderColor: "#fff" }]
      },
      options: { responsive: true, plugins: { legend: { position: "right" } } }
    });
  }

  const ratCtx = document.getElementById("ratChart");
  if (ratCtx) {
    new Chart(ratCtx, {
      type: "bar",
      data: {
        labels: cats,
        datasets: [{ label: "Avg Rating", data: avgRat, backgroundColor: "#e8722a", borderRadius: 6 }]
      },
      options: {
        responsive: true,
        scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 } } },
        plugins: { legend: { display: false } }
      }
    });
  }

  const openCtx = document.getElementById("openChart");
  if (openCtx) {
    const openCount   = businesses.filter(b => b.open).length;
    const closedCount = businesses.length - openCount;
    new Chart(openCtx, {
      type: "pie",
      data: {
        labels: ["Open Now", "Closed"],
        datasets: [{ data: [openCount, closedCount], backgroundColor: ["#10b981", "#ef4444"], borderWidth: 2, borderColor: "#fff" }]
      },
      options: { responsive: true, plugins: { legend: { position: "bottom" } } }
    });
  }

  const topCtx = document.getElementById("topChart");
  if (topCtx) {
    const top = [...businesses].sort((a, b) => b.rating - a.rating).slice(0, 8);
    new Chart(topCtx, {
      type: "bar",
      data: {
        labels: top.map(b => b.name.length > 20 ? b.name.slice(0, 18) + "…" : b.name),
        datasets: [{ label: "Rating", data: top.map(b => b.rating), backgroundColor: "#4A7C59", borderRadius: 6 }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        scales: { x: { min: 0, max: 5 } },
        plugins: { legend: { display: false } }
      }
    });
  }
}

/* ── INIT ─────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  initNavbarScroll();
  initMobileMenu();
  initModal();
  initPills();
  initSearchSort();

  const isHome = !window.location.pathname.includes("/pages/");
  if (isHome) {
    renderDirectory(6);
  } else {
    renderDirectory();
  }

  initStats();
  initAnimatedStats();
  initFeedbackForm();
  initCategorySwiper();
  initAnalyticsCharts();
  observeReveal();
});
