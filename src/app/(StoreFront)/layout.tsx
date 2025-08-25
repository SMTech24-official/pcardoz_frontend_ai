import { ReactNode } from "react";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function StoreFrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Full-width sticky Navbar */}
      <header className="w-full max-w-full">
        <Navbar />
      </header>

      {/* Main content area (optional max-width applied here) */}
      <main className="flex-1 w-full max-w-full mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full mt-10">
        <Footer />
      </footer>
    </div>
  );
}
