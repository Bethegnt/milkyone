import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Milk, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { cart, user, login, logout } = useStore();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Subscribe', path: '/subscribe' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-primary/10 p-2 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Milk size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            MilkyOne
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {user?.role === 'admin' && (
                            <Link to="/admin" className="text-sm font-medium text-slate-600 hover:text-primary">
                                Admin Dashboard
                            </Link>
                        )}

                        <Link to="/cart" className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                            <ShoppingCart size={20} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-700">{user.name}</span>
                                <button
                                    onClick={() => logout()}
                                    className="text-xs text-red-500 hover:underline"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => login()}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                <User size={16} />
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-slate-100">
                                {user ? (
                                    <button onClick={() => logout()} className="w-full text-left px-3 py-2 text-red-500 font-medium">Logout</button>
                                ) : (
                                    <button onClick={() => login()} className="w-full text-left px-3 py-2 text-primary font-medium">Login</button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20">
            <Navbar />
            <main className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
                <Outlet />
            </main>
            <footer className="bg-white border-t border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                    <p>© 2025 MilkyOne Dairy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AppLayout;
