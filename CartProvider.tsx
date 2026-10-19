 "use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { products } from "@/products";

type CartItem = { id: string; quantity: number };
type CartContextValue = { items: CartItem[]; count: number; add: (id: string) => void; remove: (id: string) => void; setQuantity: (id: string, quantity: number) => void; clear: () => void };
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { const saved = localStorage.getItem("phoneweb-cart"); if (saved) setItems(JSON.parse(saved)); } catch {}
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem("phoneweb-cart", JSON.stringify(items)); }, [items, ready]);
  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    add: (id) => setItems((prev) => { const found = prev.find((item) => item.id === id); return found ? prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item) : [...prev, { id, quantity: 1 }]; }),
    remove: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
    setQuantity: (id, quantity) => setItems((prev) => quantity < 1 ? prev.filter((item) => item.id !== id) : prev.map((item) => item.id === id ? { ...item, quantity } : item)),
    clear: () => setItems([])
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
export function cartProducts(items: CartItem[]) {
  return items.map((item) => ({ ...item, product: products.find((p) => p.id === item.id) })).filter((item) => item.product);
}
