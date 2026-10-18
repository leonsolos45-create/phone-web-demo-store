"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Smartphone } from "lucide-react";
import { useCart } from "./CartProvider";

export default function Navbar() {
const [open, setOpen] = useState(false);
const { items } = useCart();
const cartCount = items.reduce((total, item) => total + item.quantity, 0);

const links = [
{ href: "/", label: "Home" },
{ href: "/phones", label: "Phones" },
{ href: "/cart", label: "Cart" },
];

return (
<header className="sticky top-0 z-50 border-b bg-white">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
<Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
<Smartphone className="h-6 w-6" />
PhoneWeb
</Link>

    <div className="hidden items-center gap-7 sm:flex">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="font-medium text-slate-700 hover:text-blue-600">
          {link.label}
        </Link>
      ))}
      <Link href="/cart" aria-label="Shopping cart" className="relative">
        <ShoppingCart className="h-6 w-6" />
        {cartCount > 0 && (
          <span className="absolute -right-3 -top-3 rounded-full bg-blue-600 px-1.5 text-xs text-white">
            {cartCount}
          </span>
        )}
      </Link>
    </div>

    <button
      className="sm:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={() => setOpen(!open)}
    >
      {open ? <X /> : <Menu />}
    </button>
  </nav>

  {open && (
    <div className="flex flex-col gap-4 border-t px-4 py-4 sm:hidden">
      {links.map((link) => (
        <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
          {link.label}
        </Link>
      ))}
    </div>
  )}
</header>

);
          }
