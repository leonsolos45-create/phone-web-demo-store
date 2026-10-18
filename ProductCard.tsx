import Link from "next/link";
import type { Phone } from "@/lib/products";
import { formatNaira } from "@/lib/products";
export default function ProductCard({ product }: { product: Phone }) {
  return <article className="product-card group">
    <Link href={`/phones/${product.id}`} className="block">
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-neutral-100 p-5">
        {product.badge && <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-blue-700 shadow-sm">{product.badge}</span>}
        {/* Unsplash image URLs are used as demo product photography. */}
        <img src={product.image} alt={product.name} className="h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105" loading="lazy"/>
      </div>
      <div className="pt-4"><p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{product.brand}</p><h3 className="mt-1 text-base font-semibold">{product.name}</h3><p className="mt-2 text-lg font-bold">{formatNaira(product.price)}</p><p className="mt-1 text-xs text-neutral-500">{product.ram}GB RAM · {product.storage}</p></div>
    </Link>
    <Link href={`/phones/${product.id}`} className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-neutral-200 px-4 py-2.5 text-sm font-semibold transition hover:border-ink hover:bg-ink hover:text-white">View details</Link>
  </article>;
}