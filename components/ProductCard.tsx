import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";

type Product = {
id: string;
name: string;
brand: string;
price: number;
image: string;
description?: string;
};

export default function ProductCard({ product }: { product: Product }) {
const { addItem } = useCart();

return (
<article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
<Link href={"/phones/${product.id}"} className="block">
<div className="relative h-52 bg-slate-100">
<Image
src={product.image}
alt={product.name}
fill
sizes="(max-width: 640px) 100vw, 33vw"
className="object-contain p-4"
/>
</div>
<div className="p-4">
<p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
{product.brand}
</p>
<h2 className="mt-1 text-lg font-bold text-slate-900">
{product.name}
</h2>
<p className="mt-2 text-xl font-bold text-slate-900">
₦{product.price.toLocaleString()}
</p>
</div>
</Link>

  <div className="px-4 pb-4">
    <button
      onClick={() => addItem(product.id)}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </button>
  </div>
</article>

);
  }
