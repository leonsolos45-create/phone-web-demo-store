"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
const [query, setQuery] = useState("");
const router = useRouter();

function handleSearch(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
const value = query.trim();
if (value) {
router.push("/phones?search=${encodeURIComponent(value)}");
} else {
router.push("/phones");
}
}

return (
<form onSubmit={handleSearch} className="flex w-full max-w-xl gap-2">
<input
type="search"
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search phones by name or brand..."
aria-label="Search phones"
className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
/>
<button
type="submit"
className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
>
<Search className="h-5 w-5" />
Search
</button>
</form>
);
  }
