import React from 'react';

const MobileMenu = ({ menuOpen, setMenuOpen, toggleTheme }) => {
    return (
        <>
            {menuOpen && (
                <div className="fixed top-16 right-4 z-50 backdrop-blur-lg rounded-lg shadow-lg p-4 md:hidden bg-surface border outline-color">
                    <div className="flex flex-col space-y-4">
                        <a href="#home" className="text-secondary hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#about" className="text-secondary hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="#projects" className="text-secondary hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Projects</a>
                        <a href="#contact" className="text-secondary hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
                        <button
                            onClick={() => { toggleTheme && toggleTheme(); setMenuOpen(false); }}
                            className="mt-2 px-4 py-2 rounded bg-primary text-on-primary font-medium shadow-md"
                            aria-label="Toggle theme"
                        >
                            Toggle theme
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export { MobileMenu };