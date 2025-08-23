'use client';

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Input } from "@heroui/input";
import NextLink from "next/link";

// import { SearchIcon } from "@/src/components/icons";
// import { NavItemWithDropdown } from "../menu/NavItemWithDropdown";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config";
// import SearchResults from "../search/SearchResults";
// import { Filters } from "@/src/types";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to store search results
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showResults, setShowResults] = useState(false); // Control visibility of search results

  const searchInputRef = useRef<HTMLInputElement | null>(null); // Ref to the search input
  const searchResultsRef = useRef<HTMLDivElement | null>(null); // Ref to search results container

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowResults(false); // Hide search results if clicked outside of both input and results
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <HeroUINavbar
      className="relative max-w-screen-2xl mx-auto top-0 z-[40] px-2 lg:px-12 xl:px-24 pt-2 pb-4 shadow-sm overflow-visible  "
      maxWidth="full"
      position="sticky"
    >
      {/* Brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-5xl font-serif font-bold text-orange-400">PCardoz</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Nav Items */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <ul className="hidden lg:flex gap-4 xl:gap-6 justify-start items-center">
          {siteConfig.navItems.map((item) => (
            <li key={item.href} className="relative">
              {/* <NavItemWithDropdown label={item.label} href={item.href} /> */}
            </li>
          ))}
        </ul>
      </NavbarContent>

      {/* Mobile & Tablet Toggle */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-[84px]">
        <div>
          <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
            <NavbarMenuToggle />
          </NavbarContent>
        </div>
        <div className="mx-4 mt-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2 px-4 pt-4">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                {/* <NavItemWithDropdown label={item.label} href={item.href} /> */}
              </li>
            ))}
          </ul>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};