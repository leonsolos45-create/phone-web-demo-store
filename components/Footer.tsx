import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function Footer() {
return (
<footer className="mt-12 border-t bg-slate-900 text-white">
<div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2">
<div>
<Link href="/" className="flex items-center gap-2 text-xl font-bold">
<Smartphone className="h-6 w-6" />
PhoneWeb
</Link>
<p className="mt-3 max-w-md text-sm text-slate-300">
Find your next phone at PhoneWeb Demo Store. Browse smartphones
from popular brands and compare features and prices.
</p>
</div>

    <div>
      <h2 className="font-semibold">Quick Links</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/phones">Shop Phones</Link></li>
        <li><Link href="/cart">Shopping Cart</Link></li>
      </ul>
    </div>
  </div>

  <div className="border-t border-slate-700 px-4 py-4 text-center text-sm text-slate-400">
    © {new Date().getFullYear()} PhoneWeb Demo Store. Demo project.
  </div>
</footer>

);
}
