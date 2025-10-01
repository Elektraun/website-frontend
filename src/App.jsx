import { FaInstagram, FaTwitter, FaStrava } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import logo from "./assets/logo.png"
import video from "./assets/video.mp4"
import { useEffect, useState } from 'react';
// --- CUSTOM COLORS FROM YOUR LOGO ---
const colors = {
  elektraunDarkBlue: '#1a2a47', // Primary dark background
  elektraunCyan: '#00aeff',     // Electric blue from heartbeat
  elektraunRed: '#ff0000',      // Red from mountain/stripe
  elektraunGreen: '#00cc00',    // Green from stripe
  elektraunLightBlue: '#0066cc', // Lighter blue from stripe (used for accents)
  elektraunGrey: '#333333',     // Dark grey for secondary elements
  elektraunText: '#f0f0f0',     // Light text for contrast
};

// HELPER FOR ANIMATIONS
const sectionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
// --- PRELOADER COMPONENT ---
const Preloader = () => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center z-[100]"
    style={{ backgroundColor: colors.elektraunDarkBlue }}
    exit={{ opacity: 0 }} // Animation for when it disappears
    transition={{ duration: 0.5 }}
  >
    <video
      // The video will now take up the full height of the container
      // and 'object-contain' will ensure its aspect ratio is preserved perfectly.
      className="w-full h-full object-contain"
      autoPlay
      muted
      playsInline
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>
);

// --- NAVIGATION BAR COMPONENT ---
const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      {/* Logo and Club Name */}
      <a href="#" className="flex items-center gap-3"> {/* Use an anchor tag for the home link */}
        <img className="h-12 w-12 rounded-md object-cover" src={logo} alt="Elektraun Logo"/>
        <span className="text-3xl font-extrabold tracking-widest uppercase" style={{ color: colors.elektraunText }}>
          Elektraun
        </span>
      </a>
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 font-semibold">
        <a href="#about" className="text-white hover:text-elektraunCyan transition-colors duration-300">About</a>
        <a href="#gallery" className="text-white hover:text-elektraunCyan transition-colors duration-300">Gallery</a>
        <a href="#join" className="text-white hover:text-elektraunCyan transition-colors duration-300">Join Us</a>
      </div>
    </div>
  </nav>
);


// --- HERO/LANDING SECTION ---
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
    {/* ===== REPLACE THIS with your own high-energy running video (ideally with a grittier feel) ===== */}
    <video
      src="https://assets.mixkit.co/videos/preview/mixkit-group-of-runners-on-a-mountain-road-23945-large.mp4" // Placeholder, find a more intense one!
      autoPlay
      loop
      muted
      playsInline // Important for mobile autoplay
      className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div> {/* Darker overlay */}
    <motion.div
      className="relative z-20 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h2 className="text-5xl md:text-8xl font-black uppercase tracking-wider leading-tight" style={{ color: colors.elektraunText }}>
        Break <span style={{ color: colors.elektraunRed }}>Limits</span>.<br />Forge <span style={{ color: colors.elektraunCyan }}>Endurance</span>.
      </h2>
      <p className="text-lg md:text-2xl mt-4 max-w-4xl mx-auto font-light" style={{ color: colors.elektraunText }}>
        Elektraun: Where every damn run is a minimum of 11KM.
        We demand consistency, discipline, and absolute focus.
      </p>
      <motion.a
        href="#join"
        className="mt-8 inline-block font-bold uppercase px-12 py-5 rounded-full tracking-wide text-lg transition-all duration-300 shadow-lg"
        style={{ backgroundColor: colors.elektraunCyan, color: colors.elektraunDarkBlue, '&:hover': { backgroundColor: colors.elektraunRed, color: colors.elektraunText } }}
        whileHover={{ scale: 1.07, boxShadow: `0 0 20px ${colors.elektraunCyan}` }}
        whileTap={{ scale: 0.95 }}
      >
        Answer the Call
      </motion.a>
    </motion.div>
  </section>
);

