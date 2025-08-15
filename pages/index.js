import Link from "next/link";
import ProductCard from "../components/ProductCard.js";

const featured = [
  { id: 1, name: "Nordic Oak Dining Table", image: "/images/sample-table.jpg", price: 24999 },
  { id: 2, name: "Velvet Lounge Sofa", image: "/images/sample-sofa.jpg", price: 55999 },
  { id: 3, name: "Minimalist Work Desk", image: "/images/sample-desk.jpg", price: 17999 },
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-6xl py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Furniture that elevates your space.
            </h1>
            <p className="mt-4 text-slate-600">
              Discover crafted pieces built to last — curated collections for living rooms, bedrooms, and workspaces.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="px-5 py-3 rounded-xl bg-slate-900 text-white">Browse Products</Link>
              <Link href="/about" className="px-5 py-3 rounded-xl border border-slate-300">Learn More</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-soft">
            <img src="/images/hero-showcase.jpg" alt="Furniture showcase" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container max-w-6xl py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <Link href="/products" className="text-sm underline">See all</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}