import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Nordic Oak Dining Table", image: "/images/sample-table.jpg", price: 24999 },
  { id: 2, name: "Velvet Lounge Sofa", image: "/images/sample-sofa.jpg", price: 55999 },
  { id: 3, name: "Minimalist Work Desk", image: "/images/sample-desk.jpg", price: 17999 },
  { id: 4, name: "Solid Wood Bed Frame", image: "/images/sample-bed.jpg", price: 42999 },
  { id: 5, name: "Accent Armchair", image: "/images/sample-chair.jpg", price: 12999 },
  { id: 6, name: "Coffee Table Walnut", image: "/images/sample-coffee.jpg", price: 8999 },
];

export default function Products() {
  return (
    <div className="container max-w-6xl py-12">
      <h1 className="text-3xl font-semibold">Products</h1>
      <p className="text-slate-600 mt-2">Drop in your own images & names in <code>/pages/products.js</code>.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}