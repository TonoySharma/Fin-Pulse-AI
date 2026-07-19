"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout failed!");
      return;
    }

    toast.success("Logged out successfully!");
    window.location.replace("/login");
  };

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Modern Floating/Sticky Glassmorphism Header */}
      <header className="w-full bg-white/70 backdrop-blur-xl border-b
       border-gray-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">

          {/* Glassmorphic Floating Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 no-underline transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <div className="flex items-center gap-2.5 rounded-2xl border border-gray-200/60 bg-white/60 p-2 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all group-hover:border-indigo-300 group-hover:bg-white/90 group-hover:shadow-md">
              {/* Icon with Soft Gradient Glow */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 font-black text-white shadow-sm shadow-indigo-200 transition-transform duration-300 group-hover:rotate-6">
                F
              </div>

              {/* Brand Name */}
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Fin<span className="text-indigo-600">Agent</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center md:flex">
            <ul className="flex items-center gap-1 rounded-xl
             bg-gray-100/70 p-1.5 backdrop-blur-md border border-gray-200/80 list-none  text-sm font-semibold text-gray-800">
              <li>
                <NavLink
                  href="/"
                  className="relative block rounded-xl px-4 py-2 transition-all duration-200 hover:text-indigo-600 no-underline"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/all-features"
                  className="relative block rounded-xl px-4 py-2 transition-all duration-200 hover:text-indigo-600 no-underline">
                  Features
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/about-us"
                  className="relative block rounded-xl px-4 py-2 transition-all duration-200 hover:text-indigo-600 no-underline"
                >
                  About Us
                </NavLink>
              </li>

              {/* Protected Links for Logged In User */}
              {session && user && (
                <>
                  <div className="h-4 w-[1px] bg-gray-300/60 mx-1" />
                  {/* <li>
                    <NavLink
                      href="/categories"
                      className="relative block rounded-xl px-4 py-2 transition-all duration-200 hover:text-indigo-600 no-underline"
                    >
                      Categories
                    </NavLink>
                  </li> */}

                  <li>
                    <NavLink
                      href="/add-product"
                      className="relative block rounded-xl px-4 py-2 transition-all duration-200 hover:text-indigo-600 no-underline"
                    >
                      Add Feature

                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      href="/product-manage"
                      className="relative block rounded-xl px-4 py-2 transition-all duration-200 hover:text-indigo-600 no-underline"
                    >
                      Manage Features
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden items-center gap-4 md:flex">
            {user ? (
              <div className="relative group py-2">
                {/* Profile Pill Trigger */}
                <button className="flex items-center gap-3 p-1.5 pr-3 rounded-full bg-gray-100/80 border border-gray-200/60 hover:bg-white hover:shadow-md hover:border-indigo-200 transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    {user.image ? (
                      <Image
                        width={36}
                        height={36}
                        src={user.image}
                        alt={user.name || "User profile"}
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-indigo-500/20"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 font-bold text-white shadow-sm">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                  </div>

                  <span className="text-sm font-semibold text-gray-800 max-w-[100px] truncate">
                    {user.name?.split(" ")[0]}
                  </span>

                  <svg
                    className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Profile Floating Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-64 origin-top-right rounded-3xl border border-gray-100 bg-white/95 backdrop-blur-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 scale-90 pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50">
                  <div className="p-3 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 rounded-2xl mb-2 border border-indigo-50/50">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-indigo-600/80">Logged In</p>
                    <p className="truncate text-sm font-bold text-gray-900 mt-0.5">{user.name}</p>
                    {user.email && <p className="truncate text-xs text-gray-500">{user.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <Link
                      href="/my-profile"
                      className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-indigo-50 hover:text-indigo-600 no-underline"
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      Profile
                    </Link>

                    <Link
                      href="/#"
                      className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-indigo-50 hover:text-indigo-600 no-underline"
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      My Orders
                    </Link>

                    <div className="my-1 border-t border-gray-100" />

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-rose-600 transition-all hover:bg-rose-50 cursor-pointer border-none bg-transparent text-left"
                    >
                      <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="no-underline">
                  <Button className="cursor-pointer border rounded-2xl bg-transparent px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all">
                    Log In
                  </Button>
                </Link>

                <Link href="/signUp" className="no-underline">
                  <Button className="cursor-pointer rounded-full bg-gradient-to-r from-indigo-600
                   to-indigo-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200
                    hover:shadow-lg hover:shadow-indigo-300 active:scale-95 transition-all">
                    <p className="flex items-center gap-2">Get Started <FaArrowRight /></p>
                  </Button>
                </Link>
              </div>
            )}

          </div>

          {/* Mobile Hamburger Icon Button */}
          <button
            className="cursor-pointer rounded-2xl bg-gray-100/80 p-2.5 text-gray-700 hover:bg-gray-200/80 md:hidden transition-colors border-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Modern Slide-over Mobile Menu */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

        {/* Dark Backdrop */}
        <div
          className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity"
          onClick={closeMobileMenu}
        />

        {/* Drawer Panel */}
        <div className={`absolute inset-y-0 right-0 w-full max-w-xs bg-white/95 backdrop-blur-2xl p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Fin Agent
                </span>
              </div>
              <button
                className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors border-none cursor-pointer"
                onClick={closeMobileMenu}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 pt-6">
              <NavLink href="/" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                Home
              </NavLink>

              <NavLink href="/browse-products" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                Browse Products
              </NavLink>

              <NavLink href="/about-us" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                About Us
              </NavLink>

              {session && user && (
                <>
                  <div className="my-2 border-t border-gray-100" />
                  <NavLink href="/add-product" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                    Add Feature

                  </NavLink>

            

                  <NavLink href="/product-manage" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                    Manage Features

                  </NavLink>

                  <NavLink href="/#" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                    My Orders
                  </NavLink>

                  <NavLink href="/my-profile" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-base font-semibold text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all no-underline">
                    Profile
                  </NavLink>
                </>
              )}
            </nav>
          </div>

          {/* Mobile Footer Actions */}
          <div className="border-t border-gray-100 pt-5">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                  {user.image ? (
                    <Image
                      width={40}
                      height={40}
                      src={user.image}
                      alt={user.name || "User profile"}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 font-bold text-white">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <p className="truncate text-sm font-bold text-gray-900">{user.name}</p>
                    {user.email && <p className="truncate text-xs text-gray-500">{user.email}</p>}
                  </div>
                </div>

                <Button
                  onClick={handleLogout}
                  className="w-full cursor-pointer rounded-2xl bg-rose-50 text-rose-600 font-semibold px-4 py-3 text-sm transition-all hover:bg-rose-100 border-none"
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5">
                <Link href="/login" onClick={closeMobileMenu} className="no-underline">
                  <Button className="w-full cursor-pointer rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 shadow-sm">
                    Log In
                  </Button>
                </Link>

                <Link href="/signUp" onClick={closeMobileMenu} className="no-underline">
                  <Button className="w-full cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100">
                    <p className="flex items-center gap-2">Get Started <FaArrowRight /></p>
                  </Button>
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;