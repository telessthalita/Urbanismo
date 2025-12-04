import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../ui/sheet";
import { cn } from "../ui/utils";
import { CONTENT } from './ContentConfig';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = CONTENT.footer.menuItems.map(item => ({ name: item.label, href: item.href }));

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled 
          ? "bg-white/30 backdrop-blur-md shadow-sm border-white/20 supports-[backdrop-filter]:bg-white/30 py-3" 
          : "bg-transparent py-6"
      )}
    >
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className={cn(
          "text-2xl font-serif font-bold tracking-tight transition-colors",
          isScrolled ? "text-[var(--text-main)]" : "text-white"
        )}>
          {CONTENT.companyName}<span className="text-[var(--primary)]">{CONTENT.companyNameHighlight}</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors font-medium hover:text-[var(--primary)]",
                  isScrolled ? "text-gray-600" : "text-white/90"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className={cn(
            "flex items-center space-x-3 pl-6 border-l",
            isScrolled ? "border-gray-200" : "border-white/20"
          )}>
            {CONTENT.footer.socials.map((social, index) => (
               <a key={index} href={social.href} className={cn(
                "transition-colors hover:text-[var(--primary)]",
                isScrolled ? "text-gray-400" : "text-white/80"
              )}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(
                "transition-colors",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Acesse as seções do site através do menu de navegação.
              </SheetDescription>
              <nav className="flex flex-col gap-4 mt-10">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    className="text-lg font-medium text-[var(--text-main)] hover:text-[var(--primary)] py-2 border-b border-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="flex items-center space-x-4 mt-8">
                {CONTENT.footer.socials.map((social, index) => (
                  <a key={index} href={social.href} className="text-gray-500 hover:text-[var(--primary)] transition-colors">
                    {social.icon}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
