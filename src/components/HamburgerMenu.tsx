import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX, IconMail, IconFolder } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = () => {
    navigate('/contact');
    setIsOpen(false);
  };

  const handleProjectsClick = () => {
    navigate('/projects');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="relative z-50 w-10 h-10 rounded-full bg-[#7960cf] hover:bg-[#6a4fc4] text-white backdrop-blur-sm border border-purple-300/30 flex items-center justify-center transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconX className="w-5 h-5 text-white" stroke={2} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconMenu2 className="w-5 h-5 text-white" stroke={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-12 z-50 w-56 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-xl overflow-hidden"
            >
              <div className="py-2">
                {/* Contact Us Button */}
                <motion.button
                  onClick={handleContactClick}
                  className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-100/50 transition-colors duration-150"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <IconMail className="w-4 h-4 text-blue-600" stroke={2} />
                  </div>
                  <span className="text-gray-700 font-medium font-poppins">Contact Us</span>
                </motion.button>

                {/* Divider */}
                <div className="mx-4 my-1 h-px bg-gray-200/50" />

                {/* Projects/Assets Button */}
                <motion.button
                  onClick={handleProjectsClick}
                  className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-100/50 transition-colors duration-150"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <IconFolder
                      className="w-4 h-4 text-purple-600"
                      stroke={2}
                    />
                  </div>
                  <span className="text-gray-700 font-medium font-poppins">Assets</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
