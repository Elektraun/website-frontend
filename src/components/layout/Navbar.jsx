import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppModal from "../../modals/WhatsAppModal";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const handleNav = (target) => {
    setIsOpen(false);

    const hash = target.startsWith("#") ? target : `#${target}`;

    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#050609]/80 backdrop-blur-xl z-[60] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">

          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Elektraun Logo"
                className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover border border-white/10 group-hover:border-cyan-400 transition-colors"
              />
              <div className="absolute -inset-1 bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </div>
            <span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white">
              ELEKT<span className="font-black text-cyan-400">RAUN</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => handleNav("#about")} className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => handleNav("#gallery")} className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
              Gallery
            </button>
            <button onClick={() => handleNav("#motivation")} className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
              Ethos
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  {user?.profileImage && (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border border-cyan-400"
                    />
                  )}
                  <span className="text-sm font-semibold text-white">{user?.name || user?.email}</span>
                </div>
                <Link
                  to="/account"
                  className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-red-400 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-cyan-400 transition-colors px-6 py-2.5 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setShowQR(true)}
              className="bg-red-600 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            >
              Join Us
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            {isAuthenticated ? (
              <>
                {user?.profileImage && (
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-7 h-7 rounded-full border border-cyan-400"
                  />
                )}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white p-2"
                >
                  {isOpen ? (
                    <span className="text-2xl font-light">✕</span>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="w-6 h-0.5 bg-white"></div>
                      <div className="w-6 h-0.5 bg-cyan-400"></div>
                      <div className="w-4 h-0.5 bg-white ml-auto"></div>
                    </div>
                  )}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
                >
                  Login
                </Link>
                <button
                  onClick={() => setShowQR(true)}
                  className="bg-red-600 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
                >
                  Join
                </button>
                <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <span className="text-2xl font-light">✕</span>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="w-6 h-0.5 bg-white"></div>
                      <div className="w-6 h-0.5 bg-cyan-400"></div>
                      <div className="w-4 h-0.5 bg-white ml-auto"></div>
                    </div>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0c10] border-t border-white/5 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-8 py-12">
                <button onClick={() => handleNav("#about")} className="text-lg font-bold tracking-widest uppercase text-gray-400">About</button>
                <button onClick={() => handleNav("#gallery")} className="text-lg font-bold tracking-widest uppercase text-gray-400">Gallery</button>
                <button onClick={() => handleNav("#motivation")} className="text-lg font-bold tracking-widest uppercase text-gray-400">Motivation</button>

                <div className="w-12 h-px bg-white/10" />

                {isAuthenticated ? (
                  <div className="flex flex-col items-center gap-4 w-full">
                    <div className="text-center">
                      {user?.profileImage && (
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="w-12 h-12 rounded-full border border-cyan-400 mx-auto mb-2"
                        />
                      )}
                      <p className="text-sm text-gray-300">{user?.name || user?.email}</p>
                    </div>
                    <Link
                      to="/account"
                      className="w-full text-center px-4 py-2 text-lg font-bold tracking-widest uppercase text-gray-400"
                      onClick={() => setIsOpen(false)}
                    >
                      Account
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-center px-4 py-2 text-lg font-bold tracking-widest uppercase text-red-400"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 w-full px-6">
                    <Link
                      to="/login"
                      className="w-full text-center px-4 py-2 bg-cyan-400 text-gray-900 font-bold uppercase rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                )}

                <p className="text-gray-500 text-xs tracking-[0.3em] uppercase italic">11KM Standard</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <WhatsAppModal
        isOpen={showQR}
        onClose={() => setShowQR(false)}
      />
    </>
  );
};

export default Navbar;
