"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Flower2, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50 py-4" : "bg-background/80 backdrop-blur-md py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="relative"
                    >
                        <Flower2 className={cn(
                            "h-10 w-10 transition-all duration-300",
                            scrolled ? "text-emerald-600" : "text-emerald-600"
                        )} />
                        <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 animate-pulse" />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-playfair font-bold tracking-tight transition-all duration-300",
                            scrolled ? "text-2xl text-foreground" : "text-2xl text-foreground"
                        )}>
                            Best Spa
                        </span>
                        <span className={cn(
                            "font-light tracking-wide text-sm transition-all duration-300",
                            scrolled ? "text-emerald-600" : "text-emerald-600"
                        )}>
                            Islamabad
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "relative font-medium text-sm tracking-wide transition-all duration-300 group",
                                    pathname === link.href 
                                        ? "text-emerald-600 font-semibold"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-orange-400 transition-all duration-300",
                                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link 
                            href="/contact" 
                            className={cn(
                                buttonVariants({ variant: "primary", size: "sm" }),
                                "bg-gradient-to-r from-emerald-600 to-orange-500 hover:from-emerald-700 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 font-semibold tracking-wide"
                            )}
                        >
                            Book Now
                        </Link>
                    </motion.div>
                </nav>

                {/* Tablet Nav */}
                <nav className="hidden md:flex lg:hidden items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors duration-300",
                                pathname === link.href 
                                    ? "text-emerald-600 font-semibold"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className={cn(buttonVariants({ variant: "primary", size: "sm" }), "bg-gradient-to-r from-emerald-600 to-orange-500 hover:from-emerald-700 hover:to-orange-600 text-white border-0")}>
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "p-3 rounded-lg transition-all duration-300 border",
                            "text-foreground hover:bg-muted border-border"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium p-3 rounded-xl transition-all duration-300 flex items-center justify-between group",
                                            pathname === link.href 
                                                ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600" 
                                                : "text-foreground hover:bg-muted hover:text-emerald-600"
                                        )}
                                    >
                                        <span className="font-playfair">{link.name}</span>
                                        {pathname === link.href && (
                                            <Sparkles className="h-4 w-4 text-emerald-600" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="pt-4"
                            >
                                <Link 
                                    href="/contact" 
                                    className={cn(
                                        buttonVariants({ variant: "primary" }), 
                                        "w-full bg-gradient-to-r from-emerald-600 to-orange-500 hover:from-emerald-700 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 font-semibold text-lg py-4"
                                    )}
                                >
                                    Book Appointment
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
