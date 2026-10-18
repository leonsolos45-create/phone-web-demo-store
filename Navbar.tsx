 "use client";
import Link from "next/link";
import { ShoppingBag, Smartphone } from "lucide-react";
import { useCart } from "./CartProvider";
export default function Navbar() {
  const { count } = useCart();
  return <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-xl">
    <nav className="container-shell flex h-[72px] items-center justify-between">
      <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white"><Smartphone size={19}/></span>PhoneWeb<span className="text-blue-600">.</span></Link>
      <div className="hidden items-center gap-8 text-sm font-medium text-neutral-600 sm:flex"><Link className="hover:text-black" href="/">Home</Link><Link className="hover:text-black" href="/phones">All phones</Link><a className="hover:text-black" href="#footer">Contact</a></div>
      <Link href="/cart" aria-label={`Cart, ${count} items`} className="relative flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold hover:bg-neutral-50"><ShoppingBag size={17}/> <span className="hidden sm:inline">Cart</span><span className="grid h-5 min-w-5 place-items-center rounded-full bg-blue-600 px-1 text-xs text-white">{count}</span></Link>
    </nav>
  </header>;
}