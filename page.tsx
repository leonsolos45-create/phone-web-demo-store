import Link from "next/link";
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Headphones } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const featured = [products[0], products[3], products[6], products[9]];
  return <div>
    <section className="container-shell pt-7 sm:pt-10">
      <div className="relative overflow-hidden rounded-[30px] bg-[#101114] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"/>
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div><span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-neutral-300"><span className="h-2 w-2 rounded-full bg-blue-400"/> The PhoneWeb collection</span>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">A little more <span className="text-blue-400">brilliant.</span></h1>
            <p className="mt-5 max-w-md text-base leading-7 text-neutral-300">Meet your next iPhone, Samsung, Tecno or Infinix. Great technology, made simple.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/phones" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-blue-50">Shop all phones <ArrowRight size={16}/></Link><a href="#featured" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:bg-white/10">Explore featured</a></div>
            <div className="mt-8 max-w-md"><SearchBar dark/></div>
          </div>
          <div className="relative mx-auto flex h-64 w-full max-w-lg items-center justify-center sm:h-80">
            <div className="absolute h-56 w-56 rounded-full bg-blue-500/20 blur-2xl sm:h-72 sm:w-72"/>
            <img src={products[0].image} alt="Featured iPhone" className="relative z-10 h-full w-2/5 rotate-[-8deg] rounded-[28px] object-cover shadow-2xl ring-4 ring-white/10"/>
            <img src={products[3].image} alt="Featured Samsung Galaxy" className="relative z-20 -ml-8 h-[88%] w-2/5 rotate-[8deg] rounded-[28px] object-cover shadow-2xl ring-4 ring-white/10"/>
          </div>
        </div>
      </div>
    </section>
    <section className="container-shell grid gap-4 py-7 sm:grid-cols-3">
      {[{icon:Truck,title:"Delivery-ready demo",desc:"A simple shopping flow from browse to checkout."},{icon:ShieldCheck,title:"Shop with confidence",desc:"Clear specs and transparent sample pricing."},{icon:Headphones,title:"Here to help",desc:"Reach out using the WhatsApp button."}].map((item)=><div key={item.title} className="flex gap-3 rounded-2xl border border-neutral-200/80 bg-white p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700"><item.icon size={19}/></span><div><h2 className="text-sm font-semibold">{item.title}</h2><p className="mt-1 text-xs leading-5 text-neutral-500">{item.desc}</p></div></div>)}
    </section>
    <section id="featured" className="container-shell pt-10">
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">Hand-picked for you</p><h2 className="mt-2 text-3xl font-semibold tracking-tight">Featured phones</h2><p className="mt-2 text-sm text-neutral-500">A few favourites to get you started.</p></div><Link href="/phones" className="hidden items-center gap-2 text-sm font-semibold sm:flex">View all <ArrowRight size={16}/></Link></div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">{featured.map((product)=><ProductCard key={product.id} product={product}/>)}</div>
      <div className="mt-8 text-center sm:hidden"><Link href="/phones" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold">View all phones <ArrowRight size={16}/></Link></div>
    </section>
    <section className="container-shell mt-16"><div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-blue-50 p-7 sm:flex-row sm:items-center sm:p-10"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-700">Find your fit</p><h2 className="mt-2 text-2xl font-semibold">Your next phone is waiting.</h2><p className="mt-2 text-sm text-neutral-600">Compare brands, RAM and prices in one place.</p></div><Link href="/phones" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">Browse collection</Link></div></section>
  </div>;
}