 "use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SearchBar({ dark = false }: { dark?: boolean }) {
  const [query, setQuery] = useState(""); const router = useRouter();
  function submit(e: React.FormEvent) { e.preventDefault(); router.push(`/phones${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`); }
  return <form onSubmit={submit} className={`flex w-full items-center gap-3 rounded-full p-1.5 pl-4 ${dark ? "border border-white/15 bg-white/10" : "border border-neutral-200 bg-white shadow-sm"}`}><Search size={18} className={dark ? "text-neutral-300" : "text-neutral-400"}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search iPhone, Samsung..." className={`min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:${dark ? "text-neutral-400" : "text-neutral-400"} ${dark ? "text-white" : "text-neutral-900"}`} aria-label="Search phones"/><button className={`rounded-full px-5 py-2.5 text-sm font-semibold ${dark ? "bg-white text-neutral-900 hover:bg-blue-50" : "bg-ink text-white hover:bg-neutral-700"}`}>Search</button></form>;
}