// --- ABOUT SECTION ---
const About = () => (
  <motion.section
    id="about"
    className="py-20 md:py-32"
    style={{ backgroundColor: colors.elektraunDarkBlue, color: colors.elektraunText }}
    variants={sectionAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
        Beyond The Horizon: The Elektraun Ethos
      </h3>
      <div className="w-32 h-1 mx-auto my-6" style={{ backgroundColor: colors.elektraunRed }}></div>
      <p className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
        Elektraun is not for the faint of heart. We are a crucible for long-distance runners who commit to relentless self-improvement. Our standard begins at 11KM—a benchmark for mental fortitude and physical endurance. Here, excuses are stripped away, and true grit is forged through consistent, disciplined effort. Join a pack that runs further, pushes harder, and never settles.
      </p>
    </div>
  </motion.section>
);

// --- CALL TO ACTION / MOTIVATION SECTION (NEW) ---
const Motivation = () => (
  <motion.section
    className="py-20 md:py-24 text-center relative overflow-hidden"
    style={{ backgroundColor: colors.elektraunGrey, color: colors.elektraunText }}
    variants={sectionAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="absolute inset-0 bg-texture-pattern opacity-10"></div> {/* Subtle background pattern */}
    <div className="relative z-10 container mx-auto px-6">
      <h4 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight" style={{ color: colors.elektraunCyan }}>
        11KM ISN'T A GOAL.<br />IT'S THE STARTING LINE.
      </h4>
      <p className="max-w-3xl mx-auto text-lg md:text-xl font-light">
        Every stride builds resilience. Every kilometer unlocks potential. If you're ready to commit to the grind,
        to feel the burn and push past it, then you belong here.
      </p>
      <motion.a
        href="#join"
        className="mt-10 inline-block font-bold uppercase px-10 py-4 rounded-md tracking-wide transition-all duration-300 text-lg"
        style={{ backgroundColor: colors.elektraunRed, color: colors.elektraunText, '&:hover': { backgroundColor: colors.elektraunCyan } }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Define Your Discipline
      </motion.a>
    </div>
  </motion.section>
);

// --- GALLERY SECTION ---
const Gallery = () => {
  // ===== REPLACE THESE with your own high-intensity running pictures =====
  const imageUrls = [
    "https://images.unsplash.com/photo-1543789647-380d0d297906?q=80&w=2070&auto=format&fit=crop", // Gritty, focused runner
    "https://images.unsplash.com/photo-1579737194883-75a7f23c28c6?q=80&w=2070&auto=format&fit=crop", // Trail running intensity
    "https://images.unsplash.com/photo-1517865261846-95b21495c25e?q=80&w=1932&auto=format&fit=crop", // Runner pushing hard
    "https://images.unsplash.com/photo-1560932223-b1d7d08343e7?q=80&w=2070&auto=format&fit=crop", // Urban running, determined
    "https://images.unsplash.com/photo-1502283684120-f1747864197a?q=80&w=2070&auto=format&fit=crop", // Sunset run, epic
    "https://images.unsplash.com/photo-1508269151838-51f0f35359e9?q=80&w=2070&auto=format&fit=crop", // Runner in rain/spray
  ];

  return (
    <motion.section
      id="gallery"
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.elektraunDarkBlue, color: colors.elektraunText }}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-extrabold uppercase text-center">
          The Grind. The Glory.
        </h3>
        <div className="w-32 h-1 mx-auto my-6" style={{ backgroundColor: colors.elektraunGreen }}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group h-80 md:h-96"
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${colors.elektraunCyan}` }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <img src={url} alt={`Elektraun moment ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              {/* Optional overlay text on hover */}
              {/* <div className="absolute inset-0 flex items-end p-4 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Endurance Defined
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- JOIN US SECTION ---
const Join = () => (
  <motion.section
    id="join"
    className="py-20 md:py-32"
    style={{ backgroundColor: colors.elektraunGrey, color: colors.elektraunText }}
    variants={sectionAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-4xl md:text-5xl font-extrabold uppercase">
        Ready to Push Your Limits?
      </h3>
      <div className="w-32 h-1 mx-auto my-6" style={{ backgroundColor: colors.elektraunCyan }}></div>
      <p className="max-w-3xl mx-auto my-4 text-lg md:text-xl leading-relaxed">
        This isn't just about running. It's about committing to a higher standard. If you’re ready to embrace the challenge,
        the discipline, and the sheer power of long-distance running, Elektraun awaits.
      </p>
      <form className="mt-8 max-w-lg mx-auto flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="ENTER YOUR UNYIELDING EMAIL"
          className="w-full px-6 py-4 bg-gray-800 text-white border-2 border-transparent rounded-md focus:outline-none focus:border-elektraunCyan placeholder-gray-500 uppercase tracking-wider"
          style={{ backgroundColor: colors.elektraunDarkBlue, borderColor: colors.elektraunGrey }}
        />
        <button
          type="submit"
          className="font-bold uppercase px-10 py-4 rounded-md tracking-wide transition-all duration-300 whitespace-nowrap text-lg"
          style={{ backgroundColor: colors.elektraunRed, color: colors.elektraunText, '&:hover': { backgroundColor: colors.elektraunCyan } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enlist Now
        </button>
      </form>
      <p className="mt-8 text-sm md:text-base italic" style={{ color: colors.elektraunText }}>
        We respond to those who are serious.
      </p>
    </div>
  </motion.section>
);

// --- FOOTER SECTION ---
// --- FOOTER SECTION (UPDATED) ---
const Footer = () => (
  <footer className="py-8" style={{ backgroundColor: colors.elektraunDarkBlue, color: colors.elektraunText }}>
    <div className="container mx-auto px-6 text-center">
      {/* Footer Logo */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Elektraun Logo" className="h-20 w-20 rounded-lg" />
      </div>
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://strava.app.link/0zHbB90QpTb" className="hover:text-elektraunCyan transition-colors duration-300"><FaStrava size={28} /></a>
        <a href="https://www.instagram.com/elektraun?igsh=cjI3NjkxdWg5azMy" className="hover:text-elektraunCyan transition-colors duration-300"><FaInstagram size={28} /></a>
        <a href="https://chat.whatsapp.com/H1aAplwtlcZDaVZpB25XVB" className="hover:text-elektraunCyan transition-colors duration-300"><FaTwitter size={28} /></a>
      </div>
      <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Elektraun. All Rights Reserved. Forged in Fire. Fueled by Distance.</p>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---
function App() {
   // State to manage the loading screen
  const [isLoading, setIsLoading] = useState(true);

  // Effect to hide the preloader after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3500ms = 3.5 seconds. Adjust this time as you like.

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once

  return (
     <div style={{ backgroundColor: colors.elektraunDarkBlue }}>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* The rest of your website will be hidden until isLoading is false */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Motivation />
            <Gallery />
            <Join />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;