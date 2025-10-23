import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-surface backdrop-blur-lg border-b outline-color shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-primary">{""}leecuong<span className="text-primary-d40">v</span>{" "}</a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#home" className="text-secondary hover:text-white transition-colors">{" "}Home{" "}</a>
                        <a href="#about" className="text-secondary hover:text-white transition-colors">{" "}About{" "}</a>
                        <a href="#project" className="text-secondary hover:text-white transition-colors">{" "}Project{" "}</a>
                        <a href="#contact" className="text-secondary hover:text-white transition-colors">{" "}Contact{" "}</a>
                        <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-3 px-3 py-1 rounded-full bg-white/5 text-secondary hover:bg-white/10 transition">
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}