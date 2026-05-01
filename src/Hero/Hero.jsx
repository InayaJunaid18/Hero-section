import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import "./Hero.css";

const slides = [
  {
    id: 1,
    bg: "https://png.pngtree.com/thumb_back/fh260/background/20251120/pngtree-empty-supermarket-aisle-with-shopping-carts-and-produce-display-inside-image_20490922.webp",
    title: "Organic Grocery",
    desc: "Organic grocery refers to food products grown and produced without synthetic pesticides, chemicals, or genetically modified organisms (GMOs). It focuses on natural farming methods, offering healthier, fresher, and more environmentally friendly options for everyday consumption.",
    hotspots: [
        { x: "62%", y: "45%",
    product: {
      name: "Organic Flour",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://onedegreeorganics.com/wp-content/uploads/2017/02/ODO_SourdoughBread_Blog_KhorasanFlour.jpg"},
    },

    { x: "40%", y: "80%",
    product: {
      name: "Organic Facial Kit",
      price: "£28.00 – £30.00",
      tag: "SALE!",
      img: "https://img.drz.lazcdn.com/static/pk/p/b07da4f21910019d342a73ee0765e365.jpg_960x960q80.jpg_.webp",
    },},

    { x: "75%", y: "30%",
    product: {
      name: "Custom Chinese Vase",
      price: "£38.00 – £40.00",
      tag: "SALE!",
      img: "https://thalnaturals.com/cdn/shop/files/Small-Bee-Honey_1066x.jpg?v=1737542396",
    },},

    { x: "50%", y: "70%",
    product: {
      name: "Fresh Vegetables Basket",
      price: "£48.00 – £50.00",
      tag: "SALE!",
      img: "https://png.pngtree.com/png-clipart/20240728/original/pngtree-farm-vegetables-fresh-food-of-organic-garden-png-image_15653289.png",
    },}
]},
///////////////////////////// slide 2
  {
    id: 2,
    bg:"https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80",
    title: "Luxury Lifestyle",
    desc: "A luxury lifestyle is centered around comfort, elegance, and high-quality living. It includes premium products, refined experiences, and attention to detail, creating a sense of exclusivity, ease, and sophisticated enjoyment in everyday life.",
    hotspots: [
        { x: "62%", y: "45%",
    product: {
      name: "Candle Holder",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://homducts.pk/cdn/shop/files/IMG-2526.png?format=webp&v=1774386203&width=300&q=80"},
    },

    { x: "40%", y: "60%",
    product: {
      name: "Custom Chinese Vase",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=300&q=80",
    },},

    { x: "75%", y: "30%",
    product: {
      name: "Wooden Tissue Box",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://homducts.pk/cdn/shop/files/IMG-3486.png?format=webp&v=1775341302&width=300&q=80",
    },},

    { x: "50%", y: "70%",
    product: {
      name: "Almunium Artifact Decor",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://images-eu.ssl-images-amazon.com/images/I/61p4mFCGC2L._AC_UL600_SR600,600_.jpg",
    },}
]},
   /////////////////////////////////// slide 3 
  {
    id: 3,
    bg:"https://www.alliedmarketresearch.com/InsightsImages/banner-1-C-2024-04-22-1713778596.webp",
    title: "Luxurious Shop",
    desc: "Luxurious shopping is a premium retail experience focused on high-quality products, elegant design, and personalized service. It emphasizes exclusivity, comfort, and attention to detail, making customers feel valued while offering refined and sophisticated items.",
    hotspots: [
        { x: "62%", y: "45%",
    product: {
      name: "RAS Luxury Skincare",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://www.rasluxuryoils.com/cdn/shop/files/1_1_3_533x.jpg?v=1773742801?w=300&q=80"},
    },

    { x: "40%", y: "60%",
    product: {
      name: "Luxury Handbag",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://image.made-in-china.com/202f0j00OVSRuTYjstkp/Bear-Pendant-Ladies-PU-Leather-Bag-Online-Shopping-Handbag.webp",
    },},

    { x: "75%", y: "30%",
    product: {
      name: "Luxury SPA Kit",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://destinationdeluxe.com/wp-content/uploads/2020/09/Divana-Spa-Skincare-Destination-Deluxe.jpg",
    },},

    { x: "50%", y: "70%",
    product: {
      name: "Designer Dress",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://ae01.alicdn.com/kf/Sfb4a12d39d3d4df7bbacbc9f2a8772a2F.jpg",
    },}
]},


/////////////////////////////////////////// slide 4
  {
    id: 4,
    bg:"https://img.freepik.com/premium-photo/flat-lay-black-tech-gadgets-headphones-phone-laptop-black-background_14117-747545.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Exclusive Deals",
    desc: "Exclusive electronics refer to high-end, premium devices designed with advanced technology, superior performance, and sleek aesthetics. They offer unique features and a refined user experience, often targeting those who value innovation, quality, and exclusivity.",
    hotspots: [
        { x: "62%", y: "45%",
    product: {
      name: "Kenwood Food Processor",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJ279WsPv5wFUqBXgWM2OjKPiJ0Yxpcu3ZQ&s"},
    },

    { x: "40%", y: "60%",
    product: {
      name: "Audionic Music System",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://tamhangplaza.vn/image/cache/upload/product/2017/10/12/3823/3823_img1.png",
    },},

    { x: "75%", y: "30%",
    product: {
      name: "Dawlance Microwave Oven",
      price: "£18.00 – £20.00",
      tag: "SALE!",
      img: "https://modernelectronics.pk/cdn/shop/products/530-AF.png?v=1695072663&width=300&q=80",
    },},

    { x: "50%", y: "70%",
    product: {
      name: "SamSung Combo Offer",
      price: "£4999.00 – £7999.00",
      tag: "SALE!",
      img: "https://s47295.pcdn.co/wp-content/uploads/2024/03/S24Ultra_TabS9Ultra_GB4Ultra_GW6Classic_BudsFE-900x450.jpg",
    },}
]},

];

const AUTO_PLAY_DURATION = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [prevIdx, setPrevIdx] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const progressRef = useRef(null);
  const timerRef = useRef(null);
  const slideRefs = useRef([]);

  const animateLetters = useCallback(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 60, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.6,
        stagger: 0.045,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.7 }
    );
    gsap.fromTo(
      btnsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 1 }
    );
  }, []);

  const animateProgress = useCallback(() => {
    if (!progressRef.current) return;
    gsap.killTweensOf(progressRef.current);
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: AUTO_PLAY_DURATION / 1000, ease: "none" }
    );
  }, []);

  const goToSlide = useCallback(
    (idx) => {
      if (isAnimating || idx === current) return;
      setIsAnimating(true);
      // ✅ Card hide karo jab bhi slide change ho
      setCardVisible(false);
      setPrevIdx(current);

      const outSlide = slideRefs.current[current];
      const inSlide = slideRefs.current[idx];

      gsap.to(outSlide, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
      gsap.fromTo(
        inSlide,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setIsAnimating(false),
        }
      );

      setCurrent(idx);
    },
    [current, isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  // Autoplay
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, AUTO_PLAY_DURATION);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  // Animate on slide change
  useEffect(() => {
    animateLetters();
    animateProgress();
  }, [current, animateLetters, animateProgress]);

  const splitTitle = (text) =>
    text.split("").map((ch, i) => (
      <span key={i} className="letter" style={{ whiteSpace: ch === " " ? "pre" : "normal" }}>
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  return (
    <div className="parent relative w-screen h-screen overflow-hidden bg-black select-none ">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[idx] = el)}
          className="absolute inset-0"
          style={{ opacity: idx === 0 ? 1 : 0 }}
        >
          {/* BG Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          {/* Overlay */}
          <div className="slide-overlay absolute inset-0" />

          

{/* Hotspot + Product Card — only on current */}


{idx === current &&
  slide.hotspots?.map((hotspot, i) => (
    <div
      key={i}
      className="absolute"
      style={{ left: hotspot?.x, top: hotspot?.y }}
      //onMouseEnter={() => setCardVisible(true)}
      onMouseEnter={() => setActiveHotspot(i)}
      onMouseLeave={() => setActiveHotspot(null)}
      onClick={() => setActiveHotspot(activeHotspot === i ? null : i)} // ✅ mobile support
    >
      {/* + Button */}
      <button
        className="hotspot-btn relative z-20 w-10 h-10 rounded-full border-2 border-none bg-transparent backdrop-blur-sm text-xs text-white flex items-center justify-center font-light cursor-pointer"
        aria-label="View product"
      >
        +
      </button>

      {/* Product Card */}
      <div
        className={`product-card-popup ${activeHotspot===i ? "visible" : ""} absolute z-30 py-3.5 px-2.5 bg-white rounded-xl shadow-2xl overflow-hidden w-52 sm:w-48`}
        style={{ top: "-200px", right: "10px" }}
      >
        {/* Tag */}
        <div className="absolute top-2 left-2 z-10 mx-8">
          <span
            className="hero-card-tag text-xs font-semibold px-2 py-0.5 rounded"
            style={{
              background: hotspot?.product?.tag === "SALE!" ? "royalblue" : "#c8a96e",
              color: "#fff",
            }}
          >
            {hotspot?.product?.tag}
          </span>
        </div>

        {/* Image */}
        <div className="h-36 px-5 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={hotspot?.product?.img}
            alt={hotspot?.product?.name}
            className="w-full h-full object-cover px-2"
          />
        </div>

        {/* Info */}
        <div className="p-3">
          <p className="text-sm font-medium leading-tight text-center" style={{color:"royalblue"}}>
            {hotspot?.product?.name}
          </p>
          <p className="text-xs text-gray-500 mt-1 text-center">
            {hotspot?.product?.price}
          </p>
          {/*<button
            className="hero-card-btn mx-10 w-43  text-xs rounded-full text-white font-medium flex flex-wrap items-center justify-center transition-colors duration-200"
            style={{ background: "royalblue" }}
          >
            Add to Cart
          </button>*/}
          <button
            className="hero-card-btn px-3 py-2 w-full   text-xs rounded-lg text-white font-medium text-center wrap-break-word  flex flex-wrap items-center justify-center transition-colors duration-200"
            style={{ background: "royalblue" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-16 max-w-3xl">

        {/* Tag line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ background: "royalblue" }} />
          <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-light">
            Premium Collection
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-display text-3xl lg:text-7xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-6"
          style={{ perspective: "600px", color:"royalblue" }}
        >
          {splitTitle(slides[current].title)}
        </h1>

        {/* Description */}
        <p ref={descRef} className="text-white/70 text-base font-light leading-relaxed max-w-md" style={{marginBottom:"12px"}}>
          {slides[current].desc}
        </p>

        {/* Buttons */}
        <div ref={btnsRef} className="flex items-center gap-4">
          
          <button
            className="btn-shop px-8 py-3.5 border border-white/40 text-white text-sm tracking-widest uppercase font-light rounded-full transition-colors duration-300"
            onClick={() => {}}
          >
            Shop Now
          </button>
          <button
            className=" contact-btn px-8 py-3.5 text-sm tracking-widest uppercase font-light rounded-full transition-all duration-300 text-black"
            style={{ background: "#c8a96e" }}
            onClick={() => {}}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-white/10 transition" style={{color:"royalblue"}}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-white/10 transition" style={{color:"royalblue"}}
      >
        ›
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-4">
        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background: i === current ? "royalblue" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-px bg-white/20 overflow-hidden rounded-full">
          <div
            ref={progressRef}
            className="h-full progress-bar"
            style={{ background: "royalblue", transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
}







/////////////////////////////////////////////////



/*import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import "./Hero.css";

const slides = [
  {
    id: 1,
    bg: "https://png.pngtree.com/thumb_back/fh260/background/20251120/pngtree-empty-supermarket-aisle-with-shopping-carts-and-produce-display-inside-image_20490922.webp",
    title: "Organic Grocery",
    desc: "Organic grocery refers to food products grown and produced without synthetic pesticides, chemicals, or genetically modified organisms (GMOs).",
    hotspots: [
      {
        x: "62%", y: "45%",
        product: {
          name: "Organic Flour",
          price: "£18.00 – £20.00",
          tag: "SALE!",
          img: "https://onedegreeorganics.com/wp-content/uploads/2017/02/ODO_SourdoughBread_Blog_KhorasanFlour.jpg"
        }
      },
      {
        x: "40%", y: "80%",
        product: {
          name: "Organic Facial Kit",
          price: "£28.00 – £30.00",
          tag: "SALE!",
          img: "https://img.drz.lazcdn.com/static/pk/p/b07da4f21910019d342a73ee0765e365.jpg"
        }
      }
    ]
  },
];

const AUTO_PLAY_DURATION = 4000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const progressRef = useRef(null);
  const timerRef = useRef(null);
  const slideRefs = useRef([]);

  const animateLetters = useCallback(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll(".letter");

    gsap.fromTo(letters,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.5 }
    );

    gsap.fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.4 }
    );

    gsap.fromTo(btnsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.6 }
    );
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, AUTO_PLAY_DURATION);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  useEffect(() => {
    animateLetters();
  }, [current, animateLetters]);

  const splitTitle = (text) =>
    text.split("").map((ch, i) => (
      <span key={i} className="letter">
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  return (
    <div className="parent relative w-screen h-screen overflow-hidden bg-black select-none px-4 sm:px-8 md:px-16">

      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[idx] = el)}
          className="absolute inset-0"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="slide-overlay absolute inset-0" />

          {idx === current &&
            slide.hotspots.map((hotspot, i) => (
              <div
                key={i}
                className="absolute"
                style={{ left: hotspot.x, top: hotspot.y }}
                onMouseEnter={() => setActiveHotspot(i)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() =>
                  setActiveHotspot(activeHotspot === i ? null : i)
                }
              >
                <button className="hotspot-btn">+</button>

                <div
                  className={`product-card-popup ${activeHotspot === i ? "visible" : ""
                    }`}
                >
                  <img src={hotspot.product.img} alt="" />
                  <p>{hotspot.product.name}</p>
                  <span>{hotspot.product.price}</span>
                  <button className="hero-card-btn">Add to Cart</button>
                </div>
              </div>
            ))}
        </div>
      ))}

      <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl">
        <h1
          ref={titleRef}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-blue-500"
        >
          {splitTitle(slides[current].title)}
        </h1>

        <p ref={descRef} className="text-white/70 mt-4">
          {slides[current].desc}
        </p>

        <div ref={btnsRef} className="flex flex-wrap gap-3 mt-4">
          <button className="btn-shop">Shop Now</button>
          <button className="contact-btn">Contact</button>
        </div>
      </div>
    </div>
  );
}*/