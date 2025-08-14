"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

const navItems = [
  { title: "Introduction", id: "introduction" },
  { title: "Core Concepts", id: "core-concepts" },
  { title: "Architecture", id: "architecture" },
  { title: "Getting Started", id: "getting-started" },
  { title: "Security", id: "security" },
];

export const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeId, setActiveId] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24">
              <h3 className="font-semibold text-lg mb-4">On this page</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={`block text-sm transition-colors ${
                        activeId === item.id
                          ? 'text-primary font-semibold'
                          : 'text-secondary hover:text-foreground'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="lg:col-span-9 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
